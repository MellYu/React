import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './profile/profile.js';
import user from './json/user.json';
import Statistics from './statistic/statistics.js';
import statisticalData from './statistic/statistical-data.json';
import FriendsList from './friends-list/friends-list.js';
import friends from './friends-list/friends.json';
import TransactionHistory from './transactions/transaction-func.js';
import transactions from './transactions/transactions.json';

function App (){
  return <>
  <Profile
    name={user.name}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
  />
  <Statistics title="Upload stats" stats={statisticalData} />
  <FriendsList friends={friends} />
  <TransactionHistory items={transactions} />,
  </>
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);