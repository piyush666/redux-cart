import React from 'react';
import { connect } from 'react-redux';
import { removeItem, addQuantity, subQuantity } from '../actions/cartActions';

const Cart = (props) => {
    const handleRemove = (id) => {
        props.removeItem(id);
    }
    const handleAddQuantity = (id) => {
        props.addQuantity(id);
    }
    const handleSubquantity = (id) => {
        props.subQuantity(id);
    }
    let addedItems = props.items.length ?
        (
            props.items.map(item => (
                <div key={item.id}>
                    <div>
                        <img src={item.img} alt={item.title} />
                        <span>{item.title}</span>
                    </div>
                    <div>
                        <p>{item.desc}</p>
                        <p><b>Price: {item.price}$</b></p>
                        <p><b>Quantity:{item.quantity}</b></p>
                        <button onClick={() => handleAddQuantity(item.id)}>increase</button>
                        <button onClick={() => handleSubquantity(item.id)}>decrease</button>
                    </div>
                    <button onClick={() => handleRemove(item.id)}>remove</button>
                </div>
            ))
        ) : (<p>please add something to cart</p>)
    return (
        <div>
            <h4>Your cart</h4>
            <div>
                {addedItems}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    items: state.addedItems
})

const mapDispatchToProps = (dispatch) => ({
    removeItem: (id) => (dispatch(removeItem(id))),
    addQuantity: (id) => (dispatch(addQuantity(id))),
    subQuantity: (id) => (dispatch(subQuantity(id))),
})
export default connect(mapStateToProps, mapDispatchToProps)(Cart);