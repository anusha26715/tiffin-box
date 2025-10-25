import { motion } from "framer-motion";
import "./Chef.css";

const Chef = () => {
  const headVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
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

  return (
    <section className="chef-section">
      <motion.div
        className="head mb-5"
        variants={headVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h6 className="head-title" style={{ color: "var(--yellow-color)" }}>
          chef
        </h6>
        <h2 className="title heading menu-heading">our brand chef</h2>
      </motion.div>
      <div className="container">
        <div className="row">
          <motion.div
            className="col-12 col-md-6 p-0 m-0 chef-img-container"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <img
              src="/chef-img.png"
              alt="Chef"
              className="img-fluid w-100 h-100 object-fit-cover"
            />
            <img
              className="chef-name"
              src="/chef-name-img.png"
              alt="Chef Name"
            />
          </motion.div>
          <motion.div
            className="col-12 col-md-6 m-0 chef-text"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h4
              variants={titleVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              CHEF JOMON
            </motion.h4>
            <motion.h6
              variants={titleVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              Senior chef at tiffin box
            </motion.h6>
            <motion.p
              className="chef-context"
              variants={titleVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              Craving your favorite South Indian dishes? Enjoy the rich,
              authentic flavors of The Tiffin Box from the comfort of your home.
              Order online for a quick and easy delivery straight to your
              doorstep. Our dishes are prepared fresh and delivered fast,
              ensuring a delicious experience every time.
            </motion.p>
            <motion.p
              className="chef-context"
              variants={titleVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              Craving your favorite South Indian dishes? Enjoy the rich,
              authentic flavors of The Tiffin Box from the comfort of your home.
              Order online for a quick and easy delivery straight to your
              doorstep. Our dishes are prepared fresh and delivered fast,
              ensuring a delicious experience every time.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Chef;
