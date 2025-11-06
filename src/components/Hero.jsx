import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-24 px-6">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold mb-4 text-white"
      >
        Halo, Saya <span className="text-sky-400">Arta</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-lg text-gray-300 max-w-xl"
      >
        Saya seorang siswa SMK jurusan SIJA yang sedang belajar web development dan membuat web portofolio interaktif 🚀
      </motion.p>
    </section>
  );
};

export default Hero;
