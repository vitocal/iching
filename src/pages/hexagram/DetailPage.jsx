import toNumber from "lodash/toNumber";
import isEmpty from "lodash/isEmpty";

import { Component } from "preact";
import classNames from "classnames";

import { getHexagram } from "../../constants/IchingLookup";
import {
  getAsset,
  hyphenate,
  splitIntoParagraphs
} from "../../constants/utils";

import HexagramInfoCard from "../../components/HexagramInfoCard";

class DetailPage extends Component {
  render() {
    let hex_number = toNumber(this.props.match.params.number);
    let hex = getHexagram(hex_number);

    let tarot_image = getAsset(`img/tarot/Tao_${hex.number}.jpg`);
    return (
      <div className={classNames("detailspage-container")}>
        <HexagramInfoCard hexagram={hex} display_trigrams />

        <div className="interpretation">
          <div className="highlight">
            <div className="tarot">
              <img src={tarot_image} alt={hex.description} />
            </div>
          </div>
          {this.formatText(hex.interpretation.resume)}

          <h3>The Image</h3>
          <q className="subQuote">
            {this.formatQuote(hex.interpretation.image.oracle)}
          </q>
          {this.formatText(hex.interpretation.image.image)}

          <h3>The Judgement</h3>
          <q className="subQuote">
            {this.formatQuote(hex.interpretation.oracle)}
          </q>
          {this.formatText(hex.interpretation.judgment)}
        </div>
      </div>
    );
  }

  lineId(text) {
    return text.split("\n")[0].toLowerCase();
  }

  /* Format text paragraphs between <p> */
  formatText(text) {
    let paragraphs = text
      .split("\n\n")
      .map(p => p.replace(/\n/g, "").trim())
      .map(p => splitIntoParagraphs(p, 100))
      .flat(Infinity);
    let txtHyphenated = paragraphs.map(hyphenate);
    let fmted = txtHyphenated.map(p => <p>{p}</p>);
    return fmted;
  }

  /* Format quote */
  formatQuote(text) {
    let quote = text.replace(/\t/g, "");
    return hyphenate(quote)
      .split("\n")
      .join("\n");
  }
}

DetailPage.defaultProps = {
  hexagram: {
    number: 0,
    name: "",
    description: "",
    trigrams: {
      above: {
        title: "",
        description: ""
      },
      below: {
        title: "",
        description: ""
      }
    },
    interpretation: {
      oracle: "",
      resume: "",
      judgment: "",
      image: {
        oracle: "",
        image: ""
      },
      lines: [
        {
          poem: "",
          expl: ""
        }
      ]
    }
  }
};

export default DetailPage;
