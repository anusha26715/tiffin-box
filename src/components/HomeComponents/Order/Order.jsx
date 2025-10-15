import Outline from '../../HomeComponents/Button/Outline'
import './Order.css'
const Order = () => {
    return (
        <section className="order-section">
            <div className="container order-container">
                <div className="row">
                    <div className="col-12  col-lg-6">
                        <h6 className="head-title" style={{ color: "var(--yellow-color)" }}>online order</h6>
                        <h2 className="title heading menu-heading">fresh south indian flavours delivered!</h2>
                        <p className="order-text">
                            Craving your favorite South Indian dishes? Enjoy the rich, authentic flavors of The Tiffin Box from the comfort of your home. Order online for a quick and easy delivery straight to your doorstep. Our dishes are prepared fresh and delivered fast, ensuring a delicious experience every time
                        </p>
                        <Outline text="Order Online" color="var(--text-color)" />
                    </div>
                    <div className="col-12 col-lg-6 order-img-container">
                        <img src="/tiffin-box-img.png" alt="Order Online" className="order-img" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Order;