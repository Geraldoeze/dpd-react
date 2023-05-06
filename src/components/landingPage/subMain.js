import { useState } from "react";
import "./subMain.css";
import { motion } from "framer-motion";

const SubMain = () => {
  const [value, setValue] = useState(1);
  const changeHandlerPlus = () => {
      if ( value === 3) {
        return setValue(1)
      }
      setValue(prev => prev + 1)
  }
  const changeHandlerMinus = () => {
    if ( value === 1) {
        return setValue(3)
      }
    setValue(prev => prev - 1)
  }

  return (
    <>
      <section className="section_cover">
    <div className="section_handler">
        <div className="section_div">
            <h3>Why Organizations Choose DPD</h3>
            <p>Discover the many ways in which our clients have embraced the benefits of the DPD online.</p>
        </div>
        <div className="section_bg"></div>
        <div className="section_bg"></div>
        <div className="section_bg"></div>

    </div>
      </section>

      <section className="bottom_container">
        <div className="bottom_cover">
          <div className="bottom_header">
            <h3>What our Clients think of us</h3>
            <div className="bottom_icons">
              <div className="line_icons">
                <div className={`${value === 1 ? "activeLine" : "line"}`} />
                <div className={`${value === 2 ? "activeLine" : "line"}`} />
                <div className={`${value === 3 ? "activeLine" : "line"}`} />
              </div>
              <div className="icons">
                <div className="icon_left" onClick={changeHandlerMinus}>
                  <img alt="icon" src="/assets/home/leftArr.png" width="10px" />
                </div>
                <div className="icon_rite" onClick={changeHandlerPlus} >
                  <img
                    alt="icon"
                    src="/assets/home/rightArr.png"
                    width="10px"
                  />
                </div>
              </div>
            </div>
          </div>
          { value === 1 && (
               <motion.div
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, amount: 0.5 }}
               transition={{ duration: 0.5 }}
               variants={{
                 hidden: { opacity: 0, x: 50 },
                 visible: { opacity: 1, x: 0 },
               }}
               className="bottom_text">
              <div className="comma"><img alt="" src="/assets/home/comma.png" width="45px" /></div>
              <div className="texts">
                  <p>"Working with John from ABC Company was an absolute pleasure. His team sourcing approach brought a fresh perspective to our project and helped us achieve our goals on time and within budget. The team's diversity in skills and expertise was invaluable in finding solutions to our challenges. </p>
                  <h3>- Sarah Smith, CEO of XYZ Corporation</h3>
                  
              </div>
          
          </motion.div>
          )}
          { value === 2 && (
             <motion.div
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.5 }}
             transition={{ duration: 0.5 }}
             variants={{
               hidden: { opacity: 0, x: 50 },
               visible: { opacity: 1, x: 0 },
             }}
             className="bottom_text">
            <div className="comma"><img alt="" src="/assets/home/comma.png" width="45px" /></div>
            <div className="texts">
                <p>Number 2 "Working with John from ABC Company was an absolute pleasure. His team sourcing approach brought a fresh perspective to our project and helped us achieve our goals on time and within budget. The team's diversity in skills and expertise was invaluable in finding solutions to our challenges. </p>
                <h3>- Sarah Smith, CEO of XYZ Corporation</h3>
                
            </div>
        
        </motion.div>
          ) }
          { value === 3 && (
             <motion.div
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.5 }}
             transition={{ duration: 0.5 }}
             variants={{
               hidden: { opacity: 0, x: 50 },
               visible: { opacity: 1, x: 0 },
             }}
             className="bottom_text">
            <div className="comma"><img alt="" src="/assets/home/comma.png" width="45px" /></div>
            <div className="texts">
                <p>Number 3"Working with John from ABC Company was an absolute pleasure. His team sourcing approach brought a fresh perspective to our project and helped us achieve our goals on time and within budget. The team's diversity in skills and expertise was invaluable in finding solutions to our challenges. </p>
                <h3>- Sarah Smith, CEO of XYZ Corporation</h3>
                
            </div>
        
        </motion.div>
          ) }
        </div>
      </section>
    </>
  );
};

export default SubMain;
