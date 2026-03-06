import { Link } from 'react-router';
import { Clock, MapPin, Phone, Star } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-white">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1758648207365-df458d3e83f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcmVzdGF1cmFudCUyMGludGVyaW9yJTIwZGluaW5nfGVufDF8fHx8MTc3MjcwNTgxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Restaurant interior"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl mb-4">Welcome to La Bella Vita</h1>
          <p className="text-xl md:text-2xl mb-8 text-stone-200">
            Authentic Italian Cuisine in the Heart of the City
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/menu"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded transition-colors"
            >
              View Menu
            </Link>
            <Link
              to="/reservation"
              className="bg-white hover:bg-stone-100 text-stone-900 px-8 py-3 rounded transition-colors"
            >
              Make a Reservation
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl mb-6">Our Story</h2>
            <p className="text-lg text-stone-600 mb-4">
              La Bella Vita brings the warmth and flavors of traditional Italian cooking
              to your table. Our chefs use only the finest ingredients, sourced locally
              and imported from Italy, to create dishes that honor generations of
              culinary tradition.
            </p>
            <p className="text-lg text-stone-600">
              From our handmade pasta to our wood-fired pizzas, every dish is prepared
              with love and attention to detail. Join us for an unforgettable dining
              experience.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl mb-3">Award-Winning</h3>
              <p className="text-stone-600">
                Recognized for excellence in Italian cuisine with numerous culinary awards
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl mb-3">Fresh Daily</h3>
              <p className="text-stone-600">
                All ingredients sourced fresh daily to ensure the highest quality dishes
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl mb-3">Perfect Location</h3>
              <p className="text-stone-600">
                Conveniently located in the city center with easy access and parking
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-center mb-12">Signature Dishes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-lg mb-4">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1709429790175-b02bb1b19207?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwcGFzdGElMjBkaXNoJTIwcGxhdGVkfGVufDF8fHx8MTc3MjY5NjI3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Pasta dish"
                  className="w-full h-64 object-cover transition-transform group-hover:scale-110"
                />
              </div>
              <h3 className="text-2xl mb-2">Homemade Pasta</h3>
              <p className="text-stone-600">
                Fresh pasta made daily with authentic Italian techniques
              </p>
            </div>
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-lg mb-4">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1693422660544-014dd9f3ef73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwc3RlYWslMjB2ZWdldGFibGVzJTIwZGlubmVyfGVufDF8fHx8MTc3Mjc1Njc5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Grilled steak"
                  className="w-full h-64 object-cover transition-transform group-hover:scale-110"
                />
              </div>
              <h3 className="text-2xl mb-2">Prime Ribeye</h3>
              <p className="text-stone-600">
                Perfectly grilled premium cuts with seasonal vegetables
              </p>
            </div>
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-lg mb-4">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1673551490243-f29547426841?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBkZXNzZXJ0JTIwY2FrZSUyMHN3ZWV0fGVufDF8fHx8MTc3MjY4NTk4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Chocolate dessert"
                  className="w-full h-64 object-cover transition-transform group-hover:scale-110"
                />
              </div>
              <h3 className="text-2xl mb-2">Tiramisu</h3>
              <p className="text-stone-600">
                Classic Italian dessert with layers of espresso and mascarpone
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl mb-4">Ready to Dine With Us?</h2>
          <p className="text-xl mb-8">
            Reserve your table today and experience authentic Italian cuisine
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/reservation"
              className="bg-white hover:bg-stone-100 text-amber-600 px-8 py-3 rounded transition-colors"
            >
              Book a Table
            </Link>
            <a
              href="tel:5551234567"
              className="border-2 border-white hover:bg-white hover:text-amber-600 px-8 py-3 rounded transition-colors flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
