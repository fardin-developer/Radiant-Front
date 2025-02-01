// components/Footer.js
const Footer = () => {
    return (
      <footer className="py-12 bg-gradient-to-br from-blue-900 via-purple-900 to-black border-t border-purple-500/20">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
            Futuristic School
          </h3>
          <p className="text-gray-300 mb-4">
            Empowering the future with innovation, creativity, and excellence.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">
              About Us
            </a>
            <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">
              Contact
            </a>
            <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;