import React from "react";

import styles from "@pages/menuPage/menu.module.scss";

import { Header } from "@layout/header/header.jsx";  
import { Footer } from "@layout/footer/footer.jsx";
import { ButtonPattern } from "@buttons/ButtonPattern.jsx";
import { ProductCard } from "@ui/productCard/ProductCard.jsx";
import { Tooltip } from "@ui/tooltip/Tooltip.jsx";



export function Menu() {

  return (
    <>
    <Header></Header>
    <section className={styles.menu__section}>
      <div className={styles.heading__container}>
          <h1 className={styles.heading}>Browse our menu</h1>
          <div className={styles.main__text}>Use our menu to place an order online, or <Tooltip text= '+37062464083'>phone</Tooltip> our store to place a pickup order. Fast and fresh food.</div>
      </div>

        <div className={styles.buttons__container}>
        <ButtonPattern variant="secondary" size="md">Desserts</ButtonPattern>
        <ButtonPattern variant="secondary" size="md">Dinner</ButtonPattern>
        <ButtonPattern variant="secondary" size="md">Breakfast</ButtonPattern>

        </div>

        <div className={styles.product__container}>
          <ProductCard></ProductCard>
      </div>
      
       <ButtonPattern variant="primary" size="md" className={styles.seeMore__button}>See more</ButtonPattern>
  
      </section>
      
      <Footer></Footer>
      </>
  );

 }
