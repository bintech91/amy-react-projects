import React, { Component } from 'react'
import prices from '../data/data'
import PropTypes from 'prop-types';

export class Prices extends Component {
    render() {
        const priceItem = prices.map(price => 
            <tr key = {price.id}>
                <td className="documentRow">{price.documentCount}</td>
                <td className="priceRow">{price.Price}</td>
            </tr>
        )
        return (
            <div id={this.props.id} style={{width: "50%", marginLeft: "25%", marginRight: "25%"}}>
                <div className="row" style={{marginTop: "100px"}}>
                    <div>
                        <section className="header-text" style={{textAlign: "center", marginTop: "100px"}}>
                            <h6 className="textFooter">Price list</h6>
                            <h3 className="header3">We price accordingly</h3>
                        </section>
                    </div>
                    <div className="row" id="tablePrice">
                    </div>
                    <table>
                        <thead>
                        <tr id="tableHeader">
                            <th className="documentRow">Document count</th>
                            <th className="priceRow">Price</th>
                        </tr>
                        </thead>
                        <tbody>
                        {priceItem}
                        </tbody>
                    </table>
                    </div>
                    <div className="input-field">
                                <button className="btn sendMessage">Contact us</button>
                    </div>
            </div>
        )
    }
}

Prices.propTypes = {
    id: PropTypes.string
}

export default Prices
