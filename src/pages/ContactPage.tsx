import ContactForm from "@/components/web/ContactForm";
import ContactInformation2 from "@/components/web/ContactInformation2";

const ContactPage = () => {
  return (
    <div>
      <div className="container">
        <h1 className="text-[40px] lg:text-[60px] text-center font-medium">
          Contact Us
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 container py-11">
        <ContactInformation2 />
        <ContactForm />
      </div>
      <div className="container py-11">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2581.252128524428!2d90.34848424413305!3d23.80288503198038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0e96fce29dd%3A0x6ccd9e51aba9e64d!2sMirpur-1%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1725133226285!5m2!1sen!2sbd"
          width="100%"
          height="450"
          style={{ border: "0" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
