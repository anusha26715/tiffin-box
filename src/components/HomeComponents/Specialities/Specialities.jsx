import CustomContent from '../Content'
import './Specialities.css'

const Specialities = () => {

    const rightSpecialities = [
        {
            id: 1,
            title: "comfortable dining experience",
            description: "Our restaurant offers a warm and welcoming ambiance for a relaxed and enjoyable dining experience.",
        },
        {
            id: 2,
            title: "health conscious options",
            description: "From vegetarian to gluten-free dishes, we provide healthy options without compromising on flavor.",
        },
        {
            id: 3,
            title: "seamless online ordering and delivery",
            description: "Enjoy your favorite dishes at home with our easy online ordering and fast delivery service.",
        }
    ];

    const leftSpecialities = [
        {
            id: 4,
            title: "authentic south indian cuisine",
            description: "Our dishes are prepared using traditional recipes to bring you the true flavors of South India.",
        },
        {
            id: 5,
            title: "Expert Chefs",
            description: "Our chefs have years of experience crafting exquisite South Indian dishes, ensuring every bite is a delight.",
        },         
        {
            id: 6,  
            title: "fresh, quality ingredients",
            description: "We use only the finest, fresh ingredients to ensure the highest quality and authentic taste in every meal.",
        }
    ];

    return (
        <section className="specialities-section">
           <div className="head mb-5">
                <h6 className="head-title" style={{ color: "var(--yellow-color)" }}>why tiffin box?</h6>
                <h2 className="title heading menu-heading">our specialities</h2>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4 mb-4">
                        <CustomContent specialities={leftSpecialities} side="left" />
                    </div>
                    <div className="col-12 col-md-4 mb-4 speciality-center-text">
                        <img src="/specialities-img.png" alt="Speciality" className="img-fluid mb-3" />
                        <div className="speciality-mark">
                            <i className="bi bi-box-seam"></i>
                            <h5 className="sub-title m-0"  style={{ color: "white" }}>Our Specialities</h5>
                        </div>
                        
                    </div>
                    <div className="col-12 col-md-4 mb-4">
                        <CustomContent specialities={rightSpecialities} side="right" />
                    </div>
                </div>
            </div>
            <div className="text-center mt-4">
                <img src="/spoon-img.png" alt="Spoon" className="spoon-img" />
            </div>
        </section>
    )
}

export default Specialities