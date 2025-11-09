"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-amber-50 to-orange-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100 p-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-serif font-bold mb-4 text-center"
      >
        Woodenpin Bakery
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-center text-lg md:text-2xl max-w-xl"
      >
        Roti hangat dari dapur penuh cinta 🍞  
        <br />  
        <span className="italic">Bogor, Indonesia</span>
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-8 px-6 py-3 bg-amber-600 text-white rounded-full shadow-lg hover:bg-amber-700 transition"
      >
        Jelajahi Roti Kami
      </motion.button>
    </main>
  );
}