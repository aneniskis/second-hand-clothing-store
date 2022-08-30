import { useState } from "react";
// import { UserContext } from "../../context/user.context";
import {
  signInWithGooglePopup,
  // createUserDocumentFromAuth,
  signInWithAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import "./sign-in.scss";
import { useDispatch } from "react-redux";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../store/user/user.action";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  // const { setCurrentUser } = useContext(UserContext);
  // console.log(formFields);
  const dispatch = useDispatch();
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  //// keiciam i redux-saga
  const signInWithGoogle = async (event) => {
    dispatch(googleSignInStart());
  };

  ///////////
  // const signInWithGoogle = async () => {
  //   // const { user } =
  //   await signInWithGooglePopup();
  //   // setCurrentUser(user)
  //   // await createUserDocumentFromAuth(user);
  // };

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      /// redux saga
      dispatch(emailSignInStart(email, password));

      // const { user } = await signInWithAuthUserWithEmailAndPassword(
      //   email,
      //   password
      // );

      // setCurrentUser(user);

      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user found with this email. Try again");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in form with email and password</span>
      <form onSubmit={submitHandler}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button buttonType="default" type="submit">
            Sign In
          </Button>
          <Button buttonType="google" type="button" onClick={signInWithGoogle}>
            With Google
          </Button>
        </div>
      </form>
    </div>
  );
};
export default SignInForm;
