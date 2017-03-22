import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const FetchBookInfoForm = (props) => {
    const { fetchBookInfo, updateParentState } = props
    const { newBookData, isFetchingBookInfo } = props.parentState
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            fetchBookInfo(e)
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
            <RaisedButton
                label="Fetch Book Info"
                disabled={isFetchingBookInfo}
                primary={true}
                type="submit"
            />
        </form>
    );
}

export default FetchBookInfoForm;