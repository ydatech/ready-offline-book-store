import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Snackbar from 'material-ui/Snackbar';
import FetchBookInfoForm from '../components/FetchBookInfoForm';
import AddBookForm from '../components/AddBookForm';

import './styles/Admin.css';
import * as GoogleBooks from '../helpers/GoogleBooks';

import * as BookActions from '../actions/BookActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const initialBookData = {
    isbn: '',
    title: '',
    subTitle: '',
    thumbnail: '',
    authors: '',
    price: 0
};
export class Admin extends Component {
    state = {
        isFetchingBookInfo: false,
        newBookData: initialBookData,
        message: ''

    }

    fetchBookInfo = () => {
        this.setState({ isFetchingBookInfo: true })
        GoogleBooks.fetchBookInfo(this.state.newBookData.isbn).then((response) => {
            console.log(response)
            if (response.totalItems > 0) {
                const volumeInfo = response.items[0].volumeInfo
                this.setState({
                    isFetchingBookInfo: false,
                    newBookData: {
                        ...this.state.newBookData,
                        ...{
                            title: volumeInfo.title,
                            subTitle: volumeInfo.subtitle ? volumeInfo.subtitle : '',
                            thumbnail: volumeInfo.imageLinks.thumbnail,
                            authors: volumeInfo.authors.join()
                        }
                    }
                })
            } else {
                this.setState({
                    isFetchingBookInfo: false,
                    message: 'Book Info Not Found! Then, You can manually add the information.'
                })
            }
        })
    }

    addBook = () => {
        const { BookActions } = this.props
        console.log('hello')
        this.setState({ isFetchingBookInfo: true })
        BookActions.addBook(this.state.newBookData).then((response) => {
            this.setState({ isFetchingBookInfo: false, newBookData: initialBookData, message: 'New Book has been successfully added to database!' })
        }).catch((error) => {
            this.setState({ isFetchingBookInfo: false, message: 'Something went wrong, please try again!' })
        })
    }

    updateParentState = (newState) => this.setState({ ...this.state, ...newState })
    render() {
        return (

            <div className="Admin">
                <h1> Admin </h1>
                <div className="AdminContent">
                    <Paper className="AdminBookForm">
                        <h3> Fetch Book Info By ISBN</h3>
                        <div className="AdminBookFormContent">
                            <FetchBookInfoForm
                                parentState={this.state}
                                updateParentState={this.updateParentState}
                                fetchBookInfo={this.fetchBookInfo}
                            />
                        </div>
                    </Paper>
                    <Paper className="AdminBookInfo">
                        <h3> Add New Book</h3>
                        <div className="AdminBookInfoContent">
                            <AddBookForm
                                parentState={this.state}
                                updateParentState={this.updateParentState}
                                fetchBookInfo={this.fetchBookInfo}
                                addBook={this.addBook}
                            />
                        </div>
                    </Paper>
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
        );
    }
}

const mapStateToProps = ({ book }) => ({ book: book })
const mapDispatchToProps = (dispatch) => ({ BookActions: bindActionCreators(BookActions, dispatch) })

export default connect(mapStateToProps, mapDispatchToProps)(Admin);