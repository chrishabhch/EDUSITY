import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png"
import mail_icon from "../../assets/mail-icon.png"
import phone_icon from "../../assets/phone-icon.png"
import location_icon from "../../assets/location-icon.png"
import white_arrow from "../../assets/white-arrow.png"
const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "827b4403-e198-4d99-adfb-abd0c3a7dc4c");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  


  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempore quis odit sunt similique laborum recusandae cupiditate quisquam tenetur debitis.
        </p>
        <ul>
            <li> <img src={mail_icon} alt="..." /> rishabhchaudhary9818@gmail.com</li>
            <li> <img src={phone_icon} alt="..." /> +91 9818------</li>
            <li> <img src={location_icon} alt="..." /> 100 kallupura Nehru nagar III</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name="name" placeholder="Enter Your Name" required />
            <label > Phone Number</label>
            <input type="number" name="phone" placeholder="Enter ur number" required/>
            <label > Write Ur Message Here</label>
            <textarea name="message" rows="6" placeholder="Enter ur message" required></textarea>
            <button type="submit" className="btn dark-btn">Submit Now <img src={white_arrow} alt="..." /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
