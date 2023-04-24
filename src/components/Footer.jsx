import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-3xl font-bold text-white mb-6">Connect with me</h2>

        <div className="flex-col leading-8">
          <p>Email: jaidernf@gmail.com</p>
          <p>Mobile: +55 31 99516-2182</p>
        </div>
        <div className="flex justify-center m-4">
          <a href="https://github.com/jaidernunes" target="_blank" rel="noopener noreferrer" className="mx-4"><FaGithub size={24} /></a>
          <a href="https://www.linkedin.com/in/jaidernunes" target="_blank" rel="noopener noreferrer" className="mx-4"><FaLinkedin size={24} /></a>
          <a href="https://wa.me/5531995162182" target="_blank" rel="noopener noreferrer" className="mx-4"><FaWhatsapp size={24} /></a>
        </div>
        <p className="text-sm">&copy; 2023 - Jaider Nunes</p>
      </div>
    </footer>
  );
}

export default Footer;
