import React, { Component } from 'react';

const text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tristique senectus et netus et malesuada. Nisl vel pretium lectus quam id leo in. Magna ac placerat vestibulum lectus mauris ultrices eros in. Varius quam quisque id diam vel quam. Neque egestas congue quisque egestas. Sit amet volutpat consequat mauris nunc congue nisi vitae. Varius vel pharetra vel turpis nunc eget lorem. Urna id volutpat lacus laoreet non curabitur. In nulla posuere sollicitudin aliquam ultrices sagittis orci a. Vestibulum sed arcu non odio euismod lacinia at. Aliquet nec ullamcorper sit amet risus nullam eget. Eget duis at tellus at. Laoreet suspendisse interdum consectetur libero id faucibus nisl. Pellentesque nec nam aliquam sem et tortor consequat id. Volutpat odio facilisis mauris sit amet massa vitae tortor. Tristique et egestas quis ipsum. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus. Eu ultrices vitae auctor eu augue ut lectus arcu. Quis commodo odio aenean sed adipiscing diam. Tortor aliquam nulla facilisi cras fermentum. Maecenas volutpat blandit aliquam etiam erat."

class AboutPage extends Component {

    render() {
        return(
            <div>
                <div className="AboutPage-heroimage">
                    <h1 className="AboutPage-herotitle">About</h1>
                </div>
                <div className="AboutPage-background">
                    <h1 className="AboutPage-title"> Our Story </h1>
                    <p className="AboutPage-text">{text}</p>
                </div>
            </div>
        );
    };
}

export default AboutPage