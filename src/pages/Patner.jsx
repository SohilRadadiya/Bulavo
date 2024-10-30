import React, { useState } from "react";
import Header from "../components/Header.jsx";
import page from "../assets/images/backgrounds/page-header-bg-img.jpg";
import { Link } from "react-router-dom";
import Footer from "../components/footer/Footer.jsx";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { storage } from "../firebaseConfig.js";
import { ref, uploadString, getDownloadURL } from "firebase/storage"; // Import necessary Firebase Storage functions

function Patner() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telnumber: "",
    expertise: "",
    aadharimg: null,
    profileimg: null,
  });
  const regexPatterns = {
    name: /^[A-Za-z\s]+$/, // Only letters and spaces
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, // Email format
    telnumber: /^\d{10}$/, // Exactly 10 digits
    expertise: /^[A-Za-z0-9\s.,-]+$/, // Allow letters, numbers, spaces, and basic punctuation
  };
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files && files.length > 0) {
      const file = files[0];

      const reader = new FileReader();

      reader.onload = () => {
        const img = new Image();
        img.src = reader.result;

        img.onload = () => {
          const canvas = document.createElement("canvas");
          canvas.width = img.width;
          canvas.height = img.height;

          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0);

          const compressedBase64 = canvas.toDataURL("image/jpeg", 0.5); // Compress image

          setFormData((prevData) => ({
            ...prevData,
            [name]: compressedBase64, // Set compressed image data
          }));
        };
      };

      reader.readAsDataURL(file);
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
  
    // Validate each field
    if (!regexPatterns.name.test(formData.name)) {
      toast.error("Invalid name. Only letters and spaces are allowed.");
      setLoading(false);
      return;
    }
    if (!regexPatterns.email.test(formData.email)) {
      toast.error("Invalid email format.");
      setLoading(false);
      return;
    }
    if (!regexPatterns.telnumber.test(formData.telnumber)) {
      toast.error("Telephone number must be exactly 10 digits.");
      setLoading(false);
      return;
    }
    if (!regexPatterns.expertise.test(formData.expertise)) {
      toast.error("Expertise can only contain letters, numbers, and basic punctuation.");
      setLoading(false);
      return;
    }
  
    try {
      // Upload images to Firebase and get their URLs
      const aadharRef = ref(
        storage,
        `images1/aadhar/${formData.aadharimg.name}`
      );
      const profileRef = ref(
        storage,
        `images1/profile/${formData.profileimg.name}`
      );

      await uploadString(aadharRef, formData.aadharimg, "data_url"); // Upload Aadhar image
      await uploadString(profileRef, formData.profileimg, "data_url"); // Upload Profile image

      const aadharUrl = await getDownloadURL(aadharRef); // Get Aadhar image URL
      const profileUrl = await getDownloadURL(profileRef); // Get Profile image URL

      // Send form data with image URLs to your API
      const response = await axios.post(
        "https://bulavo-backend1-xi.vercel.app/technician",
        {
          ...formData,
          aadharimg: aadharUrl,
          profileimg: profileUrl,
        }
      );

      toast.success("Form submitted successfully");
      setFormData({
        name: "",
        email: "",
        telnumber: "",
        expertise: "",
        aadharimg: null,
        profileimg: null,
      });
      console.log("Response:", response.data);
    } catch (error) {
      toast.error("Failed to submit form. Please try again.");
      console.error("Error submitting the form:", error);
    }finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="page-wrapper">
      <Header />
      <ToastContainer />
      <section className="page-header">
        <div
          className="page-header__bg"
          style={{ backgroundImage: `url(${page})` }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="page-header__inner">
                <h2 className="page-header__title">Become a Partner</h2>
                <ul className="thm-breadcrumb list-unstyled">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>Partner</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="partner-form">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 div">
              <div className="join-text">
                <span
                  style={{ paddingBottom: "10px" }}
                  className="section-title__tagline"
                >
                  Why Join Bulavo Services
                </span>
                <p style={{textAlign:'justify'}}>
                  At Bulavo Services, we value our technicians as the backbone
                  of our operations. Joining our team means becoming part of a
                  supportive community dedicated to excellence in service. We
                  offer competitive pay, flexible hours, and opportunities for
                  growth and development. Whether you're a seasoned professional
                  or just starting your career, we provide the training and
                  resources you need to succeed. Be part of a company that
                  prioritizes integrity, quality, and customer satisfaction.
                  Join us today and make a difference!
                </p>
              </div>
              <div style={{ marginTop: "10px" }} className="join-text">
                <span
                  style={{ paddingBottom: "10px" }}
                  className="section-title__tagline"
                >
                  How To Join
                </span>
                <p style={{textAlign:'justify'}}>
                  Please fill out the form, and we will get in touch with you
                  shortly. Our team will reach out to you via phone to discuss
                </p>
              </div>
            </div>
            <div className="col-lg-6 ">
              <form
                style={{ backgroundColor: "rgb(241, 213, 81)",  filter: loading ? 'blur(3px)' : 'none', }}
                onSubmit={handleSubmit}
                className="form"
                
              >
                <div className="form-group">
                  <input
                    style={{
                      backgroundColor: "rgb(245, 220, 105)",
                      border: "1px solid #e1cc6b",
                    }}
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    style={{
                      backgroundColor: "rgb(245, 220, 105)",
                      border: "1px solid #e1cc6b",
                    }}
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    style={{
                      backgroundColor: "rgb(245, 220, 105)",
                      border: "1px solid #e1cc6b",
                    }}
                    type="tel"
                    name="telnumber"
                    placeholder="Phone Number"
                    value={formData.telnumber}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    style={{
                      backgroundColor: "rgb(245, 220, 105)",
                      border: "1px solid #e1cc6b",
                    }}
                    type="text"
                    name="expertise"
                    placeholder="Which home appliance are you an expert in?"
                    value={formData.expertise}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group file-upload">
                  <label style={{ paddingLeft: "14px" }}>
                    Upload your Aadhar Card Photo
                  </label>
                  <input
                    style={{
                      backgroundColor: "rgb(245, 220, 105)",
                      border: "1px solid #e1cc6b",
                    }}
                    type="file"
                    name="aadharimg"
                    accept="image/*"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group file-upload">
                  <label style={{ paddingLeft: "14px" }}>
                    Upload your Photo
                  </label>
                  <input
                    style={{
                      backgroundColor: "rgb(245, 220, 105)",
                      border: "1px solid #e1cc6b",
                    }}
                    type="file"
                    name="profileimg"
                    accept="image/*"
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="btn-submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>

        <style jsx="true">{`
          .partner-form {
            padding: 50px 0;
            border-radius: 12px;
          }
          .form {
            max-width: 600px;
            margin: 0 auto;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          }
          .form-group {
            position: relative;
            margin-bottom: 30px;
          }
          .form-group input {
            width: 100%;
            padding: 15px;
            border: none;
            border-bottom: 2px solid #ddd;
            font-size: 16px;
            transition: border-color 0.3s ease;
          }
          .form-group input:focus {
            border-bottom: 2px solid #ff7e5f;
            outline: none;
          }
          .form-group label {
            margin-bottom: 5px;
            font-size: 14px;
            color: #555;
            display: block;
          }
          .file-upload {
            display: flex;
            flex-direction: column;
          }
          .btn-submit {
            background-color: black;
            color: white;
            padding: 15px 25px;
            border: none;
            width: 100%;
            cursor: pointer;
            font-size: 18px;
          }

          .join-text {
            padding: 30px;
            background: white;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          }
          .join-text h2 {
            margin-bottom: 20px;
          }
        `}</style>
      </section>

      <Footer />
    </div>
  );
}

export default Patner;
