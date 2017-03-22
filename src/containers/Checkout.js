import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as BookActions from '../actions/BookActions';

import {
    Step,
    Stepper,
    StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import ShippingForm from '../components/ShippingForm';
import CreditCardForm from '../components/CreditCardForm';
import Snackbar from 'material-ui/Snackbar';
import LinearProgress from 'material-ui/LinearProgress';



const initialOrderData = {
    name: '',
    email: '',
    deliveryAddress: '',
    billingAddress: '',
    cc: {
        name: '',
        number: '',
        expire: '',
        cvc: ''
    }
}
export class Checkout extends Component {
    state = {
        message: '',
        finished: false,
        stepIndex: 0,
        newOrderData: initialOrderData
    };

    handleNext = () => {
        const { stepIndex } = this.state;
        this.setState({
            stepIndex: stepIndex + 1,
            finished: stepIndex >= 2,
        });
    };

    handlePrev = () => {
        const { stepIndex } = this.state;
        if (stepIndex > 0) {
            this.setState({ stepIndex: stepIndex - 1 });
        }
    };
    createNewOrder = () => {
        const { BookActions } = this.props

        this.setState({ isCreatingOrder: true })
        BookActions.createNewOrder(this.state.newOrderData).then((response) => {
            this.setState({ isCreatingOrder: false, finished: true, message: 'Your order has succesfully created!' })

        }).catch((error) => {
            this.setState({ isCreatingOrder: false, message: 'Something Went Wrong!' })
        })
    }
    updateParentState = (newState) => this.setState({ ...this.state, ...newState })
    getStepContent = (stepIndex) => {

        switch (stepIndex) {
            case 0:
                return <ShippingForm
                    parentState={this.state}
                    updateParentState={this.updateParentState}
                    handleNext={this.handleNext}
                />;
            case 1:
                return <CreditCardForm
                    parentState={this.state}
                    updateParentState={this.updateParentState}
                    handlePrev={this.handlePrev}
                    createNewOrder={this.createNewOrder}
                />;
            default:
                return 'You\'re a long way from home!';
        }
    }
    render() {
        const { finished, stepIndex } = this.state;
        const contentStyle = { margin: '0 16px' };
        return (
            <div>
                <h1> Checkout </h1>
                <div style={{ width: '100%', maxWidth: 700, margin: 'auto' }}>
                    <Stepper activeStep={stepIndex}>
                        <Step>
                            <StepLabel>Your Shipping Address</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel>Payment (Credit Card)</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel>Order Finished</StepLabel>
                        </Step>
                    </Stepper>
                    <div style={contentStyle}>
                        {finished ? (

                            <div style={{ textAlign: 'center' }}>
                                <h2> Congratulations</h2>
                                <h4> Your order has been succesfully created!</h4>
                            </div>
                        ) : (
                                <div>
                                    {this.state.isCreatingOrder && <LinearProgress mode="indeterminate" />}
                                    {this.getStepContent(stepIndex)}

                                </div>
                            )}
                    </div>
                </div>
                <Snackbar
                    open={this.state.message.length > 0}
                    message={this.state.message}
                    autoHideDuration={4000}
                    onRequestClose={() => {
                        this.setState({ message: '' })
                    }}
                />
            </div>
        )
    }
}

const mapStateToProps = ({ cart }) => ({ cart })
const mapDispatchToProps = (dispatch) => ({ BookActions: bindActionCreators(BookActions, dispatch) })
export default connect(mapStateToProps, mapDispatchToProps)(Checkout);