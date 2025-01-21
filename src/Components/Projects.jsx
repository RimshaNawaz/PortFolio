

// import { motion } from "framer-motion";

// export default function Projects() {
//   // Project data
//   const projects = [
//     {
//       title: "Spotify Clone",
//       description:
//         "A responsive frontend clone of Spotify with a sleek UI and media playback functionality.",
//       techStack: "HTML, CSS, JavaScript",
//       linkedin: "https://www.linkedin.com/in/rimsha-nawaz-623048278/recent-activity/videos/",
//     },
//     {
//       title: "Online Meal",
//       description:
//         "An innovative platform for meal planning and enjoying life with fun.",
//       techStack: "HTML, CSS, JavaScript",
//       linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7069947618436530177/?originTrackingId=VUKFhViGRGiClR3qWX6XIw%3D%3D",
//     },
//     {
//       title: "Welcome to My GYM",
//       description:
//         "A frontend gym management system with a focus on user experience and design.",
//       techStack: "HTML, CSS, JavaScript",
//       linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7077235339374804994/?originTrackingId=zEfoRuhKS7%2BngkDeR%2F48HA%3D%3D",
//     },
//     {
//       title: "To-Do List",
//       description: "A classic task management app with a clean, minimalistic UI.",
//       techStack: "React.js",
//       linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7096945310408581120/?originTrackingId=nx3DLwzaSfiQGRknEtXusA%3D%3D",
//     },
//     {
//       title: "Digital Clock",
//       description:
//         "A simple digital clock showcasing real-time updates with JavaScript.",
//       techStack: "HTML, CSS, JavaScript",
//       linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7085996769938948096/?originTrackingId=1YswgRwoSRy6BhZ4wSOK%2Fw%3D%3D",
//     },
//     {
//       title: "Password Generator",
//       description:
//         "Combines alarm clock functionality with a secure password generator.",
//       techStack: "HTML, CSS, JavaScript",
//       linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7085997489639559168/?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7085997489639559168%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29&originTrackingId=WC79JPc1TxOTx9oGgWlwhA%3D%3D",
//     },
//   ];

//   return (
//     <section className="py-16 bg-gradient-to-br from-[#a855f7] via-[#6b21a8] to-[#9333ea] text-white px-6 sm:px-10">
//       <div className="max-w-6xl mx-auto text-center mb-12">
//         <motion.h2
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//           className="text-4xl sm:text-5xl font-bold mb-6"
//         >
//           My Projects
//         </motion.h2>
//         <p className="text-lg sm:text-xl font-medium">
//           Explore some of my featured projects through LinkedIn videos that
//           demonstrate my skills in web development.
//         </p>
//       </div>

//       {/* Projects Grid */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {projects.map((project, index) => (
//           <motion.div
//             key={index}
//             className="bg-white text-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: [10, -10, 10], opacity: 1 }}
//             transition={{
//               duration: 2,
//               repeat: Infinity,
//               repeatType: "reverse",
//               delay: index * 0.2,
//             }}
//           >
//             <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
//             <p className="mb-4">{project.description}</p>
//             <p className="text-sm font-medium text-gray-500 mb-4">
//               Tech Stack: {project.techStack}
//             </p>
//             <a
//               href={project.linkedin}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-block px-4 py-2 bg-[#9333ea] text-white font-medium rounded-md hover:bg-[#6b21a8]"
//             >
//               View Video on LinkedIn
//             </a>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }



import { motion } from "framer-motion";

export default function Projects() {
  // Project data
  const projects = [
    {
      title: "Spotify Clone",
      description:
        "A responsive frontend clone of Spotify with a sleek UI and media playback functionality.",
      techStack: "HTML, CSS, JavaScript",
      linkedin: "https://www.linkedin.com/in/rimsha-nawaz-623048278/recent-activity/videos/",
    },
    {
      title: "Online Meal",
      description:
        "An innovative platform for meal planning and enjoying life with fun.",
      techStack: "HTML, CSS, JavaScript",
      linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7069947618436530177/?originTrackingId=VUKFhViGRGiClR3qWX6XIw%3D%3D",
    },
    {
      title: "Welcome to My GYM",
      description:
        "A frontend gym management system with a focus on user experience and design.",
      techStack: "HTML, CSS, JavaScript",
      linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7077235339374804994/?originTrackingId=zEfoRuhKS7%2BngkDeR%2F48HA%3D%3D",
    },
    {
      title: "To-Do List",
      description: "A classic task management app with a clean, minimalistic UI.",
      techStack: "React.js",
      linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7096945310408581120/?originTrackingId=nx3DLwzaSfiQGRknEtXusA%3D%3D",
    },
    {
      title: "Digital Clock",
      description:
        "A simple digital clock showcasing real-time updates with JavaScript.",
      techStack: "HTML, CSS, JavaScript",
      linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7085996769938948096/?originTrackingId=1YswgRwoSRy6BhZ4wSOK%2Fw%3D%3D",
    },
    {
      title: "Password Generator",
      description:
        "Combines alarm clock functionality with a secure password generator.",
      techStack: "HTML, CSS, JavaScript",
      linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7085997489639559168/?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7085997489639559168%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29&originTrackingId=WC79JPc1TxOTx9oGgWlwhA%3D%3D",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-[#0077B6] via-[#00A8CC] to-[#00B4D8] text-white px-6 sm:px-10">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl font-bold mb-6"
        >
          My Projects
        </motion.h2>
        <p className="text-lg sm:text-xl font-medium">
          Explore some of my featured projects through LinkedIn videos that
          demonstrate my skills in web development.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white text-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: [10, -10, 10], opacity: 1 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              delay: index * 0.2,
            }}
          >
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="mb-4">{project.description}</p>
            <p className="text-sm font-medium text-gray-500 mb-4">
              Tech Stack: {project.techStack}
            </p>
            <a
              href={project.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-[#0077B6] text-white font-medium rounded-md hover:bg-[#2f539c]"
            >
              View Video on LinkedIn
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
