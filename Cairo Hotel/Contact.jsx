import React, { useState } from 'react';
import './Contact.css';

/* ── Contact info items ── */
const INFO_ITEMS = [
  {
    id: 'location',
    title: 'Location',
    lines: ['14 Avenue des Cairos', 'Cairo, Egypt 75008'],
    iconPath: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z',
  },
  {
    id: 'phone',
    title: 'Phone',
    lines: ['+33 1 42 68 00 00', '+33 1 42 68 00 01'],
    iconPath: 'M6.62 10.79a15.054 15.054 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C9.61 21 3 14.39 3 6.5c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57-.11.35-.02.74-.24 1.02l-2.21 2.2z',
  },
  {
    id: 'email',
    title: 'Email',
    lines: ['reservations@lumiere-hotel.com', 'concierge@lumiere-hotel.com'],
    iconPath: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z',
  },
];

const INITIAL_FORM = {
  firstName: '',
  lastName: '',
  email: '',
  inquiryType: 'Reservation',
  message: '',
};

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/* ── Sub-components ── */
function ContactInfoItem({ item }) {
  return (
    <div className="contact-info__item">
      <div className="contact-info__icon">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d={item.iconPath} />
        </svg>
      </div>
      <div>
        <p className="contact-info__title">{item.title}</p>
        {item.lines.map((line) => (
          <p key={line} className="contact-info__val">{line}</p>
        ))}
      </div>
    </div>
  );
}

/* ── Main component ── */
export default function Contact() {
  const [form, setForm]         = useState(INITIAL_FORM);
  const [sending, setSending]   = useState(false);
  const [success, setSuccess]   = useState(false);
  const [errors, setErrors]     = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear field error on change
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.firstName.trim()) newErrors.firstName = 'Required';
    if (!form.lastName.trim())  newErrors.lastName  = 'Required';
    if (!isValidEmail(form.email)) newErrors.email  = 'Enter a valid email';
    if (!form.message.trim())   newErrors.message   = 'Please enter a message';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSending(true);
    // Simulate async API call
    setTimeout(() => {
      setSending(false);
      setSuccess(true);
      setForm(INITIAL_FORM);
      setTimeout(() => setSuccess(false), 5000);
    }, 1200);
  };

  return (
    <section className="contact" id="contact">
      {/* Left — info */}
      <div className="contact__left">
        <p className="section-label">Get in Touch</p>
        <h2 className="section-title" style={{ color: 'var(--white)' }}>
          Plan Your <em>Stay</em>
        </h2>
        <div className="divider" />
        <div className="contact-info">
          {INFO_ITEMS.map((item) => (
            <ContactInfoItem key={item.id} item={item} />
          ))}
        </div>
      </div>

      {/* Right — form */}
      <div className="contact__right">
        <p className="contact__form-label">Send us a message</p>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="contact-form__row">
            <div className="contact-form__group">
              <label htmlFor="firstName">First Name</label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="Jean"
                value={form.firstName}
                onChange={handleChange}
                className={errors.firstName ? 'input--error' : ''}
              />
              {errors.firstName && <span className="contact-form__error">{errors.firstName}</span>}
            </div>
            <div className="contact-form__group">
              <label htmlFor="lastName">Last Name</label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Dupont"
                value={form.lastName}
                onChange={handleChange}
                className={errors.lastName ? 'input--error' : ''}
              />
              {errors.lastName && <span className="contact-form__error">{errors.lastName}</span>}
            </div>
          </div>

          <div className="contact-form__group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="jean@example.com"
              value={form.email}
              onChange={handleChange}
              className={errors.email ? 'input--error' : ''}
            />
            {errors.email && <span className="contact-form__error">{errors.email}</span>}
          </div>

          <div className="contact-form__group">
            <label htmlFor="inquiryType">Inquiry Type</label>
            <select
              id="inquiryType"
              name="inquiryType"
              value={form.inquiryType}
              onChange={handleChange}
            >
              <option>Reservation</option>
              <option>Special Occasion</option>
              <option>Spa Booking</option>
              <option>Event Inquiry</option>
              <option>General Question</option>
            </select>
          </div>

          <div className="contact-form__group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="How can we assist you?"
              value={form.message}
              onChange={handleChange}
              className={errors.message ? 'input--error' : ''}
            />
            {errors.message && <span className="contact-form__error">{errors.message}</span>}
          </div>

          <button
            type="submit"
            className="contact-form__submit"
            disabled={sending}
          >
            {sending ? 'Sending…' : 'Send Message'}
          </button>

          {success && (
            <p className="contact-form__success" role="status">
              ✓ Thank you! We'll be in touch within 24 hours.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
