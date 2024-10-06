
const Service = ({ services }) => {

    return (
        <>
            <div className="container">
                <div className="row">
                    {
                        services?.map((service, index) => (
                            <div className="col-lg-3" key={index}>
                                <div className={`service-two_service-cart-wrapper`}>
                                    <img src={service?.image} alt="" />
                                    <div className={`service-two_service-cart-shape ${service?.class}`}>
                                        <div className="service-two_service-icon">
                                            <a href=""> <img src={service?.icon} alt="" /></a>
                                        </div>
                                        <div className="service-two_service-cart-title">
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