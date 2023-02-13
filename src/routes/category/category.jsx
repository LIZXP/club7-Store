import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../componets/product-card/product-card.component";
import "./category.styles.scss";
import { useSelector } from "react-redux";
import Spinner from "../../componets/spinner/spinner.component";
import {
  selectCategoriesIsLoading,
  selectCategoriesMap
} from "../../store/categories/category.selector";

function Category() {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="category-container">
          {products
            ? products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            : null}
        </div>
      )}
    </>
  );
}

export default Category;
