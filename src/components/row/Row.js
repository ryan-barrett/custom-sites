import React, { Component } from 'react';
import Modal from 'react-modal';
import Feature from '../feature/Feature';
import Video from '../video/Video';
import HalfFeature from '../half-feature/HalfFeature';
import FullFeature from '../full-feature/FullFeature';
import './Row.css';
import plusIcon from '../../assets/icons/plus.png';

const componentModalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height: '75%',
    width: '80%',
    display: 'flex'
  }
};

class Row extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalComponentIsOpen: false,
      availableComponents: [
        {
          feature: Feature,
          video: Video,
          halfFeature: HalfFeature,
          fullFeature: FullFeature,
        }
      ]
    };
    const { size } = this.props;
    switch (size) {
      case '1':
        this.state.rowComponent = [{ component: '', props: '' }];
        break;
      case '1:1':
      case '2:1':
      case '1:2':
        this.state.rowComponent = [
          { component: '', props: '' },
          { component: '', props: '' }
        ];
        break;
      case '1:1:1':
        this.state.rowComponent = [
          { component: '', props: '' },
          { component: '', props: '' },
          { component: '', props: '' }
        ];
    }
    this.assignComponent = this.assignComponent.bind(this);
    this.findComponent = this.findComponent.bind(this);
    this.closeComponentModal = this.closeComponentModal.bind(this);
    this.openComponentModal = this.openComponentModal.bind(this);
  }

  assignComponent(component, props) {
    const { rowComponent, clickedIndex } = this.state;
    rowComponent[clickedIndex].component = component;
    rowComponent[clickedIndex].props = props;
    this.setState({ rowComponent: rowComponent });
    this.closeComponentModal();
  }

  closeComponentModal() {
    this.setState({ modalComponentIsOpen: false });
    console.log(this.state);
  }

  openComponentModal(e) {
    this.setState({ modalComponentIsOpen: true });
    this.setState({ clickedIndex: e.target.closest('.grid-item').id });
    const overlay = document.querySelector('.ReactModal__Overlay--after-open');
  }

  findComponent(rowComponent) {
    const { availableComponents } = this.state; //TODO: optimize
    let foundComponent;
    availableComponents.forEach(component => {
      if (Object.keys(component).includes(rowComponent.component)) {
        foundComponent = Object.values(component)[
          Object.keys(component).indexOf(rowComponent.component)
        ];
      }
    });
    return React.createElement(foundComponent, {
      givenProps: rowComponent.props
    });
  }

  render() {
    const { size } = this.props;
    const { modalComponentIsOpen, rowComponent, clickedIndex } = this.state;

    let rowMarkup;
    let rowModal;
    switch (size) {
      case '1':
        rowMarkup = (
          <div className="grid-container-half">
            {rowComponent[0].component ? (
              this.findComponent(rowComponent[0])
            ) : (
              <div className="grid-container">
                <div
                  className="grid-item grid-item-large empty-component"
                  id={0}
                  onClick={this.openComponentModal}
                >
                  <img className="plus-icon" src={plusIcon} />
                </div>
              </div>
            )}
          </div>
        );
        rowModal = (
          <div className="modal-container">
            <FullFeature
              assignComponent={this.assignComponent}
              emptyComponent
            />
          </div>
        );
        break;
      case '1:1':
        rowMarkup = (
          <div className="grid-container-half">
            {rowComponent[0].component ? (
              this.findComponent(rowComponent[0])
            ) : (
              <div
                className="grid-item grid-item-half-left empty-component"
                id={0}
                onClick={this.openComponentModal}
              >
                <img className="plus-icon" src={plusIcon} />
              </div>
            )}
            {rowComponent[1].component ? (
              this.findComponent(rowComponent[1])
            ) : (
              <div
                className="grid-item grid-item-half-right empty-component"
                id={1}
                onClick={this.openComponentModal}
              >
                <img className="plus-icon" src={plusIcon} />
              </div>
            )}
          </div>
        );
        rowModal = (
          <div className="modal-container">
            <Video assignComponent={this.assignComponent} emptyComponent />
            <HalfFeature
              assignComponent={this.assignComponent}
              emptyComponent
            />
          </div>
        );
        break;
      case '2:1':
        rowMarkup = (
          <div className="grid-container">
            {rowComponent[0].component ? (
              this.findComponent(rowComponent[0])
            ) : (
              <div
                className="grid-item grid-item-medium-left empty-component"
                id={0}
                onClick={this.openComponentModal}
              >
                <img className="plus-icon" src={plusIcon} />
              </div>
            )}
            {rowComponent[1].component ? (
              this.findComponent(rowComponent[1])
            ) : (
              <div
                className="grid-item grid-item-small empty-component"
                id={1}
                onClick={this.openComponentModal}
              >
                <img className="plus-icon" src={plusIcon} />
              </div>
            )}
          </div>
        );
        if (clickedIndex == 0) {
          rowModal = (
            <div className="modal-container">
              <Video assignComponent={this.assignComponent} emptyComponent />
            </div>
          );
        } else {
          rowModal = (
            <div className="modal-container">
              <Feature
                assignComponent={this.assignComponent}
                featureNum={0}
                emptyComponent
              />
              <Feature
                assignComponent={this.assignComponent}
                featureNum={1}
                emptyComponent
              />
              <Feature
                assignComponent={this.assignComponent}
                featureNum={2}
                emptyComponent
              />
            </div>
          );
        }
        break;
      case '1:2':
        rowMarkup = (
          <div className="grid-container">
            <div
              className="grid-item grid-item-medium-right empty-component"
              id={0}
              onClick={this.openComponentModal}
            >
              <img className="plus-icon" src={plusIcon} />
            </div>
            <div
              className="grid-item grid-item-small empty-component"
              id={1}
              onClick={this.openComponentModal}
            >
              <img className="plus-icon" src={plusIcon} />
            </div>
          </div>
        );
        break;
      case '1:1:1':
        rowMarkup = (
          <div className="grid-container">
            {rowComponent[0].component ? (
              this.findComponent(rowComponent[0])
            ) : (
              <div
                className="grid-item grid-item-small empty-component"
                id={0}
                onClick={this.openComponentModal}
              >
                <img className="plus-icon" src={plusIcon} />
              </div>
            )}
            {rowComponent[1].component ? (
              this.findComponent(rowComponent[1])
            ) : (
              <div
                className="grid-item grid-item-small empty-component"
                id={1}
                onClick={this.openComponentModal}
              >
                <img className="plus-icon" src={plusIcon} />
              </div>
            )}
            {rowComponent[2].component ? (
              this.findComponent(rowComponent[2])
            ) : (
              <div
                className="grid-item grid-item-small empty-component"
                id={2}
                onClick={this.openComponentModal}
              >
                <img className="plus-icon" src={plusIcon} />
              </div>
            )}
          </div>
        );
        rowModal = (
          <div className="modal-container">
            <Feature
              assignComponent={this.assignComponent}
              featureNum={0}
              emptyComponent
            />
            <Feature
              assignComponent={this.assignComponent}
              featureNum={1}
              emptyComponent
            />
            <Feature
              assignComponent={this.assignComponent}
              featureNum={2}
              emptyComponent
            />
          </div>
        );
    }
    return (
      <div>
        {rowMarkup}
        <Modal
          isOpen={modalComponentIsOpen}
          onRequestClose={this.closeComponentModal}
          style={componentModalStyles}
          contentLabel="Add Component"
        >
          {rowModal}
        </Modal>
      </div>
    );
  }
}

export default Row;
