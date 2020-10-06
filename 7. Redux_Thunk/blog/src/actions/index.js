import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get('/posts');
  console.log(response);

  dispatch({
    type: 'FETCH_POSTS',
    payload: response,
  });
};
