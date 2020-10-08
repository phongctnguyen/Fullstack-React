import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import UserHeader from './UserHeader';
import { fetchPostsAndUsers } from '../actions';

export default function PostList() {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostsAndUsers());
  }, [dispatch]);


  const renderList = () => {
    return posts.map((post) => {
      return (
        <div className='item' key={post.id}>
          <i className='large middle aligned icon user' />
          <div className='content'>
            <div className='description'>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <UserHeader userId={post.userId} />
          </div>
        </div>
      );
    });
  };

  return <div className='ui relaxed divided list'>{renderList()}</div>;
}
