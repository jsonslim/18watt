import React, { Component } from "react";
import Header from "../../components/header/Header.js";
import Footer from "../../components/footer/Footer.js";
import Button from "../../components/button/Button.js";
import TopButton from "../../components/topButton/TopButton.js";

import "./Agb.css";
import AgbImg from "./AgbImg.js";

class Agb extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <>
        <Header theme={theme} />
        <div className="agb-container">
          <h3>Allgemeine Geschäftsbedingungen (AGB)</h3>
          <p>
            <strong>Letzte Aktualisierung:</strong> 22. Juni 2025
          </p>

          <h4>1. Anbieterinformation</h4>
          <p>
            Ich bin freiberuflicher Dienstleister mit Sitz in Deutschland. Name:
            Sergey Tarasov E-Mail: sergey@example.com WhatsApp: +49 XXX XXXXXXX
            Sitz: Leipzig, Deutschland
          </p>

          <h4>2. Leistungsbeschreibung</h4>
          <p>
            Die auf dieser Website dargestellten Dienstleistungen, wie z. B.
            Video-Editing, Webentwicklung und musikalische Gestaltung, stellen
            kein bindendes Angebot dar. Alle Details zu Leistungen, Preisen und
            Lieferzeiten werden individuell über WhatsApp oder einen anderen
            Messenger vereinbart.
          </p>

          <h4>3. Vertragsschluss</h4>
          <p>
            Ein Vertrag über die Erbringung von Dienstleistungen kommt erst
            zustande, wenn alle Bedingungen (Leistungsumfang, Preis,
            Lieferfrist) in der schriftlichen Kommunikation (z. B. WhatsApp)
            bestätigt wurden. Durch die Kontaktaufnahme über die Website oder
            einen Messenger akzeptieren Sie diese AGB.
          </p>

          <h4>4. Zahlung</h4>
          <p>
            Die Zahlung erfolgt je nach Vereinbarung per: – Banküberweisung –
            PayPal – Wise – Oder andere vereinbarte Methode Teil- oder
            vollständige Vorauszahlung kann erforderlich sein.
          </p>

          <h4>5. Haftung</h4>
          <p>
            Ich verpflichte mich, die vereinbarten Dienstleistungen gemäß der
            individuell abgestimmten Anforderungen zu erbringen. Der Kunde ist
            verpflichtet, alle notwendigen Informationen zur Verfügung zu
            stellen und Zahlungen fristgerecht zu leisten. Bei höherer Gewalt
            oder anderen unvorhergesehenen Ereignissen wird eine einvernehmliche
            Lösung angestrebt.
          </p>

          <h4>6. Datenschutz</h4>
          <p>
            Alle vom Kunden bereitgestellten Daten werden ausschließlich zur
            Durchführung der vereinbarten Dienstleistung verwendet und nicht an
            Dritte weitergegeben, außer gesetzlich vorgeschrieben.
          </p>

          <h4>7. Änderungen</h4>
          <p>
            Ich behalte mir das Recht vor, diese AGB jederzeit zu ändern. Die
            jeweils aktuelle Version ist auf der Website verfügbar.
          </p>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
      </>
    );
  }
}

export default Agb;
