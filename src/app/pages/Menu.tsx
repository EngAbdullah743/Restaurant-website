import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Menu() {
  const menuSections = [
    {
      title: 'Appetizers',
      items: [
        { name: 'Bruschetta', description: 'Toasted bread with fresh tomatoes, basil, and garlic', price: '$12' },
        { name: 'Caprese Salad', description: 'Fresh mozzarella, tomatoes, and basil drizzled with balsamic', price: '$14' },
        { name: 'Calamari Fritti', description: 'Crispy fried calamari with marinara sauce', price: '$16' },
        { name: 'Antipasto Platter', description: 'Selection of Italian meats, cheeses, and olives', price: '$18' },
      ],
    },
    {
      title: 'Salads',
      items: [
        { name: 'Caesar Salad', description: 'Romaine lettuce, parmesan, croutons, classic Caesar dressing', price: '$13' },
        { name: 'Arugula Salad', description: 'Fresh arugula, cherry tomatoes, shaved parmesan, lemon vinaigrette', price: '$14' },
        { name: 'Mediterranean Salad', description: 'Mixed greens, olives, feta, cucumbers, red onion', price: '$15' },
      ],
    },
    {
      title: 'Pasta',
      items: [
        { name: 'Spaghetti Carbonara', description: 'Classic Roman pasta with pancetta, eggs, and pecorino', price: '$22' },
        { name: 'Fettuccine Alfredo', description: 'Creamy parmesan sauce with fresh fettuccine', price: '$20' },
        { name: 'Penne Arrabbiata', description: 'Spicy tomato sauce with garlic and red pepper', price: '$19' },
        { name: 'Lasagna Bolognese', description: 'Layers of pasta, meat sauce, and béchamel', price: '$24' },
        { name: 'Ravioli di Ricotta', description: 'Homemade ricotta ravioli with sage butter sauce', price: '$23' },
      ],
    },
    {
      title: 'Main Courses',
      items: [
        { name: 'Osso Buco', description: 'Braised veal shanks with saffron risotto', price: '$38' },
        { name: 'Chicken Parmigiana', description: 'Breaded chicken breast with marinara and mozzarella', price: '$26' },
        { name: 'Grilled Salmon', description: 'Fresh Atlantic salmon with lemon butter and vegetables', price: '$32' },
        { name: 'Ribeye Steak', description: '16oz prime ribeye with roasted potatoes', price: '$42' },
        { name: 'Veal Marsala', description: 'Tender veal in Marsala wine sauce with mushrooms', price: '$34' },
      ],
    },
    {
      title: 'Pizza',
      items: [
        { name: 'Margherita', description: 'Tomato sauce, fresh mozzarella, basil', price: '$18' },
        { name: 'Quattro Formaggi', description: 'Four cheese blend on white sauce', price: '$20' },
        { name: 'Diavola', description: 'Spicy salami, mozzarella, chili flakes', price: '$21' },
        { name: 'Prosciutto e Rucola', description: 'Prosciutto, arugula, parmesan shavings', price: '$23' },
      ],
    },
    {
      title: 'Desserts',
      items: [
        { name: 'Tiramisu', description: 'Classic ladyfinger dessert with espresso and mascarpone', price: '$10' },
        { name: 'Panna Cotta', description: 'Silky vanilla custard with berry compote', price: '$9' },
        { name: 'Cannoli', description: 'Crispy shells filled with sweet ricotta cream', price: '$8' },
        { name: 'Gelato', description: 'Selection of homemade Italian ice cream', price: '$7' },
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-80 flex items-center justify-center text-white">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1709429790175-b02bb1b19207?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwcGFzdGElMjBkaXNoJTIwcGxhdGVkfGVufDF8fHx8MTc3MjY5NjI3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Gourmet pasta"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl mb-4">Our Menu</h1>
          <p className="text-xl text-stone-200">
            Authentic Italian dishes crafted with passion
          </p>
        </div>
      </section>

      {/* Menu Sections */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {menuSections.map((section, index) => (
            <div key={index} className="mb-12">
              <h2 className="text-3xl mb-6 pb-2 border-b-2 border-amber-600">
                {section.title}
              </h2>
              <div className="space-y-6">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl mb-1">{item.name}</h3>
                      <p className="text-stone-600">{item.description}</p>
                    </div>
                    <div className="text-amber-600 font-semibold whitespace-nowrap">
                      {item.price}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Beverages Section */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl mb-6 pb-2 border-b-2 border-amber-600">Beverages</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl mb-4 text-amber-600">Wine Selection</h3>
              <div className="space-y-3 text-stone-700">
                <p>• House Red/White - Glass $9 / Bottle $32</p>
                <p>• Premium Selection - Glass $12 / Bottle $45</p>
                <p>• Reserve Collection - Bottle from $60</p>
                <p>• Champagne & Sparkling - from $50</p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl mb-4 text-amber-600">Other Drinks</h3>
              <div className="space-y-3 text-stone-700">
                <p>• Italian Espresso - $4</p>
                <p>• Cappuccino/Latte - $5</p>
                <p>• Soft Drinks - $3</p>
                <p>• Fresh Juices - $5</p>
                <p>• Craft Beer - $7</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-8 bg-amber-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg">
            Menu items and prices are subject to change. Please inform your server of any dietary restrictions.
          </p>
        </div>
      </section>
    </div>
  );
}
