import React from "react";

export default function Projects() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gray-950 text-white px-6">
      <h1 className="text-4xl font-bold mb-4">My Projects</h1>
      <p className="text-gray-400 text-center max-w-lg mb-6">
        Beberapa proyek yang pernah saya kerjakan menggunakan teknologi modern
        seperti React, Tailwind, dan Node.js.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
          <h2 className="text-xl font-semibold mb-2">Project 1</h2>
          <p className="text-gray-400">Deskripsi singkat project pertama.</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
          <h2 className="text-xl font-semibold mb-2">Project 2</h2>
          <p className="text-gray-400">Deskripsi singkat project kedua.</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
          <h2 className="text-xl font-semibold mb-2">Project 3</h2>
          <p className="text-gray-400">Deskripsi singkat project ketiga.</p>
        </div>
      </div>
    </section>
  );
}
