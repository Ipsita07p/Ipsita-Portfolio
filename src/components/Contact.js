import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="buttons">
        <a
          href="mailto:ipsita.pati2000@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <button className="email-button">
            <img src="./images/envelope-solid.svg" />
            Email
          </button>
        </a>
      </div>
    </section>
  );
}
