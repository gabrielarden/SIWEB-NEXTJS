const AdminProfile = () => {
  const teams = [
    {
      name: 'Gabriel Arden Juansava',
      role: 'Frontend Dev',
      image: '/gabriel.png'
    },
    {
      name: 'Putu Gede Garuda Mahendra',
      role: 'Backend Dev',
      image: '/garuda.png',
    },
    {
      name: 'Cokorda Gede Raditya Wirajuna',
      role: 'Frontend Dev',
      image: '/juna.png',
    },
  ];

  return (
<div className=" min-h-screen w-full py-10 px-4 text-center">
      <h2 className="text-4xl font-serif text-gray-800 mb-2">Our Teams</h2>
      <p className="text-lg text-pink-600 mb-10">We are the man behind this website</p>
      <div className="flex flex-wrap justify-center gap-6">
        {teams.map((member, index) => (
          <div
            key={index}
            className="bg-pink-300 rounded-lg shadow-lg p-10 w-64 flex flex-col items-center space-y-3"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-20 h-20 rounded-full object-cover"
            />
            <h3 className="font-semibold text-lg text-gray-800">{member.role}</h3>
            <p className="text-white font-serif">{member.name}</p>
          </div>
        ))}
      </div>
      {/* Deskripsi */}
      <div className="bg-white max-w-4xl mx-auto p-6 rounded shadow text-sm text-gray-800 mb-10">
        <p className="mb-2">Kami adalah tim kreatif yang siap membangun website penjualan buket bunga dengan keahlian di bidang masing-masing:</p>
        <ul className="list-disc list-inside mb-2">
          <li><strong>UI/UX Designer</strong> – Bertanggung jawab atas tampilan dan pengalaman pengguna yang estetis serta intuitif.</li>
          <li><strong>Frontend Developer</strong> – Mengubah desain menjadi tampilan interaktif dan responsif.</li>
          <li><strong>Backend Developer</strong> – Membangun sistem dan database yang kuat serta aman.</li>
        </ul>
        <p>Dengan kolaborasi yang solid, kami berkomitmen menciptakan website menarik dan mudah digunakan 🌸💻</p>
      </div>
    </div>
  );

  
};

export default AdminProfile;
