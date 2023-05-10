import { useContext, useState } from "react";
import { PostContext } from ".";
import "./index.css";
import "./inputStyle.css";

const InputZero = () => {
  const { data, setData, setNumber } = useContext(PostContext);
  const [choose, setChoose] = useState(false);
  const [inputData, setInputData] = useState({
    clientChoice: [],
  });

  const handleChange = (e) => {
    const { value, checked } = e.target;
    const { clientChoice } = inputData;
    var myCheckbox = document.getElementsByName("client");
    Array.prototype.forEach.call(myCheckbox, function (el) {
      el.checked = false;
    });

    e.target.checked = true;

    setChoose(false);
    // case 1: user checks
    if (checked) {
      setInputData({
        clientChoice: [value],
      });
    }

    // case 2: user unchecks
    else {
      setInputData({
        clientChoice: clientChoice.filter((e) => e !== value),
      });
      e.target.checked = false;
    }
  };

  
  const onChange = () => {
    const { clientChoice } = inputData;
    if (clientChoice.length <= 0) {
      return setChoose(true);
    }
    setData((val) => [...data, inputData]);
    setNumber((prev) => prev + 1);
  };

  return (
    <div>
      <div className="header">What do you want to do?</div>
      <div className="">
        <label className="container">
          Outsource a task to a single consultant
          
          <input
            type="checkbox "
            id="check1"
            onClick={handleChange}
            name="client"
            value="developer"
          />
          <span className="checkmark pro"></span>
        </label>

        <label className="container">
          Outsource a project to a team
          <input
            type="checkbox"
            id="check2"
            onClick={handleChange}
            name="client"
            value="designers"
          />
          <span className="checkmark pro"></span>
        </label>

        <label className="container">
          Hire a talent for a role in your organization
          <input
            type="checkbox"
            id="check3"
            onClick={handleChange}
            name="client"
            value="project manager"
          />
          <span className="checkmark pro"></span>
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

export default InputZero;
