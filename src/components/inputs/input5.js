import { useContext, useState } from "react";
import { PostContext } from ".";
import "./index.css";
import "./inputStyle.css";

const InputFive = () => {
  const { data, setData, setNumber } = useContext(PostContext);
  const [choose, setChoose] = useState(false);
  const [inputData, setInputData] = useState({
    commitmentLevel: [],
  });

  const handleChange = (e) => {
    const { value, checked } = e.target;
    const { commitmentLevel } = inputData;
    var myCheckbox = document.getElementsByName("commit");
    Array.prototype.forEach.call(myCheckbox, function (el) {
      el.checked = false;
    });

    e.target.checked = true;

    setChoose(false);
    // case 1: user checks
    if (checked) {
      setInputData({
        commitmentLevel: [value],
      });
    }

    // case 2: user unchecks
    else {
      setInputData({
        commitmentLevel: commitmentLevel.filter((e) => e !== value),
      });
      e.target.checked = false;
    }
  };
  const onChange = () => {
    const { commitmentLevel } = inputData;
    if (commitmentLevel.length <= 0) {
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
      <div className="header sub">
        What level of time commitment will you require from the developer?
      </div>
      <div className="">
        <label className="container">
          Full time (40 or more hrs/week)
          <input
            type="checkbox"
            onClick={handleChange}
            name="commit"
            value="full time"
          />
          <span className="checkmark pro"></span>
        </label>

        <label className="container">
          Part time (Less than 40 hrs/week)
          <input
            type="checkbox"
            onClick={handleChange}
            name="commit"
            value="part time"
          />
          <span className="checkmark pro"></span>
        </label>

        <label className="container">
          Hourly
          <input
            type="checkbox"
            onClick={handleChange}
            name="commit"
            value="hourly"
          />
          <span className="checkmark pro"></span>
        </label>

        <label className="container">
          I'll decide later
          <input
            type="checkbox"
            onClick={handleChange}
            name="commit"
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

export default InputFive;
