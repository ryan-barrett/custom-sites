import React, { Component } from 'react';
import './App.css';
import plusIcon from './assets/icons/plus.png';
import thirdsRow from './assets/images/1-1-1row.png';
import halfRow from './assets/images/1-1row.png';
import fullRow from './assets/images/1row.png';
import leftTiltRow from './assets/images/2-1row.png';
import rightTiltRow from './assets/images/1-2row.png';
import Header from './components/header/Header';
import Modal from 'react-modal';
import Row from './components/row/Row';

Modal.setAppElement('#root');

const rowModalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height: '30%',
    width: '30%'
  }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isComponentModalOpen: false,
      modalRowIsOpen: false,
      pictures: [],
      rows: []
    };
    this.openRowModal = this.openRowModal.bind(this);
    this.closeRowModal = this.closeRowModal.bind(this);
    this.addNewRow = this.addNewRow.bind(this);
  }

  openRowModal() {
    this.setState({ modalRowIsOpen: true });
  }

  closeRowModal() {
    this.setState({ modalRowIsOpen: false });
  }

  addNewRow(e) {
    const { rows } = this.state;
    rows.push(e.target.getAttribute('value'));
    this.setState({ rows: rows });
    this.closeRowModal();
  }

  componentDidMount() {
    document.getElementById('getval').addEventListener('change', readURL, true);
    function readURL() {
      var file = document.getElementById('getval').files[0];
      var reader = new FileReader();
      reader.onloadend = function() {
        const splashContent = document.querySelector('.splash-content');
        splashContent.style.backgroundImage = 'url(' + reader.result + ')';
        const uploader = document.getElementById('getval');
        uploader.remove();
        splashContent.classList.remove('empty-component');
      };
      if (file) {
        reader.readAsDataURL(file);
      } else {
      }
    }
  }

  render() {
    const { modalRowIsOpen, closeRowModal, rows } = this.state;
    const rowsToRender = rows.map(row => {
      return <Row size={row} />;
    });
    return (
      <div className="app">
        <Header />
        <div className="splash-content empty-component">
          <input type="file" id="getval" name="background-image" />
        </div>
        <div className="main-content">{rowsToRender}</div>
        <button className="add-row" onClick={this.openRowModal}>
          <img className="plus-icon" src={plusIcon} />
        </button>
        <Modal
          isOpen={modalRowIsOpen}
          onRequestClose={this.closeRowModal}
          style={rowModalStyles}
          contentLabel="Add Row"
        >
          <div className="row-type-modal">
            <h3>Choose a row type:</h3>
            <div className="row-type">
              <img
                className="row-img"
                src={fullRow}
                value="1"
                onClick={this.addNewRow}
              />
            </div>
            <div className="row-type">
              <img
                className="row-img"
                src={halfRow}
                value="1:1"
                onClick={this.addNewRow}
              />
            </div>
            <div className="row-type">
              <img
                className="row-img"
                src={thirdsRow}
                value="1:1:1"
                onClick={this.addNewRow}
              />
            </div>
            <div className="row-type">
              <img
                className="row-img"
                src={leftTiltRow}
                value="2:1"
                onClick={this.addNewRow}
              />
            </div>
            <div className="row-type">
              <img
                className="row-img"
                src={rightTiltRow}
                value="1:2"
                onClick={this.addNewRow}
              />
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default App;
