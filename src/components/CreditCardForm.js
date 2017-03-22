import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import './styles/AddBookForm.css';

const CreditCardForm = (props) => {
    const { fetchBookInfo, updateParentState, handlePrev, createNewOrder } = props
    const { newOrderData, isFetchingBookInfo } = props.parentState
    return (

        <form className="AddBookForm" onSubmit={(e) => {
            e.preventDefault()
            createNewOrder()
        }}>
            <TextField
                value={newOrderData.cc.name}
                hintText="Holder Name"
                floatingLabelText="Full Name"
                disabled={isFetchingBookInfo}
                onChange={(e) => {
                    updateParentState({ newOrderData: { ...newOrderData, ...{ cc: { ...newOrderData.cc, ...{ name: e.target.value } } } } })
                }}
                fullWidth={true}
                required
            />
            <TextField
                value={newOrderData.cc.number}
                hintText="Credit Card Number"
                floatingLabelText="Card Number"
                disabled={isFetchingBookInfo}
                onChange={(e) => {
                    updateParentState({ newOrderData: { ...newOrderData, ...{ cc: { ...newOrderData.cc, ...{ number: e.target.value } } } } })
                }}
                fullWidth={true}
                type="number"
                required
            />
            <TextField
                value={newOrderData.cc.expire}
                hintText="MM/YY"
                floatingLabelText="Expire"
                disabled={isFetchingBookInfo}
                onChange={(e) => {
                    updateParentState({ newOrderData: { ...newOrderData, ...{ cc: { ...newOrderData.cc, ...{ expire: e.target.value } } } } })
                }}
                fullWidth={true}
                required
            />
            <TextField
                value={newOrderData.cc.expire}
                hintText="CVC"
                floatingLabelText="CVC"
                disabled={isFetchingBookInfo}
                onChange={(e) => {
                    updateParentState({ newOrderData: { ...newOrderData, ...{ cc: { ...newOrderData.cc, ...{ cvc: e.target.value } } } } })
                }}
                fullWidth={true}
                required
            />

            <div>

                <RaisedButton
                    style={{ marginTop: 20 }}
                    label="Back"
                    disabled={isFetchingBookInfo}
                    onTouchTap={() => {
                        handlePrev()
                    }}
                />
                <RaisedButton
                    style={{ marginTop: 20 }}
                    label="Finish"
                    disabled={isFetchingBookInfo}
                    primary={true}

                    type="submit"
                />

            </div>
        </form>

    );
}

export default CreditCardForm;