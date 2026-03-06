import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, this would send data to a backend
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-80 flex items-center justify-center text-white">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1681407980293-ed07d8f4c5cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5lJTIwZ2xhc3NlcyUyMHJvbWFudGljJTIwZGlubmVyfGVufDF8fHx8MTc3Mjc1Njc5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Wine glasses"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl mb-4">Contact Us</h1>
          <p className="text-xl text-stone-200">
            We'd love to hear from you
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl mb-8">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-1">Address</h3>
                    <p className="text-stone-600">
                      123 Gourmet Street<br />
                      New York, NY 10001<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-1">Phone</h3>
                    <p className="text-stone-600">
                      Main: (555) 123-4567<br />
                      Reservations: (555) 123-4568
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-1">Email</h3>
                    <p className="text-stone-600">
                      info@labellavita.com<br />
                      reservations@labellavita.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-1">Hours</h3>
                    <p className="text-stone-600">
                      Monday - Friday: 11:00 AM - 10:00 PM<br />
                      Saturday - Sunday: 10:00 AM - 11:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-8 bg-stone-300 h-64 rounded-lg flex items-center justify-center text-stone-600">
                <div className="text-center">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p>Map Location</p>
                  <p className="text-sm">123 Gourmet Street, New York, NY</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl mb-8">Send Us a Message</h2>
              
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl mb-2 text-green-900">Message Sent!</h3>
                  <p className="text-green-700">
                    Thank you for contacting us. We'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
                  <div className="mb-6">
                    <label htmlFor="name" className="block mb-2 font-semibold">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-stone-300 rounded focus:outline-none focus:border-amber-600"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 font-semibold">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-stone-300 rounded focus:outline-none focus:border-amber-600"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="subject" className="block mb-2 font-semibold">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-stone-300 rounded focus:outline-none focus:border-amber-600"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block mb-2 font-semibold">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-stone-300 rounded focus:outline-none focus:border-amber-600"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl mb-6">Visit Us Today</h2>
          <p className="text-lg text-stone-600 mb-4">
            Whether you're planning a romantic dinner, a business lunch, or a celebration
            with friends and family, we're here to make your experience unforgettable.
          </p>
          <p className="text-lg text-stone-600">
            Walk-ins are welcome, but reservations are recommended to ensure we have a
            table ready for you.
          </p>
        </div>
      </section>
    </div>
  );
}
