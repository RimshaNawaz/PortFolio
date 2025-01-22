// import React from "react";
// import { motion } from "framer-motion";
// import { useState, useEffect } from "react";

// export default function Contact() {
//   const [showText, setShowText] = useState(false);
//   useEffect(() => {
//     setShowText(true);
//   }, []);

//   const text = "Contact Me"; // Text you want to display
//   const [result, setResult] = React.useState("");

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     setResult("Sending....");
//     const formData = new FormData(event.target);

//     formData.append("access_key", "3bcecb24-d0ec-4479-af20-81a11e9fec0b");

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData
//     });

//     const data = await response.json();

//     if (data.success) {
//       setResult("Form Submitted Successfully");
//       event.target.reset();
//     } else {
//       console.log("Error", data);
//       setResult(data.message);
//     }
//   };
//   return (
//     <section className="py-16 bg-gradient-to-br  from-[#0077B6] via-[#00A8CC] to-[#00B4D8] text-white px-6 sm:px-10">
//       <div className="max-w-6xl mx-auto text-center mb-12">
//         <motion.h2
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//           className="text-4xl sm:text-5xl font-bold mb-6"
//         >
//           {/* Split text into individual words */}
//           <span className="flex justify-center">
//             {text.split(" ").map((word, wordIndex) => (
//               <span key={wordIndex} className="inline-block mr-2">
//                 {word.split("").map((char, index) => (
//                   <motion.span
//                     key={index}
//                     initial={{ opacity: 0 }}
//                     animate={{
//                       opacity: showText ? 1 : 0,
//                     }}
//                     transition={{
//                       delay: (wordIndex * text.split(" ").length + index) * 0.1, // Each word's characters will appear sequentially
//                       duration: 0.5,
//                     }}
//                     className="inline-block"
//                   >
//                     {char}
//                   </motion.span>
//                 ))}
//               </span>
//             ))}
//           </span>
//         </motion.h2>
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 0.5 }}
//           className="text-lg sm:text-xl font-medium text-gray-200"
//         >
//           Feel free to reach out! I’d love to discuss new projects, collaborations, or just have a chat.
//         </motion.p>
//       </div>

//       {/* Contact Form */}
//       <motion.div
//         initial={{ x: "-100vw", opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ duration: 1, ease: "easeOut" }}
//         className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg"
//       >
        
//         <motion.form
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 1 }}
//           className="space-y-6"
//           onSubmit={onSubmit}
//         >
//           {/* Name Field */}
//           <div>
//             <label
//               htmlFor="name"
//               className="block text-lg font-medium text-gray-700"
//             >
//               Your Name
//             </label>
//             <input
//               id="name"
//               name="name" // Add name attribute for form data
//               type="text"
//               placeholder="Enter your name"
//               className="w-full mt-2 p-3 rounded-md border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-[#0077B6]"
//               required // Make field required
//             />
//           </div>

//           {/* Email Field */}
//           <div>
//             <label
//               htmlFor="email"
//               className="block text-lg font-medium text-gray-700"
//             >
//               Your Email
//             </label>
//             <input
//               id="email"
//               name="email" // Add name attribute for form data
//               type="email"
//               placeholder="Enter your email"
//               className="w-full mt-2 p-3 rounded-md border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-[#0077B6]"
//               required // Make field required
//             />
//           </div>

//           {/* Message Field */}
//           <div>
//             <label
//               htmlFor="message"
//               className="block text-lg font-medium text-gray-700"
//             >
//               Your Message
//             </label>
//             <textarea
//               id="message"
//               name="message" // Add name attribute for form data
//               rows="5"
//               placeholder="Write your message here"
//               className="w-full mt-2 p-3 rounded-md border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-[#0077B6]"
//               required // Make field required
//             />
//           </div>

//           {/* Submit Button */}
//           <div className="text-center">
//             <motion.button
//               whileHover={{ scale: 1.1, backgroundColor: "#003dbc" }}
//               whileTap={{ scale: 0.9 }}
//               className="px-8 py-3 bg-[#0077B6] text-lg font-bold text-white rounded-md shadow-lg"
//               type="submit" // Specify button type as submit
//             >
//               Send Message
//             </motion.button>
//           </div>
//         </motion.form>

//         <span>{result}</span>
//       </motion.div>

//       {/* Contact Information */}
//       <div className="mt-12 text-center">
//         <motion.h3
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//           className="text-3xl font-bold text-white"
//         >
//           Or Connect With Me On:
//         </motion.h3>

//         <div className="mt-6 flex justify-center space-x-6 animate-moving">
//           {/* GitHub */}
//           <a
//             href="https://github.com/RimshaNawaz"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="transition-all transform hover:scale-110 rounded-full hover:bg-[rgb(0,61,182)] p-4 bg-[#0077B6] text-white text-3xl flex items-center justify-center"
//           >
//             <i className="fab fa-github"></i>
//           </a>

