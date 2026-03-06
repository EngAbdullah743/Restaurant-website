import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Gallery() {
  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1758648207365-df458d3e83f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcmVzdGF1cmFudCUyMGludGVyaW9yJTIwZGluaW5nfGVufDF8fHx8MTc3MjcwNTgxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Restaurant interior',
      category: 'Interior',
    },
    {
      src: 'https://images.unsplash.com/photo-1709429790175-b02bb1b19207?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwcGFzdGElMjBkaXNoJTIwcGxhdGVkfGVufDF8fHx8MTc3MjY5NjI3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Gourmet pasta',
      category: 'Food',
    },
    {
      src: 'https://images.unsplash.com/photo-1693422660544-014dd9f3ef73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwc3RlYWslMjB2ZWdldGFibGVzJTIwZGlubmVyfGVufDF8fHx8MTc3Mjc1Njc5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Grilled steak',
      category: 'Food',
    },
    {
      src: 'https://images.unsplash.com/photo-1605034298551-baacf17591d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHNhbGFkJTIwYm93bCUyMGhlYWx0aHl8ZW58MXx8fHwxNzcyNjg4MzMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Fresh salad',
      category: 'Food',
    },
    {
      src: 'https://images.unsplash.com/photo-1673551490243-f29547426841?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBkZXNzZXJ0JTIwY2FrZSUyMHN3ZWV0fGVufDF8fHx8MTc3MjY4NTk4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Chocolate dessert',
      category: 'Desserts',
    },
    {
      src: 'https://images.unsplash.com/photo-1769955817432-641929f613f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVmJTIwY29va2luZyUyMGtpdGNoZW4lMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzcyNjYwOTMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Chef cooking',
      category: 'Kitchen',
    },
    {
      src: 'https://images.unsplash.com/photo-1758648207539-b40dd1f6b50e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwdGFibGUlMjBzZXR0aW5nJTIwZWxlZ2FudHxlbnwxfHx8fDE3NzI3NDkzNDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Table setting',
      category: 'Interior',
    },
    {
      src: 'https://images.unsplash.com/photo-1681407980293-ed07d8f4c5cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5lJTIwZ2xhc3NlcyUyMHJvbWFudGljJTIwZGlubmVyfGVufDF8fHx8MTc3Mjc1Njc5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Wine glasses',
      category: 'Ambiance',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-80 flex items-center justify-center text-white">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1769955817432-641929f613f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVmJTIwY29va2luZyUyMGtpdGNoZW4lMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzcyNjYwOTMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Chef cooking"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl mb-4">Gallery</h1>
          <p className="text-xl text-stone-200">
            A visual journey through La Bella Vita
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow bg-white"
              >
                <div className="aspect-square overflow-hidden">
                  <ImageWithFallback
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-4 text-white">
                    <p className="text-sm">{image.category}</p>
                    <p className="text-lg">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl mb-6">Experience the Atmosphere</h2>
          <p className="text-lg text-stone-600 mb-4">
            At La Bella Vita, we believe dining is more than just food—it's an experience.
            Our carefully crafted ambiance, from the elegant table settings to the warm
            lighting, creates the perfect backdrop for memorable moments.
          </p>
          <p className="text-lg text-stone-600">
            Browse through our gallery to get a glimpse of what awaits you. We look forward
            to welcoming you soon!
          </p>
        </div>
      </section>
    </div>
  );
}
