import { Link, Outlet, useLocation } from 'react-router';
import { UtensilsCrossed, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Layout() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/menu', label: 'Menu' },
    { path: '/reservation', label: 'Reservation' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-stone-900 text-white sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 text-2xl">
              <UtensilsCrossed className="w-8 h-8" />
              <span>La Bella Vita</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`transition-colors hover:text-amber-400 ${
                    isActive(link.path) ? 'text-amber-400' : ''
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`transition-colors hover:text-amber-400 ${
                      isActive(link.path) ? 'text-amber-400' : ''
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl mb-4 flex items-center gap-2">
                <UtensilsCrossed className="w-6 h-6" />
                La Bella Vita
              </h3>
              <p className="text-stone-400">
                Experience authentic Italian cuisine in an elegant atmosphere.
              </p>
            </div>
            <div>
              <h3 className="text-xl mb-4">Hours</h3>
              <div className="text-stone-400 space-y-1">
                <p>Monday - Friday: 11:00 AM - 10:00 PM</p>
                <p>Saturday - Sunday: 10:00 AM - 11:00 PM</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl mb-4">Contact</h3>
              <div className="text-stone-400 space-y-1">
                <p>123 Gourmet Street</p>
                <p>New York, NY 10001</p>
                <p>(555) 123-4567</p>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-stone-800 text-center text-stone-400">
            <p>&copy; 2026 La Bella Vita. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
