import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; Dyra. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">Tentang website ini:</span> dibangun dengan React & Next.js, TypeScript, Tailwind CSS, Framer Motion, 
        React Email & Resend API, hosting Vercel.
      </p>
    </footer>
  );
}
