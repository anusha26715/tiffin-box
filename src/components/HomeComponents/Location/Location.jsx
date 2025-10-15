import Outline from '../../HomeComponents/Button/Outline'
import './Location.css'
const Location = () => {
    return (
        <section className="location-section">
            <div className="container location-container">
                <div className="row">
                    <div className="col-12  col-lg-6">
                        <h6 className="head-title" style={{ color: "var(--yellow-color)" }}>our locations</h6>
                        <h2 className="title heading menu-heading">find us at these convenient locations</h2>
                        <Outline text="Our Store" color="var(--text-color)" />
                    </div>
                    <div className="col-12 col-lg-6 text-center mt-4 mt-lg-0">
                        <img src="/location.png" alt="Our Locations" className="img-fluid location-img" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Location;