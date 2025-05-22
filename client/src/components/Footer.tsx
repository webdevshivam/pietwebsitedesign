import { Link } from 'wouter';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

type SocialLinkProps = {
  icon: string;
  href: string;
  label: string;
};

const SocialLink = ({ icon, href, label }: SocialLinkProps) => (
  <a 
    href={href} 
    aria-label={label} 
    className="text-white hover:text-accent transition"
  >
    <i className={icon}></i>
  </a>
);

type FooterLinkProps = {
  href: string;
  label: string;
};

const FooterLink = ({ href, label }: FooterLinkProps) => (
  <li>
    <Link href={href}>
      <a className="hover:text-accent transition">{label}</a>
    </Link>
  </li>
);

type ContactItemProps = {
  icon: string;
  children: React.ReactNode;
};

const ContactItem = ({ icon, children }: ContactItemProps) => (
  <li className="flex items-start">
    <i className={`${icon} mt-1 mr-3`}></i>
    <span>{children}</span>
  </li>
);

export default function Footer() {
  const { toast } = useToast();
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Thank you for subscribing!",
      description: "You have been added to our newsletter list."
    });
    setEmail('');
  };

  const socialLinks: SocialLinkProps[] = [
    { icon: "fab fa-facebook-f", href: "#", label: "Facebook" },
    { icon: "fab fa-twitter", href: "#", label: "Twitter" },
    { icon: "fab fa-instagram", href: "#", label: "Instagram" },
    { icon: "fab fa-linkedin-in", href: "#", label: "LinkedIn" },
    { icon: "fab fa-youtube", href: "#", label: "YouTube" }
  ];

  const quickLinks: FooterLinkProps[] = [
    { href: "/about", label: "About Us" },
    { href: "/programs", label: "Programs" },
    { href: "/admissions", label: "Admissions" },
    { href: "/placements", label: "Placements" },
    { href: "/research", label: "Research" },
    { href: "/campus-life", label: "Campus Life" },
    { href: "/contact", label: "Contact Us" }
  ];

  const programLinks: FooterLinkProps[] = [
    { href: "/programs/cse", label: "B.Tech Computer Science" },
    { href: "/programs/electrical", label: "B.Tech Electrical" },
    { href: "/programs/mechanical", label: "B.Tech Mechanical" },
    { href: "/programs/civil", label: "B.Tech Civil" },
    { href: "/programs/electronics", label: "B.Tech Electronics" },
    { href: "/programs/mtech", label: "M.Tech Programs" },
    { href: "/programs/phd", label: "Ph.D. Programs" }
  ];

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="container mx-auto py-16 px-4 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 */}
          <div>
            <img 
              src="https://images.unsplash.com/photo-1589330694653-ded6df03f754?ixlib=rb-4.0.3&auto=format&fit=crop&w=180&h=80&q=80" 
              alt="Poornima Institute Logo" 
              className="h-16 mb-6"
            />
            <p className="mb-6 opacity-80">
              Poornima Institute of Engineering & Technology is committed to providing quality education and creating skilled professionals for a better tomorrow.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <SocialLink key={index} {...link} />
              ))}
            </div>
          </div>
          
          {/* Column 2 */}
          <div>
            <h3 className="font-heading font-bold text-xl mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <FooterLink key={index} {...link} />
              ))}
            </ul>
          </div>
          
          {/* Column 3 */}
          <div>
            <h3 className="font-heading font-bold text-xl mb-6">Programs</h3>
            <ul className="space-y-3">
              {programLinks.map((link, index) => (
                <FooterLink key={index} {...link} />
              ))}
            </ul>
          </div>
          
          {/* Column 4 */}
          <div>
            <h3 className="font-heading font-bold text-xl mb-6">Contact Information</h3>
            <ul className="space-y-4">
              <ContactItem icon="fas fa-map-marker-alt">
                ISI-2, RIICO Institutional Area, Sitapura, Jaipur, Rajasthan 302022
              </ContactItem>
              <ContactItem icon="fas fa-phone-alt">
                +91-141-4071500
              </ContactItem>
              <ContactItem icon="fas fa-envelope">
                info@poornima.org
              </ContactItem>
              <ContactItem icon="fas fa-globe">
                www.poornima.org
              </ContactItem>
            </ul>
            
            <div className="mt-6">
              <h4 className="font-heading font-semibold mb-4">Newsletter</h4>
              <form className="flex" onSubmit={handleNewsletterSubmit}>
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 rounded-l-md focus:outline-none text-neutral-800 w-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button 
                  type="submit" 
                  className="bg-secondary hover:bg-secondary-dark text-white px-4 py-2 rounded-r-md transition duration-300"
                  aria-label="Subscribe to newsletter"
                >
                  <i className="fas fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Footer */}
      <div className="border-t border-white border-opacity-20">
        <div className="container mx-auto py-6 px-4 lg:px-0 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2025 Poornima Institute of Engineering & Technology. All Rights Reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li><a href="#" className="hover:text-accent transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-accent transition">Terms of Use</a></li>
              <li><a href="#" className="hover:text-accent transition">Sitemap</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
