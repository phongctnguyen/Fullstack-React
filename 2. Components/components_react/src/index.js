import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './components/CommentDetail';
import ApprovalCard from './components/ApprovalCard';

const App = () => {
  return (
    <div className='ui container comments'>
    <ApprovalCard>asdasdasdas</ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author='Alex'
          timeAgo='Today at 4:45PM'
          content='Nice blog post'
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author='Jane'
          timeAgo='Today at 2:00AM'
          content='I like the subject'
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author='Sam'
          timeAgo='Yesterday at 5:00PM'
          content='I like the writing'
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
