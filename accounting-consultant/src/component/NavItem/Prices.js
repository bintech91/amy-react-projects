import React, { Component } from 'react'
import prices from '../data/data'
import PropTypes from 'prop-types';

export class Prices extends Component {
    render() {
        const priceItem = prices.map(price =>
            <tr key={price.id}>
                <td className="documentRow">{price.documentCount}</td>
                <td className="priceRow">{price.Price}</td>
            </tr>
        )
        return (
            <div id={this.props.id} style={{ width: "70%", marginLeft: "15%", marginRight: "15%" }}>
                <div className="row" style={{ marginTop: "100px" }}>
                    <div className="col s12">
                        <section className="header-text" style={{ textAlign: "center", marginTop: "300px" }}>
                            <h6 className="textFooter">Price list</h6>
                            <h3 className="header3">We price accordingly</h3>
                        </section>
                    </div>
                </div>
                <div className="row" id="tablePrice">
                    <div className="col s12">
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
                        <div className="input-field">
                            <button className="btn sendMessage">Contact us</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Prices.propTypes = {
    id: PropTypes.string
}

export default Prices
