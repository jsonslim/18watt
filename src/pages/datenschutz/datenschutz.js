import { Component } from "react";
import Header from "../../components/header/Header.js";
import Footer from "../../components/footer/Footer.js";

import "./datenschutz.css";

class Datenschutz extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <>
        <Header theme={theme} />
        <div className="ds-container">
          <h1>Datenschutz</h1>
          <p>
            Datenschutzerklärung Diese Website verwendet keine Cookies und
            erhebt keine personenbezogenen Daten automatisch. Wenn Sie mich per
            E-Mail oder über ein Kontaktformular kontaktieren, werden die von
            Ihnen übermittelten Daten (z. B. Name, E-Mail-Adresse)
            ausschließlich zur Bearbeitung Ihrer Anfrage verwendet. Diese
            Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
            Interesse). Die Daten werden nicht an Dritte weitergegeben und nach
            Abschluss der Kommunikation gelöscht, sofern keine gesetzliche
            Aufbewahrungspflicht besteht. Sie haben das Recht auf Auskunft,
            Berichtigung, Löschung, Einschränkung der Verarbeitung sowie
            Widerspruch.
          </p>
          <p>
            Verantwortlich für die Datenverarbeitung: Sergey Tarasov, Karlsplatz
            4, Ulm
          </p>
          <p>E-Mail: sergey.nodejs@gmail.com</p>
          <p>Letzte Aktualisierung: Juni 2025</p>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
      </>
    );
  }
}

export default Datenschutz;
