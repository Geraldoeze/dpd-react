import { useState, createContext } from "react";

import InputZero from "./input0";
import InputOne from "./Input1";
import InputTwo from "./Input2";
import InputThree from "./input3";
import InputFour from "./input4";
import InputFive from "./input5";
import InputSix from "./input6";
import InputSeven from "./input7";
import InputEight from "./input8";
import InputNine from "./input9";
import InputTen from "./input10";
import "./index.css";

export const PostContext = createContext();

const InputContainer = () => {
  const [data, setData] = useState([]);
  const [number, setNumber] = useState(1);
  console.log(data, number);

  
  return (
    <PostContext.Provider value={{ data, setData, number, setNumber }}>
      <div className="input_Container">
        <div className="input_Image">
          <img alt="icon" src="/assets/home/png.png" />
        </div>
        <div className="input_Holder">
        {number === 1 && <InputZero />}
          {/* {number === 2 && <InputOne />} */}
          {number === 2 && <InputTwo />}
          {number === 3 && <InputThree />}
           {/* {number === 4 && <InputFour />}  */}
           {/* {number === 6 && <InputFive />}
          {number === 7 && <InputSix />}
          {number === 8 && <InputSeven />}
          {number === 9 && <InputEight />}
          {number === 10 && <InputNine />}  */}
          {number === 4 && <InputTen />}
        </div>
       
      
      </div>
     
    </PostContext.Provider>
  );
};

export default InputContainer;
