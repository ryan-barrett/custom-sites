import React, { Component } from 'react';
import './Video.css';

class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editState: false,
      renderedComponent: false,
      url: ''
    };
    this.setUrl = this.setUrl.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.getId = this.getId.bind(this);
  }

  getId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);

    if (match && match[2].length == 11) {
      return match[2];
    } else {
      return 'error';
    }
  }

  setUrl() {
    const { assignComponent } = this.props;
    const urlVal = document.querySelector('.video-input').value;
    this.setState({ url: this.getId(urlVal) });
    assignComponent('video', {
      url: this.getId(urlVal),
      renderedComponent: true
    });
  }

  toggleEdit() {
    this.setState({ editState: true });
  }

  render() {
    const { editState } = this.state;
    const { givenProps } = this.props;
    let url, renderedComponent;
    if (givenProps) {
      url = givenProps.url;
      renderedComponent = givenProps.renderedComponent;
    }
    if (editState) {
      return (
        <div className="component-list-view input-url">
          <label className="video-label">Video Url</label>
          <input className="video-input" />
          <button type="submit" value="submit" onClick={this.setUrl}>
            Add
          </button>
        </div>
      );
    } else if (renderedComponent) {
      return (
        <iframe
          className="video-frame"
          width="555"
          height="315"
          src={`//www.youtube.com/embed/${url}`}
        />
      );
    } else {
      return (
        <img
          className="component-list-view youtube-placeholder"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/YouTube_play_buttom_icon_%282013-2017%29.svg/1024px-YouTube_play_buttom_icon_%282013-2017%29.svg.png"
          onClick={this.toggleEdit}
        />
      );
    }
  }
}

export default Video;
