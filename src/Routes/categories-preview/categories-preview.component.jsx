import { Fragment, useContext } from "react";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/category.selector";

// import { CategoriesContext } from "../../context/categories.context";
import CategoriePreview from "../../Component/category-preview/category-preview.component";
import { selectCategoriesIsLoading } from "../../store/categories/category.selector";
import Spinner from "../../Component/spinner/Spinner";

// import "./shop.styles.scss";

const CategoriesPreview = () => {
  // const { categoriesMap } = useContext(CategoriesContext);
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoriePreview key={title} title={title} products={products} />
          );
        })
      )}
    </Fragment>
  );
};
export default CategoriesPreview;
