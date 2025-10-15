import Outline from '../../HomeComponents/Button/Outline';
import './Booking.css'
const Booking = () => {
    return(
        <section className="booking-section">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 p-0 m-0">
                        <img src="/booking-img.png" alt="Booking" className="img-fluid w-100 h-100 object-fit-cover" />
                    </div>
                    <div className="col-12 col-md-6 m-0 booking-text">
                        <h6 className="head-title" style={{color: "var(--yellow-color)"}}>Book table</h6>
                        <h2 className="title heading">planning a meal at the tiffin box?</h2>
                        <p className="booking-context">
                            Craving your favorite South Indian dishes? Enjoy the rich, authentic flavors of The Tiffin Box from the comfort of your home. Order online for a quick and easy delivery straight to your doorstep. Our dishes are prepared fresh and delivered fast, ensuring a delicious experience every time.
                        </p>
                        <div>
                            <Outline text="Book Table" color="var(--text-color)" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Booking;