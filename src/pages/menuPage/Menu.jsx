import React from "react";

import styles from "@pages/menuPage/menu.module.scss";

import { Header } from "@layout/header/header.jsx";  
import { Footer } from "@layout/footer/footer.jsx";
import { ButtonPattern } from "@buttons/ButtonPattern.jsx";
import { ProductList } from "@ui/productList/ProductList.jsx";
import { Tooltip } from "@ui/tooltip/Tooltip.jsx";





export function Menu() {

  return (
    <>
    <Header/>
    <section className={styles.menu__section}>
      <div className={styles.heading__container}>
          <h1 className="heading1">Browse our menu</h1>
          <div className="section__text">Use our menu to place an order online, or <Tooltip text= '+37062464083'>phone</Tooltip> our store to place a pickup order. Fast and fresh food.</div>
      </div>
       
        <ProductList/>
       
      
       <ButtonPattern variant="primary" size="md" className={styles.seeMore__button}>See more</ButtonPattern>
  
      </section>
      
      <Footer/>
      </>
  );

 }
