import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <footer class="footer footer-center p-10 bg-base-200 text-base-content rounded">
            <div className="flex flex-col items-center justify-center">
                <div class="grid grid-cols-3 gap-4">
                    <Link to="https://www.facebook.com/chamak.karmakar/">
                        <FaFacebookSquare className='w-6 h-6'></FaFacebookSquare>
                    </Link>
                    <Link to="https://www.facebook.com/chamak.karmakar/">
                    <FaInstagramSquare className="w-6 h-6"></FaInstagramSquare>
                    </Link>
                    <Link to="https://www.linkedin.com/in/chamak-karmakar-911522176/">
                    <FaLinkedin className="w-6 h-6"></FaLinkedin>
                    </Link>

                    
                    
                </div>
                <div>
                    <p>Copyright © {(new Date().getFullYear())} - Chamak Karmakar</p>
                </div>
            </div>

        </footer>
    );
};

export default Footer;