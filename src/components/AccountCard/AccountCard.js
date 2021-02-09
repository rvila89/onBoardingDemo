import React from 'react';
import PropTypes from 'prop-types';
import {
  UiCard,
  UiCardBody,
  UiCardHeader,
  UiIcon,
} from '@absis-components/react';

const AccountCard = ({ name, iban, amount, onCardClick }) => {
  const renderIconByAmount = amount => {
    let nameIcon = 'sport';
    if (amount >= 5000) {
      nameIcon = 'deposit';
    } else if (amount > 500) {
      nameIcon = 'loan';
    }
    return <UiIcon className="mr-2" name={nameIcon} />;
  };
  return (
    <UiCard onAbsisCardClick={onCardClick} clickable="true">
      <UiCardHeader link="true">
        <UiIcon slot="start" name="euro" size="l"></UiIcon>
        <div>{name}</div>
      </UiCardHeader>
      <UiCardBody>
        <div className="row">
          <div className="col-md-12 font--size-100 font--weight-bold font--color-caixabank-blue text-center mb-3">
            {iban}
          </div>
        </div>
        <div
          className={`col-md-12 font--size-120 font--weight-bol text-center ${
            amount > 500 ? 'font--color-green' : 'font--color-red'
          }`}
        >
          {renderIconByAmount(amount)}
          {amount}
        </div>
      </UiCardBody>
    </UiCard>
  );
};

AccountCard.propTypes = {
  name: PropTypes.string,
  iban: PropTypes.string,
  amount: PropTypes.number,
  onCardClick: PropTypes.func,
};

export default AccountCard;
