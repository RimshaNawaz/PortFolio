
// import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { motion } from "framer-motion";
// import { HiDownload } from "react-icons/hi"; // Import the download icon

// export default function Home() {
//   return (
//     <div className="flex flex-col sm:flex-row items-center justify-between min-h-screen bg-gradient-to-br from-[#a855f7] via-[#6b21a8] to-[#9333ea] text-white px-6 sm:px-10">
//       {/* Left Section: Info */}
//       <div className="flex flex-col justify-center items-start max-w-2xl gap-6">
//         <motion.h1
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-4xl sm:text-5xl font-extrabold"
//         >
//           Full Stack Developer
//         </motion.h1>
//         <motion.div
//           className="text-xl sm:text-2xl font-medium text-gray-200"
//           animate={{
//             opacity: [0, 1, 1, 0],
//             y: [30, 0, 0, -30],
//           }}
//           transition={{
//             duration: 3,
//             repeat: Infinity,
//             repeatType: "loop",
//           }}
//         >
//           MERN Stack Developer
//         </motion.div>
//         <motion.div
//           className="text-xl sm:text-2xl font-medium text-gray-200"
//           animate={{
//             opacity: [0, 1, 1, 0],
//             y: [30, 0, 0, -30],
//           }}
//           transition={{
//             duration: 3,
//             delay: 1,
//             repeat: Infinity,
//             repeatType: "loop",
//           }}
//         >
//           Backened Developer
//         </motion.div>
//         <motion.div
//           className="text-xl sm:text-2xl font-medium text-gray-200"
//           animate={{
//             opacity: [0, 1, 1, 0],
//             y: [30, 0, 0, -30],
//           }}
//           transition={{
//             duration: 3,
//             delay: 2,
//             repeat: Infinity,
//             repeatType: "loop",
//           }}
//         >
//           Web Developer
//         </motion.div>

//         {/* Buttons */}
//         <div className="mt-4 flex flex-wrap gap-4">
//           <motion.button
//             whileHover={{ scale: 1.1, backgroundColor: "#6b21a8" }}
//             whileTap={{ scale: 0.9 }}
//             className="px-6 py-3 bg-[#a855f7] text-lg font-bold rounded-md shadow-lg"
//           >
//             React.js
//           </motion.button>
//           <motion.button
//             whileHover={{ scale: 1.1, backgroundColor: "#6b21a8" }}
//             whileTap={{ scale: 0.9 }}
//             className="px-6 py-3 bg-[#a855f7] text-lg font-bold rounded-md shadow-lg"
//           >
//             Next.js
//           </motion.button>
//           <motion.button
//             whileHover={{ scale: 1.1, backgroundColor: "#6b21a8" }}
//             whileTap={{ scale: 0.9 }}
//             className="px-6 py-3 bg-[#a855f7] text-lg font-bold rounded-md shadow-lg"
//           >
//             MongoDB
//           </motion.button>
//         </div>

//         {/* Social Links and CV Download */}
//         <div className="mt-6 flex flex-col items-center gap-6 sm:flex-row">
//           {/* GitHub and LinkedIn Links */}
//           <div className="flex space-x-6">
//             <a
//               href="https://github.com/RimshaNawaz"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-white text-4xl p-2 rounded-full hover:bg-[#9333ea] transition-all"
//             >
//               <FaGithub />
//             </a>
//             <a
//               href="https://www.linkedin.com/in/rimsha-nawaz-623048278/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-white text-4xl p-2 rounded-full hover:bg-[#9333ea] transition-all"
//             >
//               <FaLinkedin />
//             </a>
//           </div>

//           {/* CV Download Button */}
//           {/* <motion.a
//             href="/My Resume.pdf"
//             className="mt-4 sm:mt-0 inline-flex items-center px-8 py-4 bg-[#9333ea] text-xl font-bold text-white rounded-full shadow-lg hover:bg-[#6b21a8] transition-all"
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//           >
//             <HiDownload className="mr-3" />
//             Download CV
//           </motion.a> */}
//           <motion.a
//             href="/My Resume.pdf"
//             className="mt-4 sm:mt-0 inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 bg-[#9333ea] text-lg sm:text-xl font-bold text-white rounded-full shadow-lg hover:bg-[#6b21a8] transition-all"
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//           >
//             <HiDownload className="mr-3" />
//             Download CV
//           </motion.a>
//         </div>
//       </div>

