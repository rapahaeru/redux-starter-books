// O argumento 'state' não é o 'state' da aplicação
export default function(state = null, action) {

    switch(action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }

    return state;
}