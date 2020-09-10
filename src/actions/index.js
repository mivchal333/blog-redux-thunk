import jsonPlaceholder from "../apis/jsonPlaceholder";
import _ from 'lodash'

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    console.log('a')
    await dispatch(fetchPosts());
    console.log('fetched')
    const {posts = []} = getState();
    const userIds = _.uniq(_.map(posts, 'userId'));
    userIds.forEach(userId => {
        dispatch(fetchUser(userId));
    })
}
export const fetchPosts = () => async (dispatch) => {
    const response = await jsonPlaceholder.get(`/posts`);

    dispatch({
        type: 'FETCH_POSTS',
        payload: response.data,
    })
}

export const fetchUser = (userId) => async (dispatch) => {
    const response = await jsonPlaceholder.get(`/users/` + userId);

    dispatch({
        type: 'FETCH_USER',
        payload: response.data,
    })
}
