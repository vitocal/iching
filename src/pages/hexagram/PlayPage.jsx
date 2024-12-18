import isEmpty from "lodash/isEmpty";

import { Component } from "preact";
import { connect } from "react-redux";

import { withRouter } from "react-router";

import { getHexagram } from "../../constants/IchingLookup";
import { getAsset } from "../../constants/utils";

import * as actions from "../../actions/play";

import HexagramInfoCard from "../../components/HexagramInfoCard";

class PlayPage extends Component {
  getInitialState() {
    return { already_played: false };
  }

  componentDidMount() {
    /** clear hexagram and question, if dirty */
    if (this.props.hexagram !== -1) {
      this.props.clearHexagram();
      this.textarea.value = "";
    }
  }

  render() {
    return (
      <div className="playpage-container">
        <form className="canvas" action="/" onSubmit={this.throwDices}>
          <div className="infoArea">
            <div className="lblquestion">
              <h2 className="title lblquestion-appear lblquestion-appear-active">
                <label htmlFor="question">Ask a question</label>
              </h2>
            </div>
            <div className="question">
              <input
                ref={el => (this.textarea = el)}
                id="question"
                type="text"
                className="text"
                inputMode="text"
                spellCheck="false"
              />
            </div>
          </div>

          <div className="ichingDragArea">
            <input
              type="submit"
              className="gongo"
              value=" "
              ref={el => (this.gongo = el)}
              onPointerDown={this.onGongoHold}
              aria-label="Play"
            />
            <audio
              ref={el => (this.gongosound = el)}
              src={getAsset("audio/bell-resonanceG.mp3")}
              preload="auto"
            />
          </div>
        </form>
      </div>
    );
  }

  setFocus() {
    if (this.textarea) this.textarea.focus();
  }

  /** @deprecated */
  renderPreviewCard(opts = {}) {
    let { hexagram } = this.props;

    if (!isEmpty(hexagram)) {
      return (
        <HexagramInfoCard
          key={hexagram.number}
          hexagram={hexagram}
          display_trigrams
          {...opts}
        />
      );
    } else {
      return false;
    }
  }

  onGongoHold = ev => {
    this.gongo.className = "gongo down";
    window.addEventListener("pointerup", this.onGongoRelease);
  };

  onGongoRelease = ev => {
    window.removeEventListener("pointerup", this.onGongoRelease);

    // add animation
    this.gongo.className = "gongo hit";

    // play sound
    if (this.props.preferences.enable_gongosound) {
      let au = this.gongosound;
      if (au.play) {
        au.currentTime = 0.0;
        au.play();
      }
    }

    this.throwDices();
  };

  /**
   * Generate a new hexagram
   */
  throwDices = ev => {
    if (ev) {
      ev.preventDefault();
      ev.stopPropagation();
    }

    this.props.clearHexagram();

    setTimeout(() => {
      //window.store.dispatch(HexagramActions.clearHexagram());
      this.props.generateHexagram().then(c => {
        this.setState({ already_played: true });
        this.goToHexagram();
      });
    }, this.props.animation_timeout);

    return false;
  };

  goToHexagram = () => {
    this.props.history.push(`/details/${this.props.hexagram.number}`);
  };
}

PlayPage.defaultProps = {
  hexagram: {},
  animation_timeout: 30
};

export default connect(
  state => ({
    hexagram: getHexagram(state.play_hexagram),
    preferences: state.preferences
  }),
  dispatch => ({
    generateHexagram: () => dispatch(actions.generateHexagram()),
    clearHexagram: () => {
      dispatch(actions.clearHexagram());
    }
  })
)(PlayPage);
