import React, {Component} from 'react';
import SingleService from './SingleService';

const services = [
    {title: 'E-Commerce', icon: 'fa-shopping-cart', description: 'We offer below average e-commerce solutions for a high price.'}
];

class Services extends Component {
    render(){
        return(
            <section class="page-section" id="services">
                <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-center">
                    <h2 class="section-heading text-uppercase">Services</h2>
                    <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                </div>
                <div class="row text-center">
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