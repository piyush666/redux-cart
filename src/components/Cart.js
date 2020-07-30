import React from 'react';
import { connect } from 'react-redux';
import { removeItem, addQuantity, subQuantity } from '../actions/cartActions';
import { CardColumns, Container, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
                (item.quantity > 0) ? (
                    <Card key={item.id}>
                        <Card.Img variant="top" src={item.img} alt="Card image" />
                        <Card.Body className="text-center">
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>
                                {item.desc}
                            </Card.Text>
                            <Card.Text>
                                <b>Price: {item.price}$</b>

                            </Card.Text>
                            <Card.Text>
                                <span><b>Quantity:{item.quantity}  </b></span>
                                <span>
                                    <Card.Link as={Link} to="/cart" ><i className="material-icons" onClick={() => handleAddQuantity(item.id)}>arrow_drop_up</i></Card.Link>
                                    <Card.Link as={Link} to="/cart" ><i className="material-icons" onClick={() => handleSubquantity(item.id)}>arrow_drop_down</i></Card.Link>
                                </span>
                            </Card.Text>
                            <Card.Link as={Link} to="/cart" ><i className="material-icons" onClick={() => handleRemove(item.id)}>clear</i></Card.Link>

                        </Card.Body>
                    </Card >) : (null)
            )
            )
        ) : (<p>please add something to cart</p>)
    return (
        <Container>
            <h2>Your Cart</h2>
            <CardColumns>
                {addedItems}
            </CardColumns>
        </Container>
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
