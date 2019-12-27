import React from "react";

function Menu() {
  return (
    <div className="app wrapper">
      <h1 className="text-dark mb-0 text-center">Menu</h1>
      <p className="icon-header text-center">
        -{" "}
        <span className="fa-fw">
          <i className="far fa fa-cutlery" />
        </span>{" "}
        -
      </p>
      <hr className="my-4" />
      <section className="container-fluid col-12 col-md-8 pl-md-3 col-lg-8 text-left">
        <p>
          Menu Options:
          <ul>
            <li>Miso Glazed Salmon, Ginger Orange Hollandaise</li>
            <li>Rosemary Pan Seared Chicken, White Wine Peppercorn Sauce</li>
            <li>New York Strip Sirloin of Beef, Red Wine Demi-Glace</li>
            <li>
              All Entrees are Served with Garlic Whipped Potato & Seasonal
              Vegetable
            </li>
          </ul>
        </p>
      </section>
    </div>
  );
}

export default Menu;
