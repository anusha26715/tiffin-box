import { motion } from "framer-motion";
import Outline from "../../HomeComponents/Button/Outline";
import "./Location.css";

const Location = () => {
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
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
      transition: { duration: 0.6, delay: 0.1, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.3, ease: "easeOut" },
    },
  };

  return (
    <section className="location-section">
      <div className="container location-container">
        <div className="row">
          <motion.div
            className="col-12  col-lg-6"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h6
              className="head-title"
              style={{ color: "var(--yellow-color)" }}
              variants={titleVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              our locations
            </motion.h6>
            <motion.h2
              className="title heading menu-heading"
              variants={titleVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              find us at these convenient locations
            </motion.h2>
            <motion.div
              variants={buttonVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Outline text="Our Store" color="var(--text-color)" />
            </motion.div>
          </motion.div>
          <motion.div
            className="col-12 col-lg-6 text-center mt-4 mt-lg-0"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <img
              src="/location.png"
              alt="Our Locations"
              className="img-fluid location-img"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;
