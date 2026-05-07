
const Membership = () => {
    return (
        <div className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Membership Plans</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold mb-4">Basic Plan</h3>
                        <p className="text-gray-600 mb-4">Access to gym facilities during staffed hours, free Wi-Fi, and locker room access.</p>
                        <a href="#learn-more" className="text-purple-500 font-semibold hover:underline">Learn More</a>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold mb-4">Premium Plan</h3>
                        <p className="text-gray-600 mb-4">Includes all Basic Plan benefits plus 24/7 gym access, free group classes, and a complimentary personal training session.</p>
                        <a href="#learn-more" className="text-purple-500 font-semibold hover:underline">Learn More</a>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold mb-4">VIP Plan</h3>
                        <p className="text-gray-600 mb-4">All Premium Plan benefits plus unlimited personal training sessions, access to VIP lounge, and priority booking for classes.</p>
                        <a href="#learn-more" className="text-purple-500 font-semibold hover:underline">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Membership;
    