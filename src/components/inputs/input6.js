import { useContext, useState } from "react";
import { PostContext } from ".";
import "./index.css";

import "./input6.css";

const skills = [
  {
    name: "software skills",
    skill: ["HTML", "CSS", "JavaScript", "React", "Bootstrap", "Angular"],
    id: "1",
  },
  {
    name: "design skills",
    skill: ["Figma", "Photoshop", "AdobeXD", "Stima"],
    id: "2",
  },
];

const InputSix = () => {
  const { data, setData, setNumber } = useContext(PostContext);

  const [selected, setSelected] = useState({
    list: [],
  });
  const [show, setShow] = useState(false);
  const [choose, setChoose] = useState(false);
  const [values, setValues] = useState(skills[0]);

  const changeInputHandler = (e) => {
    const { list } = selected;
    const { value, checked } = e.target;
    setSelected({
      list: [...list, value],
    });
  };

  const changeSkill = (val) => {
    console.log(val, values);

    setValues(val);
    setShow(false)
  };

  const buttonHandler = (e) => {
    const { list } = selected;
    const { value, checked, id } = e.target;
    const changer = document.getElementById(value);
console.log(changer, id)
    // case 1: user checks
    if (checked) {
      changer.style.backgroundColor = "rgba(214, 97, 51, 0.58)";
      setSelected({
        list: [...list, value],
      });
    }
    // case 2: user unchecks
    else {
      changer.style.backgroundColor = "rgba(214, 98, 51, 0.1)";
      setSelected({
        list: list.filter((e) => e !== value),
      });
    }
  };

  const onChange = () => {
    const { list } = selected;
    if (list.length <= 0) {
      return setChoose(true);
    }
    setData((val) => [...data, selected]);
    setNumber((prev) => prev + 1);
  };

  const skipHandler = () => {
    setNumber((prev) => prev + 1);
  };

  const goBack = () => {
    setNumber((prev) => prev - 1);
  };


  return (
    <div>
      <div className="header sub">
        What skills would you like to see in your new hire?
      </div>
      <div className="">
        <div className="input_cover">
          <input
            className="input_text"
            defaultValue={selected.list}
            placeholder="Desired areas of expertise (e.g. Java Script, Ruby, etc.)"
          />
        </div>

        <div>
          <div className="btn_name">
            Popular skills for{" "}
            <span>
              {" "}
              {values.name}{" "}
              <button >
                <img alt="" src="/assets/home/downArr.png" />
              </button>{" "}
            </span>
          </div>
          {show && skills.map((val, id) => {
            return (
              <p className="drop_skill" key={id} onClick={() => changeSkill(val)}>
                {val.name}
              </p>
            );
          })}

          <div className="btn_contain">
            { values.skill?.map((val, id) => {
              return (
                <label id={val} className="btn_keys" key={id + "S"}>
                  <input
                    id={id}
                    type="checkbox"
                    onClick={buttonHandler}
                    value={val}
                  />
                  <img alt="" src="/assets/home/cross.png" width="10px" />
                  {val}
                </label>
              );
            })}
          </div>
        </div>

        {choose && <p className="error_text">Kindly Input a Skill </p>}
      </div>
      <div className="btn_coverSkip">
        <div onClick={goBack} className="btn_back">
          <img alt="i" src="/assets/home/backArr.png" />
          Back
        </div>
        <div className="btn_skip">
          <button onClick={skipHandler} type="button" className="skip">
            Skip
          </button>
          <button onClick={onChange} type="button" className="btn_next">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputSix;
