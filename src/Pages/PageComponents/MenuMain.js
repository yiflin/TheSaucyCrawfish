import React from 'react';

const MenuMain = () => {
    return(
        <div>
        <div className="MenuPage-category">
            <h3 className="MenuPage-itemtitle"> 1. Pick Your Catch:</h3>
            <div className="MenuPage-items"> 
                <p>Blue Crab</p>
                <p>Snow Crab Legs</p>
                <p>Southern King Crab Legs</p>
                <p>Crawfish(seasonal)</p>
                <p>Shrimp</p>
                <p>Clams</p>
                <p>Calamari</p>
            </div>
            <div className="MenuPage-items"> 
                <p>Dungeness Crab</p>
                <p>King Crab Legs</p>
                <p>Lobster</p>
                <p>Crawfish(frozen)</p>
                <p>Oysters</p>
                <p>Mussels</p>
            </div>
        </div>

        <div className="MenuPage-category">
            <h3 className="MenuPage-itemtitle"> 2. Choose Your Sauce:</h3>
            <div className="MenuPage-items"> 
                <p>Rajun Cajun</p>
                <p>Lemon Pepper</p> 
                <p>The Saucy SHA-BANG</p>
                <p>Garlic Sauce</p>
            </div>
        </div>

        <div className="MenuPage-category">
            <h3 className="MenuPage-itemtitle"> 3. How Hot:</h3>
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
