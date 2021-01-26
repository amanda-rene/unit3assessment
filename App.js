
import './App.css';
import Header from './Components/Header'
import Booklist from './Components/Booklist'
import Shelf from './Components/Shelf'
import data from './data'
import React, {Component} from 'react'


class App extends Component{

  constructor(){
    super();
    this.state = {
    books: data
    
    }
    
  }
  render(){
  return (
    <div className="App">
        <Header />
        <Booklist books={this.state.books}/>
        <Shelf />
    </div>
  );
}
}


export default App;
