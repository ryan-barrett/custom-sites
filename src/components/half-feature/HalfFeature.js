import React, { Component } from 'react';
import Modal from 'react-modal';
import './HalfFeature.css';

const configureModalStyles = {
  content: {
    display: 'flex',
    flexDirection: 'column',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height: '90%',
    width: '90%'
  }
};

class HalfFeature extends Component {
  constructor(props) {
    super(props);

    this.state = {
      configureModalIsOpen: false
    };

    this.openConfigureModal = this.openConfigureModal.bind(this);
    this.closeConfigureModal = this.closeConfigureModal.bind(this);
    this.halfFeatureEditState = this.halfFeatureEditState.bind(this);
    this.halfFeatureSubmit = this.halfFeatureSubmit.bind(this);
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
    console.error(error);
  }

  debounce(func, delay) {
    let inDebounce;
    return function() {
      const context = this;
      const args = arguments;
      clearTimeout(inDebounce);
      inDebounce = setTimeout(() => func.apply(context, args), delay);
    };
  }

  halfFeatureEditState() {
    const that = this;
    const readURL = () => {
      try {
        var file = document.getElementById('half-feature-file').files[0];
      } catch (error) {
        console.error(error);
      }
      var reader = new FileReader();
      reader.onloadend = function() {
        const splashContent = document.querySelector('.half-feature-splash');

        try {
          splashContent.style.backgroundImage = 'url(' + reader.result + ')';
          that.setState({ url: reader.result });
        } catch (error) {
          console.error(error);
        }
        const uploader = document.getElementById('half-feature-file');

        if (uploader) {
          uploader.remove();
        }
        try {
          splashContent.classList.remove('empty-component');
        } catch (error) {
          console.error(error);
        }
      };
      if (file) {
        reader.readAsDataURL(file);
      } else {
      }
    };
    try {
      const uploaderInput = document.querySelectorAll(
        '.ReactModal__Content--after-open > .half-feature-splash > input'
      )[0];
      uploaderInput.addEventListener('change', readURL, true);
    } catch (error) {
      console.error(error);
    }
  }

  async openConfigureModal() {
    await this.setState({ configureModalIsOpen: true });
    this.halfFeatureEditState();
  }

  closeConfigureModal() {
    this.setState({ configureModalIsOpen: false });
  }

  async halfFeatureSubmit(e) {
    e.preventDefault();
    const { assignComponent } = this.props;

    const title = document.querySelector('.half-feature-title').value;
    const body = document.querySelector('.half-feature-configure-body').value;
    const splashUrl = this.state.url;
    await this.setState({
      featureData: {
        title,
        body,
        splashUrl
      }
    });
    this.closeConfigureModal();
    const { featureData } = this.state;
    assignComponent('halfFeature', featureData);
  }

  render() {
    const { assignComponent, emptyComponent } = this.props;
    const { configureModalIsOpen } = this.state;
    if (emptyComponent) {
      return (
        <div
          className="half-feature component-list-view"
          onClick={this.openConfigureModal}
        >
          <h2>A Title Here</h2>
          <img
            className="half-image"
            src="data:image/png;base64,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"
          />
          <div className="text-content">
            All the content goes hereAll the content goes hereAll the content
            goes hereAll the content goes hereAll the content goes here
          </div>
          <Modal
            isOpen={configureModalIsOpen}
            onRequestClose={this.closeConfigureModal}
            style={configureModalStyles}
            contentLabel="Configure Component"
          >
            <div className="half-feature-splash empty-component">
              <input
                type="file"
                id="half-feature-file"
                name="background-image"
              />
            </div>
            <form className="half-feature-form">
              <label
                className="configure-half-feature-label"
                htmlFor="configure-title"
              >
                Title
              </label>
              <input
                key="configure-feature-title"
                name="configure-title"
                maxLength="36"
                className="half-feature-title"
              />
              <label
                className="configure-half-feature-label"
                htmlFor="configure-body"
              >
                Body
              </label>
              <textarea
                key="configure-feature-body"
                name="configure-body"
                maxLength="100"
                className="half-feature-configure-body"
              />
              <button
                className="half-feature-submit"
                onClick={this.halfFeatureSubmit}
              >
                Submit
              </button>
            </form>
          </Modal>
        </div>
      );
    } else {
      const { title, splashUrl, body } = this.props.givenProps;
      return (
        <div className="half-feature live-component">
          <h2>{title}</h2>
          <img className="half-image-live" src={splashUrl} />
          <div className="text-content">{body}</div>
        </div>
      );
    }
  }
}

export default HalfFeature;
