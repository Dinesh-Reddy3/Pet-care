 import '../assets/css/Contact.css';
import Nav from "./Nav";
import Footer from "./Footer";
import logo1 from '../assets/images/logo1.jpg';
import { FaWhatsapp, FaInstagram, FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    petName: "",
    email: "",
    phone: "",
  });

  const handleChange = (e :any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e :any) => {
    e.preventDefault();
    alert(`Hello ${formData.name}, we got your details!\nPet Name: ${formData.petName}\nPhone: ${formData.phone}`);
    setFormData({ name: "", petName: "", email: "", phone: "" });
  };

  return (
    <div>
      <Nav />

      <div className="contact">
        {/* Intro Section */}
        <div className="cont">
          <div>
            <img src={logo1} alt="logo1" className="cont1" style={{ width: "200px" }} />
          </div>
          <h2>Contact Us</h2>
          <p>
            We are a group of passionate pet lovers working with a mission to help pet <br />
            parents take care of their little friends. We are trying to build a community <br />
            for pet parents where they can store health records, gather information <br />
            from our experienced vets all consolidated on a single platform.
          </p>
        </div>

        {/* Social Section */}
        <div className="connect">
          <div className="connect1">Connect with us online</div>
          <div className="social-icons">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram style={{ color: "#E4405F", fontSize: "24px" }} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook style={{ color: "#1877F2", fontSize: "24px" }} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube style={{ color: "#FF0000", fontSize: "24px" }} />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter style={{ color: "#000000", fontSize: "24px" }} />
            </a>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp style={{ color: "#25D366", fontSize: "24px" }} />
            </a>
          </div>
          <div className="connect2">
            <ul>
              <li>Contact : 9876543210</li>
              <li>Email : vndpetservices@gmail.com</li>
            </ul>
          </div>
        </div>

        {/* Workspace Section */}
        <div className="cont2">
          <h3 className="connect1">Our Workspace</h3>
          <p className="connect3">
            VND Pet Services Limited, Sy 13/5, Hulimavu Main Road,<br />
            Bannerghatta Main Rd, near Sri Sairam Hospital, Bengaluru, Karnataka <br />560076
          </p>
        </div>

        {/* Form Section */}
        <div className="cont3">
          <h3 className="connect5">Your Details</h3>
          <div className="form">
            <form onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>
              {/* Name Input */}
              <div>
                <div className="forma">Name</div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                  className="formb"
                />
              </div>

              {/* Pet Name Input */}
              <div>
                <div className="formaa">Pet Name</div>
                <input
                  type="text"
                  name="petName"
                  value={formData.petName}
                  onChange={handleChange}
                  placeholder="Pet Name"
                  required
                  className="formbb"
                />
              </div>

              {/* Email Input */}
              <div>
                <div className="formc">Email</div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="formd"
                />
              </div>

              {/* Phone Input */}
              <div>
                <div className="forme">Phone</div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  pattern="[0-9]{10}"
                  placeholder="9876543210"
                  required
                  className="formf"
                />
              </div>

              {/* Submit Button */}
              <button type="submit" className="formg">Submit</button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
