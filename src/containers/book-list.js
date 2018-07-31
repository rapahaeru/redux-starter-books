import React, { Component } from 'react';

import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';


class BookList extends Component {

    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={ book.title } onClick={() => this.props.selectBook(book)} className="list-group-item">{ book.title }</li>
            );
        })
    }

    render() {
        return(
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    //Quando acionado, sempre insere os objetos nos props
    return {
        books: state.books
    };
}
// tudo que for retornado desta funcao, resultará em props do
// container BookList
function mapDispatchToProps(dispatch) {
    // Sempre que selectBook for chamado, o resultado deve ser disparado
    // para todos os reducers
    return bindActionCreators({ selectBook: selectBook}, dispatch)
}

// promove BookList de um componente para um container
// Ele precisa saber sobre o novo método dispatch, selectBook
// O torna disponível como uma props
export default connect(mapStateToProps, mapDispatchToProps)(BookList);