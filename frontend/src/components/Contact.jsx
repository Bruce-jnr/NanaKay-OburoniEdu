import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const form = e.currentTarget;
    const data = {
      name: form.name.value,
      email: form.email.value,
      service: form.service.value,
      message: form.message.value,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
        setErrorMsg(json.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please check your connection and try again.');
    }
  }

  return (
    <section className="section white" id="contact">
      <div className="container two-col">
        <div>
          <p className="eyebrow">Talk to an advisor</p>
          <h2>Start your success story today</h2>
          <p className="lead">
            Connect with a consultant for an assessment of your academic path.
            We respond within 24 hours.
          </p>
          <div className="details">
            <a href="mailto:info@oburonieducationalconsult.com">
              ✉{' '}
              <span>
                <b>Email us</b>info@oburonieducationalconsult.com
              </span>
            </a>
            <a href="tel:+233500000000">
              ☎{' '}
              <span>
                <b>Call us</b>+233 54 921 2563
              </span>
            </a>
          </div>
          <div className="map">
            ⌖ <small>Koforidua, Ghana</small>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <label>
            Full name
            <input name="name" placeholder="Enter Your Full Name" required />
          </label>
          <label>
            Email address
            <input
              name="email"
              type="email"
              placeholder="john@example.com"
              required
            />
          </label>
          <label>
            Service interested in
            <select name="service">
              <option>SAT Preparation</option>
              <option>Nursing Exam Support</option>
              <option>Visa Guidance</option>
              <option>School Placement</option>
              <option>Assignment Help</option>
              <option>Study Abroad</option>
            </select>
          </label>
          <label>
            Message
            <textarea
              name="message"
              rows="4"
              placeholder="How can we help you?"
              required
            />
          </label>

          <button
            className="btn btn-primary"
            type="submit"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Sending…' : 'Send inquiry'}
          </button>

          {status === 'success' && (
            <p className="success">✅ Thank you! We'll be in touch shortly.</p>
          )}
          {status === 'error' && (
            <p style={{ color: 'red', marginTop: '0.75rem' }}>❌ {errorMsg}</p>
          )}
        </form>
      </div>
    </section>
  );
}

