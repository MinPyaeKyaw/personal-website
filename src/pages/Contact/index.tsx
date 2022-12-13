import React from "react";
import Title from "../../components/Title";

// Framer Motion
import TransitionAnimator from "../../components/TransitionAnimator";

export default function Contact() {
  return (
    <TransitionAnimator>
      <div className="contact_container">
        <Title title="Contact" />

        <img className="contact_bird" alt="contact" src={require('./../../assets/images/contact.svg').default} />
      
        <div className="contact_content">
          <div className="contact_list">+95 9899 587 877</div>
          <div className="contact_list">saiminpyaekyaw@gmail.com</div>
          <div className="contact_list">No.215(5a), Maharborga Street 2, Kamaryut township <br />Yangon, Myanmar</div>
        </div>
      </div>
    </TransitionAnimator>
  );
}
