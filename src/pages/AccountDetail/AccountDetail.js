import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { http } from '@absis/core';

const AccountDetail = () => {
  let { accountId } = useParams();
  const [accountDetail, setAccountDetail] = useState([]);

  useEffect(() => {
    http
      .call('accountDetail', {
        pathParams: {
          accountId: accountId,
        },
      })
      .then(result => {
        setAccountDetail(JSON.stringify(result.data));
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <section>
      <h1>AccountDetail {accountId}</h1>
      <div>{accountDetail}</div>
    </section>
  );
};

export default AccountDetail;
