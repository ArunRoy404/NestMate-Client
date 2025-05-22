import IconFaceBook from "../Icons/IconFaceBook";
import IconTwitter from "../Icons/IconTwitter";
import IconYoutube from "../Icons/IconYoutube";
import Logo from "../Logo/Logo";

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-[#202531] text-white py-8 mt-auto">
            <div className="container mx-auto px-4 grid grid-cols-1  md:grid-cols-3 gap-8">

                {/* Social Media Links */}
                <div>
                    <div className="mb-10">
                        <Logo logo={'light'} />
                        <p>Where roommates become friends.</p>
                    </div>
                    <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                    <div className="grid grid-flow-col gap-4 max-w-max">
                        <a className="cursor-pointer">
                            <IconTwitter />
                        </a>
                        <a className="cursor-pointer">
                            <IconYoutube />
                        </a>
                        <a className="cursor-pointer"> 
                            <IconFaceBook />
                        </a>
                    </div>
                </div>

                {/* Contact Details */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                    <p>Email: support@nestmate.com</p>
                    <p>Phone: +1 (555) 123-4567</p>
                    <p>Address: 123 NestMate Lane, Home City, USA</p>
                </div>

                {/* Terms & Conditions */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Terms & Conditions</h3>
                    <ul className="space-y-2">
                        <li><a href="/terms" className="hover:underline">Privacy Policy</a></li>
                        <li><a href="/terms" className="hover:underline">User Agreement</a></li>
                        <li><a href="/terms" className="hover:underline">Cookie Policy</a></li>
                        <li><a href="/terms" className="hover:underline">Refund Policy</a></li>
                    </ul>
                </div>
            </div>

            <div className="text-center mt-6 text-sm text-gray-400">
                <p>&copy; {currentYear} NestMate. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;