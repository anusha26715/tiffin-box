import Outline from "../HomeComponents/Button/Outline";

const Footer = () => {
    return (
        <footer className="footer">
            <div>
                <img src="/logo-img.png" alt="Logo" className="footer-logo" />
            </div>
            <h3 className="footer-heading">subscribe to our news letter</h3>
            <div>
                <input type="email" placeholder="Enter your email" className="footer-input" />
                <Outline text="Subscribe" color="var(--text-color)" />
            </div>
            <div className="contact-info">
                <h6>Contact Us</h6>
                <p>0151 245 1500</p>
                <p>info@tiffinbox.co.uk</p>
                <p>allerton rd, Liverpool l25 7re</p>
            </div>
            <pre className="d-flex flex-wrap">
                <a href="menu-section">menu</a> |  <a href="order-section">order online</a> |  <a href="booking-section">book a table</a> |  <a href="about-section">about us</a> |  <a href="contact-section">contact us</a> 
            </pre>
        </footer>
    )
}

export default Footer;