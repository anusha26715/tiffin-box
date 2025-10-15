import Outline from '../../HomeComponents/Button/Outline';
import './About.css'
const About = () => {
    return(
        <section className="about-section">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 p-0 m-0">
                        <img src="/about-img.png" alt="About Us" className="img-fluid w-100 h-100 object-fit-cover" />
                    </div>
                    <div className="col-12 col-md-6 m-0 about-text">
                        <h6 className="head-title">about us</h6>
                        <h2 className="title heading">experience authentic south indian flavours at the tiffin box</h2>
                        <div>
                            <Outline text="Know More" color="var(--black-color)" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;