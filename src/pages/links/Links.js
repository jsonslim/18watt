import { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./Links.css";

const links = [
  { name: "YouTube", url: "https://youtube.com/yourchannel" },
  { name: "Instagram", url: "https://instagram.com/yourprofile" },
  { name: "Threads", url: "https://www.threads.net/@yourhandle" },
  { name: "GitHub", url: "https://github.com/yourusername" },
  { name: "Fiverr", url: "https://fiverr.com/yourprofile" },
  { name: "Gumroad", url: "https://gumroad.com/yourprofile" },
];

class Links extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <>
        <Header theme={theme} />
        <div className="container">
          <div className="profile">
            <img src="/your-avatar.jpg" alt="Your Avatar" className="avatar" />
            <h1>Your Name</h1>
            <p>@yourhandle</p>
          </div>
          <div className="links">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                {link.name}
              </a>
            ))}
          </div>
          <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        </div>
      </>
    );
  }
}

export default Links;
