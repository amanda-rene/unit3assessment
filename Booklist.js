import React, {Component} from 'react'





class Booklist extends Component {


    
    render(){
        

    const mappedBooks = this.props.books.map(books => {
        
    })



    return(

        <div>
        <h1 className = 'booklist'>List: {this.props.books}</h1>
        {/* {mappedBooks} */}
        </div>
    )
    }
}

export default Booklist;