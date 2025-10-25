import { motion } from "framer-motion";
import CustomSwiper from "../CustomSwiper";
import Outline from "../../HomeComponents/Button/Outline";
import "./Menu.css";

const Menu = () => {
  const menuDishes = [
    {
      id: 1,
      name: "Chicken Tandoori",
      image: "/dish-img.webp",
      price: "$12.99",
    },
    {
      id: 2,
      name: "Chicken Tandoori",
      image: "/dish-img.webp",
      price: "$12.99",
    },
    {
      id: 3,
      name: "Chicken Tandoori",
      image: "/dish-img.webp",
      price: "$12.99",
    },
    {
      id: 4,
      name: "Chicken Tandoori",
      image: "/dish-img.webp",
      price: "$12.99",
    },
    {
      id: 5,
      name: "Chicken Tandoori",
      image: "/dish-img.webp",
      price: "$12.99",
    },
    {
      id: 6,
      name: "Chicken Tandoori",
      image: "/dish-img.webp",
      price: "$12.99",
    },
    {
      id: 7,
      name: "Chicken Tandoori",
      image: "/dish-img.webp",
      price: "$12.99",
    },
    {
      id: 8,
      name: "Chicken Tandoori",
      image: "/dish-img.webp",
      price: "$12.99",
    },
  ];

  const headVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.2, ease: "easeOut" },
    },
  };

  return (
    <section className="menu-section">
      <motion.div
        className="head mb-5"
        variants={headVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h6 className="head-title" style={{ color: "var(--yellow-color)" }}>
          featured menu
        </h6>
        <h2 className="title heading menu-heading">
          discover our most popular dishes
        </h2>
      </motion.div>
      <motion.div
        className="menu-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <CustomSwiper slideItems={menuDishes} category="menu" />
      </motion.div>
      <motion.div
        className="text-center mt-4"
        variants={buttonVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Outline text="View Full Menu" color="var(--text-color)" />
      </motion.div>
    </section>
  );
};
export default Menu;
