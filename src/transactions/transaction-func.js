import React from 'react';
import styles from './transactions.module.css';
import PropTypes from "prop-types";

function TransactionHistory({items}){
    return (
        <table className={styles.history}>
  <thead className={styles.header}>
    <tr>
      <th className={styles.headerItem}>Type</th>
      <th className={styles.headerItem}>Amount</th>
      <th className={styles.headerItem}>Currency</th>
    </tr>
  </thead>

  <tbody>
   {items.map(item=>
     <tr key={item.id}>
     <td className={styles.bodyItem}>{item.type}</td>
     <td className={styles.bodyItem}>{item.amount}</td>
     <td className={styles.bodyItem}>{item.currency}</td>
   </tr>)}
  </tbody>
</table>
    )
};

TransactionHistory.propTypes={
    items: PropTypes.array.isRequired
}

export default TransactionHistory;