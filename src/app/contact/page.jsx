import "./Contact.css";

export default function Contact() {
  return (
    <>
      <div className="contact-page">
        <h2>CONTACT</h2>
        <div className="contact-content">
          <div className="contact-section">
            {" "}
            <h3>EMAIL:</h3>
            <p className="email-address">
              Give us a shout at{" "}
              <a className="email-link" href="mailto:bonjour.hi@entretemps.ca">
                hello@wastedeffort.ca
              </a>
            </p>
          </div>
          <div className="contact-section">
            <h3>IRL:</h3>
            <p>4307 rue Sainte Catherine E</p>
            <p>Montreal QC H1V 1Y1</p>
          </div>
        </div>
      </div>
    </>
  );
}
