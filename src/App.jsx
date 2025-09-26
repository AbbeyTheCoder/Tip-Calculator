import Form from "./Form";
import Output from "./Output";
import "./App.css";
import { useState, createContext } from "react";

const UserInputContext = createContext();
const UserOutputContext = createContext();

const App = () => {
  const [bill, setBill] = useState("");
  const [ppl, setPpl] = useState("");
  const [isInvalid, setisInvalid] = useState(false);

  const [tip, setTip] = useState(0);
  const [total, setTotal] = useState(0);

  return (
    <>
      <header>
        <h1>
          spli
          <br />
          tter
        </h1>
      </header>
      <main id="tip-calculator">
        <UserInputContext.Provider
          value={{ bill, setBill, ppl, setPpl, isInvalid, setisInvalid }}
        >
          <UserOutputContext.Provider value={{ total, setTotal, tip, setTip }}>
            <Form />
            <Output />
          </UserOutputContext.Provider>
        </UserInputContext.Provider>
      </main>
    </>
  );
};

export default App;
export { UserInputContext, UserOutputContext };
