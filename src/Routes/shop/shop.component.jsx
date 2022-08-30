/* eslint-disable array-callback-return */
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/Category";
// is
import { useDispatch } from "react-redux"; // import { useContext } from "react";

// import { CategoriesContext } from "../../context/categories.context";
// import CategoriePreview from "../../Component/category-preview/category-preview.component";
import "./shop.styles.scss";
// import { fetchCategoriesStartAsync } from "../../store/categories/category.action";
import { fetchCategoriesStart } from "../../store/categories/category.action";

const Shop = () => {
  // const { categoriesMap } = useContext(CategoriesContext);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, []);

  // useEffect(() => {
  //   const getCategoriesMap = async () => {
  //     const categoriesArray = await getCategoriesAndDocuments("categories");
  //     // console.log(categoryMap);
  //     // console.log(categoriesArray);
  //     dispatch(setCategories(categoriesArray));
  //   };

  //   getCategoriesMap();
  // }, []);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />}></Route>
      <Route path=":category" element={<Category />}></Route>
    </Routes>

    // <div className="shop-container">
    //   {
    //     Object.keys(categoriesMap).map((title) => {
    //       const products = categoriesMap[title];
    //       return (
    //         <CategoriePreview key={title} title={title} products={products} />
    //       );
    //     })
    //       <Fragment key={title}>
    //         <h2>{title}</h2>
    //         <div className="products-container">
    //           {categoriesMap[title].slice(0, 4).map((product) => (
    //             <ProductCard key={product.id} product={product} />
    //           ))}
    //         </div>
    //       </Fragment>
    //     ))
    //   }
    // </div>
  );
};
export default Shop;
