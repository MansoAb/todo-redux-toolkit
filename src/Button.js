import { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "./features/todoReducer";

const Button = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAdd = (text) => {
    dispatch(add(text));
    setText("");
  };

  return (
    <div className="buttons">
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button onClick={() => handleAdd(text)}>Add</button>
    </div>
  );
};

export default Button;
