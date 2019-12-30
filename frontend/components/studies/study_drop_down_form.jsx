
import React from 'react';
import { Route, Redirect, Link, HashRouter, Switch } from 'react-router-dom';

class StudyDropDown extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showMenu: false, book: null, thumb:false }
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.combo = this.combo.bind(this);
    this.showThumb = this.showThumb.bind(this);
    this.noThumb = this.noThumb.bind(this)
  }

  componentDidMount(){
    this.props.fetchBooks()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.books.length !== this.props.books.length) {
      this.props.fetchBooks();
    }
  }



  showMenu(e) {
    e.preventDefault();
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu() {
    if (!this.dropdownMenu.contains(event.target)) {

      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu)
      });
    }
    else if (this.combo) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu)
      });
    }
  }
  // handleSubmit(){
  //   this.props.handleSubmit
  // }

  combo(book){
    return(e) => {
      e.preventDefault();
    this.setState({ book: book })
    this.props.chooseBook(book.id)
    } 
  }

  showThumb(id){
    return () => {
    this.setState({thumb: id})
    } 
  }

  noThumb(){
    this.setState({thumb: null})
  }

  render() {
      let arr = this.props.books.map(book => { 
        return <div className="booklist1"><li><a className="book-list" onMouseEnter={this.showThumb(book.id)} onMouseLeave={this.noThumb} onClick={this.combo(book)}>{book.name}</a>
         {this.state.thumb === book.id ? <img id="thumb-dd" src={window.logo}></img> : null}
        </li></div>
        
      })
    return (
      <div className="studycontainer">
        <div id="studycontainer-menu" onClick={this.showMenu}>
          <div id={this.props.version === "new" ? "selectButton2" 
          : this.props.version === "studybook" ? "selectButton"
          : "selectButton3"}
          >{ this.state.book ? this.state.book.name : "select a book" + "  " + "▼"}</div>
        </div>
        {
          this.state.showMenu
            ? (
              <div
                className="menu"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}>
                <div className="containerdd containerdd-p">
                {/* <div className="studiesbuilder" onClick={this.props.openModal}>Book 1</div>
                <Link className="studiesbuilder" to="/users/studyBuilder">Book 2</Link> */}
                {/* <button>Book 3</button> */}
                <ul className="book-list-items">{arr}</ul>
               
                {/* {this.props.book ? 
                this.props.book.map(book => {
                    return <li>{book.name}</li>
                }) : null 
                } */}
                </div>
               

                </div>
            )
            :
            (null)
        }
      </div>
    );
  }
}

export default StudyDropDown; 