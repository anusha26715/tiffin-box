import { motion } from "framer-motion";
import Outline from "../Button/Outline";
import "./Banner.css";

const Banner = () => {
  const leftContentVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.2,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.4,
        ease: "easeOut",
      },
    },
  };

  const bannerImageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const socialIconsVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: 0.6,
        ease: "easeOut",
      },
    },
  };

  const iconHoverVariants = {
    hover: {
      scale: 1.2,
      rotate: 10,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="banner-section">
      <div className="container">
        <div className="row">
          <motion.div
            className="col-12 col-md-6"
            variants={leftContentVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.img
              src="/logo-img.png"
              alt="logo"
              className="img-fluid"
              variants={logoVariants}
              initial="hidden"
              animate="visible"
            />
            <motion.h1
              className="title"
              variants={titleVariants}
              initial="hidden"
              animate="visible"
            >
              authentic south indian cuisine
            </motion.h1>
            <motion.div
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
            >
              <Outline text="Order Now" color="var(--text-color)" />
            </motion.div>
          </motion.div>

          <motion.div
            className="col-12 col-md-6 d-flex justify-content-center align-items-center mt-5 mt-lg-0"
            variants={bannerImageVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.img
              src="/banner-img.png"
              alt="Banner"
              className="img-fluid banner-img"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </div>

      <motion.div
        className="social-media-icons"
        variants={socialIconsVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.i
          className="bi bi-instagram"
          variants={iconHoverVariants}
          whileHover="hover"
        ></motion.i>
        <motion.i
          className="bi bi-facebook"
          variants={iconHoverVariants}
          whileHover="hover"
        ></motion.i>
        <motion.i
          className="bi bi-twitter"
          variants={iconHoverVariants}
          whileHover="hover"
        ></motion.i>
      </motion.div>
    </section>
  );
};

export default Banner;
