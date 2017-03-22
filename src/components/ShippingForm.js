import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import './styles/AddBookForm.css';

const ShippingForm = (props) => {
    const { fetchBookInfo, updateParentState, handleNext } = props
    const { newOrderData, isFetchingBookInfo } = props.parentState
    return (

        <form className="AddBookForm" onSubmit={(e) => {
            e.preventDefault()
            handleNext()
        }}>
            <TextField
                value={newOrderData.name}
                hintText="Your Name"
                floatingLabelText="Name"
                disabled={isFetchingBookInfo}
                onChange={(e) => {
                    updateParentState({ newOrderData: { ...newOrderData, ...{ name: e.target.value } } })
                }}
                fullWidth={true}
                required
            />
            <TextField
                value={newOrderData.email}
                hintText="your@email.com"
                floatingLabelText="Email Address"
                disabled={isFetchingBookInfo}
                onChange={(e) => {
                    updateParentState({ newOrderData: { ...newOrderData, ...{ email: e.target.value } } })
                }}
                fullWidth={true}
                type="email"
                required
            />
            <TextField
                value={newOrderData.deliveryAddress}
                hintText="Delivery Address"
                floatingLabelText="Delivery Address"
                multiLine={true}
                rows={2}
                onChange={(e) => {
                    updateParentState({ newOrderData: { ...newOrderData, ...{ deliveryAddress: e.target.value } } })
                }}
                fullWidth={true}
                required
            />
            <TextField
                value={newOrderData.billingAddress}
                hintText="Billing Address"
                floatingLabelText="Billing Address"
                multiLine={true}
                rows={2}
                onChange={(e) => {
                    updateParentState({ newOrderData: { ...newOrderData, ...{ billingAddress: e.target.value } } })
                }}
                fullWidth={true}
                required
            />
            <div>

                <RaisedButton
                    style={{ marginTop: 20 }}
                    label="Next"
                    disabled={isFetchingBookInfo}
                    primary={true}

                    type="submit"
                />

            </div>
        </form>

    );
}

export default ShippingForm;