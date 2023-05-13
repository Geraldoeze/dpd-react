import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import "./details.css";

const Details = ({ detailNum, onClose }) => {
  const navigate = useNavigate();
  const hireTeam = () => {
    navigate("/team", {replace: true})
  }
  return (
    <>
      {detailNum === 1 && (
         <motion.div
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true, amount: 0.5 }}
         transition={{ duration: 0.5 }}
         variants={{
           hidden: { opacity: 0, x: 50 },
           visible: { opacity: 1, x: 0 },
         }}
        className="detail_cover">
          <div className="detail_icon" onClick={() => onClose(false)}>
            <img alt="icon" src="/assets/home/Vector.png" />
          </div>
          <div className="detail_content">
            <img alt="icon" src="/assets/home/image1.png" width="80%" />
            <h3>Single Sourcing</h3>
            <p>
              Implementing a single sourcing strategy can provide several
              benefits for your business. By using a single source of
              information, you can ensure consistency and accuracy across your
              documents, which can improve your brand image. Additionally, it
              can save time and resources by avoiding redundant work and
              conflicting information. Finally, it can help to ensure that your
              documentation is up-to-date, as you only need to update the
              information in one place.
            </p>
            <button className="detail_btn" onClick={hireTeam}>Hire a Talent</button>
          </div>
        </motion.div>
      )}

      {detailNum === 2 && (
         <motion.div
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true, amount: 0.5 }}
         transition={{ duration: 0.5 }}
         variants={{
           hidden: { opacity: 0, x: 50 },
           visible: { opacity: 1, x: 0 },
         }}
        className="detail_cover">
          <div className="detail_icon" onClick={() => onClose(false)}>
            <img alt="icon" src="/assets/home/Vector.png" />
          </div>
          <div className="detail_content">
            <img alt="icon" src="/assets/home/image2.png" width="80%" />
            <h3>Team Sourcing</h3>
            <p>
              Building a team with diverse skill sets can help you take your
              business to the next level. By leveraging each team member's
              strengths and compensating for each other's weaknesses, you can
              achieve better outcomes. Additionally, team sourcing can help
              ensure that your projects are completed on time and within budget,
              as multiple team members can work simultaneously on different
              aspects of the project. Finally, it can provide greater
              flexibility and adaptability, allowing you to tackle any
              challenges that may arise.
            </p>
            <button className="detail_btn" onClick={hireTeam}>Hire a Talent</button>
          </div>
        </motion.div>
      )}

      {detailNum === 3 && (
         <motion.div
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true, amount: 0.5 }}
         transition={{ duration: 0.5 }}
         variants={{
           hidden: { opacity: 0, x: 50 },
           visible: { opacity: 1, x: 0 },
         }}
         className="detail_cover">
          <div className="detail_icon" onClick={() => onClose(false)}>
            <img alt="icon" src="/assets/home/Vector.png" />
          </div>
          <div className="detail_content">
            <img alt="icon" src="/assets/home/image3.png" width="80%" />
            <h3>Hiring a Consultant</h3>
            <p>
              Engaging a consultant can provide specialized expertise and
              support for your business initiatives. This approach can help you
              gain access to knowledge and experience that you may not have
              in-house. Additionally, it can provide an objective perspective on
              your business operations and help you identify areas for
              improvement. Finally, it can be a cost-effective solution, as you
              can engage
            </p>
            <button className="detail_btn" onClick={hireTeam}>Hire a Consultant</button>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Details;
