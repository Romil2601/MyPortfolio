import React, { useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from "@emailjs/browser";

AOS.init();

const Contact = ({ darkMode }) => {
    const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .sendForm(
                "service_kvvtdld",
                "template_nb7d5oj",
                e.target,
                "c48_yQKReeWBoj5Cu"
            )
            .then(
                () => {
                    setSuccess("Message sent successfully! ✅");
                    setFormData({ name: "", email: "", subject: "", message: "" });
                    setLoading(false);
                },
                (error) => {
                    setSuccess("Failed to send message ❌");
                    setLoading(false);
                    console.error(error);
                }
            );
    };

    return (
        <section className={`relative z-10 overflow-hidden py-20 lg:py-6 ${darkMode ? "bg-dark text-white" : "bg-white text-dark"}`}>
            <div className="container">
                <div className="-mx-4 flex flex-wrap lg:justify-between">
                    <div className="w-full px-4 lg:w-full">
                        <div className="mb-6 lg:mb-0">
                            <h2 className="mb-6 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                                GET IN TOUCH WITH ME
                            </h2>
                            <p className="mb-9 mx-20 text-base leading-relaxed">
                                So, you want to reach out? Fancy that! Whether it’s for a project, an idea,
                                or if you just want to talk about the weather (I’m an expert in small talk),
                                feel free to hit me up. Go ahead, drop me a message; I might surprise you with a reply!
                            </p>
                        </div>
                        <div data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1000">
                            <div className="contact">
                                <div id="container">
                                    <h2 className="mt-4">CONTACT ME</h2>
                                    <form onSubmit={sendEmail} id="contact_form">
                                        <div className="name">
                                            <label htmlFor="name"></label>
                                            <input type="text" placeholder="Name" name="name" id="name_input" required value={formData.name} onChange={handleChange} />
                                        </div>
                                        <div className="email">
                                            <label htmlFor="email"></label>
                                            <input type="email" placeholder="E-mail" name="email" id="email_input" required value={formData.email} onChange={handleChange} />
                                        </div>
                                        <div className="subject">
                                            <label htmlFor="subject"></label>
                                            <select name="subject" id="subject_input" required value={formData.subject} onChange={handleChange}>
                                                <option disabled value="">Choose One</option>
                                                <option>Just sayin' "Hi"!</option>
                                                <option>Quick question.</option>
                                                <option>How about a collab?</option>
                                            </select>
                                        </div>
                                        <div className="message">
                                            <label htmlFor="message"></label>
                                            <textarea name="message" placeholder="Message" id="message_input" cols="30" rows="5" required value={formData.message} onChange={handleChange}></textarea>
                                        </div>
                                        <div className="submit mt-2">
                                            <button type="submit" id="form_button" disabled={loading} className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                                                {loading ? "Sending..." : "Submit"}
                                            </button>
                                        </div>
                                    </form>
                                    {success && <p className="mt-4 text-green-500">{success}</p>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;