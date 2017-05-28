/**
 * Created by Koleda_D on 25.05.2017.
 */
import React from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions';

class BookList extends React.Component {
    renderList() {
        return this.props.books.map( book => {
            return (
                <li
                    key={book.title}
                    onClick={() => this.props.selectBook(book)}
                    className="list-group-item" >
                    {book.title}
                </li>
            )
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
        books: state.books
    };
}

export default connect(mapStateToProps, {selectBook: selectBook})(BookList);