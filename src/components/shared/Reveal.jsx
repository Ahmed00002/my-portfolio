import { motion } from "framer-motion";

const Reveal = ({ children, delay = 0 }) => {
  return (
    <>
      <motion.div
        className="w-full"
        variants={{
          start: { opacity: 0, y: 20 },
          onView: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: delay, ease: "easeInOut" },
          },
        }}
        initial={"start"}
        whileInView={"onView"}
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default Reveal;
