import React, { useState, useEffect } from "react";
import { ProductCard } from "@entities/productCard/ProductCard";
import { ButtonPattern } from "@ui/button/ButtonPattern";
import styles from "./productList.module.scss";
import {useFetch} from "@hooks/useFetch";

export const ProductList = () => {
  const [currPage, setCurrPage] = useState(1);
  const [meals, setMeals] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredMeals, setFilteredMeals] = useState([]);
  const { fetchDataWithLogger} = useFetch();

  useEffect(() => {
    fetchDataWithLogger("https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals").then(res => {
      setMeals(res);
      setFilteredMeals(res);
    })



  }, []);

  const itemsPerPage = 6;

  const handleLoadMore = () => {
    setCurrPage(prevState => prevState + 1);
  };

  const getCategories = () => {
    const categoriesSet = new Set(meals.map(meal => meal.category));
    return Array.from(categoriesSet);
  };

  const handleCategoryClick = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
      setFilteredMeals(meals);
    } else {
      setSelectedCategory(category);
      const filtered = meals.filter((meal) => meal.category === category);
      setFilteredMeals(filtered);
    }
    setCurrPage(1);
  };

  const visibleMeals = filteredMeals.slice(0, currPage * itemsPerPage);
  const hasMore = visibleMeals.length < filteredMeals.length;
  const categories = getCategories();

  return (
      <div className={styles.productList__container}>
        <div className={styles.buttons__container}>
          {categories.map((label) => (
              <ButtonPattern
                  key={label}
                  variant={selectedCategory === label ? "primary" : "secondary"}
                  size="md"
                  onClick={() => handleCategoryClick(label)}
              >
                {label}
              </ButtonPattern>
          ))}
        </div>

        <div className={styles.product__container}>
          {visibleMeals.length > 0 ? (
              visibleMeals.map((item) => <ProductCard key={item.id} item={item} />)
          ) : (
              <p>Loading meals...</p>
          )}

          {hasMore && (
              <ButtonPattern
                  variant="primary"
                  size="md"
                  className={styles.seeMore__button}
                  onClick={handleLoadMore}
              >
                See more
              </ButtonPattern>
          )}
        </div>
      </div>
  );
};
