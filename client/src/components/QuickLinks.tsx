import { Link } from 'wouter';

type QuickLinkProps = {
  icon: string;
  title: string;
  href: string;
};

const QuickLink = ({ icon, title, href }: QuickLinkProps) => (
  <Link href={href}>
    <a className="flex flex-col items-center justify-center p-6 rounded-xl shadow-md border border-neutral-200 bg-white hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 group hover:-translate-y-2 hover:shadow-lg">
      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-white/20">
        <i className={`${icon} text-3xl text-primary group-hover:text-white`}></i>
      </div>
      <span className="font-heading font-semibold text-center">{title}</span>
    </a>
  </Link>
);

export default function QuickLinks() {
  const links: QuickLinkProps[] = [
    {
      icon: "fas fa-graduation-cap",
      title: "Admissions",
      href: "/admissions"
    },
    {
      icon: "fas fa-book-open",
      title: "Programs",
      href: "/programs"
    },
    {
      icon: "fas fa-calendar-alt",
      title: "Events",
      href: "/events"
    },
    {
      icon: "fas fa-briefcase",
      title: "Placements",
      href: "/placements"
    }
  ];

  return (
    <section className="py-12 bg-white relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-r from-primary-light/20 to-secondary-light/20"></div>
      
      <div className="container mx-auto px-4 lg:px-0 pt-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-heading font-bold text-primary">Quick Access</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mt-3"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {links.map((link, index) => (
            <QuickLink key={index} {...link} />
          ))}
        </div>
      </div>
    </section>
  );
}
