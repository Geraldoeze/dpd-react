import { useContext, useState } from "react";
import { PostContext } from ".";
import "./index.css";
import "./inputStyle.css";

const InputEight = () => {
  const { data, setData, setNumber } = useContext(PostContext);
  const [choose, setChoose] = useState(false);
  const [inputData, setInputData] = useState({
    remoteWork: [],
  });

  const handleChange = (e) => {
    const { value, checked } = e.target;
    const { remoteWork } = inputData;
    var myCheckbox = document.getElementsByName("remote");
    Array.prototype.forEach.call(myCheckbox, function (el) {
      el.checked = false;
    });

    e.target.checked = true;

    setChoose(false);
    // case 1: user checks
    if (checked) {
      setInputData({
        remoteWork: [value],
      });
    }

    // case 2: user unchecks
    else {
      setInputData({
        remoteWork: remoteWork.filter((e) => e !== value),
      });
      e.target.checked = false;
    }
  };

  const onChange = () => {
    const { remoteWork } = inputData;
    if (remoteWork.length <= 0) {
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
        Are you open to working with a remote developer?
      </div>
      <div className="">
        <label className="container">
          Yes
          <input
            type="checkbox"
            onClick={handleChange}
            name="remote"
            value="developer"
          />
          <span className="checkmark pro"></span>
        </label>

        <label className="container">
          No
          <input
            type="checkbox"
            onClick={handleChange}
            name="remote"
            value="designers"
          />
          <span className="checkmark pro"></span>
        </label>

        <label className="container">
          I’m not sure
          <input
            type="checkbox"
            onClick={handleChange}
            name="remote"
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

export default InputEight;
