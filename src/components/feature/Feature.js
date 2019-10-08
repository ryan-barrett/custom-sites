import React, { Component } from 'react';
import './Feature.css';

class Feature extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let {
      assignComponent,
      emptyComponent,
      featureNum,
      givenProps
    } = this.props;
    console.log('TCL: Feature -> render -> givenProps', givenProps);
    if (givenProps !== undefined) {
      featureNum = givenProps;
    }
    console.log('TCL: Feature -> render -> featureNum', featureNum);
    if (emptyComponent) {
      switch (featureNum) {
        case 0:
          return (
            <div
              className="feature component-list-view"
              onClick={() => assignComponent('feature', featureNum)}
            >
              <h2>Homebuying Tips</h2>
              <img
                className="feature-img"
                src="https://static1.squarespace.com/static/58dbeeb9725e25892c40b66f/t/58fa275fb3db2b7583c6e436/1492789110820/?format=750w"
              />
              <div className="text-content">
                Buying a new home can be stressful - but it doesn't have to be
                with Home Sweet Heidi. Check out our tips for making the process
                a breeze.{' '}
              </div>
              <button className="more-info-button">More Info</button>
            </div>
          );
        case 1:
          return (
            <div
              className="feature component-list-view"
              onClick={() => assignComponent('feature', featureNum)}
            >
              <h2>Life & Soul of Raleigh</h2>
              <img
                className="feature-img"
                src="https://static1.squarespace.com/static/58dbeeb9725e25892c40b66f/t/58fa285ed482e9f64ac84968/1492789352004/?format=750w"
              />
              <div className="text-content">
                Discover the latest and greatest about Raleigh and the triangle
                area through the pages of Raleigh's top lifestyle publication,
                Walter Magazine.
              </div>
              <button className="more-info-button">More Info</button>
            </div>
          );
        case 2:
          return (
            <div
              className="feature component-list-view"
              onClick={() => assignComponent('feature', featureNum)}
            >
              <h2>Top Resources</h2>
              <img
                className="feature-img"
                src="https://static1.squarespace.com/static/58dbeeb9725e25892c40b66f/t/58fa2783b3db2b7583c6e6b4/1492789160574/Screen+Shot+2017-04-20+at+4.43.50+PM.png?format=750w"
              />
              <div className="text-content">
                Helping organize the journey through precise planning and
                preferred vendors, Home Sweet Heidi is able to help expedite the
                process with local, trusted professionals.
              </div>
              <button className="more-info-button">More Info</button>
            </div>
          );
      }
    } else {
      switch (featureNum) {
        case 0:
          return (
            <div
              className="feature"
              onClick={() => assignComponent('feature', featureNum)}
            >
              <h2>Homebuying Tips</h2>
              <img
                className="feature-img"
                src="https://static1.squarespace.com/static/58dbeeb9725e25892c40b66f/t/58fa275fb3db2b7583c6e436/1492789110820/?format=750w"
              />
              <div className="text-content">
                Buying a new home can be stressful - but it doesn't have to be
                with Home Sweet Heidi. Check out our tips for making the process
                a breeze.{' '}
              </div>
              <button className="more-info-button">More Info</button>
            </div>
          );
        case 1:
          return (
            <div
              className="feature"
              onClick={() => assignComponent('feature', featureNum)}
            >
              <h2>Life & Soul of Raleigh</h2>
              <img
                className="feature-img"
                src="https://static1.squarespace.com/static/58dbeeb9725e25892c40b66f/t/58fa285ed482e9f64ac84968/1492789352004/?format=750w"
              />
              <div className="text-content">
                Discover the latest and greatest about Raleigh and the triangle
                area through the pages of Raleigh's top lifestyle publication,
                Walter Magazine.
              </div>
              <button className="more-info-button">More Info</button>
            </div>
          );
        case 2:
          return (
            <div
              className="feature"
              onClick={() => assignComponent('feature', featureNum)}
            >
              <h2>Top Resources</h2>
              <img
                className="feature-img"
                src="https://static1.squarespace.com/static/58dbeeb9725e25892c40b66f/t/58fa2783b3db2b7583c6e6b4/1492789160574/Screen+Shot+2017-04-20+at+4.43.50+PM.png?format=750w"
              />
              <div className="text-content">
                Helping organize the journey through precise planning and
                preferred vendors, Home Sweet Heidi is able to help expedite the
                process with local, trusted professionals.
              </div>
              <button className="more-info-button">More Info</button>
            </div>
          );
      }
    }
  }
}

export default Feature;
