import { Component } from "preact";

import { getTrigramByName } from "../constants/IchingLookup";

import { HexagramImage, TrigramImage } from "./HexagramImage";

const styles = {
  popover: {
    padding: 10,
    font_size: "2.0em"
  }
};

export default class HexagramInfoCard extends Component {
  state = {
    popover_open: false,
    trigram: {
      name: "",
      wilhelm: "",
      body: "",
      animal: "",
      animal_name: "",
      image: "",
      image_name: ""
    }
  };

  render() {
    let { name, number, description, trigrams } = this.props.hexagram;
    let innerTrigrams = this.innerTrigrams(
      this.props.display_trigrams || false
    );

    let detail_url = `/details/${number}/`;
    return (
      <div className="hexagram-card" onClick={this.props.onClick}>
        {innerTrigrams}

        <h1 className="title">{description}</h1>

        <HexagramImage below={trigrams.below} above={trigrams.above} />
      </div>
    );
  }

  innerTrigrams(enabled) {
    let above = getTrigramByName(this.props.hexagram.trigrams.above.title);
    let below = getTrigramByName(this.props.hexagram.trigrams.below.title);

    if (enabled) {
      return (
        <div className="trigrams">
          <div className="above">
            <div className="label">{above && above.image}</div>
          </div>
          <div className="below">
            <div className="label">{below && below.image}</div>
          </div>
        </div>
      );
    } else {
      return <div />;
    }
  }

  handleRequestClose() {
    this.setState({
      popover_open: false
    });
  }
}
HexagramInfoCard.defaultProps = {
  onClick: () => {},
  hexagram: {
    name: "",
    number: 0,
    description: "",
    trigrams: { above: { title: "" }, below: { title: "" } }
  }
};
