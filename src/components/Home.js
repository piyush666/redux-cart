import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/cartActions';

class Home extends Component {
    handleClick = (id) => {
        this.props.addToCart(id);
    }
    render() {
        let itemList = this.props.items.map(item => {
            return (
                <div key={item.id}>
                    <div>
                        <img src={item.img} alt={item.title} />
                        <span>{item.title}</span>
                        <button onClick={() => { this.handleClick(item.id) }}>add</button>
                    </div>
                    <div>
                        <p>{item.desc}</p>
                        <p><b>Price: {item.price}$</b></p>
                    </div>
                </div>
            )
        })
        return (
            <div className="container">
                <h3>Our items</h3>
                <div>
                    {itemList}
                </div>
            </div>
        );
    }
}

const mapStatetoProps = (state) => ({ items: state.items });

const mapDispatchToProps = (dispatch) => ({
    addToCart: (id) => { dispatch(addToCart(id)) }
})

export default connect(mapStatetoProps, mapDispatchToProps)(Home);