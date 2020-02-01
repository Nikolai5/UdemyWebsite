import React, {Component} from 'react';
import Header from '../Common/Header';
import image from '../assets/images/home.jpg';

class Home extends Component {

    render(){
        return(
            <div>
                <Header
                    title="Welcome to our website!"
                    subtitle="website subtitle"
                    buttonText="More Info"
                    link="/services"
                    showButton={true}
                    image={image}
                />
            </div>
        );
    }
}

export default Home;