//           {/* LinkedIn */}
//           <a
//             href="https://www.linkedin.com/in/rimsha-nawaz-623048278/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="transition-all transform hover:scale-110 rounded-full hover:bg-[rgb(0,61,182)] p-4 bg-[#0077B6] text-white text-3xl flex items-center justify-center"
//           >
//             <i className="fab fa-linkedin"></i>
//           </a>

//           {/* Email */}
//           <a
//             href="mailto:rimshanawaz360@gmail.com"
//             className="transition-all transform hover:scale-110 rounded-full hover:bg-[rgb(0,61,182)] p-4 bg-[#0077B6] text-white text-3xl flex items-center justify-center"
//           >
//             <i className="fas fa-envelope"></i>
//           </a>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes moveIcons {
//           0% {
//             transform: translateX(-20px);
//           }
//           50% {
//             transform: translateX(20px);
//           }
//           100% {
//             transform: translateX(-20px);
//           }
//         }
//         .animate-moving {
//           animation: moveIcons 2s infinite ease-in-out;
//         }
//       `}</style>
//     </section>
//   );
// }

import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Contact() {
  const [showText, setShowText] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false); // State to control popup visibility
  const [result, setResult] = useState("");

  useEffect(() => {
    setShowText(true);
  }, []);

  const text = "Contact Me"; // Text you want to display

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "3bcecb24-d0ec-4479-af20-81a11e9fec0b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      setShowSuccessPopup(true); // Show success popup
      setTimeout(() => setShowSuccessPopup(false), 5000); // Hide popup after 3 seconds
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br  from-[#0077B6] via-[#00A8CC] to-[#00B4D8] text-white px-6 sm:px-10">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl font-bold mb-6"
        >
          {/* Split text into individual words */}
          <span className="flex justify-center">
            {text.split(" ").map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block mr-2">
                {word.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: showText ? 1 : 0,
                    }}
                    transition={{
                      delay: (wordIndex * text.split(" ").length + index) * 0.1, // Each word's characters will appear sequentially
                      duration: 0.5,
                    }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg sm:text-xl font-medium text-gray-200"
        >
          Feel free to reach out! I’d love to discuss new projects, collaborations, or just have a chat.
        </motion.p>
      </div>

      {/* Contact Form */}
      <motion.div
        initial={{ x: "-100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg"
      >
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="space-y-6"
          onSubmit={onSubmit}
        >
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-gray-700">
              Your Name
            </label>
            <input
              id="name"
              name="name" // Add name attribute for form data
              type="text"
              placeholder="Enter your name"
              className="w-full mt-2 p-3 rounded-md border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-[#0077B6]"
              required // Make field required
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">
              Your Email
            </label>
            <input
              id="email"
              name="email" // Add name attribute for form data
              type="email"
              placeholder="Enter your email"
              className="w-full mt-2 p-3 rounded-md border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-[#0077B6]"
              required // Make field required
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-lg font-medium text-gray-700">
              Your Message
            </label>
            <textarea
              id="message"
              name="message" // Add name attribute for form data
              rows="5"
              placeholder="Write your message here"
              className="w-full mt-2 p-3 rounded-md border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-[#0077B6]"
              required // Make field required
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "#003dbc" }}
              whileTap={{ scale: 0.9 }}
              className="px-8 py-3 bg-[#0077B6] text-lg font-bold text-white rounded-md shadow-lg"
              type="submit" // Specify button type as submit
            >
              Send Message
            </motion.button>
          </div>
        </motion.form>

        <span>{result}</span>
      </motion.div>

      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-md text-center">
            <p className="text-xl font-bold text-green-600">Form Submitted Successfully!</p>
            <button
              onClick={() => setShowSuccessPopup(false)}
              className="mt-4 px-6 py-2 bg-[#0077B6] text-white rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Contact Information */}
      <div className="mt-12 text-center">
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl font-bold text-white"
        >
          Or Connect With Me On:
        </motion.h3>

        <div className="mt-6 flex justify-center space-x-6 animate-moving">
          {/* GitHub */}
          <a
            href="https://github.com/RimshaNawaz"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all transform hover:scale-110 rounded-full hover:bg-[rgb(0,61,182)] p-4 bg-[#0077B6] text-white text-3xl flex items-center justify-center"
          >
            <i className="fab fa-github"></i>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/rimsha-nawaz-623048278/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all transform hover:scale-110 rounded-full hover:bg-[rgb(0,61,182)] p-4 bg-[#0077B6] text-white text-3xl flex items-center justify-center"
          >
            <i className="fab fa-linkedin"></i>
          </a>

          {/* Email */}
          <a
            href="mailto:rimshanawaz360@gmail.com"
            className="transition-all transform hover:scale-110 rounded-full hover:bg-[rgb(0,61,182)] p-4 bg-[#0077B6] text-white text-3xl flex items-center justify-center"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes moveIcons {
          0% {
            transform: translateX(-20px);
          }
          50% {
            transform: translateX(20px);
          }
          100% {
            transform: translateX(-20px);
          }
        }
        .animate-moving {
          animation: moveIcons 2s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
}
