import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="border-t border-border">
      <div className="container px-6 md:px-12 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
        <div className="mt-7 md:col-span-2">
          <p>
            SP sports facility is a dedicated space designed for various
            athletic activities, recreational sports, and fitness programs.
            These facilities can vary greatly in size, amenities, and the types
            of sports they accommodate.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-5">My Account</h3>
          <p>
            <Link to="/profile">Profile</Link>
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-5">Pages</h3>
          <p>
            <Link to="/contact">Contact Us</Link>
          </p>
          <p>
            <Link to="/">Privacy & Policy</Link>
          </p>
          <p>
            <Link to="/">Terms & Condition</Link>
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-1">Need any help? </h3>
          <p>Call Support: +880185189184</p>
          <p>email: info.jhshakil@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
