import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as BookActions from '../actions/BookActions';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';




export class OrderHistory extends Component {
    componentDidMount() {
        const { BookActions } = this.props

        BookActions.fetchOrders()
    }
    render() {
        const { order } = this.props
        return (
            <div>
                <h1> Order History </h1>
                <div className="Order History">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHeaderColumn>ID</TableHeaderColumn>
                                <TableHeaderColumn>Name</TableHeaderColumn>
                                <TableHeaderColumn>Items</TableHeaderColumn>
                                <TableHeaderColumn>Delivery Address</TableHeaderColumn>
                                <TableHeaderColumn> Status</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {order.items.map((item, index) => {

                                return (
                                    <TableRow key={index}>
                                        <TableRowColumn>{item.id}</TableRowColumn>
                                        <TableRowColumn>{item.information.name}</TableRowColumn>
                                        <TableRowColumn>{item.items.length}</TableRowColumn>
                                        <TableRowColumn>{item.information.deliveryAddress}</TableRowColumn>
                                        <TableRowColumn>Success</TableRowColumn>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ order }) => ({ order });
const mapDispatchToProps = (dispatch) => ({ BookActions: bindActionCreators(BookActions, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(OrderHistory);