import React, { useState, useEffect, useMemo } from "react";
import { ProductCard } from "@entities";
import { ButtonPattern } from "@ui";
import styles from "./productList.module.scss";
import {useFetch} from "@hooks";
import { TProduct } from "@types";

const ProductList: React.FC = () => {
  const [currPage, setCurrPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { data: meals, error, loading } = useFetch<TProduct[]>(
      "https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals"
  );
  const [filteredMeals, setFilteredMeals] = useState<TProduct[]>([]);
  const itemsPerPage = 6;

  useEffect(() => {
    if (meals) {
      setFilteredMeals(meals);
    }
  }, [meals]);

  const handleLoadMore = () => {
    setCurrPage((prev) => prev + 1);
  };

  const categories = useMemo(() => {
    if (!meals) return [];
    const set = new Set<string>(meals.map((meal) => meal.category));
    return Array.from(set);
  }, [meals]);

  const handleCategoryClick = (category: string) => {
    if (!meals) return;

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

  if (loading) return <p className={styles.loading}>Loading meals...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
      <div className={styles.product__container}>
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
              <p>No meals found.</p>
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

export default ProductList;
