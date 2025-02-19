import { motion } from "framer-motion";
import Header from "../Home/Components/Header.jsx";
import Footer from "../Home/Components/Footer.jsx";

const About = () => {
    return (
        <div className="relative w-full min-h-screen bg-[#FFF7ED] overflow-x-hidden">
            <Header />
            <motion.div
                className="container mx-auto px-4 sm:px-6 lg:px-8 py-24"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                        About CMAC
                    </h1>
                    <div className="space-y-6 text-gray-600">
                        <p>
                        The Council for Mathematics and Advanced Computing (CMAC) is a dynamic and inclusive community that brings together bright minds passionate about exploring the frontiers of mathematics and computing. Our mission is to create a collaborative environment where innovation thrives, ideas flourish, and academic excellence is celebrated.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8">
                            Our Mission
                        </h2>
                        <p>
                            To cultivate a vibrant community of learners and researchers by:
                            <ul className="list-disc pl-6 mt-2">
                                <li>Organizing technical workshops and seminars</li>
                                <li>Facilitating collaborative research projects</li>
                                <li>Providing industry-academia interaction platforms</li>
                                <li>Promoting open-source contributions</li>
                            </ul>
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8">
                            Core Values
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6 mt-4">
                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                <h3 className="font-bold mb-2">Innovation</h3>
                                <p>Pushing boundaries in mathematical modeling and computational methods</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                <h3 className="font-bold mb-2">Collaboration</h3>
                                <p>Fostering interdisciplinary teamwork across departments</p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
            <Footer />
        </div>
    );
}

export default About;