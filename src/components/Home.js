import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import { Container, Card, CardColumns } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Home extends Component {
    handleClick = (id) => {
        this.props.addToCart(id);
    }
    render() {
        let itemList = this.props.items.map(item => {
            return (
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

                        <Card.Link as={Link} to='/' onClick={() => this.handleClick(item.id)}>Add</Card.Link>

                    </Card.Body>
                </Card>
            )
        })
        return (
            <Container>
                <h2>Our items</h2>

                <CardColumns>
                    {itemList}
                </CardColumns>
            </Container>
        );
    }
}

const mapStatetoProps = (state) => ({ items: state.items });

const mapDispatchToProps = (dispatch) => ({
    addToCart: (id) => { dispatch(addToCart(id)) }
})

export default connect(mapStatetoProps, mapDispatchToProps)(Home);
