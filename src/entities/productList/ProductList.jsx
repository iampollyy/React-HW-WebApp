import React, { Component } from "react";
import { ProductCard } from "@entities/productCard/ProductCard";
import { ButtonPattern } from "@ui/button/ButtonPattern";
import { fetchMeals } from "@api/fetchMeals";
import styles from "./productList.module.scss";

export class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currPage: 1,
      meals: [],
    };
  }

  async componentDidMount() {
    const fetchedMeals = await fetchMeals();
    this.setState({ meals: fetchedMeals });
  }

  static itemsPerPage = 6;

  handleLoadMore = () => {
    this.setState((prevState) => ({
      currPage: prevState.currPage + 1,
    }));
  }

  render() {
    const { currPage, meals } = this.state;
    const visibleMeals = meals.slice(0, currPage * ProductList.itemsPerPage);
    const hasMore = visibleMeals.length < meals.length;

    return (
      <>
        <div className={styles.productList__container}>
          <div className={styles.buttons__container}>
            {["Desserts", "Dinner", "Breakfast"].map((label) => (
              <ButtonPattern key={label} variant="secondary" size="md">
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
                onClick={this.handleLoadMore}>
                See more
              </ButtonPattern>
            )}
          </div>
        </div>
      </>
    );
  }
}
