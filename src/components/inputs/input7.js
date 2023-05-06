import { useContext, useState } from 'react';
import { PostContext } from '.';
import "./index.css";
import "./inputStyle.css";


const InputSeven = () => {
    const {data, setData, setNumber} = useContext(PostContext);
    const [choose, setChoose] = useState(false);
    const [ inputData, setInputData ] = useState({
        toStart: []
    });

    const handleChange = (e) => {
      const { value, checked } = e.target;
      const { toStart } = inputData;
      var myCheckbox = document.getElementsByName("start");
      Array.prototype.forEach.call(myCheckbox, function (el) {
        el.checked = false;
      });
  
      e.target.checked = true;
  
      setChoose(false);
      // case 1: user checks
      if (checked) {
        setInputData({
          toStart: [value],
        });
      }
  
      // case 2: user unchecks
      else {
        setInputData({
          toStart: toStart.filter((e) => e !== value),
        });
        e.target.checked = false;
      }
    };
    
    const onChange = () => {
      const {toStart} = inputData;
      if (toStart.length <= 0 ) {
        return setChoose(true);
      }
        setData(val => [...data, inputData]);  
        setNumber(prev => prev + 1);
    }

    const goBack = () => {
        setNumber((prev) => prev - 1);
      }
    
    return (
    <div>
      <div className="header sub">When do you need the developer to start?</div>
      <div className="">
        <label className="container">
        Immediately
          
          <input type="checkbox" onClick={handleChange} name="start" value='developer' />
          <span  className="checkmark pro"></span>
        </label>

        <label className="container">
        In 1 to 2 weeks
          
          <input type="checkbox" onClick={handleChange} name="start" value='designers' />
          <span className="checkmark pro"></span>
        </label>

        <label className="container">
        More than 2 weeks from now
        I'll decide later
          <input type="checkbox" onClick={handleChange} name="start" value='project manager' />
          <span className="checkmark pro"></span>
        </label>

        <label className="container">
        
        I'll decide later
          <input type="checkbox" onClick={handleChange} name="start" value='project manager' />
          <span className="checkmark pro"></span>
        </label>
        { choose && <p className="error_text">Kindly Select One </p>}
      </div>
      <div className="btn_cover">
        <div onClick={goBack} className="btn_back"><img alt="i" src="/assets/home/backArr.png" />Back</div>
        <button onClick={onChange} type="button" className="btn_input size">
        Next
        </button>
      </div>
    </div>
  );
};


export default InputSeven;