//       {/* Right Section: Image */}
//       <motion.div
//         initial={{ opacity: 0, x: 50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.8 }}
//         className="mt-8 sm:mt-0 sm:ml-10 w-full sm:w-1/2 bg-white p-4 rounded-lg shadow-lg"
//       >
//         <img
//           src="/image.webp"
//           alt="Profile"
//           className="w-full rounded-lg shadow-lg"
//         />
//       </motion.div>
//     </div>
//   );
// }


import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { HiDownload } from "react-icons/hi"; // Import the download icon
export default function Home() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between min-h-screen bg-gradient-to-br from-[#0077B6] via-[#00A8CC] to-[#00B4D8] text-white px-6 sm:px-10">
      {/* Left Section: Info */}
      <div className="flex flex-col justify-center items-start max-w-2xl gap-6">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-extrabold"
        >
          Full Stack Developer
        </motion.h1>
        <motion.div
          className="text-xl sm:text-2xl font-medium text-gray-200"
          animate={{
            opacity: [0, 1, 1, 0],
            y: [30, 0, 0, -30],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          MERN Stack Developer
        </motion.div>
        <motion.div
          className="text-xl sm:text-2xl font-medium text-gray-200"
          animate={{
            opacity: [0, 1, 1, 0],
            y: [30, 0, 0, -30],
          }}
          transition={{
            duration: 3,
            delay: 1,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          Backend Developer
        </motion.div>
        <motion.div
          className="text-xl sm:text-2xl font-medium text-gray-200"
          animate={{
            opacity: [0, 1, 1, 0],
            y: [30, 0, 0, -30],
          }}
          transition={{
            duration: 3,
            delay: 2,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          Web Developer
        </motion.div>

        {/* Buttons */}
        <div className="mt-4 flex flex-wrap gap-4">
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "#003dbc" }}
            whileTap={{ scale: 0.9 }}
            className="px-6 py-3 bg-[#0077B6]  text-lg font-bold rounded-md shadow-lg"
          >
            React.js
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "#003dbc" }}
            whileTap={{ scale: 0.9 }}
            className="hover:bg-[rgb(0,61,182)] px-6 py-3 bg-[#0077B6] text-lg font-bold rounded-md shadow-lg"
          >
            Next.js
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "#003dbc" }}
            whileTap={{ scale: 0.9 }}
            className="px-6 py-3 bg-[#0077B6] text-lg font-bold rounded-md shadow-lg hover:bg-[rgb(0,61,182)] "
          >
            MongoDB
          </motion.button>
        </div>

        {/* Social Links and CV Download */}
        <div className="mt-6 flex flex-col items-center gap-6 sm:flex-row">
          {/* GitHub and LinkedIn Links */}
          <div className="flex space-x-6">
            <a
              href="https://github.com/RimshaNawaz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-[#0077B6] text-4xl p-2 rounded-full hover:bg-[rgb(0,61,182)] transition-all"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/rimsha-nawaz-623048278/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-[#0077B6] text-4xl p-2 rounded-full hover:bg-[rgb(0,61,182)] transition-all"
            >
              <FaLinkedin />
            </a>
          </div>

          {/* CV Download Button */}
          <motion.a
            href="/My Resume.pdf"
            className="mt-4 sm:mt-0 inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 bg-[#0077B6] text-lg sm:text-xl font-bold text-white rounded-full shadow-lg hover:bg-[rgb(0,61,182)] transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <HiDownload className="mr-3" />
            Download CV
          </motion.a>
        </div>
      </div>

      {/* Right Section: Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-8 sm:mt-0 sm:ml-10 w-full sm:w-1/2 bg-white p-4 rounded-lg shadow-lg"
      >
        <img
          src="/image.webp"
          alt="Profile"
          className="w-full rounded-lg shadow-lg"
        />
      </motion.div>
    </div>
  );
}
