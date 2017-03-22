import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';


const BookItem = (props) => {
    const { item, addToCart } = props;
    return (
        <Paper style={{ width: 200, margin: 20, padding: 10, textAlign: 'center' }}>
            <div className="BookItemThumbnail">
                <img src={item.thumbnail} alt={item.title} />
            </div>
            <div className="BookItemTitle">
                <h4> {item.title}</h4>
            </div>
            <div className="BookItemPrice">
                <p> ${item.price}</p>
            </div>
            <RaisedButton
                label="Add to Cart"
                primary={true}
                onTouchTap={(e) => {
                    addToCart(item);
                }}
            />
        </Paper>
    )
}

export default BookItem;