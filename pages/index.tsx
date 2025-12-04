import React from 'react';
import Card from '../components/ui/Card';

export default function Home() {
  const sections = [
    {
      title: 'Popular homes in Mombasa',
      listings: [
        {
          title: 'Flat in Mombasa',
          image: '/assets/flat-mombasa1.jpg',
          price: '$108 SGD for 2 nights',
          rating: 4.83,
          location: 'Mombasa',
          tag: 'Guest favourite',
          description: 'Spacious and bright apartment close to the beach.',
        },
        {
          title: 'Tiny home in Nyali',
          image: '/assets/nyali-home.jpg',
          price: '$123 SGD for 2 nights',
          rating: 4.83,
          location: 'Nyali',
          tag: 'Guest favourite',
          description: 'Cozy tiny home with a private pool.',
        },
        {
          title: 'Tiny home in Nyali',
          image: '/assets/nyali-home.jpg',
          price: '$123 SGD for 2 nights',
          rating: 4.83,
          location: 'Nyali',
          tag: 'Guest favourite',
          description: 'Cozy tiny home with a private pool.',
        },
        {
          title: 'Tiny home in Nyali',
          image: '/assets/nyali-home.jpg',
          price: '$123 SGD for 2 nights',
          rating: 4.83,
          location: 'Nyali',
          tag: 'Guest favourite',
          description: 'Cozy tiny home with a private pool.',
        },
        {
          title: 'Tiny home in Nyali',
          image: '/assets/nyali-home.jpg',
          price: '$123 SGD for 2 nights',
          rating: 4.83,
          location: 'Nyali',
          tag: 'Guest favourite',
          description: 'Cozy tiny home with a private pool.',
        },
        {
          title: 'Tiny home in Nyali',
          image: '/assets/nyali-home.jpg',
          price: '$123 SGD for 2 nights',
          rating: 4.83,
          location: 'Nyali',
          tag: 'Guest favourite',
          description: 'Cozy tiny home with a private pool.',
        },
        {
          title: 'Tiny home in Nyali',
          image: '/assets/nyali-home.jpg',
          price: '$123 SGD for 2 nights',
          rating: 4.83,
          location: 'Nyali',
          tag: 'Guest favourite',
          description: 'Cozy tiny home with a private pool.',
        },
        {
          title: 'Tiny home in Nyali',
          image: '/assets/nyali-home.jpg',
          price: '$123 SGD for 2 nights',
          rating: 4.83,
          location: 'Nyali',
          tag: 'Guest favourite',
          description: 'Cozy tiny home with a private pool.',
        },
        {
          title: 'Tiny home in Nyali',
          image: '/assets/nyali-home.jpg',
          price: '$123 SGD for 2 nights',
          rating: 4.83,
          location: 'Nyali',
          tag: 'Guest favourite',
          description: 'Cozy tiny home with a private pool.',
        },
        {
          title: 'Tiny home in Nyali',
          image: '/assets/nyali-home.jpg',
          price: '$123 SGD for 2 nights',
          rating: 4.83,
          location: 'Nyali',
          tag: 'Guest favourite',
          description: 'Cozy tiny home with a private pool.',
        },
        {
          title: 'Seaside Studio',
          image: '/assets/flat-mombasa2.jpg',
          price: '$132 SGD for 2 nights',
          rating: 5.0,
          location: 'Mombasa',
        },
      ],
    },
    {
      title: 'Available in Kiambu this weekend',
      listings: [
        {
          title: 'Flat in Kiambu',
          image: '/assets/flat-kiambu1.jpg',
          price: '$59 SGD for 2 nights',
          rating: 4.88,
          location: 'Kiambu',
          tag: 'Guest favourite',
          description: 'Quiet neighborhood, perfect weekend escape.',
        },
        {
          title: 'Flat in Ruaka',
          image: '/assets/flat-ruaka.jpg',
          price: '$77 SGD for 2 nights',
          rating: 5.0,
          location: 'Ruaka',
          description: 'Stylish apartment near Two Rivers Mall.',
        },
        {
          title: 'Flat in Nairobi',
          image: '/assets/flat-nairobi1.jpg',
          price: '$94 SGD for 2 nights',
          rating: 4.87,
          location: 'Nairobi',
          description: 'Comfortable apartment close to city center.',
        },
      ],
    },
  ];

  return (
    <div className="p-8 space-y-10">
      {sections.map((section, sIdx) => (
        <section key={sIdx}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">{section.title}</h2>
            <a href="#" className="text-sm text-gray-600 hover:underline">See all</a>
          </div>

          {/* Horizontal scroll container */}
          <div className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory">
            {section.listings.map((listing, i) => (
              <div key={i} className="snap-start">
                <Card
                  title={listing.title}
                  image={listing.image}
                  price={listing.price}
                  rating={listing.rating}
                  location={listing.location}
                  tag={listing.tag}
                  description={listing.description || ''} 
                />
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
