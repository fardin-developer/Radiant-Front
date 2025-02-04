import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* School Info */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold text-white mb-4">
            Radiant Senior Secondary School
          </h4>
          <p className="text-sm mb-4">
            Nurturing Excellence, Inspiring Future Leaders
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="#"
              aria-label="Facebook"
              className="p-2 bg-gray-700 rounded-full hover:bg-teal-400 transition"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="p-2 bg-gray-700 rounded-full hover:bg-teal-400 transition"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="p-2 bg-gray-700 rounded-full hover:bg-teal-400 transition"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Academics
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Admissions
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Facilities
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-white">
                News &amp; Updates
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Photo Gallery
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Student Portal
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Parent Portal
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Career
              </Link>
            </li>
          </ul>
        </div>

        {/* Get In Touch */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
          <p className="text-sm mb-2">
            123 Education Street,
            <br />
            Mumbai, Maharashtra 400001
          </p>
          <p className="text-sm mb-2">📞 +91 123 456 7890</p>
          <p className="text-sm">
            📧{' '}
            <a
              href="mailto:info@radiant.edu.in"
              className="hover:text-white"
            >
              info@radiant.edu.in
            </a>
          </p>
        </div>
      </div>

      <div className="mt-8 text-center border-t border-gray-700 pt-4">
        <p className="text-sm">
          &copy; 2024 Radianti Academy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
