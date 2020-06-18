import {ADD_ORDER, LOAD_POSTS, MY_INFO_TASK, TOGGLE_BOOKED, TOKEN_NOTIF} from '../type';
import {DATA, MY_INFO} from '../data';

import {INFO} from '../json/jsonInfo';

const PUSH_ENDPOINT = 'http://api.botasi.ge/notification/';
const POST_ENDPOINT = 'http://api.botasi.ge/post/';

export const loadPosts = emai => {
    return async dispatch => {
        dispatch({
            type: LOAD_POSTS,
            payload: DATA,
            emai
        });
    };
};

export const toogleBooked = emai => {
    return {
        type: TOGGLE_BOOKED,
        payload: DATA,
        emai
    };
};

export const myInfoTask = () => {
    return {
        type: MY_INFO_TASK,
        payload: MY_INFO
    };
};

export const addOrderPost = post => {
    return async dispatch => {
        const posts = await INFO.setPosts(post);

        dispatch({
            type: ADD_ORDER,
            payload: DATA,
            emai: post
        });
    }
};

export const tokenNotif = emai => {
    return {
        type: TOKEN_NOTIF,
        payload: DATA,
        emai
    };
};
