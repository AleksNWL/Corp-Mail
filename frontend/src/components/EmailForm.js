import React, { useState } from "react";
import { sendEmail } from "../api";

function EmailForm() {
  const [formData, setFormData] = useState({ to: "", subject: "", body: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(formData)
      .then(() => alert("Email sent successfully!"))
      .catch(console.error);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Send Email</h2>
      <label>To:</label>
      <input
        type="email"
        value={formData.to}
        onChange={(e) => setFormData({ ...formData, to: e.target.value })}
        required
      />
      <label>Subject:</label>
      <input
        type="text"
        value={formData.subject}
        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
        required
      />
      <label>Body:</label>
      <textarea
        value={formData.body}
        onChange={(e) => setFormData({ ...formData, body: e.target.value })}
        required
      />
      <button type="submit">Send</button>
    </form>
  );
}

export default EmailForm;
