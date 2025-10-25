import { motion } from "framer-motion";
import Outline from "../../HomeComponents/Button/Outline";
import "./Booking.css";

const Booking = () => {
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
    <section className="booking-section">
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
              src="/booking-img.png"
              alt="Booking"
              className="img-fluid w-100 h-100 object-fit-cover"
            />
          </motion.div>
          <motion.div
            className="col-12 col-md-6 m-0 booking-text"
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
              Book table
            </motion.h6>
            <motion.h2
              className="title heading"
              variants={titleVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              planning a meal at the tiffin box?
            </motion.h2>
            <motion.p
              className="booking-context"
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
            <motion.div
              variants={buttonVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Outline text="Book Table" color="var(--text-color)" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
