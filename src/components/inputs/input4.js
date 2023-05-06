import { useContext, useState } from "react";
import { PostContext } from ".";
import "./index.css";
import "./inputStyle.css";

const InputFour = () => {
  const { data, setData, setNumber } = useContext(PostContext);
  const [choose, setChoose] = useState(false);
  const [inputData, setInputData] = useState({
    duration: [],
  });

  const handleChange = (e) => {
    const { value, checked } = e.target;
    const { duration } = inputData;
    var myCheckbox = document.getElementsByName("duration");
    Array.prototype.forEach.call(myCheckbox, function (el) {
      el.checked = false;
    });

    e.target.checked = true;

    setChoose(false);
    // case 1: user checks
    if (checked) {
      setInputData({
        duration: [value],
      });
    }

    // case 2: user unchecks
    else {
      setInputData({
        duration: duration.filter((e) => e !== value),
      });
      e.target.checked = false;
    }
  };

  const onChange = () => {
    const { duration } = inputData;
    if (duration.length <= 0) {
      return setChoose(true);
    }
    setData((val) => [...data, inputData]);
    setNumber((prev) => prev + 1);
  };

  const goBack = () => {
    setNumber((prev) => prev - 1);
  };

  return (
    <div>
      <div className="header sub">How long do you need the developer?</div>
      <div className="">
        <label className="container">
          Less than 1 week
          <input
            type="checkbox"
            onClick={handleChange}
            name="duration"
            value="Less than 1 week"
          />
          <span className="checkmark pro"></span>
        </label>

        <label className="container">
          1 to 4 weeks
          <input
            type="checkbox"
            onClick={handleChange}
            name="duration"
            value="1 to 4 weeks"
          />
          <span className="checkmark pro"></span>
        </label>

        <label className="container">
          1 to 3 months
          <input
            type="checkbox"
            onClick={handleChange}
            name="duration"
            value="1 to 3 months"
          />
          <span className="checkmark pro"></span>
        </label>

        <label className="container">
          3 to 6 months
          <input
            type="checkbox"
            onClick={handleChange}
            name="duration"
            value="3 to 6 months"
          />
          <span className="checkmark pro"></span>
        </label>

        <label className="container">
          Longer than 6 months
          <input
            type="checkbox"
            onClick={handleChange}
            name="duration"
            value="Longer than 6 months"
          />
          <span className="checkmark pro"></span>
        </label>

        <label className="container">
          I'll decide later
          <input
            type="checkbox"
            onClick={handleChange}
            name="duration"
            value='I"ll decide later'
          />
          <span className="checkmark pro"></span>
        </label>
        {choose && <p className="error_text">Kindly Select One </p>}
      </div>
      <div className="btn_cover">
        <div onClick={goBack} className="btn_back">
          <img alt="i" src="/assets/home/backArr.png" />
          Back
        </div>
        <button onClick={onChange} type="button" className="btn_input size">
          Next
        </button>
      </div>
    </div>
  );
};

export default InputFour;
