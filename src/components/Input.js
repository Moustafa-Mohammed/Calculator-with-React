import "./Input.css";
const Input = ({ term, handleInputChange, onEnterPress }) => {
  return (
    <div className="input-container">
      <input
        className="input"
        value={term}
        onChange={handleInputChange}
        onKeyPress={onEnterPress}
      />
    </div>
  );
};

export default Input;
