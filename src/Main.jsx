import { useDispatch, useSelector } from "react-redux";
import { changeBl, deleteTodo } from "./features/todoReducer";

const Main = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleBl = (i) => {
    dispatch(changeBl(i));
  };

  const handleDelete = (i) => {
    dispatch(deleteTodo(i));
  };

  return (
    <>
      {state.map((item, index) => {
        return (
          <div className={`man ${state[index].bl ? "did" : null}`}>
            <button onClick={() => handleBl(index)}>✅</button>
            <h1>{item.name}</h1>
            <button onClick={() => handleDelete(index)}>❌</button>
          </div>
        );
      })}
    </>
  );
};

export default Main;
