import React from 'react';

const ModalDetails = ({modal}) => {
   return (
      <div>
         <input type="checkbox" id="bookingModal" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <label
              htmlFor="bookingModal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="font-bold text-lg">
              {modal.name}
            </h3>
            <p className="py-4">
              {modal.price}
            </p>
            <div className="modal-action">
              <label htmlFor="bookingModal" className="btn">
                Confirm Order
              </label>
            </div>
          </div>
        </div>

      </div>
   );
};

export default ModalDetails;