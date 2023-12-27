import { MailIcon, Linkedin, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <div className="flex flex-col justify-start md:text-lg md:p-2 ">
      <a
        className="flex items-center p-2"
        target="_blank"
        href="mailto:joshuarodriguesdev@gmail.com"
      >
        <MailIcon className="mr-5" />  joshuarodriguesdev@gmail.com
      </a>
      <a
        className="flex items-center p-2"
        target="_blank"
        href="https://linkedin.com/in/joshua-rodrigues-1655091b2"
      >
        <Linkedin className="mr-5" /> Find me on LinkedIn
      </a>
      <a
        className="flex items-center p-2"
        target="_blank"
        href="https://www.instagram.com/joshuajrodrigues?utm_source=qr&igsh=d2xhbmphaW03ZGZ2"
      >
        <Instagram className="mr-5" /> Follow me on Instagram
      </a>
    </div>
  );
};

export default Contact;
