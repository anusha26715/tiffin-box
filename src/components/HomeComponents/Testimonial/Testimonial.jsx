import CustomSwiper from '../CustomSwiper';
import './Testimonial.css'
const Testimonial = () => {

    const testimonialsList = [
        {
            id: 1,
            text: "This is the best service I have ever used!Bavette delivers an unforgettable steak experience! The food, service, and ambiance are second to none. We will definitely be coming back We booked private dining for our anniversary.",
            author: "John Doe",
            image: "/testimonial.webp",
            timestamp: "one day ago"
        },
        {
            id: 2,
            text: "Amazing food and great delivery!Bavette delivers an unforgettable steak experience! The food, service, and ambiance are second to none. We will definitely be coming back We booked private dining for our anniversary.",
            author: "Jane Smith",
            image: "/testimonial.webp",
            timestamp: "two days ago"
        },
        {
            id: 3,
            text: "I love the variety of dishes available.Bavette delivers an unforgettable steak experience! The food, service, and ambiance are second to none. We will definitely be coming back We booked private dining for ourselves.",
            author: "Sam Wilson",
            image: "/testimonial.webp",
            timestamp: "three days ago"
        },
        {
            id: 4,
            text: "The delivery was quick and the food was still hot!Bavette delivers an unforgettable steak experience! The food, service, and ambiance are second to none. We will definitely be coming back We booked private dining for our anniversary.",
            author: "Emily Davis",
            image: "/testimonial.webp",
            timestamp: "four days ago"
        },
        {
            id: 5,
            text: "The customer service was excellent!Bavette delivers an unforgettable steak experience! The food, service, and ambiance are second to none. We will definitely be coming back We booked private dining for our anniversary.",
            author: "Michael Brown",
            image: "/testimonial.webp",
            timestamp: "five days ago"
        },
        {
            id: 6,
            text: "I highly recommend this service to anyone looking for delicious food!Bavette delivers an unforgettable steak experience! The food, service, and ambiance are second to none. We will definitely be coming back We booked private dining for our anniversary.",
            author: "Sarah Connor",
            image: "/testimonial.webp",
            timestamp: "six days ago"
        }
    ];
    return(
        <section className="testimonial-section">
            <div className="head mb-5">
                <h6 className="head-title" style={{ color: "var(--yellow-color)" }}>testimonial</h6>
                <h2 className="title heading menu-heading">What Our Customers Says</h2>
            </div>
            <CustomSwiper slideItems={testimonialsList} category="testimonial"/>
            
        </section>
    )
}


export default Testimonial;