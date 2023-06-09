import { useContext, useState } from "react";
import axios from 'axios';
import { PostContext } from ".";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import "./index.css";
import "./input10.css";

const InputOne = () => {
  const { data, setNumber } = useContext(PostContext);
  const [choose, setChoose] = useState(false);
  const [values, setValues] = useState({
    phone: "",
    email: "",
    name: "",
    company: ""
  });
 
  const submitHandler = (e) => {
    e.preventDefault();
    const body = {...data, contact: values}
    console.log(body, '32e');
    axios.post('https://dpd-online-server.herokuapp.com/v1/user/client-meta-details', body)
    .then(res => window.location.replace('https://app.dpdonline.ng/signup?type=client') )
    .catch(err => {
      setChoose(true);
      console.log(err)
    });
  }
// https://app.dpdonline.ng/signup?type=client

  return (
    <div className="success_cover">
      <form onSubmit={submitHandler}>
      <div className="header sub">Success! Let's connect you with talent.</div>
      <div className="phone_input">
        <input type="email" className="text_input" required placeholder="Company Email" onChange={(e) => setValues({...values, email: e.target.value})} />
        <input type="text" className="text_input" required placeholder="Company Name" onChange={(e) => setValues({...values, company: e.target.value})} />
        <input type="text" className="text_input" required placeholder="Contact Name" onChange={(e) => setValues({...values, name: e.target.value})} />
        <div className="">
          <PhoneInput 
            containerStyle={{}}
            inputStyle={{background: '#f4f4f4',  color: '#343434', border: '0', width: '100%', fontFamily: "Montserrat", fontSize: '18px', fontWeight: '500',  height: '3rem', borderRadius: '20px'}}
            
            country={'ng'}        
            value={values.phone}
            onChange={num => setValues({...values, phone: num })}
            />
        </div>
        {choose && <p className="error_text">Something went wrong. </p>}
      </div>
      <div>
        <div className="terms">
          By completing signup, you are agreeing to DPD <span className="line_span">Terms of Service</span>,
          <span className="line_span">Privacy Policy</span>, <span className="line_span">Sourced Talent Matching Agreement</span>, and <span className="line_span">Cookie Policy</span>
          and that DPD may monitor or record audio or video calls for quality
          assurance and training purposes.
        </div>
        <button type="submit" className="btn_line" >Connect Me With Talent</button>
      </div>
      </form>
    </div>
  );
};

export default InputOne;
