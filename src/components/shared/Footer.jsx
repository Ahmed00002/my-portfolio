const Footer = () => {
  return (
    <footer className=" text-gray-400 text-sm py-6 mt-12 md:mt-28">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center border-t border-gray-600 pt-4">
        {/* Left Side - Copyright */}
        <p>© 2024. All rights reserved.</p>

        {/* Right Side - Social Links */}
        <div className="flex gap-6 mt-4 md:mt-0">
          <a
            href="https://www.facebook.com/AhmedNuman2004"
            target="_blank"
            className="hover:text-white transition"
          >
            Facebook ↗
          </a>
          <a
            href="https://www.instagram.com/ahmednuman70/"
            target="_blank"
            className="hover:text-white transition"
          >
            Instagram ↗
          </a>
          <a
            href="https://www.linkedin.com/in/layekahmednuman/"
            target="_blank"
            className="hover:text-white transition"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
