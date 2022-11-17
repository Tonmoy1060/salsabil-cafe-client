import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";

const CheckoutForm = ({ exactBooking }) => {
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState(" ");
  const [success, setSuccess] = useState('');
  const { _id, amount, client, orderItems , paid } = exactBooking;
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    fetch("https://salsabil-cafe-server-production.up.railway.app/payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({amount }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, [amount]);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    setCardError(error?.message || " ");
    setSuccess("");

    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName,
            email: client,
            
          },
        },
      });
    if (intentError) {
      setCardError(intentError?.message);
      setSuccess("");
    } else {
      setCardError(" ");
      setSuccess("Congrats! payment Completed ");

      const payment = {
         email: client,
         transactionId : paymentIntent.id,
         order: orderItems
      }
      fetch(`https://salsabil-cafe-server-production.up.railway.app/booking/${_id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
         toast(`payment complete for ${orderItems}`)
         e.target.reset();
        });
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="text-end">
          {
             success ? 
            <button
            className="btn btn-success btn-sm mt-5"
            type="submit"
            disabled={!stripe || !clientSecret || paid || success}
          >
         Paid
          </button> :
          <button 
            className="btn btn-success btn-sm mt-5"
            type="submit"
            disabled={!stripe || !clientSecret}
          >
            Pay
          </button>
          }
        </div>
      </form>
      <div className="text-end">
        {cardError && <small className="text-red-500">{cardError}</small>}
        {success && <small className="text-green-500">{success}</small>}
      </div>
      <ToastContainer></ToastContainer>
    </>
  );
};

export default CheckoutForm;
