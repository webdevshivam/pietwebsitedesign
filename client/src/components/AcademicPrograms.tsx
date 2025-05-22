import { Link } from "wouter";

type ProgramProps = {
  icon: string;
  title: string;
  description: string;
  href: string;
};

const Program = ({ icon, title, description, href }: ProgramProps) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-md border border-neutral-200 hover:shadow-xl hover:border-primary transition-all duration-300 group hover:-translate-y-2">
    <div className="h-48 bg-gradient-to-r from-primary to-primary-dark flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute w-32 h-32 bg-white/10 rounded-full -top-10 -right-10"></div>
      <div className="absolute w-24 h-24 bg-white/10 rounded-full -bottom-8 -left-8"></div>
      <i
        className={`${icon} text-5xl text-white z-10 transform group-hover:scale-110 transition-transform duration-300`}
      ></i>
    </div>
    <div className="p-6">
      <h3 className="font-heading font-bold text-xl mb-3 text-primary group-hover:text-secondary transition-colors">
        {title}
      </h3>
      <p className="text-neutral-600 mb-5">{description}</p>
      <Link href={href}>
        <a className="text-secondary hover:text-secondary-dark font-semibold flex items-center group-hover:translate-x-1 transition-transform">
          Learn More{" "}
          <i className="fas fa-arrow-right ml-2 group-hover:ml-3 transition-all"></i>
        </a>
      </Link>
    </div>
  </div>
);

export default function AcademicPrograms() {
  const programs: ProgramProps[] = [
    {
      icon: "fas fa-laptop-code",
      title: "Computer Science Engineering",
      description:
        "Computer Science Engineering focuses on the theoretical foundations and practical approaches to computation, programming, software development, data structures, algorithms, operating systems, databases, artificial intelligence, machine learning, and cybersecurity.",
      href: "/programs/cse",
    },
    {
      icon: "fas fa-brain",
      title: "Artificial Intelligence & Machine Learning",
      description:
        "Study intelligent systems, neural networks, deep learning, data analysis, and automated decision-making processes.",
      href: "/programs/ai-ml",
    },
    {
      icon: "fas fa-database",
      title: "Data Science",
      description:
        "Focus on data analysis, statistical modeling, big data technologies, and extracting insights from structured and unstructured data.",
      href: "/programs/data-science",
    },
    {
      icon: "fas fa-network-wired",
      title: "Cybersecurity",
      description:
        "Learn about network security, ethical hacking, cryptography, and protection of computer systems and data from digital attacks.",
      href: "/programs/cybersecurity",
    },
    {
      icon: "fas fa-cloud",
      title: "Cloud Computing",
      description:
        "Explore distributed systems, cloud infrastructure, virtualization, DevOps, and scalable web services.",
      href: "/programs/cloud-computing",
    },
    {
      icon: "fas fa-code",
      title: "Full Stack Web Development",
      description:
        "Master front-end and back-end technologies to build complete web applications using HTML, CSS, JavaScript, databases, and server-side programming.",
      href: "/programs/fullstack",
    },
    {
      icon: "fas fa-robot",
      title: "Robotics & Embedded Systems",
      description:
        "Combine computer science and electronics to develop smart embedded devices, robotics systems, and automation solutions.",
      href: "/programs/robotics",
    },
  ];

  return (
    <section className="py-20 bg-neutral-50 relative">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-neutral-50"></div>

      <div className="container mx-auto px-4 lg:px-0 relative z-10">
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Academic Programs
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-neutral-700 max-w-3xl mx-auto text-lg">
            Explore our diverse range of undergraduate and postgraduate programs
            designed to prepare students for successful careers in engineering
            and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="animate-scaleUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Program {...program} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/programs">
            <a className="btn-primary rounded-lg shadow-md hover-lift">
              View All Programs <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
