import React from 'react';

const Footer = () => {
    return(
        <div className="Footer-background">
            <div className="Footer-container">
                <div className="Footer-title"> Contact Us </div>
                <p className="Footer-info">
                    <p className="Footer-colorinfo">Phone:</p> (813) 961-1711
                </p>
                <p className="Footer-info">
                    <p className="Footer-colorinfo">Email:</p> someemail@gmail.com
                </p>
            </div>
            <div className="Footer-container">
                <div className="Footer-title"> Location </div>
                <p className="Footer-info">
                    <p className="Footer-colorinfo">Adress:</p>
                </p>
                <p className="Footer-info">11921 N Dale Mabry Hwy</p>
                <p className="Footer-info">Tampa, Fl 33618</p>
            </div>
            <div className="Footer-container">
                <div className="Footer-title"> Hours </div>
                <p className="Footer-info"> 
                    <p className="Footer-colorinfo">Mon-Thu:</p> 11:00am-10:00pm
                </p>
                <p className="Footer-info">
                    <p className="Footer-colorinfo">Fri-Sat:</p> 11:00am-11:00pm
                </p>
                <p className="Footer-info">
                    <p className="Footer-colorinfo">Sun:</p> 11:30am-10:00pm
                </p>
            </div>
            <br/><br/>
        </div>
    )
}

export default Footer;
