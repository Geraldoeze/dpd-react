import { useState } from 'react';
import "./main.css";
import Details from './details';

function Main() {

  const [showDetails, setShowDetails] = useState(true);
  const [content, setContent] = useState(0);
  const showInfo = (id) => {
    setContent(id);
    setShowDetails(true)
  }
  const closeInfo = () => setShowDetails(false);

  return (
    <>
      <section className="main_style">
        <div className="main_links">
          <img
            alt="icon"
            src="/assets/home/imageIcon.png"
            width="264px"
            height="76px"
          />
          <button className="main_btn">Sign In</button>
        </div>
        {showDetails && <Details detailNum={content} onClose={setShowDetails} />}
        <div className="main_text">
          What Do You Want To <br />
          Do Today?
        </div>
        <div className="main_images">
          <img onMouseLeave={closeInfo} onMouseEnter={() => showInfo(1)} alt="img" src="/assets/home/img1.png" width="30%" />
          <img onMouseLeave={closeInfo} onMouseEnter={() => showInfo(2)} alt="img" src="/assets/home/img2.png" width="30%" />
          <img onMouseLeave={closeInfo} onMouseEnter={() => showInfo(3)} alt="img" src="/assets/home/img3.png" width="30%" />
        </div>
        <div className="main_bottom">
          <div className="bottom1">
            <img
              alt="btn"
              src="/assets/home/imgLogo.png"
              width="262px"
              height="46px"
            />
          </div>
          <div className="bottom2">
            <img alt="btn1" src="/assets/home/down.png" width="70%" />
          </div>
        </div>
      </section>

      {/*  */}
      <section className="content_style">
        <div className="content_arrows">
          <div className="arrow_con">
            <img alt="arr" src="/assets/home/arrow4.png" width="100%" />
          </div>
          <div className="arrow_container">
            <div className="arrow_items">
              <div className="arrow_num">1</div>
              <div className="arrow">
                <img alt="arr" src="/assets/home/arrow2.png" width="100%" />
              </div>
            </div>
            <div className="content_text">
              <h3 className="text_header">
                Talk to One of Our Industry Experts
              </h3>
              <p className="text_content">
                An expert on our team will work with you to understand your
                goals, technical needs, and team dynamics.
              </p>
            </div>
          </div>
          <div className="arrow_container">
            <div className="arrow_items">
              <div className="arrow_num">2</div>
              <div className="arrow">
                <img alt="arr" src="/assets/home/arrow2.png" width="100%" />
              </div>
            </div>
            <div className="content_text">
              <h3 className="text_header">
              Work With Hand-Selected Talent
              </h3>
              <p className="text_content">
              Within days, we'll introduce you to the right talent for your project. Average time to match is under 24 hours.
              </p>
            </div>
          </div>
          <div className="arrow_container">
            <div className="arrow_items">
              <div className="arrow_num">3</div>
              <div className="arrow">
                <img alt="arr" src="/assets/home/arrow1.png" width="100%" />
              </div>
            </div>
            <div className="content_text">
              <h3 className="text_header">
              The Right Fit, Guaranteed
              </h3>
              <p className="text_content">
              Work with your new team member on a trial basis (pay only if satisfied), ensuring you hire the right people for the job.
          
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Main;
