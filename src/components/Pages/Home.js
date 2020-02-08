import React, {Component} from 'react';
import Header from '../Common/Header';
import image from '../assets/images/home.jpg';

// Re-usable components
import Services from '../Common/Services';

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