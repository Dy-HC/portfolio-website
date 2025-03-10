import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { DiCode } from "react-icons/di";
import { BsCodeSlash } from "react-icons/bs";
import { BsAndroid } from "react-icons/bs";
import { BsIncognito } from "react-icons/bs";
import { DiRedhat } from "react-icons/di";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import kelasImg from "@/public/kelas.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Mempelajari Hacking",
    location: "",
    description:
      "Saya mempelajari Hacking. Tapi hanya sedikit saja.",
    icon: React.createElement(DiRedhat),
    date: "2023",
  },
  {
    title: "Mempelajari Web Development",
    location: "",
    description:
      "Di pertengahan tahun 2022, saya mulai mempelajari Web Development. Saya juga akan meningkatkan keterampilan saya dalam Web Development.",
    icon: React.createElement(BsCodeSlash),
    date: "2022 - Sekarang",
  },
  {
    title: "Mengembangkan Game Server",
    location: "",
    description:
      "Saya mengembangkan Source Game Server. Dengan menggunakan bahasa C++/C#. Saya mengembangkan Source tersebut lalu menjual nya kembali.",
    icon: React.createElement(BsAndroid),
    date: "2021 - 2022",
  },
] as const;

export const projectsData = [
  {
    title: "App/Web Kelas",
    description:
      "Saya membuat App/Web kelas saya selama berminggu-minggu. Ini dapat memudahkan murid 8A dalam melihat jadwal Piket dan Pelajaran. Jadwal Piket dan Pelajaran menggunakan algoritma Javascript dari hari Senin - Jumat. (App/Web ini tidak dipakai ataupun dihargai oleh semua teman saya)",
    tags: ["React", "Vite.js", "Firebase", "Tailwind", "Javascript"],
    imageUrl: kelasImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Vite.js",
  "NodeJS",
  "Tailwind",
  "Prisma",
  "Python",
  "MySQL",
] as const;
