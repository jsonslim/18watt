import React, { Component } from "react";
import Header from "../../components/header/Header.js";
import Footer from "../../components/footer/Footer.js";
import Button from "../../components/button/Button.js";

import "./Impressum.css";

class Impressum extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <>
        <Header theme={theme} />
        <div>
          <h1>Impressum</h1>

          <p>Angaben gemäß § 5 TMG:</p>
          <p>
            Sergey Tarasov
            <br />
            Freiberuflicher IT-Dienstleister
            <br />
            Musterstraße 123
            <br />
            04109 Leipzig
            <br />
            Deutschland
          </p>

          <p>Kontakt:</p>
          <p>
            Telefon: +49 176 31233953
            <br />
            E-Mail: sergey.nodejs@gmail.com
            <br />
            WhatsApp: +49 176 31233953
          </p>

          <p>Umsatzsteuer-ID:</p>
          <p>(Falls vorhanden: DE123456789)</p>

          <p>
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
          </p>
          <p>
            Sergey Tarasov
            <br />
            Anschrift wie oben
          </p>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
      </>
    );
  }
}

export default Impressum;
