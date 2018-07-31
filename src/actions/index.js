export function selectBook(book) {
    //selectBook está em uma ActionCreator, ele precisa retornar uma ação
    // Um objeto com a propriedade 'type'
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}