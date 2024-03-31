import React from "react";

const CartMenu = ({filterItem,CartItems}) => {
    return (
        <>
            <div className="menu-tab d-flex justify-content-around">
                {CartItems.map((curElm, index) => {
                    return <button className="btn btn-warning" onClick={() => filterItem(curElm)}>{curElm}</button>
                })}
            </div>
        </>
    )
}

export default CartMenu;