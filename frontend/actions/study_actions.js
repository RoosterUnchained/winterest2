import * as APIUtil from '../util/study_api_util';
export const RECEIVE_STUDY = 'RECEIVE_STUDY';
export const RECEIVE_STUDIES = 'RECEIVE_STUDIES';
export const REMOVE_STUDY = 'REMOVE_STUDY';

export const receiveStudy = payload => {

    return {
        type: RECEIVE_STUDY,
        payload
    }
}

const receiveStudies = studies => {
    return {
        type: RECEIVE_Studies,
        studies
    }
}

const removeStudy = studyId => {
    return {
        type: REMOVE_STUDY,
        studyId
    }
}

export const fetchStudies = () => {
    return dispatch => {
        return APIUtil.fetchStudies().then(studies => dispatch(receiveStudies(studies)))
    }
}

export const fetchStudy = (id) => {
    return dispatch => {
        return APIUtil.fetchStudy(id).then(study => dispatch(receiveStudy(study)))
    }
}

export const createStudy = (study, bookId) => {
    return dispatch => {
        return APIUtil.createStudy(study, bookId).then(payload => dispatch(receiveStudy(payload)))
    }
}

export const updateStudy = (study, bookId) => {
    return dispatch => {
        return APIUtil.updateStudy(study, bookId).then(payload => dispatch(receiveStudy(payload)))
    }
}

export const deleteStudy = (id) => {
    return dispatch => {
        return APIUtil.deleteStudy(id).then(study => {
            return dispatch(removeStudy(study))
        })
    }
}