import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (

        <div className="py-3 px-7 text-center border-t mt-2">
            <div className="mt-2 flex justify-between space-x-6 text-2xl">
                <p className="text-lg">© 2025 Romil Raja. All rights reserved.</p>
                <div className="flex space-x-6">
                    <a href="https://www.linkedin.com/in/romil-raja" className="hover:text-[#5465FF]"><FaLinkedin /></a>
                    <a href="https://www.instagram.com/_justt.romil/" className="hover:text-[#5465FF]"><FaInstagram /></a>
                    <a href='https://github.com/Romil2601' className=" hover:text-[#5465FF]"><FaGithub /></a>
                </div>
            </div>
        </div>
    );
};

export default Footer;