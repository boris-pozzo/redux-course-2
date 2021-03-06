"use strict"

import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getBooks} from '../../actions/booksActions';
import { Grid, Col, Row, Button } from 'react-bootstrap';

class BooksList extends React.Component{
  componentDidMount(){
    //Dispatch an action
    this.props.getbooks(
      [{
        id: 1,
        title: 'this is the book title',
        description: 'this is the book description',
        price: 43.33
      },
      {
        id: 2,
        title: 'this is the second book title',
        description: 'this is the second book description',
        price: 60
      }]
    );
  }
  render(){
     const booksList = this.props.books.map(function(booksArr){
       return(
        <div key={booksArr.id}>
          <h2>{booksArr.title}</h2>
          <h2>{booksArr.description}</h2>
          <h2>{booksArr.price}</h2>
          <Button bsStyle='primary'>Buy now</Button>
        </div>
        )
     })
    return(
      <Grid>
        <Row style={{marginTop: '15px'}}>
          {booksList}
        </Row>
      </Grid>
    )
  }
}

function mapStateToProps(state){
  return{
    books: state.books.books
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    getbooks:getBooks
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
