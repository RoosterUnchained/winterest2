import React from 'react';
import StudyIndexItem from './study_index_item';
import NavBarContainer from '../navbar/nav_bar_container';
// import UserShowContainer from '../users/user_showpage_container'
import UserShowContainer from '../../components/users/user_showpage_container'
import { withRouter } from 'react-router-dom';

class StudyIndex extends React.Component {
    constructor(props){
        super(props)
        debugger
        this.state = { hoveredStudyId: null }
        this.setHoveredStudyId = this.setHoveredStudyId.bind(this)
    }
componentDidMount(){
        this.props.fetchStudies()
    }
//am i fetching studies here of a specific user or of the user's books? 

setHoveredStudyId(id){
    this.setState({hoveredStudyId: id})
}


render(){
    let studies = this.props.studies.map(study => {
        return <StudyIndexItem study={study} key={study.id} setHoveredStudyId={this.setHoveredStudyId} hoveredStudyId={this.state.hoveredStudyId}/>
    })
    return(
        <div> 
            {this.props.user? <UserShowContainer /> : null} 
            <ul>
                <div className="grid-container">
                {studies}
                </div>
            </ul>
        </div>
    )
    }
}

export default withRouter(StudyIndex); 