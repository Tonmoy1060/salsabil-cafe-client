import React, { useEffect, useState } from "react";
import menuBanner from "../../assets/banners/banner-menu.png";
import { Link } from "react-router-dom";
import Loading from "../shared/Loading";
import SpecificMenu from "./SpecificMenu";
import Cart from "./Cart";
import BookingModal from "./BookingModal";

const Menu = () => {
  const [loading, setLoading] = useState(false);

  // category-wise-route-state
  const [categoryRoute, setCategoryRoute] = useState(" ");

  // category-wise-menu-item-state
  const [allItems, setAllItems] = useState([]);

  // users-adding-cart-state
  const [addingCart, setAddingCart] = useState([]);

  const [index, setIndex] = useState();

  // modal-data-as-object-based-on-adding-cart-index-state
  const [modalData, setModalData] = useState({});

  // total-order-amount-state
  const [totalAmount, setTotalAmount] = useState();

  // admin-order-checked-state
  const [adminChecked, setAdminChecked] = useState(false);

  if (!categoryRoute || !allItems) {
    setLoading(true);
  }

  // load-menuItems-based-on-category
  useEffect(() => {
    setLoading(true);
    fetch(
      `https://salsabil-cafe.onrender.com/items/${categoryRoute}`
    )
      .then((res) => res.json())
      .then((data) => {
        setAllItems(data);
        setLoading(false);
      });
  }, [categoryRoute]);

  // get-category-from-button-and-SetCategoryRoute
  const handleItem = async (e) => {
    setLoading(true);
    e.preventDefault();
    const category = await e.target.name;
    setCategoryRoute(category);
    setLoading(false);
  };

  // SetCartData-as-an-array-based-on-user-select-object
  const handleAddToCart = async (item) => {
    setLoading(true);
    const newCart = [...addingCart, item];

    // filter-users-duplicate-selection
    if (addingCart.find((cart) => cart?.name === item?.name)) {
      return setLoading(false);
    } else {
      await setAddingCart(newCart);
      setLoading(false);
    }
  };

  // modal-to-sure-cartOrder
  const handleModal = (number) => {
    setLoading(true);

    // object-of-order-for-modal-data
    let obj = {};
    addingCart.forEach((elem, i) => {
      obj[`order${i}`] = elem;
      setIndex(i + 1);
    });
    setModalData(obj);
    setLoading(false);
    setTotalAmount(number);
  };

  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div
        className="hero rounded-lg lg:p-20 md:p-14"
        style={{ backgroundImage: `url(${menuBanner})` }}
      >
        <h1 className=" font-serif lg:text-8xl text-4xl md:text-6xl text-neutral-content  tracking-wide py-28 p-10 text-white text-center ">
          MENU TABS
        </h1>

        {/* display-cartData */}
        {addingCart && (
          <div className="relative">
            <Cart
              key={addingCart._id}
              addingCart={addingCart}
              setAddingCart={setAddingCart}
              handleModal={handleModal}
              setAdminChecked={setAdminChecked}
            ></Cart>
          </div>
        )}
      </div>
      <div className="card max-w-full bg-base-100  shadow-2xl py-0 my-0 lg:mx-20 md:mx-14 mx-2">
        <div className="card-body py-0 mb-20">
          <div>
            <div className="text-center lg:pt-8 pt-4">

              {/* set-Category-button-field */}
              <div className="flex justify-center lg:py-14 py-6 items-center ">
                <ul className="menu  grid lg:grid-cols-5 md:grid-cols-5 grid-cols-2 sm:grid-cols-4 gap-2 ">
                  <li className="btn-primary text-white">
                    <Link
                      className="btn  rounded bg-accent"
                      onClick={handleItem}
                      name=" "
                    >
                      All Items
                    </Link>
                  </li>
                  <li className="btn-primary text-white">
                    <Link
                      className="btn rounded bg-accent"
                      onClick={handleItem}
                      name="Cold Drinks"
                    >
                      Soft Drinks
                    </Link>
                  </li>
                  <li className="btn-primary text-white">
                    <Link
                      className="btn rounded bg-accent"
                      onClick={handleItem}
                      name="Hot & Confectionary Drinks"
                    >
                      Tea & Confection Drink
                    </Link>
                  </li>
                  <li className="btn-primary text-white">
                    <Link
                      className="btn rounded bg-accent"
                      onClick={handleItem}
                      name="Fast Food"
                    >
                      Fast Food
                    </Link>
                  </li>
                  <li className="btn-primary  text-white">
                    <Link
                      className="btn rounded bg-accent"
                      onClick={handleItem}
                      name="Confectionary"
                    >
                      Confectionary
                    </Link>
                  </li>
                </ul>
              </div>

              {/* display-all-MenuItemsHere */}
              <div className="">
                <div className="w-10 rounded-lg m-2 h-1 mx-auto bg-secondary"></div>
                <h4 className="text-lg tracking-wide font-bold pt-2">
                  Our menu
                </h4>
                <h1 className="font-bold lg:text-5xl text-4xl my-4 font-serif ">
                  {categoryRoute.length > 3 ? categoryRoute : "All Items"}
                </h1>
                <p className="text-xs">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Facere, dignissimos.
                </p>
                <div className="grid lg:grid-cols-2 gap-10 lg:pt-20 pt-10">
                  {allItems.map((item, index) => (
                    <SpecificMenu
                      key={index}
                      item={item}
                      handleAddToCart={handleAddToCart}
                      allItems={allItems}
                      setAllItems={setAllItems}
                    ></SpecificMenu>
                  ))}
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>

      {/* display-BookingModal */}
      <BookingModal
        modalData={modalData}
        totalAmount={totalAmount}
        addingCart={addingCart}
        setAddingCart={setAddingCart}
        adminChecked={adminChecked}
        index={index}
      ></BookingModal>
    </div>
  );
};

export default Menu;
