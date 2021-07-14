import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import { evaluate } from "mathjs";
import "./App.css";

const App = () => {
  const [term, setTerm] = useState("");
  const [result, setResult] = useState("");

  const handleInputChange = (e) => {
    setTerm(e.target.value);
    setResult("");
  };

  const handleBtnClick = (e) => {
    const text = e.target.textContent;

    setTerm((oldTerm) => oldTerm + text);
    setResult("");
  };

  const handleDelete = () => {
    if (term.length > 0) {
      setTerm((oldTerm) => oldTerm.slice(0, oldTerm.length - 1));
    } else if (result.length > 0) {
      setResult((oldResult) => oldResult.slice(0, oldResult.length - 1));
    }
  };

  const handleResult = () => {
    setResult(evaluate(term));
    setTerm("");
  };

  const handleReset = () => {
    setTerm("");
    setResult("");
  };

  const handleEnterPress = (e) => {
    if (e.key === "Enter") {
      handleResult();
    }
  };

  return (
    <div className="App">
      <Input
        term={term || result}
        handleInputChange={handleInputChange}
        onEnterPress={handleEnterPress}
      />
      <div className="btns-container">
        <div className="row">
          <Button num="7" handleBtnClick={handleBtnClick} />
          <Button num="8" handleBtnClick={handleBtnClick} />
          <Button num="9" handleBtnClick={handleBtnClick} />
          <Button num="Del" className="delete" handleBtnClick={handleDelete} />
        </div>
        <div className="row">
          <Button num="4" handleBtnClick={handleBtnClick} />
          <Button num="5" handleBtnClick={handleBtnClick} />
          <Button num="6" handleBtnClick={handleBtnClick} />
          <Button num="+" handleBtnClick={handleBtnClick} />
        </div>
        <div className="row">
          <Button num="1" handleBtnClick={handleBtnClick} />
          <Button num="2" handleBtnClick={handleBtnClick} />
          <Button num="3" handleBtnClick={handleBtnClick} />
          <Button num="-" handleBtnClick={handleBtnClick} />
        </div>
        <div className="row">
          <Button num="." handleBtnClick={handleBtnClick} />
          <Button num="0" handleBtnClick={handleBtnClick} />
          <Button num="/" handleBtnClick={handleBtnClick} />
          <Button num="*" handleBtnClick={handleBtnClick} />
        </div>
        <div className="row last-row">
          {result && (
            <Button
              num="Reset"
              className="reset"
              handleBtnClick={handleReset}
            />
          )}
          {!result && (
            <Button num="=" className="equal" handleBtnClick={handleResult} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
