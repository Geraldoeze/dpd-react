import { useContext, useState } from "react";
import { PostContext } from ".";
import "./index.css";
import "./inputStyle.css";

const InputThree = () => {
  const { data, setData, setNumber } = useContext(PostContext);
  const [choose, setChoose] = useState(false);
  const [inputData, setInputData] = useState({
    productSpecifications: [],
  });

  const handleChange = (e) => {
    const { value, checked } = e.target;
    const { productSpecifications } = inputData;
    var myCheckbox = document.getElementsByName("product");
    Array.prototype.forEach.call(myCheckbox, function (el) {
      el.checked = false;
    });

    e.target.checked = true;

    setChoose(false);
    // case 1: user checks
    if (checked) {
      setInputData({
        productSpecifications: [value],
      });
    }

    // case 2: user unchecks
    else {
      setInputData({
        productSpecifications: productSpecifications.filter((e) => e !== value),
      });
      e.target.checked = false;
    }
  };

  const onChange = () => {
    const { productSpecifications } = inputData;
    if (productSpecifications.length <= 0) {
      return setChoose(true);
    }
    setData((val) => [...data, inputData]);
    setNumber((prev) => prev + 1);
  };

  const goBack = () => {
    setNumber((prev) => prev - 1);
  }

  return (
    <div>
      <div className="header sub">Do you have task/product specifications ready?</div>
      <div className="">
        <label className="container">
        I have a rough idea of what I want to do
          <input
            type="checkbox"
            onClick={handleChange}
            name="product"
            value="Rough idea of what I want"
          />
          <span className="checkmark pro"></span>
        </label>

        <label className="container">
        I have a clear idea of what I want to do, but I do not have written specifications ready.
          <input
            type="checkbox"
            onClick={handleChange}
            name="product"
            value="Clear idea of what i want"
          />
          <span className="checkmark pro"></span>
        </label>

        <label className="container">
        I have clear written specifications ready.
          <input
            type="checkbox"
            onClick={handleChange}
            name="product"
            value="Written specifications/wireframes"
          />
          <span className="checkmark pro"></span>
        </label>

        
        {choose && <p className="error_text">Kindly Select One </p>}
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

export default InputThree;
