import React from 'react';

const MenuMain = () => {
    return(
        <div>
            <br/>
            <h3 className="MenuPage-itemtitle"> Wings:</h3>
            <div className="MenuPage-category">
                <h3 className="MenuPage-itemtitle"> 1. Breading:</h3>
                <div className="MenuPage-items"> 
                    <p>Breaded</p>
                    <p>No Bread</p>
                </div>
            </div>

            <div className="MenuPage-category">
                <h3 className="MenuPage-itemtitle"> 2. Sauce:</h3>
                <div className="MenuPage-items"> 
                    <p>Lemon Pepper</p>
                    <p>Cajun</p> 
                    <p>Honey Garlic</p>
                    <p>Habanero</p>
                </div>
            </div>

            <div className="MenuPage-category">
                <h3 className="MenuPage-itemtitle"> 3. Spice:</h3>
                <div className="MenuPage-items"> 
                    <p>Plain</p>
                    <p>Med</p>
                    <p>Mild</p>
                    <p>XTRA SPICY</p>
                </div>
            </div>
            
        </div>
    )
}

export default MenuMain;
