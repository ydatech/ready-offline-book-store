import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import './styles/Home.css';
import BookItem from '../components/BookItem';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as BookActions from '../actions/BookActions';
export class Home extends Component {
    state = {
        isFetching: false,
    }
    componentDidMount() {
        const { BookActions } = this.props

        BookActions.fetchBooks()
    }
    addToCart = (item) => {
        const { BookActions } = this.props

        BookActions.addToCart(item)
    }
    render() {

        const { book } = this.props
        return (
            <div className="Home">
                <h1>Available Books</h1>
                <div className="HomeContent">
                    {book.items.length < 1 &&

                        <Paper style={{ width: '100%', textAlign: 'center', padding: 20 }}>
                            <h3> Ups!</h3>
                            <p>There is no book available right now!</p>
                        </Paper>
                    }
                    {book.items.length > 1 &&
                        book.items.map((item, index) => {

                            return (
                                <BookItem key={index} item={item} addToCart={this.addToCart} />
                            )
                        })
                    }



                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ book }) => ({ book })
const mapDispatchToProps = (dispatch) => ({ BookActions: bindActionCreators(BookActions, dispatch) })
export default connect(mapStateToProps, mapDispatchToProps)(Home);