// import { motion } from "framer-motion";
// import { useState, useEffect } from "react";

// export default function About() {
//   const [textIndex, setTextIndex] = useState(0);

//   // Text content to display
//   const aboutText = [
//     "I",
//     "am",
//     "a",
//     "Full",
//     "Stack",
//     "Developer",
//     "passionate",
//     "about",
//     "creating",
//     "scalable",
//     "and",
//     "efficient",
//     "web",
//     "applications.",
//     "I",
//     "work",
//     "with",
//     "modern",
//     "technologies",
//     "like",
//     "React.js",
//     "Next.js",
//     "and",
//     "MongoDB",
//     "to",
//     "build",
//     "user-friendly",
//     "web",
//     "solutions.",
//     "My",
//     "goal",
//     "is",
//     "to",
//     "develop",
//     "solutions",
//     "that",
//     "are",
//     "not",
//     "only",
//     "effective",
//     "but",
//     "also",
//     "innovative.",
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTextIndex((prevIndex) => (prevIndex < aboutText.length ? prevIndex + 1 : 0));
//     }, 300); // Adjust timing for each word
//     return () => clearInterval(interval);
//   }, [textIndex]);

//   return (
//     <section className="py-16 bg-gradient-to-br from-white via-gray-100 to-gray-200 text-gray-900 px-6 sm:px-10">
//       {/* Header */}
//       <div className="max-w-4xl mx-auto text-center mb-12">
//         <h2 className="text-3xl sm:text-4xl font-bold text-[#6b21a8] mb-6">
//           About Me
//         </h2>

//         {/* Animated Text */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 1 }}
//           className="text-lg sm:text-xl font-medium text-gray-600"
//         >
//           {aboutText.slice(0, textIndex).join(" ")}
//         </motion.div>
//       </div>

//       {/* Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto">
//         {/* Card 1 */}
//         <motion.div
//           className="p-6 bg-[#6b21a8] text-white rounded-lg shadow-lg"
//           animate={{
//             y: [0, -10, 0],
//           }}
//           transition={{
//             duration: 2,
//             repeat: Infinity,
//             repeatType: "loop",
//           }}
//         >
//           <h3 className="text-2xl font-bold mb-4">Skills</h3>
//           <ul className="list-disc pl-4 space-y-2">
//             <li>Html & CSS & JavaScript </li>
//             <li>React.js & Redux</li>
//             <li>Node.js & Next.js</li>
//             <li>MongoDB & SQL</li>
//             <li>Database Managment Systems</li>
//           </ul>
//         </motion.div>

       
//         {/* Card 2 */}
//         <motion.div
         
//           animate={{
//             y: [0, -10, 0],
//           }}
//           transition={{
//             duration: 2,
//             repeat: Infinity,
//             repeatType: "loop",
//           }}
//         >
//           <h3 className="text-2xl font-bold mb-4">Experience</h3>
//           <ul className="list-disc pl-4 space-y-2">
//             <p>
//               I am currently pursuing a Bachelor's degree in Computer Science (BSCS)
//               and have completed my 7th semester at the University of Engineering and
//               Technology (UET). I have also completed internships at two different
//               companies, Apex Space and Heal Labs, where I gained valuable experience
//               and earned certificates.
//             </p>
//           </ul>
//         </motion.div>

//         {/* Card 3 */}
//         <motion.div
//           className="p-6 bg-[#a855f7] text-white rounded-lg shadow-lg"
//           // animate={{
//           //   scale: [1, 1.1, 1],
//           // }}
//           // transition={{
//           //   duration: 2.5,
//           //   repeat: Infinity,
//           //   repeatType: "loop",
//           // }}
//           animate={{
//             y: [0, -10, 0],
//           }}
//           transition={{
//             duration: 2,
//             repeat: Infinity,
//             repeatType: "loop",
//           }}
//         >
//           <h3 className="text-2xl font-bold mb-4">Interests</h3>
//           <p>
//             I aspire to become a successful professional in a dynamic and constantly evolving environment. I aim to leverage my technical skills and hands-on experience to thrive and excel in my chosen field. Outside of tech, I love
//             reading and solving complex puzzles.
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function About() {
  const [textIndex, setTextIndex] = useState(0);

  // Text content to display
  const aboutText = [
    "I",
    "am",
    "a",
    "Full",
    "Stack",
    "Developer",
    "passionate",
    "about",
    "creating",
    "scalable",
    "and",
    "efficient",
    "web",
    "applications.",
    "I",
    "work",
    "with",
    "modern",
    "technologies",
    "like",
    "React.js",
    "Next.js",
    "and",
    "MongoDB",
    "to",
    "build",
    "user-friendly",
    "web",
    "solutions.",
    "My",
    "goal",
    "is",
    "to",
    "develop",
    "solutions",
    "that",
    "are",
    "not",
    "only",
    "effective",
    "but",
    "also",
    "innovative.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex < aboutText.length ? prevIndex + 1 : 0));
    }, 300); // Adjust timing for each word
    return () => clearInterval(interval);
  }, [textIndex]);

  return (
    <section className="py-16 bg-gradient-to-br from-[#0077B6] via-[#00A8CC] to-[#00B4D8] text-white px-6 sm:px-10">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          About Me
        </h2>

        {/* Animated Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="text-lg sm:text-xl font-medium text-gray-200"
        >
          {aboutText.slice(0, textIndex).join(" ")}
        </motion.div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Card 1 */}
        <motion.div
          className="p-6 bg-gradient-to-br from-[#0077B6] via-[#00A8CC] to-[#00B4D8] text-white rounded-lg shadow-lg"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <h3 className="text-2xl font-bold mb-4">Skills</h3>
          <ul className="list-disc pl-4 space-y-2">
            <li>Html & CSS & JavaScript </li>
            <li>React.js & Redux</li>
            <li>Node.js & Next.js</li>
            <li>MongoDB & SQL</li>
            <li>Database Management Systems</li>
          </ul>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="p-6 bg-gradient-to-br from-[#0077B6] via-[#00A8CC] to-[#00B4D8] text-white rounded-lg shadow-lg"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <h3 className="text-2xl font-bold mb-4">Experience</h3>
          <ul className="list-disc pl-4 space-y-2">
            <p>
              I am currently pursuing a Bachelor's degree in Computer Science (BSCS)
              and have completed my 7th semester at the University of Engineering and
              Technology (UET). I have also completed internships at two different
              companies, Apex Space and Heal Labs, where I gained valuable experience
              and earned certificates.
            </p>
          </ul>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="p-6 bg-gradient-to-br from-[#0077B6] via-[#00A8CC] to-[#00B4D8] text-white rounded-lg shadow-lg"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <h3 className="text-2xl font-bold mb-4">Interests</h3>
          <p>
            I aspire to become a successful professional in a dynamic and constantly evolving environment. I aim to leverage my technical skills and hands-on experience to thrive and excel in my chosen field. Outside of tech, I love
            reading and solving complex puzzles.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
