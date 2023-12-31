import { useDispatch } from "react-redux";
import { authActions } from "../store/authReducer";

const Welcome = () => {
  const dispatch = useDispatch();

  const loginHandler = () => {
    dispatch(authActions.login());
  };

  return (
    <section className="welcome">
      <div>
        <button className="welcome-btn" onClick={loginHandler}>
          Login to Redux Counter
        </button>
      </div>
    </section>
  );
};

export default Welcome;
