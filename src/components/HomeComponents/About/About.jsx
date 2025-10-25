import { motion } from "framer-motion";
import Outline from "../../HomeComponents/Button/Outline";
import "./About.css";

const About = () => {
  let abtClr = {
    color: "var(--text-color)",
    backgroundColor: "var(--transparent-black)",
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.2, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section className="about-section">
      <div className="container">
        <div className="row">
          <motion.div
            className="col-12 col-md-6 p-0 m-0"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <img
              src="/about-img.png"
              alt="About Us"
              className="img-fluid w-100 h-100 object-fit-cover"
            />
          </motion.div>
          <motion.div
            className="col-12 col-md-6 m-0 about-text"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h6
              className="head-title"
              variants={titleVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              about us
            </motion.h6>
            <motion.h2
              className="title heading"
              variants={titleVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              experience authentic south indian flavours at the tiffin box
            </motion.h2>
            <motion.div
              variants={buttonVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Outline text="Know More" color={abtClr} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
