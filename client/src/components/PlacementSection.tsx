import { Link } from 'wouter';

type PlacementStatProps = {
  number: string;
  label: string;
};

const PlacementStat = ({ number, label }: PlacementStatProps) => (
  <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
    <span className="text-secondary font-bold text-4xl mb-2">{number}</span>
    <span className="text-neutral-600 text-center">{label}</span>
  </div>
);

type RecruitersProps = {
  name: string;
};

const Recruiter = ({ name }: RecruitersProps) => (
  <div className="bg-white p-2 rounded flex items-center justify-center h-16">
    <span className="font-bold text-neutral-500">{name}</span>
  </div>
);

export default function PlacementSection() {
  const stats: PlacementStatProps[] = [
    { number: "95%", label: "Placement Rate" },
    { number: "150+", label: "Recruiting Companies" },
    { number: "₹18L", label: "Highest Package" },
    { number: "₹6.2L", label: "Average Package" }
  ];

  const recruiters: RecruitersProps[] = [
    { name: "Microsoft" },
    { name: "TCS" },
    { name: "Infosys" },
    { name: "Amazon" },
    { name: "Accenture" },
    { name: "IBM" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-0">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Placement Highlights</h2>
          <p className="text-neutral-600 max-w-3xl mx-auto">
            Our dedicated Training & Placement Cell ensures students are well-prepared for industry requirements and connects them with top recruiters.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-neutral-100 p-8 rounded-lg mb-8">
              <div className="grid grid-cols-2 gap-6 mb-6">
                {stats.map((stat, index) => (
                  <PlacementStat key={index} {...stat} />
                ))}
              </div>
              
              <h3 className="font-heading font-bold text-xl mb-4 text-primary">Top Recruiters</h3>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                {recruiters.map((recruiter, index) => (
                  <Recruiter key={index} {...recruiter} />
                ))}
              </div>
            </div>
            
            <Link href="/placements">
              <a className="inline-block bg-primary hover:bg-primary-light text-white font-semibold px-6 py-3 rounded-md transition duration-300">
                Placement Records <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </Link>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" 
              alt="Campus Placements" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-primary bg-opacity-80 p-6">
              <h3 className="text-white font-heading font-bold text-xl mb-2">Campus Recruitment Program</h3>
              <p className="text-white text-sm">Our annual recruitment drive connects students with top companies from various industries.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
