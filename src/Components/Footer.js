import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
const Footer = () => {
    return (
        <footer class="footer footer-center p-10 bg-base-200 text-base-content rounded">
            <div className="flex flex-col items-center justify-center">
                <div class="grid grid-cols-3 gap-4">
                    <FaFacebookSquare className='w-6 h-6'></FaFacebookSquare>
                    <FaInstagramSquare className="w-6 h-6"></FaInstagramSquare>
                    <FaLinkedin className="w-6 h-6"></FaLinkedin>
                </div>
                <div>
                <p>Copyright © 2022 - Chamak Karmakar</p>
            </div>
            </div>
            
        </footer>
    );
};

export default Footer;