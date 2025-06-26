import React from "react";

import styles from "@pages/menuPage/menu.module.scss";

import ProductList  from "@entities/productList/ProductList";
import  Tooltip  from "@ui/tooltip/Tooltip";


const MenuPage:React.FC = () => {
    return (
        <section className={styles.menu__section}>
        <div className={styles.menu__section__container}>

          <div className={styles.heading__container}>
            <h1 className="heading1">Browse our menu</h1>
            <div className="section__text">Use our menu to place an order online, or <Tooltip text='+37062464083'>phone</Tooltip> our store to place a pickup order. Fast and fresh food.</div>
          </div>
       
          <ProductList />
       
        </div>
        </section>
    );

  }

  export default MenuPage;
