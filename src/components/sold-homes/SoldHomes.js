import React, { Component } from 'react';
import './SoldHomes.css';

const SoldHomes = props => {
  localStorage.setItem(
    'splitTreatments',
    JSON.stringify({
      'teams-sold-homes': 'on',
      'agents-sold-homes': 'on',
      'companies-sold-homes': 'on'
    })
  );
  const { emptyComponent, assignComponent } = props;
  if (emptyComponent) {
    return (
      <div
        className="sold-homes-container component-list-view"
        onClick={() => assignComponent('soldHomes')}
      >
        {soldHomesMarkup}
      </div>
    );
  } else {
    return <div className="sold-homes-container">{soldHomesMarkup}</div>;
  }
};
export default SoldHomes;
