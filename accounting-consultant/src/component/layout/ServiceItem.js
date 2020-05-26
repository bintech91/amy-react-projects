import React from 'react'
import PropTypes from 'prop-types';

function ServiceItem(props) {
    return (
        <div className="col s12 m6 l3 serviceItem">
        <div className="card-service">
            <div className="card-image">
                <i className="medium material-icons service">{props.item.icon}</i><br />
                    </div>
                        <div className="card-content" style={{textAlign:'center'}}>
                            <p style={{fontWeight:'bold'}}>{props.item.serviceName}</p>
                            <p>{props.item.content}</p>
                            </div>
                        </div>
        </div>
        
    )
}

ServiceItem.propTypes = {
    item: PropTypes.object
}

export default ServiceItem
