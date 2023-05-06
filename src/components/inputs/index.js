import { useState, createContext } from "react";
// import InputOne from "./Input1";
import InputTwo from "./Input2";
import InputThree from "./input3";
// import InputFour from "./input4";
// import InputFive from "./input5";
// import InputSix from "./input6";
// import InputSeven from "./input7";
// import InputEight from "./input8";
// import InputNine from "./input9";
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
          <img alt="icon" src="/assets/inputs/imageIcon.png" />
        </div>
        <div className="input_Holder">
          {/* {number === 1 && <InputOne />} */}
          {number === 1 && <InputTwo />}
          {number === 2 && <InputThree />}
          {/* {number === 3 && <InputFour />} */}
          {/* {number === 5 && <InputFive />}
          {number === 6 && <InputSix />}
          {number === 7 && <InputSeven />}
          {number === 8 && <InputEight />}
          {number === 9 && <InputNine />} */}
          {number === 3 && <InputTen />}
        </div>
        <div className="footer_bottom">
        © 2023 Dnama’z Capital. All rights reserved <br />
        Terms of service
      </div>
      </div>
     
    </PostContext.Provider>
  );
};

export default InputContainer;
