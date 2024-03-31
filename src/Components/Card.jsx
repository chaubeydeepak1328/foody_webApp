import React from "react";

const Card = (props) => {
    return (
        <>
            <div className="item1 col-12 col-md-6 col-lg-6 col-xl-3 my-3 mx-2 " style={{boxShadow:'2px 2px 10px grey'}}>
                <div className="row item-inside">
                    {/* for images */}
                    <div className="col-12 col-md-12 col-lg-12 img-div mt-1 ">
                        <img src={props.image} alt="" className="img-fluid" />
                    </div>
                    {/* menu item description */}
                    <div className="col-12 col-md-12 col-lg-8">
                        <div className="main-title pt-4 pb-3">
                            <h1 style={{fontSize:'1.2rem'}}>{props.name}</h1>
                            <p style={{fontSize:'1rem'}}>{props.category}</p>
                        </div>
                        <div className="menu-price-book">
                            <div className="price-book-divide d-flex justify-content-between ">
                                <h2 style={{fontSize:'1.2rem'}}>Price :{props.price}</h2>
                                <a href="..."><button className="btn btn-primary">Buy Now</button></a>
                            </div>
                            <p>{props.description}</p>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}



export default Card;