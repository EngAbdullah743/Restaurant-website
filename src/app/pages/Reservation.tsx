import { useState } from 'react';
import { Calendar, Clock, Users, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Reservation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    specialRequests: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, this would send data to a backend
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (submitted) {
    return (
      <div className="min-h-[600px] flex items-center justify-center bg-stone-50">
        <div className="text-center px-4">
          <CheckCircle className="w-20 h-20 text-green-600 mx-auto mb-6" />
          <h1 className="text-4xl mb-4">Reservation Confirmed!</h1>
          <p className="text-xl text-stone-600 mb-2">
            Thank you, {formData.name}!
          </p>
          <p className="text-lg text-stone-600 mb-6">
            Your table for {formData.guests} on {formData.date} at {formData.time} has been reserved.
          </p>
          <p className="text-stone-600 mb-8">
            We've sent a confirmation email to {formData.email}
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded transition-colors"
          >
            Make Another Reservation
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-80 flex items-center justify-center text-white">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1758648207539-b40dd1f6b50e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwdGFibGUlMjBzZXR0aW5nJTIwZWxlZ2FudHxlbnwxfHx8fDE3NzI3NDkzNDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Restaurant table setting"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl mb-4">Reserve a Table</h1>
          <p className="text-xl text-stone-200">
            Book your dining experience with us
          </p>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4 max-w-2xl">
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-semibold">
                  Full Name *
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
              <div>
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
            </div>

            <div className="mb-6">
              <label htmlFor="phone" className="block mb-2 font-semibold">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-stone-300 rounded focus:outline-none focus:border-amber-600"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div>
                <label htmlFor="date" className="block mb-2 font-semibold">
                  <Calendar className="inline w-4 h-4 mr-1" />
                  Date *
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-2 border border-stone-300 rounded focus:outline-none focus:border-amber-600"
                />
              </div>
              <div>
                <label htmlFor="time" className="block mb-2 font-semibold">
                  <Clock className="inline w-4 h-4 mr-1" />
                  Time *
                </label>
                <select
                  id="time"
                  name="time"
                  required
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-stone-300 rounded focus:outline-none focus:border-amber-600"
                >
                  <option value="">Select time</option>
                  <option value="11:00 AM">11:00 AM</option>
                  <option value="11:30 AM">11:30 AM</option>
                  <option value="12:00 PM">12:00 PM</option>
                  <option value="12:30 PM">12:30 PM</option>
                  <option value="1:00 PM">1:00 PM</option>
                  <option value="1:30 PM">1:30 PM</option>
                  <option value="2:00 PM">2:00 PM</option>
                  <option value="5:00 PM">5:00 PM</option>
                  <option value="5:30 PM">5:30 PM</option>
                  <option value="6:00 PM">6:00 PM</option>
                  <option value="6:30 PM">6:30 PM</option>
                  <option value="7:00 PM">7:00 PM</option>
                  <option value="7:30 PM">7:30 PM</option>
                  <option value="8:00 PM">8:00 PM</option>
                  <option value="8:30 PM">8:30 PM</option>
                  <option value="9:00 PM">9:00 PM</option>
                  <option value="9:30 PM">9:30 PM</option>
                  <option value="10:00 PM">10:00 PM</option>
                </select>
              </div>
              <div>
                <label htmlFor="guests" className="block mb-2 font-semibold">
                  <Users className="inline w-4 h-4 mr-1" />
                  Guests *
                </label>
                <select
                  id="guests"
                  name="guests"
                  required
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-stone-300 rounded focus:outline-none focus:border-amber-600"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                  <option value="10+">10+ Guests</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="specialRequests" className="block mb-2 font-semibold">
                Special Requests
              </label>
              <textarea
                id="specialRequests"
                name="specialRequests"
                rows={4}
                value={formData.specialRequests}
                onChange={handleChange}
                placeholder="Any dietary restrictions, allergies, or special occasions?"
                className="w-full px-4 py-2 border border-stone-300 rounded focus:outline-none focus:border-amber-600"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded transition-colors"
            >
              Reserve Table
            </button>

            <p className="text-sm text-stone-600 mt-4 text-center">
              For parties of 10 or more, please call us at (555) 123-4567
            </p>
          </form>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl text-center mb-8">Reservation Policy</h2>
            <div className="space-y-4 text-stone-700">
              <p>
                • Reservations are recommended, especially for dinner service and weekends.
              </p>
              <p>
                • Please arrive within 15 minutes of your reservation time. After 15 minutes,
                your table may be released to waiting guests.
              </p>
              <p>
                • For modifications or cancellations, please contact us at least 24 hours in advance.
              </p>
              <p>
                • Large party reservations (10+ guests) require a credit card to hold and
                may require a deposit.
              </p>
              <p>
                • We welcome walk-in guests based on availability.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
