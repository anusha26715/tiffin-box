import Outline from "../HomeComponents/Button/Outline";

const Footer = () => {
    return (
        <footer className="footer" id="contactSection">
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
                <a href="#menuSection">menu</a> |  <a href="#orderSection">order online</a> |  <a href="#bookingSection">book a table</a> |  <a href="#aboutSection">about us</a> |  <a href="#contactSection">contact us</a> 
            </pre>
        </footer>
    )
}

export default Footer;