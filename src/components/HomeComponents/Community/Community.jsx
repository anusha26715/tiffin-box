import { motion } from "framer-motion";
import "./Community.css";

const Community = () => {
  const headVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section className="community-section">
      <motion.div
        className="head mb-5"
        variants={headVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h6 className="head-title" style={{ color: "var(--yellow-color)" }}>
          instagram
        </h6>
        <h2 className="title heading menu-heading">join our community</h2>
      </motion.div>
      <div className="container community-container">
        <motion.div
          className="row"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3"
            variants={imageVariants}
          >
            <img
              src="/community-img1.png"
              alt="Our Community"
              className="img-fluid community-img"
            />
          </motion.div>
          <motion.div
            className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3"
            variants={imageVariants}
          >
            <img
              src="/community-img2.png"
              alt="Our Community"
              className="img-fluid community-img"
            />
          </motion.div>
          <motion.div
            className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3"
            variants={imageVariants}
          >
            <img
              src="/community-img3.png"
              alt="Our Community"
              className="img-fluid community-img"
            />
          </motion.div>
          <motion.div
            className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3"
            variants={imageVariants}
          >
            <img
              src="/community-img4.png"
              alt="Our Community"
              className="img-fluid community-img"
            />
          </motion.div>
          <motion.div
            className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3 d-lg-none"
            variants={imageVariants}
          >
            <img
              src="/community-img4.png"
              alt="Our Community"
              className="img-fluid community-img"
            />
          </motion.div>
          <motion.div
            className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3 d-lg-none"
            variants={imageVariants}
          >
            <img
              src="/community-img4.png"
              alt="Our Community"
              className="img-fluid community-img"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Community;
