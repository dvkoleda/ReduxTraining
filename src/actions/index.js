import ActionsTypes from './constants';

export function selectBook(book) {
    return {
        type: ActionsTypes.BOOK_SELECTED,
        payload: book
    }
}