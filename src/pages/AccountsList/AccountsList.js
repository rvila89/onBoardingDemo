import React, { useState, useEffect } from 'react';
import {
  UiButton,
  UiList,
  UiListItem,
  UiIcon,
  UiButtonGroup,
} from '@absis-components/react';
import { http, router } from '@absis/core';
import { LIST_MODE } from '../../utils/constants';
import AccountCard from '../../components/AccountCard/AccountCard';

const AccountsList = () => {
  const [accountsList, setAccountsList] = useState([]);
  let navigationManager = router.navigationManager();
  const [accountsListMode, setAccountsListMode] = useState(LIST_MODE.LIST);
  const handleGoHome = () => {
    router.navigateTo('/', navigationManager);
  };
  const goToAccountDetail = () => {
    router.navigateTo(
      '/accountsList/:Common',
      {
        type: 'Internal',
      },
      navigationManager
    );
  };
  const renderAccountList = () => (
    <div className="col-12">
      <UiList>
        {accountsList.map(account => (
          <UiListItem key={account.id} onClick={goToAccountDetail}>
            <div className="display-md-flex justify-md-between align-items-md-center">
              <div>
                <div className="font--weight-bold font--size-120 font--color-caixabank-blue">
                  {account.name}
                </div>
                <div>
                  <span className="font--size-100">{account.value}</span>
                </div>
              </div>
              <div>
                <span
                  className={`font--size-120 font--weight-bold ${
                    account.amount > 500
                      ? 'font--color-green'
                      : 'font--color-red'
                  }`}
                >
                  {account.amount}€
                </span>
                <UiIcon name="keyboard-arrow-right" className="ml-2" />
              </div>
            </div>
          </UiListItem>
        ))}
      </UiList>
    </div>
  );
  const renderAccountCardList = () => {
    return accountsList.map(account => {
      return (
        <div
          key={account.id}
          className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-12"
        >
          <AccountCard
            name={account.name}
            iban={account.value}
            amount={account.amount}
            onCardClick={goToAccountDetail}
          />
        </div>
      );
    });
  };

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
    <section className="container">
      <div className="row">
        <div className="col-12">
          <h1>Accounts List</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <UiButtonGroup
            direction="row"
            contentAlignment="left"
            onAbsisButtonGroupChange={e => setAccountsListMode(e.detail.value)}
            buttons={[
              {
                value: LIST_MODE.CARD,
                active: accountsListMode === LIST_MODE.CARD,
                disabled: false,
                icon: 'view-module',
              },
              {
                value: LIST_MODE.LIST,
                active: accountsListMode === LIST_MODE.LIST,
                disabled: false,
                icon: 'view-list',
              },
            ]}
          ></UiButtonGroup>
        </div>
      </div>
      <div className="row">
        {accountsListMode === LIST_MODE.LIST
          ? renderAccountList()
          : renderAccountCardList()}
      </div>
      <UiButton onAbsisButtonClick={handleGoHome}>Home</UiButton>
    </section>
  );
};
export default AccountsList;
