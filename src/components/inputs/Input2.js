import { useContext, useState } from "react";
import { PostContext } from ".";
import "./index.css";
import "./inputStyle.css";

const InputTwo = () => {
  const { data, setData, setNumber } = useContext(PostContext);
  const [choose, setChoose] = useState(false);
  const [other, setOther] = useState('');
  const [inputData, setInputData] = useState({
    projectType: [],
  });

  const handleChange = (e) => {
    const { value, checked } = e.target;
    const { projectType } = inputData;
    var myCheckbox = document.getElementsByName("project");
    Array.prototype.forEach.call(myCheckbox, function (el) {
      el.checked = false;
    });

    e.target.checked = true;

    setChoose(false);
    // case 1: user checks
    if (checked) {
      setInputData({
        projectType: [value],
      });
    }

    // case 2: user unchecks
    else {
      setInputData({
        projectType: projectType.filter((e) => e !== value),
      });
      e.target.checked = false;
    }
  };

  const inputChange = (e) => {
    
    console.log(e.target.value)
    if (e.target?.type === "text") {
      setOther(e.target.value)
      setInputData({
        projectType: [e.target.value],
      });
      console.log(e.target.value)
    }
    if (e.target?.type === "checkbox") {
    var myCheckbox = document.getElementsByName("project");
    Array.prototype.forEach.call(myCheckbox, function (el) {
      el.checked = false;
    });
  }
    e.target.checked = true;
    
   
  } 
console.log(inputData)
  const onChange = () => {
    const { projectType } = inputData;
    if (projectType.length <= 0) {
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
        What type of task/project are you hiring talent for?
      </div>
      <div className="">
        <label className="container">
          New idea or project
          <input
            type="checkbox"
            onClick={handleChange}
            name="project"
            value="New idea or project"
          />
          <span className="checkmark pro"></span>
        </label>

        <label className="container">
          Existing idea or project
          <input
            type="checkbox"
            onClick={handleChange}
            name="project"
            value="Existing project, more Resources"
          />
          <span className="checkmark pro"></span>
        </label>

        <label className="container">
          Ongoing assistance or consultation
          <input
            type="checkbox"
            onClick={handleChange}
            name="project"
            value="Ongoing assistance or consultation"
          />
          <span className="checkmark pro"></span>
        </label>

        <div className="input_con">
          <label className="container_pro">
            Others-
            <input
              type="checkbox"
              name="project"
              onClick={(e) => inputChange(e)}
              value=""
            />
            <span className="checkmark pro"></span>
          </label>
          <input className="other_input" type="text" value={other} onChange={(e) => inputChange(e)} />
        </div>

        <label className="container">
          None of the above, I'm just looking to learn more about DPD
          <input
            type="checkbox"
            onClick={handleChange}
            name="project"
            value="None, looking to learn about DPD"
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

export default InputTwo;
