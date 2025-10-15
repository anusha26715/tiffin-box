import Outline from '../../HomeComponents/Button/Outline';
import './Banner.css';

const Banner = () => {
    return (
        <section className="banner-section">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <img src="/logo-img.png" alt="logo" className="img-fluid" />
                        <h1 className="title">authentic south indian cuisine</h1>
                        <Outline text = "Order Now" color="var(--text-color)" />
                    </div>
                    <div className="col-12 col-md-6 d-flex justify-content-center align-items-center mt-5 mt-lg-0">
                        <img src="/banner-img.png" alt="Banner" className="img-fluid banner-img" />
                    </div>
                </div>
            </div>
            <div className="social-media-icons">
                <i className="bi bi-instagram"></i>
                <i className="bi bi-facebook"></i>
                <i className="bi bi-twitter"></i>
            </div>
        </section>
    )
}

export default Banner;