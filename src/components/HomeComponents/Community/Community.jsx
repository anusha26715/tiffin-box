import './Community.css'

const Community = () => {
    return (
        <section className="community-section">
            <div className="head mb-5">
                <h6 className="head-title" style={{ color: "var(--yellow-color)" }}>instagram</h6>
                <h2 className="title heading menu-heading">join our community</h2>
            </div>
            <div className="container community-container">
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
                        <img src="/community-img1.png" alt="Our Community" className="img-fluid community-img" />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
                        <img src="/community-img2.png" alt="Our Community" className="img-fluid community-img" />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
                        <img src="/community-img3.png" alt="Our Community" className="img-fluid community-img" />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
                        <img src="/community-img4.png" alt="Our Community" className="img-fluid community-img" />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3 d-lg-none">
                        <img src="/community-img4.png" alt="Our Community" className="img-fluid community-img" />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3 d-lg-none">
                        <img src="/community-img4.png" alt="Our Community" className="img-fluid community-img" />
                    </div>  
                </div>
            </div>
        </section>
    )
}

export default Community;