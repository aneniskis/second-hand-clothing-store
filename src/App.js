import Home from "./Routes/Home/Home.component";
import { useDispatch } from "react-redux";
import Navigation from "./Routes/navigation/navigation.component";
import Shop from "./Routes/shop/shop.component";
import CheckOut from "./Routes/checkout/checkout.component";
import { Routes, Route } from "react-router-dom";
import Authentication from "./Routes/authentication/authentication.component";
// import {
//   onAuthStateChangedListener,
//   createUserDocumentFromAuth,
//   getCurrentUser,
// } from "./utils/firebase/firebase.utils";
import { useEffect } from "react";
import { checkUserSession } from "./store/user/user.action";
import { GlobalStyle } from "./global.styles";
// import { setCurrentUser } from "./store/user/user.action";

// const Shop = () => {
//   return <div>i am in shop</div>;
// };

const App = () => {
  const dispatch = useDispatch();
  ///////// redux - saga

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);
  // useEffect(() => {
  //   getCurrentUser();
  // }, []);
  ///////////////////apacioj firebase authen

  // useEffect(() => {
  //   const unsubcribe = onAuthStateChangedListener((user) => {
  //     if (user) {
  //       createUserDocumentFromAuth(user);
  //     }
  //     dispatch(setCurrentUser(user));
  //   });

  //   return unsubcribe;
  // }, []);
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/second-hand-clothing-store" element={<Navigation />}>
          <Route index element={<Home />}></Route>
          <Route
            path="/second-hand-clothing-store/shop/*"
            element={<Shop />}
          ></Route>
          <Route
            path="/second-hand-clothing-store/auth"
            element={<Authentication />}
          ></Route>
          <Route
            path="/second-hand-clothing-store/checkout"
            element={<CheckOut />}
          ></Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
