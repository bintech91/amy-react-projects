import React, { Component } from 'react'
import ServiceItem from '../layout/ServiceItem'
import PropTypes from 'prop-types';


export class Services extends Component {
    render() {
        const services = [
            {   id: '1',
                icon: 'account_balance_wallet',
                serviceName: 'Accounting service',
                content: 'Now is the winter of our discontent Made glorious summer by this sun of York'
            },
            {
                id: '2',    
                icon: 'drafts',
                serviceName: 'Document management',
                content: 'Now is the winter of our discontent Made glorious summer by this sun of York'
            },
            {
                id: '3',
                icon: 'hearing',
                serviceName: 'Client support',
                content: 'Now is the winter of our discontent Made glorious summer by this sun of York'
            },
            {
                id: '4',
                icon: 'show_chart',
                serviceName: 'Finance analysis',
                content: 'Now is the winter of our discontent Made glorious summer by this sun of York'
            }
        ]

        const serviceItem = services.map(service => 
        <ServiceItem key={service.id} item={service} />
       )
        
        return (
            <div id={this.props.id}>
                <div className="container center" style={{width: '50%'}}>
                    <h6 className="textFooter">What we do</h6>
                    <h4 style={{fontWeight: 'bold'}}>We offer premium accounting services to our clients</h4>    
                </div>
                <div className= "container row">
                        {serviceItem}
                </div>
            </div>
        )
    }
}

Services.propTypes = {
    id: PropTypes.string
}

export default Services
