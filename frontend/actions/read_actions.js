import * as APIUtil from '../util/read_api_util';

export const RECEIVE_READ = 'RECEIVE_READ';
export const REMOVE_READ = 'REMOVE_READ';
export const RECEIVE_READS = 'RECEIVE_READS'

const receiveRead = read => {
    // debugger
    return {
        type: RECEIVE_READ,
        read
    }
}

const removeRead = read => {
    return {
        type: REMOVE_READ,
        read
    }
}

const receiveReads = reads => {
    // debugger
    return {
        type: RECEIVE_READS,
        reads
    }
}

export const fetchReads = () => {
    return dispatch => {
        return APIUtil.fetchReads().then(reads => dispatch(receiveReads(reads)))
    }
}

export const createRead = (read) => {
    // debugger
    return dispatch => {
        return APIUtil.createRead(read).then(read => dispatch(receiveRead(read)))
    }
}

export const deleteRead = (read) => {
    // debugger
    return dispatch => {
        return APIUtil.deleteRead(read).then(read => dispatch(removeRead(read)))
    }
}