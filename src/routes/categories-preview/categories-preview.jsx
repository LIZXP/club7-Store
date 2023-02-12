import React from "react";
import CategoryPreview from "../../componets/category-preview/category-preview";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/category.selector";
function CategoriesPreview() {
  const categoriesMap = useSelector(selectCategoriesMap);
  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
}

export default CategoriesPreview;
