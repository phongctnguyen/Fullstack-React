import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchPosts } from '../actions';

export default function PostList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts())
  });

  return <div>Post List</div>;
}

