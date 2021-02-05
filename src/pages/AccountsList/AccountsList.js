import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { http } from '@absis/core';

const AccountsList = () => {
  const [accountsList, setAccountsList] = useState([]);

  useEffect(() => {
    http
      .call('accounts')
      .then(result => {
        setAccountsList(result.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {accountsList.map(account => (
        <p key={account.id}>
          <Link to={`accountsList/${account.id}`}>{account.name}</Link>
        </p>
      ))}
    </>
  );
};
export default AccountsList;
