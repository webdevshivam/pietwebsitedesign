import { Link } from 'wouter';

type FacilityProps = {
  image: string;
  title: string;
  description: string;
};

const Facility = ({ image, title, description }: FacilityProps) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-md">
    <img 
      src={image} 
      alt={title} 
      className="w-full h-56 object-cover"
    />
    <div className="p-6">
      <h3 className="font-heading font-bold text-xl mb-2 text-primary">{title}</h3>
      <p className="text-neutral-600">{description}</p>
    </div>
  </div>
);

export default function FacilitiesSection() {
  const facilities: FacilityProps[] = [
    {
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      title: "Advanced Laboratories",
      description: "Equipped with the latest technology and equipment for hands-on learning experiences across all engineering disciplines."
    },
    {
      image: "https://images.unsplash.com/photo-1568667256549-094345857637?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      title: "Digital Library",
      description: "A vast collection of books, journals, and digital resources with modern reading spaces and computer terminals."
    },
    {
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      title: "Sports Facilities",
      description: "Multiple indoor and outdoor sports facilities including cricket ground, basketball court, gymnasium, and more."
    },
    {
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      title: "Smart Classrooms",
      description: "Technology-enabled classrooms with interactive digital boards, projectors, and multimedia facilities."
    },
    {
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      title: "Computing Centers",
      description: "High-performance computing labs with the latest software and hardware for research and project work."
    },
    {
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      title: "Campus Cafeteria",
      description: "Spacious dining areas serving nutritious meals and refreshments in a comfortable environment."
    }
  ];

  return (
    <section className="py-16 bg-neutral-100">
      <div className="container mx-auto px-4 lg:px-0">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Campus Facilities</h2>
          <p className="text-neutral-600 max-w-3xl mx-auto">
            Our campus offers state-of-the-art facilities designed to enhance the learning experience and provide students with everything they need to succeed.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <Facility key={index} {...facility} />
          ))}
        </div>
      </div>
    </section>
  );
}
