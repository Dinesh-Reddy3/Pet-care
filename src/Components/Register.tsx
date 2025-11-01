 import { useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import "../assets/css/Register.css";
import { HiOutlineX } from "react-icons/hi";
import { Link } from "react-router-dom";
import banner2 from "../assets/images/banner2.jpg";

const Register = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);

  // error states
  const [phoneError, setPhoneError] = useState("");
  const [otpError, setOtpError] = useState("");

  const divStyle4 = {
    backgroundImage: `url(${banner2})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "500px",
    width: "100%",
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isOtpSent) {
      // Step 1: validate phone
      if (phone.trim() === "") {
        setPhoneError("📱 Please enter your phone number");
        return;
      }
      if (!/^\d{10}$/.test(phone)) {
        setPhoneError("⚠️ Enter a valid 10-digit phone number");
        return;
      }
      setPhoneError("");
      setIsOtpSent(true);
      // (Simulate sending OTP)
    } else {
      // Step 2: validate OTP
      if (otp.trim() === "") {
        setOtpError("🔐 Please enter the OTP");
        return;
      }
      if (!/^\d{4}$/.test(otp)) {
        setOtpError("⚠️ OTP must be 4 digits");
        return;
      }
      setOtpError("");
      alert("🎉 Phone number verified successfully!");
    }
  };

  return (
    <div>
      <Nav />
      <div className="reg1" style={divStyle4}>
        <div className="reg2">
          <div className="rega">
            <div className="regaa">Get Started!</div>
            <div className="regab">
              <Link to="/">
                <HiOutlineX className="text-gray-600 regab" />
              </Link>
            </div>
          </div>

          <form className="regb" onSubmit={handleSubmit}>
            {/* Phone Number Step */}
            {!isOtpSent && (
              <>
                <div className="regba">Phone Number</div>
                <input
                  type="tel"
                  placeholder="9876543210"
                  className={`regbb ${phoneError ? "error-border" : ""}`}
                  maxLength={10}
                  value={phone}
                  onChange={(event) => {
                    setPhone(event.target.value);
                    setPhoneError(""); // clear error on typing
                  }}
                />
                {phoneError && (
                  <div className="error-text">{phoneError}</div>
                )}
              </>
            )}

            {/* OTP Step */}
            {isOtpSent && (
              <>
                <div className="regca">Enter OTP</div>
                <input
                  type="text"
                  placeholder="XXXX"
                  className={`regcb ${otpError ? "error-border" : ""}`}
                  maxLength={4}
                  value={otp}
                  onChange={(event) => {
                    setOtp(event.target.value);
                    setOtpError("");
                  }}
                />
                {otpError && <div className="error-text">{otpError}</div>}
              </>
            )}

            {/* Single button */}
            <div>
              <button type="submit" className="regbc">
                {isOtpSent ? "Verify OTP" : "Get OTP"}
              </button>
            </div>

            {/* Terms */}
            <div>
              <div className="term2">By continuing, you agree to our</div>
              <div className="term">
                <Link to="/about"> About Us</Link>
                <Link to="#"> Privacy Policy </Link>
                <Link to="#"> Terms & Conditions</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
