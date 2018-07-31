import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
    render() {
        if(!this.props.book) {
            return <div>Selecione um livro da lista</div>
        }
        return(
            <div>
                <h3>Detalhes do livro:</h3>
                <div>Titulo: { this.props.book.title }</div>
                <div>páginas: { this.props.book.pages }</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        book: state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetail);