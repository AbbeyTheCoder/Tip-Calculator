import { useContext } from "react";
import { UserInputContext, UserOutputContext } from "./App";

const Form = () => {
  const userInput = useContext(UserInputContext);
  const userOutput = useContext(UserOutputContext);

  const calcTip = (bill, tip) => {
    return bill * tip;
  };

  const tips = [5, 10, 15, 25, 50]; // Tips available

  const handleTipClick = (e) => {
    if (userInput.ppl != 0) {
      userInput.setisInvalid(false);

      const tipPercent = e.target.value * 0.01;

      let tipPerPerson = calcTip(userInput.bill, tipPercent) / userInput.ppl;
      let totalPerPerson = tipPerPerson + userInput.bill / userInput.ppl;

      userOutput.setTip(tipPerPerson);
      userOutput.setTotal(totalPerPerson);
    } else {
      userInput.setisInvalid(true);
      userOutput.setTip(0);
      userOutput.setTotal(0);
    }
  };

  return (
    <form action="" noValidate>
      <div>
        <label htmlFor="input-bill">Bill</label>
        <input
          type="number"
          id="input-bill"
          placeholder="0"
          onChange={(e) => {
            userInput.setBill(e.target.value);
          }}
          value={userInput.bill}
          min={0}
        />
      </div>

      <div>
        <p className="label">Select Tip %</p>
        <div id="input-tip">
          {/* Tips Buttons */}
          {tips.map((tip, idx) => {
            return (
              <button
                key={idx}
                type="button"
                value={tip}
                onClick={handleTipClick}
              >
                {tip}%
              </button>
            );
          })}
          <input
            type="number"
            id="custom-tip"
            placeholder="Custom"
            onChange={handleTipClick}
            min={0}
          />
        </div>
      </div>

      <div>
        <label htmlFor="input-people">
          <span>Number of People</span>{" "}
          {userInput.isInvalid && <span className="error">Can't be zero</span>}
        </label>
        <input
          type="number"
          id="input-people"
          placeholder="0"
          onChange={(e) => {
            userInput.setisInvalid(false);
            userInput.setPpl(e.target.value);
          }}
          value={userInput.ppl}
          min={0}
        />
      </div>
    </form>
  );
};

export default Form;
