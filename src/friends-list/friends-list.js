import React from 'react';
import styles from './friends-styles.module.css';
import PropTypes from "prop-types";

function FriendsList({friends}) {
  return (
    <ul className={styles.list}>
    {friends.map(friend =>
      <li key={friend.id} className={styles.item}>
      <span className={friend.isOnline? styles.statusIsOnline : styles.statusIsOffline}></span>
      <img className={styles.avatar} src={friend.avatar} alt="avatar" width="48" />
    <p className="name">{friend.name}</p>
    </li>
      )}
    </ul>
  );
}

FriendsList.propTypes={
  friends: PropTypes.array,
}

export default FriendsList;
