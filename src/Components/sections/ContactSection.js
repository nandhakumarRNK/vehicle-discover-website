import React, { Component } from "react";

export class ContactSection extends Component {
  render() {
    return (
      <div>
        <section class="contact" id="contact">
          <h1 class="heading">
            <span>Contact</span> Us
          </h1>
          <div class="row">
            <iframe title="locationMap"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d25767.620821249904!2d80.2891895994064!3d13.096704300341122!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526f4fcf05b387%3A0x4085c2f612169bf7!2sChennai%20Sri%20Kaalikambal%20Kamadeswarar%20Temple!5e1!3m2!1sen!2sin!4v1672903277678!5m2!1sen!2sin"
              allowfullscreen=""
              loading="lazy"
              class="map"
            ></iframe>
            <form action="">
              <h3>get in touch with us</h3>
              <input type="text" placeholder="Name" class="box" />
              <input type="email" placeholder="Enter your email" class="box" />
              <textarea
                name="message"
                placeholder="Your message..."
                id="box"
                cols="30"
                rows="10"
                class="box"
              ></textarea>
              <input type="submit" value="send message" class="btn" />
            </form>
          </div>
        </section>
      </div>
    );
  }
}

export default ContactSection;
