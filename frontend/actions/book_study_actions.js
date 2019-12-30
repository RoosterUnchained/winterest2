import * as APIUtil from '../util/book_study_api_util';
export const RECEIVE_BOOK_STUDY = 'RECEIVE_BOOK_STUDY';
export const RECEIVE_BOOK_STUDIES = 'RECEIVE_BOOK_STUDIES';
export const REMOVE_BOOK_STUDY = 'REMOVE_BOOK_STUDY';
import { receiveStudy } from './study_actions';
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

const receiveBookStudy = book_study => {
    return {
        type: RECEIVE_BOOK_STUDY,
        book_study
    }
}

const receiveBookStudies = book_studies => {
    return {
        type: RECEIVE_BOOK_STUDIES,
        book_studies
    }
}

const removeBookStudy = book_studyId => {
    return {
        type: REMOVE_BOOK_STUDY,
        book_studyId
    }
}

const receiveErrors = errors => {
    debugger;
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors
    };
};

export const fetchBookStudies = () => {
    return dispatch => {
        return APIUtil.fetchBookStudies().then(book_studies => dispatch(receiveBookStudies(book_studies)))
    }
}

export const fetchBookStudy = (id) => {
    return dispatch => {
        return APIUtil.fetchBookStudy(id).then(book_study => dispatch(receiveBookStudy(book_study)))
    }
}

export const createBookStudy = (book_study) => {
    return dispatch => {
        return APIUtil.createBookStudy(book_study).then(book_study =>
            dispatch(receiveBookStudy(book_study)),
            errors => dispatch(receiveErrors(errors.responseJSON))
        );
    }
}

export const updateBookStudy = (book_study) => {
    return dispatch => {
        return APIUtil.updateBookStudy(book_study).then(book_study => dispatch(receiveBookStudy(book_study)))
    }
}


export const deleteBookStudy = (id) => {

    return dispatch => {
        return APIUtil.deleteBookStudy(id).then(book_study => dispatch(removeBookStudy(book_study)))
    }
}