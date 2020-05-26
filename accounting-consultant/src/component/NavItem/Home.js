import React, { Component } from 'react'
import ConsultantForm from '../form/ConsultantForm'
import PropTypes from 'prop-types';

export class Home extends Component {
    render() {
        return (
            <div id={this.props.id}>
                <div id="bg">
                </div>
                 <div className="row">
                    <div className="col s12 m12 l6" style={{margin:'auto', padding: '100px'}}>
                        <h2 className="headerFooter">Accounting services starting from $50/mon</h2>
                        <p className="textFooter">It didn&apos;t members sit well way room editing shorthand means racially service</p>
                        <p className="textFooter">Damaging shock parties educational</p>
                    </div>
                    <div className="col s12 m12 l6">
                        <ConsultantForm />
                    </div>
                    </div>
            </div>
        )
    }
}

Home.propTypes = {
    id: PropTypes.string
}

export default Home
