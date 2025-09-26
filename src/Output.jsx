import { useContext } from "react";
import { UserOutputContext, UserInputContext } from "./App";

const Output = () => {
  const userOutput = useContext(UserOutputContext);
  const userInput = useContext(UserInputContext);

  const handleReset = () => {
    userInput.setBill("");
    userInput.setPpl("");
    userInput.setisInvalid(false);
    userOutput.setTip(0);
    userOutput.setTotal(0);
  };

  return (
    <section id="output">
      <div id="output-tip">
        <p>
          <span>Tip Amount</span>
          <span>/ person</span>
        </p>
        <p id="output-tip--calc">${userOutput.tip.toFixed(2)}</p>
      </div>
      <div id="output-total">
        <p>
          <span>Total</span>
          <span>/ person</span>
        </p>
        <p id="output-total--calc">${userOutput.total.toFixed(2)}</p>
      </div>

      <button id="reset" onClick={handleReset}>
        reset
      </button>
    </section>
  );
};

export default Output;
