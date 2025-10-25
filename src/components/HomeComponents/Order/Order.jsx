import { motion } from "framer-motion";
import Outline from "../../HomeComponents/Button/Outline";
import "./Order.css";

const Order = () => {
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
    <section className="order-section">
      <div className="container order-container">
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
              online order
            </motion.h6>
            <motion.h2
              className="title heading menu-heading"
              variants={titleVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              fresh south indian flavours delivered!
            </motion.h2>
            <motion.p
              className="order-text"
              variants={titleVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              Craving your favorite South Indian dishes? Enjoy the rich,
              authentic flavors of The Tiffin Box from the comfort of your home.
              Order online for a quick and easy delivery straight to your
              doorstep. Our dishes are prepared fresh and delivered fast,
              ensuring a delicious experience every time
            </motion.p>
            <motion.div
              variants={buttonVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Outline text="Order Online" color="var(--text-color)" />
            </motion.div>
          </motion.div>
          <motion.div
            className="col-12 col-lg-6 order-img-container"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <img
              src="/tiffin-box-img.png"
              alt="Order Online"
              className="order-img"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Order;
