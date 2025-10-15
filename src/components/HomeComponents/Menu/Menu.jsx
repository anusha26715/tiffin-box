import CustomSwiper from '../CustomSwiper';
import Outline from '../../HomeComponents/Button/Outline';
import "./Menu.css"

const Menu = () => {

    const menuDishes = [
        {
            id: 1,
            name:"Chicken Tandoori",
            image:"/dish-img.webp",
            price: "$12.99"
        },
         {
            id: 2,
            name:"Chicken Tandoori",
            image:"/dish-img.webp",
            price: "$12.99"
        },
         {
            id: 3,
            name:"Chicken Tandoori",
            image:"/dish-img.webp",
            price: "$12.99"
        },
         {
            id: 4,
            name:"Chicken Tandoori",
            image:"/dish-img.webp",
            price: "$12.99"
        },
         {
            id: 5,
            name:"Chicken Tandoori",
            image:"/dish-img.webp",
            price: "$12.99"
        },
        {
            id: 6,
            name:"Chicken Tandoori",
            image:"/dish-img.webp",
            price: "$12.99"
        },
        {
            id: 7,
            name:"Chicken Tandoori",
            image:"/dish-img.webp",
            price: "$12.99"
        },
        {
            id: 8,
            name:"Chicken Tandoori",
            image:"/dish-img.webp",
            price: "$12.99"
        }
    ]

    return (
        <section className="menu-section">
            <div className="head mb-5">
                <h6 className="head-title" style={{ color: "var(--yellow-color)" }}>featured menu</h6>
                <h2 className="title heading menu-heading">discover our most popular dishes</h2>
            </div>
            <div className="menu-container">
                <CustomSwiper slideItems={menuDishes} category="menu" />
            </div>
            <div className="text-center mt-4">
                <Outline text="View Full Menu" color="var(--text-color)" />
            </div>
        </section>
    )
}
export default Menu;