import './Chef.css'
const Chef = () => {
    return(
        <section className="chef-section">
            <div className="head mb-5">
                <h6 className="head-title" style={{ color: "var(--yellow-color)" }}>chef</h6>
                <h2 className="title heading menu-heading">our brand chef</h2>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 p-0 m-0 chef-img-container">
                        <img src="/chef-img.png" alt="Chef" className="img-fluid w-100 h-100 object-fit-cover" />
                        <img className="chef-name" src="/chef-name-img.png" alt="Chef Name" />
                    </div>
                    <div className="col-12 col-md-6 m-0 chef-text">
                        <h4>CHEF JOMON</h4>
                        <h6 className="">Senior chef at tiffin box</h6>
                        <p className="chef-context">
                            Craving your favorite South Indian dishes? Enjoy the rich, authentic flavors of The Tiffin Box from the comfort of your home. Order online for a quick and easy delivery straight to your doorstep. Our dishes are prepared fresh and delivered fast, ensuring a delicious experience every time.
                        </p>
                        <p className="chef-context">
                            Craving your favorite South Indian dishes? Enjoy the rich, authentic flavors of The Tiffin Box from the comfort of your home. Order online for a quick and easy delivery straight to your doorstep. Our dishes are prepared fresh and delivered fast, ensuring a delicious experience every time.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Chef;