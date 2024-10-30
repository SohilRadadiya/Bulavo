import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast,ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Popup = ({ onClose }) => {
    const animationStyles = `
  @keyframes popupSlideIn {
    from {
      transform: translate(-50%, -60%);
      opacity: 0;
    }
    to {
      transform: translate(-50%, -50%);
      opacity: 1;
    }
  }
`;
useEffect(() => {
    // Create style element
    const styleSheet = document.createElement("style");
    styleSheet.innerText = animationStyles;
    document.head.appendChild(styleSheet);
  
    // Cleanup
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  const [selectedService, setSelectedService] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telnumber: "",
    altPhone: "",
    address: "",
    pincode: "",
    message: "",
  });

  // Effect to manage body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const regexPatterns = {
    name: /^[A-Za-z\s]+$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    telnumber: /^\d{10}$/,
    altPhone: /^\d{10}$/,
    address: /^[A-Za-z0-9\s,.-]+$/,
    pincode: /^\d{6}$/,
    message: /^.+$/,
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const { name, email, telnumber, altPhone, address, pincode, message } = formData;
  
    // Validate each field
    if (!regexPatterns.name.test(name)) {
      toast.error("Invalid name. Only letters and spaces are allowed.");
      return;
    }
    if (!regexPatterns.email.test(email)) {
      toast.error("Invalid email format.");
      return;
    }
    if (!regexPatterns.telnumber.test(telnumber)) {
      toast.error("Telephone number must be 10 digits.");
      return;
    }
    if (altPhone && !regexPatterns.altPhone.test(altPhone)) {
      toast.error("Alternative phone number must be 10 digits.");
      return;
    }
    if (!regexPatterns.address.test(address)) {
      toast.error("Address can only contain letters, numbers, and basic punctuation.");
      return;
    }
    if (!regexPatterns.pincode.test(pincode)) {
      toast.error("Pincode must be 6 digits.");
      return;
    }
    if (!regexPatterns.message.test(message)) {
      toast.error("Message cannot be empty.");
      return;
    }
  
    const dataToSubmit = {
      ...formData,
      service: selectedService,
    };
  
    try {
      const response = await axios.post("https://bulavo-backend1-xi.vercel.app/bookservice", dataToSubmit);
  
      if (response.status !== 201) {
        throw new Error("Failed to submit form. Please try again.");
      }
      
      
  
      toast.success("Form submitted successfully!");
      
      // Reset form fields
      setFormData({
        name: "",
        email: "",
        telnumber: "",
        altPhone: "",
        address: "",
        pincode: "",
        message: "",
      });
      setSelectedService("");
  
      // Close the popup after a successful submission
      setTimeout(() => {
        onClose();
      }, 2000); 
  
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Error submitting form. Please try again.");
    }
  };
  


  const popupStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
    zIndex: 1200,
    padding: '30px',
    borderRadius: '10px',
    width: '400px',
    maxWidth: '90%',
    opacity: 1,
    transition: 'all 0.3s ease-in-out', // Add this line
    animation: 'popupSlideIn 0.3s ease-in-out', // Add this line
  };

  const closeButtonStyle = {
    position: 'absolute',
    top: '15px',
    right: '15px',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    fontSize: '18px',
    color: '#333',
  };

  return (
    <>
      <div style={{
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  backdropFilter: 'blur(5px)',
  zIndex: 1100,
  opacity: 1,
  transition: 'opacity 0.3s ease-in-out', // Add this line
}} onClick={onClose}></div>

      <div style={popupStyle}>
        <ToastContainer/>
        <button onClick={onClose} style={closeButtonStyle}>✖</button>
        <h2 style={{ marginBottom: '20px', textAlign: 'center', fontSize: '24px' }}>Contact Us</h2>
        <form onSubmit={handleSubmit} className="contact-page__form contact-form-validated">
          <input type="text" placeholder="Your name" name="name" value={formData.name} onChange={handleInputChange} required style={{ width: '100%', marginBottom: '15px', padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }} />
          <input type="email" placeholder="Your email" name="email" value={formData.email} onChange={handleInputChange} required style={{ width: '100%', marginBottom: '15px', padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }} />
          <input type="text" placeholder="Phone Number" name="telnumber" value={formData.telnumber} onChange={handleInputChange} required style={{ width: '100%', marginBottom: '15px', padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }} />
          <input type="text" placeholder="Alternative Phone Number" name="altPhone" value={formData.altPhone} onChange={handleInputChange}  style={{ width: '100%', marginBottom: '15px', padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }} />
          
          <select required name="services" className="contact-page__dropdown" value={selectedService} onChange={(e) => setSelectedService(e.target.value)} style={{ width: '100%', marginBottom: '15px', padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}>
            <option value="" disabled>Select a service</option>
            <option value="Refrigerator Repair">Refrigerator Repair</option>
            <option value="Washing Machine Repair">Washing Machine Repair</option>
            <option value="Microwave Oven Repair">Microwave Oven Repair</option>
            <option value="Water Heater Repair">Water Heater Repair</option>
            <option value="Stove Repair">Cookware Stove Repair</option>
            <option value="Mixer Repair">Mixer Repair</option>
            <option value="AC Repair">AC Repair</option>
            <option value="TV Repair">TV Repair</option>
            <option value="Geyser Repair">Geyser Repair</option>
            <option value="Chimney Repair">Chimney Repair</option>
            <option value="R.O Water Purifier Repair">R.O Water Purifier Repair</option>
          </select>

          <input type="text" placeholder="Address" name="address" value={formData.address} onChange={handleInputChange} required style={{ width: '100%', marginBottom: '15px', padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }} />
          <input type="text" placeholder="Pincode" name="pincode" value={formData.pincode} onChange={handleInputChange} required style={{ width: '100%', marginBottom: '15px', padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }} />
          <textarea name="message" placeholder="Your message" value={formData.message} onChange={handleInputChange}  style={{ width: '100%', marginBottom: '15px', padding: '10px', border: '1px solid #ddd', borderRadius: '5px', height: '80px' }}></textarea>
          
          {/* <button type="submit" className="thm-btn contact-page__btn" style={{ width: '100%', padding: '10px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '5px', fontSize: '16px' }}>Hire us now</button> */}
          
                          
                          <button type="submit" style={{border: 'none',width:'100%'}}
                            className="thm-btn main-slider__btn"
                          >
                            Book Service
                          </button>
                        
        </form>
      </div>
    </>
  );
};

export default Popup;
