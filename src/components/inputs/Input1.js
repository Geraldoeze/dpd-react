import { useContext, useState } from "react";
import { PostContext } from ".";
import "./index.css";
import "./inputStyle.css";

const InputOne = () => {
  const { data, setData, setNumber } = useContext(PostContext);
  const [choose, setChoose] = useState(false);
  const [inputData, setInputData] = useState({
    role: [],
  });

  const handleChange = (e) => {
    const { value, checked } = e.target;
    const { role } = inputData;
    var myCheckbox = document.getElementsByName("role");
    Array.prototype.forEach.call(myCheckbox, function (el) {
      el.checked = false;
    });

    e.target.checked = true;

    setChoose(false);
    // case 1: user checks
    if (checked) {
      setInputData({
        role: [value],
      });
    }

    // case 2: user unchecks
    else {
      setInputData({
        role: role.filter((e) => e !== value),
      });
      e.target.checked = false;
    }
  };

  
  const onChange = () => {
    const { role } = inputData;
    if (role.length <= 0) {
      return setChoose(true);
    }
    setData((val) => [...data, inputData]);
    setNumber((prev) => prev + 1);
  };

  return (
    <div>
      <div className="header">What role would you like to hire?</div>
      <div className="">
        <label className="container">
          Developer <br />
          <span className="span_text">
            Software Developers, Data Scientists, DevOps, and QA
          </span>
          <input
            type="checkbox"
            id="check1"
            onClick={handleChange}
            name="role"
            value="developer"
          />
          <span className="checkmark"></span>
        </label>

        <label className="container">
          Designers <br />
          <span className="span_text">
            Web, Mobile, UI/UX, Branding, and Visual Designers
          </span>
          <input
            type="checkbox"
            id="check2"
            onClick={handleChange}
            name="role"
            value="designers"
          />
          <span className="checkmark"></span>
        </label>

        <label className="container">
          Project Managers <br />
          <span className="span_text">
            Digital Project Managers, IT Project Managers, Scrum Masters, and
            Agile Coaches
          </span>
          <input
            type="checkbox"
            id="check3"
            onClick={handleChange}
            name="role"
            value="project manager"
          />
          <span className="checkmark"></span>
        </label>
        {choose && <p className="error_text">Kindly Select One </p>}
      </div>
      <div className="btn_cover">
        <button onClick={onChange} type="button" className="btn_input">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default InputOne;
