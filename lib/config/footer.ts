import { Phone, Mail, MapPin } from 'lucide-react'; // Import icons

export interface FooterLink {
  href: string
  label: string
  icon?: string; // Store icon name as string
}

export interface FooterSection {
  title: string
  links: FooterLink[]
}

export interface FooterConfig {
  brand: {
    title: string
    description: string
    logoSrc?: string; 
  }
  sections: FooterSection[]
  socialLinks?: FooterLink[]; 
  copyright: string
}

export const footerConfig: FooterConfig = {
  brand: {
    title: "ACM RVCE",
    description: "Association for Computing Machinery - RVCE Student Chapter",
    logoSrc: "/logos/acm-rvce-logo.png" 
  },
  sections: [
    {
      title: "Quick Links",
      links: [
        { href: "/", label: "Home" },
        { href: "/blog", label: "Blog" },
        { href: "/team", label: "Team" },
        { href: "/events", label: "Events" },
        { href: "/projects", label: "Projects" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" }
      ]
    },
    {
        title: "Contact",
        links: [
          { href: "tel:+919876543210", label: "+91 98765 43210", icon: "Phone" },
          { href: "mailto:acm.rvce@rvce.edu.in", label: "acm.rvce@rvce.edu.in", icon: "Mail" }, 
          { href: "#", label: "RVCE, Mysore Road, Bengaluru", icon: "MapPin" }, 
        ]
    },
  ],
  socialLinks: [
    { href: "#", label: "GitHub", icon: "Github" }, 
    { href: "#", label: "LinkedIn", icon: "Linkedin" },
    { href: "#", label: "Twitter", icon: "Twitter" },
    { href: "#", label: "Instagram", icon: "Instagram" }, 
    { href: "mailto:acm.rvce@rvce.edu.in", label: "Mail", icon: "Mail" } 
  ],
  copyright: `Made with ❤️ by ACM RVCE • © ${new Date().getFullYear()}`
}
