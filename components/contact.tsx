import { MailIcon, Linkedin, Instagram, ExternalLink } from "lucide-react";

const Contact = () => {
  return (
    <div id="contact" className="flex flex-col text-sm sm:text-md justify-start md:text-lg lg:text-xl 2xl:text-3xl md:p-2 ">
      <a
        className="flex items-center p-2 underline"
        target="_blank"
        href="mailto:joshuarodriguesdev@gmail.com"
      >
        <MailIcon className="mr-5" />  Email me <ExternalLink size={12} className="ml-1"/>
      </a>
      <a
        className="flex items-center p-2 underline"
        target="_blank"
        href="https://linkedin.com/in/joshua-rodrigues-1655091b2"
      >
        <Linkedin className="mr-5" />Connect with me on LinkedIn<ExternalLink size={12} className="ml-1"/>
      </a>
      <a
        className="flex items-center p-2 underline"
        target="_blank"
        href="https://www.instagram.com/joshuajrodrigues?utm_source=qr&igsh=d2xhbmphaW03ZGZ2"
      >
        <Instagram className="mr-5" /> Follow me on Instagram<ExternalLink size={12} className="ml-1"/>
      </a>
    </div>
  );
};

export default Contact;
