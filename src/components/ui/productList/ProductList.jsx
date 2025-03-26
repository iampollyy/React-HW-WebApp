import React from "react";

import styles from "@ui/productList/productList.module.scss";
import { ProductCard } from "@ui/productCard/ProductCard.jsx";
import { ButtonPattern } from "@buttons/ButtonPattern.jsx";

import {burgerList} from "@data/burgerList";

export function ProductList() { 

  return (
    <>
      <div className={styles.productList__container}>
        {
          <>
                <div className={styles.buttons__container}>
                  <ButtonPattern variant="secondary" size="md">Desserts</ButtonPattern>
                  <ButtonPattern variant="secondary" size="md">Dinner</ButtonPattern>
                  <ButtonPattern variant="secondary" size="md">Breakfast</ButtonPattern>
          
                 </div>
          
                  <div className={styles.product__container}>
                  {burgerList.map((item, index) => {
                    return <ProductCard key={index} item={item} />;
                  })}

                  </div>
          
          </>
        }
        
        
      </div>
    </>
  )  
}