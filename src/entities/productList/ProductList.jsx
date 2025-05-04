import React, { useState, useEffect } from "react";
import { ProductCard } from "@entities/productCard/ProductCard";
import { ButtonPattern } from "@ui/button/ButtonPattern";
import { fetchMeals } from "@api/fetchMeals";
import styles from "./productList.module.scss";

export const ProductList = () => {
  const [currPage, setCurrPage] = useState(1);
  const [meals, setMeals] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredMeals, setFilteredMeals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedMeals = await fetchMeals();
      setMeals(fetchedMeals);
      setFilteredMeals(fetchedMeals);
    };
    fetchData();
  }, []);

  const itemsPerPage = 6;

  const handleLoadMore = () => {
    setCurrPage((prev) => prev + 1);
  };

  const getCategories = () => {
    const categoriesSet = new Set(meals.map((meal) => meal.category));
    return Array.from(categoriesSet);
  };

  const handleCategoryClick = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
      setFilteredMeals(meals);
    } else {
      setSelectedCategory(category);
      setFilteredMeals(meals.filter((meal) => meal.category === category));
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
          visibleMeals.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))
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
