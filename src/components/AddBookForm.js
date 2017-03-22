import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import './styles/AddBookForm.css';

const AddBookForm = (props) => {
    const { fetchBookInfo, updateParentState, addBook } = props
    const { newBookData, isFetchingBookInfo } = props.parentState
    return (

        <form className="AddBookForm" onSubmit={(e) => {
            e.preventDefault()
            addBook()
        }}>
            <TextField
                value={newBookData.isbn}
                hintText="ISBN"
                floatingLabelText="Input Book ISBN"
                disabled={isFetchingBookInfo}
                onChange={(e) => {
                    updateParentState({ newBookData: { ...newBookData, ...{ isbn: e.target.value } } })
                }}
                fullWidth={true}
                required
            />
            <TextField
                value={newBookData.title}
                hintText="Book Title"
                floatingLabelText="Input Book Title"
                disabled={isFetchingBookInfo}
                onChange={(e) => {
                    updateParentState({ newBookData: { ...newBookData, ...{ title: e.target.value } } })
                }}
                fullWidth={true}
                required
            />
            <TextField
                value={newBookData.subTitle}
                hintText="Book Title"
                floatingLabelText="Input Book Sub Title"
                disabled={isFetchingBookInfo}
                onChange={(e) => {
                    updateParentState({ newBookData: { ...newBookData, ...{ subTitle: e.target.value } } })
                }}
                fullWidth={true}

            />
            <TextField
                value={newBookData.thumbnail}
                hintText="Cover Thumbnail"
                floatingLabelText="Input Cover Thumbnail URL"
                disabled={isFetchingBookInfo}
                onChange={(e) => {
                    updateParentState({ newBookData: { ...newBookData, ...{ thumbnail: e.target.value } } })
                }}
                type="url"
                fullWidth={true}
            />
            {newBookData.thumbnail &&
                < div >
                    <p> Thumbnail Cover Preview</p>
                    <img src={newBookData.thumbnail} alt="thumbnail cover" />
                </div>
            }
            <TextField
                value={newBookData.price}
                hintText="Book Price"
                floatingLabelText="Input Book Price"
                disabled={isFetchingBookInfo}
                onChange={(e) => {
                    updateParentState({ newBookData: { ...newBookData, ...{ price: parseInt(e.target.value) } } })
                }}
                type="number"
                fullWidth={true}
                required
            />


            <RaisedButton
                label="Add Book"
                disabled={isFetchingBookInfo}
                primary={true}

                type="submit"
            />
        </form>

    );
}

export default AddBookForm;