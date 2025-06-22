import React from "react";
import "./Footer.css";

export default function Footer(props) {
  return (
    <div className="footer-div">
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          © 2025 Sergey Tarasov <a href="/agb">AGB</a> |{" "}
          <a href="/datenschutz">Datenschutz</a> |{" "}
          <a href="/impressum">Impressum</a>
        </p>
    </div>
  );
}
