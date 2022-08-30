import SignUpForm from "../../Component/sign-up-form/sign-up-form.component";
import SignInForm from "../../Component/sign-in-form/sign-in-form.component";
import "./authentification.scss";

const Authentication = () => {
  // const logGoogleUser = async () => {
  //   const { user } = await signInWithGooglePopup();
  //   const userDocRef = await createUserDocumentFromAuth(user);
  // };

  return (
    <div className="authentification-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};
export default Authentication;
