import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

import RaisedButton from 'material-ui/RaisedButton';
import { bindActionCreators } from 'redux';
import * as BookActions from '../actions/BookActions';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import ShoppingCartIcon from 'material-ui/svg-icons/action/shopping-cart';
import MenuItem from 'material-ui/MenuItem';
import Badge from 'material-ui/Badge';
/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
// react redux connect
import { connect } from 'react-redux';
// router link
import { Link } from 'react-router-dom';

export class Navbar extends Component {

    render() {

        const { cart, history } = this.props;
        let total = 0;
        const rightMenu = (
            <div>
                <Badge badgeContent={cart.items.length} secondary={true}
                    badgeStyle={{ top: 0, right: -10 }} />
                <IconMenu
                    iconButtonElement={
                        <IconButton><ShoppingCartIcon color='white' /></IconButton>


                    }
                    targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                >
                    <div style={{ paddingLeft: 20, paddingRight: 10 }}>
                        <h4> My Cart ({cart.items.length})</h4>
                        <div style={{ maxHeight: 400, overflow: 'auto', paddingRight: 20 }}>
                            {cart.items.map((item, index) => {
                                total += parseInt(item.price)
                                return (
                                    <div key={index} style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid rgba(0,0,0,.07)', marginBottom: 10 }}>
                                        <div style={{ width: 40 }}>
                                            <img style={{ width: '100%', height: 'auto' }} src={item.thumbnail} alt={item.title} />
                                        </div>
                                        <div style={{ width: 200 }}>
                                            <p style={{}}>{item.title}</p>
                                        </div>
                                        <div>
                                            <p>${item.price}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'space-between' }}>
                            <h4> Total</h4>
                            <h4>${total}</h4>
                        </div>

                        <RaisedButton
                            label="Checkout"
                            disabled={cart.items.length < 1}
                            primary={true}
                            onTouchTap={() => {
                                return history.push('/checkout')
                            }}
                        />
                        <RaisedButton
                            label="Order History"

                            onTouchTap={() => {
                                return history.push('/order-history')
                            }}
                        />

                    </div>


                </IconMenu>
            </div>
        );
        return (
            <div className="NavbarContainer">
                <AppBar
                    //style={{ maxWidth: 1200, boxShadow: false, paddingLeft: 0, paddingRight: 0 }}
                    //titleStyle={{ flex: '0 1 auto' }}
                    //iconStyleLeft={{ marginLeft: -75 }}
                    //iconElementLeft={<IconButton onTouchTap={handleToggle}><NavigationMenu /></IconButton>}
                    // iconElementRight={isLoggedIn ? <FlatButton label="Published Screenshots" /> : <FlatButton label=" " />}

                    iconElementRight={rightMenu}
                    title={<Link style={{ textDecoration: 'none', color: 'white' }} to="/">Book Store</Link>}
                    showMenuIconButton={false}


                    titleStyle={{ cursor: 'pointer' }}
                />
            </div>

        )
    }
}

const mapStateToProps = ({ cart }) => ({ cart })
const mapDispatchToProps = (dispatch) => ({ BookActions: bindActionCreators(BookActions, dispatch) })

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);