import { motion } from "framer-motion";

// const Caret = () => {
//   return (
//     <motion.div
//       aria-hidden={true}
//       initial={{ opacity: 1 }}
//       animate={{ opacity: 0 }}
//       exit={{ opacity: 1 }}
//       transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
//       className="inline-block bg-red-500 w-0.5 h-10 align-middle"
//     />
//   );
// };

// export default Caret;

const Caret = () => {
  return (
    <motion.div
      aria-hidden={true}
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 1 }}
      transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
      className="inline-block bg-red-500 w-0.5 align-middle"
      style={{ height: "1em" }} // Dynamically match the text height
    />
  );
};

export default Caret;
