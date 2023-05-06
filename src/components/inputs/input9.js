import { useContext, useState } from "react";
import { PostContext } from ".";
import "./index.css";
import "./inputStyle.css";

const InputNine = () => {
  const { data, setData, setNumber } = useContext(PostContext);
  const [choose, setChoose] = useState(false);
  const [inputData, setInputData] = useState({
    hourRate: [],
  });

  const handleChange = (e) => {
    const { value, checked } = e.target;
    const { hourRate } = inputData;
    var myCheckbox = document.getElementsByName("rate");
    Array.prototype.forEach.call(myCheckbox, function (el) {
      el.checked = false;
    });

    e.target.checked = true;

    setChoose(false);
    // case 1: user checks
    if (checked) {
      setInputData({
        hourRate: [value],
      });
    }

    // case 2: user unchecks
    else {
      setInputData({
        hourRate: hourRate.filter((e) => e !== value),
      });
      e.target.checked = false;
    }
  };

  const onChange = () => {
    const { hourRate } = inputData;
    if (hourRate.length <= 0) {
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
      Do you have an hourly rate in mind?
      </div>
      <div className="subText">
        It's okay if you're not sure - you can change this information later
      </div>
      <div className="">
        <label className="container">
          Less than $70/hr
          <input
            type="checkbox"
            onClick={handleChange}
            name="rate"
            value="developer"
          />
          <span className="checkmark pro"></span>
        </label>

        <label className="container">
          $70 - $90/hr
          <input
            type="checkbox"
            onClick={handleChange}
            name="rate"
            value="project manager"
          />
          <span className="checkmark pro"></span>
        </label>

        <label className="container">
          $91 - $110/hr
          <input
            type="checkbox"
            onClick={handleChange}
            name="rate"
            value="project manager"
          />
          <span className="checkmark pro"></span>
        </label>

        <label className="container">
          More than $110/hr
          <input
            type="checkbox"
            onClick={handleChange}
            name="rate"
            value="project manager"
          />
          <span className="checkmark pro"></span>
        </label>

        <label className="container">
          Not sure on budget yet
          <input
            type="checkbox"
            onClick={handleChange}
            name="rate"
            value="project manager"
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

export default InputNine;
