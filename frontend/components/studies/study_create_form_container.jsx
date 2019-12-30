import React from 'react';
import {Link, Route, HashRouter, Switch, withRouter} from 'react-router-dom';
import StudyDropDownContainer from './study_drop_down_form_container';


class CreateStudyForm extends React.Component {
    constructor(props){
        
        super(props);
        
        // console.log(this.props.currentUser)
        this.state = {...this.props.study, photoFile:null, photoUrl: null, bookId: null};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.chooseBook = this.chooseBook.bind(this);
        
    }

    handleInput(field){
        return(e) => {
            this.setState({[field]: e.target.value})
        };
    }

    chooseBook(bookId){
       debugger
        this.setState({ bookId })
  
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('study[name]', this.state.name); 
        formData.append('study[id]', this.state.id); 
        formData.append('study[link_url]', this.state.link_url); 
        
        if (this.state.photoFile) {
            formData.append('study[photo]', this.state.photoFile);
        }
        this.props.createStudy(formData, this.state.bookId).then(() => this.props.history.push(`/users/${this.props.user.id}/studies`))
    } 
    handleFile(e){

        const reader = new FileReader();
        const file = e.currentTarget.files[0];
        reader.onloadend = () => {
            this.setState({ photoUrl: reader.result, photoFile: file });
        };
        if (file) {
            reader.readAsDataURL(file);
        } else {
            this.setState({ photoUrl: "", photoFile: null });
        }
    }
    

    handleCancel(e){
        e.preventDefault();
        this.props.closeModal;
    }


    render(){
        return(
        <div>   
            <div className="study-cf-big">
            <form className="study-cf">
                    {/* <div className="box"></div> */}
                    <StudyDropDownContainer version={"new"} history={this.props.history.location.pathname.split('/').slice(this.props.history.location.pathname.split('/').length - 1) } chooseBook={this.chooseBook}/> 
                    
                    <button className="study-button-cf" onClick={this.handleSubmit}>Save</button>
                    <button id="study-button-empty"></button>
                        <label className="study-cf-t">
                        <input placeholder="Add your title" className="study-cf-tb" type="text" value={this.state.name} onChange={this.handleInput('name')}/>
                        </label>
                    <input type="file" className="file" onChange={this.handleFile}/>
                    <div className="uploadpic">Upload picture here</div>
                    <img className="file-pic"src={this.state.photoUrl} alt=""/>
            </form>
            </div>
        </div>
        ) 
    } 

}

export default CreateStudyForm;