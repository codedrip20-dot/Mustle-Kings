
const Footer = () => {
    return (
        <div className="bg-gray-800 text-white py-6">
            <div className="container mx-auto px-4 text-center">
                <p className="mb-2">&copy; 2024 Mustles Kings. All rights reserved.</p>
                <div className="flex justify-center space-x-4">
                    <a href="#home" className="hover:underline">Home</a>
                    <a href="#programs" className="hover:underline">Programs</a>
                    <a href="#membership" className="hover:underline">Membership</a>
                    <a href="#contact" className="hover:underline">Contact</a>
                </div>
                <p className="mt-4 text-gray-400">Follow us on social media!</p>
            </div>
        </div>
    );
}
export default Footer;