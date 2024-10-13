
const Service = ({ services }) => {

    return (
        <>
            <div className="container">
                <div className="row">
                    {
                        services?.map((service, index) => (
                            <div className="col-lg-3 col-md-6" key={index}>
                                <div className={`service-cart-wrapper`}>
                                    <img src={service?.image} alt="" />
                                    <div className={`service-cart-shape ${service?.class}`}>
                                        <div className="service-icon">
                                            <a href=""> <img src={service?.icon} alt="" /></a>
                                        </div>
                                        <div className="service-cart-title">
                                            <h4>{service?.title}</h4>
                                            <p>{service?.dsc}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>

        </>
    );
};

export default Service;