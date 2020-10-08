import React from 'react';
import { useSelector } from 'react-redux';

export default function UserHeader({ userId }) {
  const user = useSelector((state) =>
    state.users.find((user) => user.id === userId)
  );
  if (!user) {
    return null;
  }

  return <div className='header'>{user.name}</div>;
}
