import React, {Component} from 'react';

class Portfolio extends Component {
    render(){
        return(
            <section className="bg-light page-section" id="portfolio">
                <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                    <h2 className="section-heading text-uppercase">Portfolio</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-sm-6 portfolio-item">
                    <Link className="portfolio-link" data-toggle="modal" to="#portfolioModal1">
                        <div className="portfolio-hover">
                        <div className="portfolio-hover-content">
                            <i className="fas fa-plus fa-3x"></i>
                        </div>
                        </div>
                        <img className="img-fluid" src="img/portfolio/01-thumbnail.jpg" alt="" />
                    </Link>
                    <div className="portfolio-caption">
                        <h4>Threads</h4>
                        <p className="text-muted">Illustration</p>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        );
    }
}

export default Portfolio;