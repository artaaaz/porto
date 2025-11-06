export default function Projects() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gray-950 text-white px-6">
      <h1 className="text-4xl font-bold mb-6">My Projects</h1>
      <p className="text-gray-400 max-w-xl text-center mb-8">
        Berikut adalah beberapa project yang pernah saya kerjakan. Semua
        project ini mencerminkan semangat belajar dan eksplorasi saya di dunia
        pengembangan web.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-gray-900 p-4 rounded-xl shadow-lg hover:shadow-xl transition">
          <h2 className="text-xl font-semibold mb-2">Project 1</h2>
          <p className="text-gray-400">Deskripsi singkat project pertama.</p>
        </div>

        <div className="bg-gray-900 p-4 rounded-xl shadow-lg hover:shadow-xl transition">
          <h2 className="text-xl font-semibold mb-2">Project 2</h2>
          <p className="text-gray-400">Deskripsi singkat project kedua.</p>
        </div>

        <div className="bg-gray-900 p-4 rounded-xl shadow-lg hover:shadow-xl transition">
          <h2 className="text-xl font-semibold mb-2">Project 3</h2>
          <p className="text-gray-400">Deskripsi singkat project ketiga.</p>
        </div>
      </div>
    </section>
  );
}
