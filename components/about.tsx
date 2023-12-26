"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Ketika saya menduduki bangku kelas 6 SD{" "}
        saya memulai coding tanpa pengetahuan apapun, Ya anda tidak salah lihat
        saat itu saya mengembangkan source sebuah game server berbasis C++/C#. Disitu saya sangat pusing karena sangat susah{" "}
        tapi saya tidak menyerah dan saya terus mengembangkan game server tersebut sambil belajar.{" "}
        Disaat itu saya sangat suka membuat Program dan Coding, lalu saya mencoba Coding Website
        pada saat itu saya belajar Bahasa Markup atau HTML dan juga CSS, setelah menguasai HTML dan CSS,
        saya melanjutkan mempelajari Javascript. Tapi saya merasa ini tidak cukup, lalu saya mulai mempelajari 
        {" "}
        <span className="font-medium">
          React, Next.js, PHP
        </span>
        . Saya juga suka mempelajari MySQL dengan Prisma. Saya selalu ingin mempelajari Bahasa Pemrograman baru.
      </p>

      <p>
        <span className="italic">Ketika saya tidak sedang coding</span>, saya menikmati dengan main Game dan melihat video dan juga film. 
        Saya juga sedang berusaha mempelajari Matematika ;).
      </p>
    </motion.section>
  );
}
