import React, { Component } from 'react';
import Wings from '../Images/lemonwing.jpg'
import Table from '../Images/table.jpg'
import MenuMain from './PageComponents/MenuMain'
import MenuFried from './PageComponents/MenuFried'
import MenuExtra from './PageComponents/MenuExtra'

class MenuPage extends Component {

    render() {
        return(
            <div>
                <div className="MenuPage-heroimage">
                    <h1 className="MenuPage-herotitle">Menu</h1>
                </div>
                <div className="MenuPage-background">
                    <div className="MenuPage-component">
                        <h1 className="MenuPage-title">Today's Catch</h1>
                        <MenuMain/>
                    </div>
                    <div className="MenuPage-component">
                        <MenuFried/>
                        <img className="MenuPage-rightpicture" src={Wings} alt="wings"/>
                    </div>
                    <div className="MenuPage-component">
                        <img className="MenuPage-leftpicture" src={Table} alt="table"/>
                        <MenuExtra/>
                        
                    </div>
                </div>
            </div>
        );
    };
}

export default MenuPage