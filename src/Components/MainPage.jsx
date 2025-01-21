// import { motion } from "framer-motion";
// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useNavigate } from "react-router";

// const MotionComponent = () => {
//   const navigate = useNavigate();
//   useEffect(() => {
//     AOS.init({ duration: 1200 });
//   }, []);
//   const handleExploreClick = () => {
//     navigate("/home");
//   };
//   return (
//     <>
//     <div className="relative flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-[#a855f7] via-[#6b21a8] to-[#9333ea] text-white px-6 sm:px-10">
//       {/* Animated Background */}
//       <div className="absolute inset-0 bg-opacity-30 bg-black blur-2xl"></div>

//       {/* Animated Text Section */}
//       <motion.h1
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-gray-100 tracking-wide text-center z-10"
//       >
//         Welcome to My
//       </motion.h1>

//       <motion.h1
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1.2, delay: 0.3 }}
//         className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#ff00ff] tracking-wide text-center z-10"
//       >
//         Portfolio Website
//       </motion.h1>

//       {/* Subheading with Fade Effect */}
//       <p
//         data-aos="fade-up"
//         className="mt-4 text-lg sm:text-xl text-gray-300 text-center max-w-2xl z-10"
//       >
//         Showcasing creativity, skills, and projects with a modern touch.
//       </p>

//       {/* Call to Action Button with Animation */}
      
//         <motion.button
//         onClick={handleExploreClick}
//           whileHover={{ scale: 1.05, backgroundColor: "#6b21a8", color: "#fff" }}
//           whileTap={{ scale: 0.95 }}
//           className="mt-6 px-8 py-3 bg-[#a855f7] text-white text-lg sm:text-xl font-semibold rounded-lg shadow-lg z-10 transition-all ease-in-out duration-300"
//         >
//           Explore My Work
//         </motion.button>
    
//     </div>
//     </>
//   );
// };

// export default MotionComponent;


import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router";

const MotionComponent = () => {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  
  const handleExploreClick = () => {
    navigate("/home");
  };

  return (
    <>
      <div className="relative flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-[#0077B6] via-[#00A8CC] to-[#00B4D8] text-white px-6 sm:px-10">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-opacity-30 bg-black blur-2xl"></div>

        {/* Animated Text Section */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-gray-100 tracking-wide text-center z-10"
        >
          Welcome to My
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#FFD700] tracking-wide text-center z-10"
        >
          Portfolio Website
        </motion.h1>

        {/* Subheading with Fade Effect */}
        <p
          data-aos="fade-up"
          className="mt-4 text-lg sm:text-xl text-gray-300 text-center max-w-2xl z-10"
        >
          Showcasing creativity, skills, and projects with a modern touch.
        </p>

        {/* Call to Action Button with Animation */}
        <motion.button
          onClick={handleExploreClick}
          whileHover={{ scale: 1.05, backgroundColor: "#00A8CC", color: "#fff" }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-8 py-3 bg-[#00B4D8] text-white text-lg sm:text-xl font-semibold rounded-lg shadow-lg z-10 transition-all ease-in-out duration-300"
        >
          Explore My Work
        </motion.button>
      </div>
    </>
  );
};

export default MotionComponent;
