import React, { useState } from "react";
import Items from "./Items";
import Card from "./Card";
import CartMenu from "./CartMenu";

const allCatValues = [...new Set(Items.map((curElem) => {
    return curElem.category;
})), "All"];
console.log(allCatValues);

const Menu = () => {

    const [item, setitem] = useState(Items);
    const [CartItems, setCartItems] = useState(allCatValues);

    const filterItem = (catitem) => {
        if (catitem === "All") {
            setitem(Items);
        }
        else {
            const updatedItems = Items;
            setitem(updatedItems.filter((curVal, index) => {
                return curVal.category === catitem;
            }))
        }
    }
    return (
        <>
            <h1 className="mt-5 text-center">Order YOut Favourite Dish </h1>
            <hr />

            <div className="menu-tabls container row flex-wrap ">
                <CartMenu filterItem={filterItem} CartItems={CartItems} />
            </div>

            {/* My main item section */}
            <div className="menu-item container  mt-5">
                <div className="row">
                    <div className="col-12 ">
                        <div className="row my-5 container d-flex justify-content-center ">
                            {item.map((curElm, index) => {
                                return <Card key={index} id={curElm.id} name={curElm.name} category={curElm.category} price={curElm.price} description={curElm.description} image={curElm.image} />
                            })}

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu;