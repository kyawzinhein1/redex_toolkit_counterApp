import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counterReducer";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const isShow = useSelector((state) => state.counter.isShow);

  const increaseHandler = () => {
    dispatch(counterActions.increase());
  };
  const decreaseHandler = () => {
    dispatch(counterActions.decrease());
  };
  const increaseBy5 = () => {
    dispatch(counterActions.increaseBy5(5));
  };
  const toggleHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <section>
      <h1>Redux Counter</h1>
      <div className="numberBox">
        <div className="number">{isShow && <span>{counter}</span>}</div>
        <button className="btn" onClick={toggleHandler}>$</button>
      </div>
      <hr />
      <button className="btn" onClick={increaseHandler}>Increase</button>
      <button className="btn" onClick={increaseBy5}>IncreaseBy 5</button>
      <button className="btn" onClick={decreaseHandler}>Decrease</button>
    </section>
  );
};

export default Counter;
