import React, {Component} from 'react';
import SingleService from './SingleService';

const services = [
    {title: 'E-Commerce', icon: 'fa-shopping-cart', description: 'We offer below average e-commerce solutions for a high price.'},
    {title: 'Responsive Design', icon: 'fa-laptop', description: 'The only point with your interaction with us you will encoutner good design'},
    {title: 'Web Security', icon: 'fa-lock', description: 'Incorporating the latest security technologies such as passwords.'}
];

class Services extends Component {
    render(){
        return(
            <section className="page-section" id="services">
                <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                    <h2 className="section-heading text-uppercase">Services</h2>
                    <h3 className="section-subheading text-muted">Here are the mediocre services that we offer.</h3>
                    </div>
                </div>
                <div className="row text-center">
                    {services.map((service, index) => {
                        return <SingleService {...service} key={index} />
                    })}
                </div>
                </div>
            </section>
        );
    }
}

export default Services;