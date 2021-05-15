import React, { useState } from "react"
import emailjs from 'emailjs-com'
import{ init } from 'emailjs-com'
init("user_CvpPf1sJ7rZo6giCrFhIr")

export default function ContactForm() {
  // FORM STATE
  const initialFormState = {
    clientName: "",
    partnerName: "",
    email: "",
    phoneNumber: "",
    weddingDate: "",
    venue: "",
    referral: "",
    additionalInfo: "",
  }
  const [formData, setFormData] = useState({ ...initialFormState })
  const [isThankYou, setIsThankYou] = useState(false);

  // HANDLERS
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // console.log(
      //   "Service: ", process.env.REACT_APP_SERVICE_ID,
      //   "Template: ", process.env.REACT_APP_TEMPLATE_ID,
      //   "User: ", process.env.REACT_APP_USER_ID
      // )
      await emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_USER_ID
      )
      setFormData(initialFormState)
      setIsThankYou(true)
    } catch (err) {
      console.error(err)
    }
  }

  const ThankYou = () => {
    return isThankYou && <h3>Thank you for inquiring!</h3>
  }

  // RENDER
  return (
    <div className="col col-12 col-md-6 m-auto">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="clientName"><strong>Your name *</strong></label>
          <input
            type="text"
            className="form-control"
            name="clientName"
            placeholder="Your name here"
            onChange={handleChange}
            value={formData.clientName}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="partnerName"><strong>Your partner's name *</strong></label>
          <input
            type="text"
            className="form-control"
            name="partnerName"
            placeholder="Your partner's name here"
            onChange={handleChange}
            value={formData.partnerName}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email"><strong>Email *</strong></label>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="E.g. myemail@email.com"
            onChange={handleChange}
            value={formData.email}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone number</label>
          <input
            type="tel"
            className="form-control"
            name="phoneNumber"
            placeholder="E.g. 541 444 0755"
            onChange={handleChange}
            value={formData.phoneNumber}
          />
        </div>
        <div className="form-group">
          <label htmlFor="weddingDate">Wedding Date</label>
          <input
            type="date"
            className="form-control"
            name="weddingDate"
            placeholder="MM/DD/YYYY"
            onChange={handleChange}
            value={formData.weddingDate}
          />
        </div>
        <div className="form-group">
          <label htmlFor="venue">Venue</label>
          <input
            type="text"
            className="form-control"
            name="venue"
            placeholder="E.g. 742 Evergreen Terrace, Snohomish"
            onChange={handleChange}
            value={formData.venue}
          />
        </div>
        <div className="form-group">
          <label htmlFor="referral">How did you hear about us?</label>
          <select
            className="form-control"
            name="referral"
            onChange={handleChange}
            value={formData.referral}
          >
            <option defaultValue="none">Select an option</option>
            <option value="google">Google</option>
            <option value="facebook">Facebook</option>
            <option value="instagram">Instagram</option>
            <option value="the-knot">The Knot</option>
            <option value="wedding-wire">Wedding Wire</option>
            <option value="yelp">Yelp</option>
            <option value="vendor-referral">Vendor Referral</option>
            <option value="client-referral">Client Referral</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="additionalInfo">Tell us some more about you!</label>
          <textarea
            className="form-control"
            name="additionalInfo"
            placeholder="What do we need to know about the wedding?"
            onChange={handleChange}
            value={formData.additionalInfo}
          />
        </div>
        <button type="submit" className="btn btn-outline-primary btn-lg">Submit</button>
      </form>
      <ThankYou />
    </div>
  )
}