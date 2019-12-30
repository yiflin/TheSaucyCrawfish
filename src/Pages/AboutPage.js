import React, { Component } from 'react';
import Picture1 from '../Images/table.jpg';

const text1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suscipit adipiscing bibendum est ultricies integer quis auctor elit. Odio ut sem nulla pharetra. Pharetra sit amet aliquam id. Bibendum ut tristique et egestas quis ipsum suspendisse. Neque ornare aenean euismod elementum nisi. Tortor at auctor urna nunc id cursus metus. Lacus vel facilisis volutpat est velit egestas dui. Quis enim lobortis scelerisque fermentum dui. Duis at tellus at urna. Augue eget arcu dictum varius duis at consectetur lorem. Adipiscing tristique risus nec feugiat in fermentum. Felis bibendum ut tristique et. Elementum facilisis leo vel fringilla est ullamcorper eget nulla."

const text2="Nulla posuere sollicitudin aliquam ultrices sagittis orci a. Purus non enim praesent elementum facilisis leo. Etiam sit amet nisl purus in mollis. Condimentum id venenatis a condimentum vitae sapien. Sagittis eu volutpat odio facilisis mauris sit. Turpis cursus in hac habitasse platea dictumst quisque sagittis purus. Magna fermentum iaculis eu non diam phasellus vestibulum lorem sed. Turpis massa sed elementum tempus egestas sed. Arcu ac tortor dignissim convallis aenean et tortor at. Sodales neque sodales ut etiam sit amet nisl. Blandit libero volutpat sed cras ornare arcu dui vivamus arcu."

const text3="Pellentesque sit amet porttitor eget. Est ullamcorper eget nulla facilisi etiam dignissim. Vestibulum rhoncus est pellentesque elit ullamcorper. Tincidunt vitae semper quis lectus nulla at. Sem et tortor consequat id porta nibh. Ultrices sagittis orci a scelerisque purus semper eget duis. Quis viverra nibh cras pulvinar mattis. Adipiscing enim eu turpis egestas. Feugiat in ante metus dictum at tempor commodo ullamcorper. Amet consectetur adipiscing elit duis."

const text4="Turpis egestas pretium aenean pharetra magna. Eget felis eget nunc lobortis mattis aliquam faucibus purus in. Ac turpis egestas sed tempus urna et pharetra pharetra massa. Vitae proin sagittis nisl rhoncus mattis. In fermentum et sollicitudin ac orci phasellus egestas tellus. Varius morbi enim nunc faucibus a pellentesque sit. Ullamcorper eget nulla facilisi etiam dignissim. Congue eu consequat ac felis donec et odio pellentesque diam. Felis eget nunc lobortis mattis aliquam faucibus purus in massa. Sagittis purus sit amet volutpat consequat mauris nunc. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula. Posuere ac ut consequat semper viverra nam libero. Tincidunt arcu non sodales neque sodales."

const text5="Leo in vitae turpis massa. Sed faucibus turpis in eu. Non sodales neque sodales ut etiam sit. Odio tempor orci dapibus ultrices in iaculis nunc sed. Egestas egestas fringilla phasellus faucibus scelerisque. Urna id volutpat lacus laoreet. Non diam phasellus vestibulum lorem. Neque convallis a cras semper auctor neque vitae. Cursus risus at ultrices mi tempus imperdiet. Non pulvinar neque laoreet suspendisse. Netus et malesuada fames ac turpis. Elementum integer enim neque volutpat. Diam maecenas ultricies mi eget mauris pharetra. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Pellentesque dignissim enim sit amet venenatis urna. Vel facilisis volutpat est velit egestas dui. Sed augue lacus viverra vitae congue eu consequat ac."

class AboutPage extends Component {

    render() {
        return(
            <div>
                <div className="AboutPage-heroimage">
                    <h1 className="AboutPage-herotitle">About</h1>
                </div>
                <div className="AboutPage-background">
                    <div>
                        <div className="AboutPage-title"> Welcome to The Saucy Crawfish</div>
                        <img className="AboutPage-pictureleft" src={Picture1} alt="pic1"/>
                        <p className="AboutPage-text">{text1}</p><br/>
                        <p className="AboutPage-text">{text2}</p><br/>
                        <p className="AboutPage-text">{text3}</p><br/>
                        <img className="AboutPage-pictureright" src={Picture1} alt="pic1"/>
                        <p className="AboutPage-text">{text4}</p><br/>
                        <p className="AboutPage-text">{text5}</p><br/>
                    </div>
                    <br/><br/>
                </div>
            </div>
        );
    };
}

export default AboutPage