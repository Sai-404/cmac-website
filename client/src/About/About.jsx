import { motion } from "framer-motion";
import Header from "../Home/Components/Header.jsx";
import Footer from "../Home/Components/Footer.jsx";
import { Zap, Users, Award, Shield } from "lucide-react"; // Import icons

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
                            The Council for Mathematics and Advanced Computing (CMAC) is a pioneering initiative dedicated to fostering excellence in mathematics and computational sciences. Established with a vision to bridge theoretical concepts with real-world applications, CMAC serves as a hub for innovation, problem-solving, and interdisciplinary collaboration.

                            At CMAC, we believe that mathematics and computing are the driving forces behind modern technological advancements. Through workshops, research initiatives, hackathons, and technical events, we provide students with opportunities to enhance their analytical thinking, programming skills, and mathematical intuition. Our mission is to empower young minds by equipping them with the tools to solve complex problems, explore emerging technologies, and contribute to cutting-edge developments in science and engineering.

                            Guided by esteemed faculty and driven by passionate students, CMAC stands as a platform where knowledge meets innovation. We welcome all those eager to push the boundaries of mathematics and computing to join us in shaping the future.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8">
                            Our Mission
                        </h2>
                        <p>
                            The Council for Mathematics and Advanced Computing (CMAC) is dedicated to fostering a thriving community of learners, innovators, and researchers who are passionate about the intersection of mathematics and computing. Our mission is to bridge the gap between theoretical knowledge and real-world applications by creating an engaging and collaborative environment for students, faculty, and industry professionals.
                            <ul className="list-disc pl-6 mt-2">
                                <li>Organizing technical workshops, seminars, and hackathons to enhance practical knowledge.</li>
                                <li>Facilitating collaborative research projects that bridge mathematics and advanced computing.</li>
                                <li>Providing platforms for industry-academia interaction to foster career growth and innovation.</li>
                                <li>Promoting open-source contributions and knowledge sharing in computational sciences.</li>
                            </ul>
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8">
                            Core Values
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6 mt-4">
                            {/* Innovation */}
                            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-gray-200 relative overflow-hidden transform hover:scale-105">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative z-10">
                                    <Zap className="w-8 h-8 text-blue-500 mb-4" />
                                    <h3 className="text-xl font-bold mb-2">Innovation</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        We embrace creativity and forward-thinking approaches to explore new frontiers in AI, machine learning, cryptography, and computational sciences.
                                    </p>
                                </div>
                            </div>

                            {/* Collaboration */}
                            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-gray-200 relative overflow-hidden transform hover:scale-105">
                                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative z-10">
                                    <Users className="w-8 h-8 text-green-500 mb-4" />
                                    <h3 className="text-xl font-bold mb-2">Collaboration</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        We believe in the power of teamwork and interdisciplinary cooperation, encouraging students, faculty, and industry experts to work together in solving complex problems.
                                    </p>
                                </div>
                            </div>

                            {/* Excellence */}
                            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-gray-200 relative overflow-hidden transform hover:scale-105">
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative z-10">
                                    <Award className="w-8 h-8 text-purple-500 mb-4" />
                                    <h3 className="text-xl font-bold mb-2">Excellence</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        We strive for academic and technical excellence by fostering a culture of continuous learning, critical thinking, and innovation in mathematics and computing.
                                    </p>
                                </div>
                            </div>

                            {/* Integrity */}
                            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-gray-200 relative overflow-hidden transform hover:scale-105">
                                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative z-10">
                                    <Shield className="w-8 h-8 text-orange-500 mb-4" />
                                    <h3 className="text-xl font-bold mb-2">Integrity</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        We uphold the highest standards of honesty, ethics, and responsibility in research, learning, and professional engagements.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
            <Footer />
        </div>
    );
};

export default About;