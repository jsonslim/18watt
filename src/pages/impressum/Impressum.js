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
          <p>
            Sergey Tarasov
            <br />
            Freiberuflicher IT-Dienstleister
            <br />
            Karlsplatz 4
            <br />
            89073 Ulm
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

          <p>Steuernummer: 2888040004680 (Finanzamt Ulm)</p>

          <p>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</p>
          <p>Sergey Tarasov, Anschrift wie oben</p>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
      </>
    );
  }
}

export default Impressum;
