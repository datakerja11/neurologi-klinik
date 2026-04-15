import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Brain, 
  Activity, 
  Stethoscope, 
  Phone, 
  MapPin, 
  Clock, 
  ChevronRight, 
  ShieldCheck,
  Microscope,
  X
} from 'lucide-react';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <span className="font-bold text-2xl text-blue-900 tracking-tight">NeuroCare</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#beranda" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Beranda</a>
              <a href="#layanan" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Layanan</a>
              <a href="#tentang" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Tentang Kami</a>
              <a href="#kontak" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Kontak</a>
            </div>
            <div className="hidden md:flex">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Buat Janji
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="beranda" className="relative bg-blue-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,50 Q25,25 50,50 T100,50 L100,100 L0,100 Z" fill="currentColor" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-blue-800 text-blue-200 text-sm font-semibold mb-6 border border-blue-700">
                Pusat Layanan Neurologi Terpadu
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Kesehatan Saraf Anda Adalah <span className="text-blue-400">Prioritas Kami</span>
              </h1>
              <p className="text-blue-100 text-lg md:text-xl mb-8 max-w-lg leading-relaxed">
                Memberikan diagnosis presisi dan perawatan komprehensif untuk berbagai gangguan saraf dengan teknologi medis terkini.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-3.5 rounded-full font-semibold transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  Konsultasi Sekarang
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button className="border border-blue-400 text-white hover:bg-blue-800 px-8 py-3.5 rounded-full font-semibold transition-all flex items-center justify-center gap-2">
                  Pelajari Layanan
                </button>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden md:block relative"
            >
              <div className="aspect-square rounded-full bg-blue-800/50 absolute -inset-4 blur-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Dokter Neurologi" 
                className="rounded-2xl shadow-2xl object-cover h-[500px] w-full relative z-10 border-4 border-white/10"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl z-20 flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <ShieldCheck className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Tersertifikasi</p>
                  <p className="text-lg font-bold text-slate-900">Dokter Spesialis</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="layanan" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Layanan Unggulan Kami</h2>
            <p className="text-lg text-slate-600">Kami menyediakan berbagai layanan diagnostik dan terapeutik untuk menangani berbagai kondisi neurologis.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Activity className="w-8 h-8 text-blue-600" />,
                title: "Pemeriksaan EEG & EMG",
                desc: "Evaluasi aktivitas listrik otak dan saraf tepi untuk mendiagnosis epilepsi, neuropati, dan gangguan saraf lainnya."
              },
              {
                icon: <Brain className="w-8 h-8 text-blue-600" />,
                title: "Manajemen Stroke",
                desc: "Penanganan komprehensif pasca-stroke termasuk terapi pemulihan motorik, kognitif, dan pencegahan sekunder."
              },
              {
                icon: <Stethoscope className="w-8 h-8 text-blue-600" />,
                title: "Konsultasi Nyeri Kepala",
                desc: "Diagnosis dan penanganan spesifik untuk migrain, tension-type headache, vertigo, dan nyeri wajah."
              },
              {
                icon: <Microscope className="w-8 h-8 text-blue-600" />,
                title: "Gangguan Gerak",
                desc: "Perawatan khusus untuk penyakit Parkinson, tremor, distonia, dan gangguan pergerakan lainnya."
              },
              {
                icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
                title: "Kesehatan Memori",
                desc: "Deteksi dini dan manajemen demensia, penyakit Alzheimer, serta gangguan kognitif terkait usia."
              },
              {
                icon: <Activity className="w-8 h-8 text-blue-600" />,
                title: "Terapi Nyeri Tulang Belakang",
                desc: "Penanganan non-operatif untuk saraf terjepit (HNP), nyeri punggung bawah, dan nyeri leher."
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all group"
              >
                <div className="bg-white w-16 h-16 rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Fasilitas Klinik" 
                className="rounded-2xl shadow-lg object-cover h-[400px] w-full"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Dedikasi untuk Kesehatan Saraf Anda</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Klinik NeuroCare didirikan dengan visi untuk memberikan pelayanan neurologi bertaraf internasional. Tim dokter spesialis saraf kami berpengalaman dalam menangani berbagai kasus kompleks dengan pendekatan yang berpusat pada pasien.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Tim dokter spesialis saraf (Neurolog) tersertifikasi",
                  "Fasilitas diagnostik modern dan lengkap",
                  "Pendekatan multidisiplin untuk kasus kompleks",
                  "Lingkungan klinik yang nyaman dan ramah"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="bg-blue-100 p-1 rounded-full mt-1">
                      <ShieldCheck className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="text-blue-600 font-semibold flex items-center gap-2 hover:text-blue-800 transition-colors">
                Kenali Tim Dokter Kami <ChevronRight className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact & Footer */}
      <footer id="kontak" className="bg-slate-900 text-slate-300 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <span className="font-bold text-2xl text-white tracking-tight">NeuroCare</span>
              </div>
              <p className="text-slate-400 leading-relaxed mb-6">
                Pusat layanan kesehatan saraf terpadu yang mengutamakan ketepatan diagnosis dan kenyamanan pasien.
              </p>
            </div>
            
            <div>
              <h3 className="text-white text-lg font-bold mb-6">Hubungi Kami</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <span>Jl. Kesehatan Saraf No. 123, Jakarta Selatan, 12345</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-400 shrink-0" />
                  <span>+62 21 555 0123</span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-blue-400 shrink-0" />
                  <span>Senin - Sabtu: 08:00 - 20:00 WIB</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white text-lg font-bold mb-6">Tautan Cepat</h3>
              <ul className="space-y-3">
                <li><a href="#beranda" className="hover:text-blue-400 transition-colors">Beranda</a></li>
                <li><a href="#layanan" className="hover:text-blue-400 transition-colors">Layanan Medis</a></li>
                <li><a href="#tentang" className="hover:text-blue-400 transition-colors">Profil Klinik</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Jadwal Dokter</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Artikel Kesehatan</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500">
              &copy; {new Date().getFullYear()} Klinik NeuroCare. Hak Cipta Dilindungi.
            </p>
            <div className="flex gap-4 text-sm text-slate-500">
              <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
              <a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Appointment Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden"
          >
            <div className="flex justify-between items-center p-6 border-b border-slate-100">
              <h3 className="text-xl font-bold text-slate-900">Buat Janji Temu</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-600 transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-8"
                >
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShieldCheck className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Permintaan Terkirim!</h4>
                  <p className="text-slate-600">Tim kami akan segera menghubungi Anda untuk konfirmasi jadwal.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Nama Lengkap</label>
                    <input type="text" required className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" placeholder="Masukkan nama Anda" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Nomor Telepon/WhatsApp</label>
                    <input type="tel" required className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" placeholder="Contoh: 0812xxxx" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Pilih Layanan</label>
                    <select className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-white">
                      <option>Konsultasi Umum</option>
                      <option>Pemeriksaan EEG & EMG</option>
                      <option>Manajemen Stroke</option>
                      <option>Konsultasi Nyeri Kepala</option>
                      <option>Gangguan Gerak</option>
                      <option>Kesehatan Memori</option>
                      <option>Terapi Nyeri Tulang Belakang</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Tanggal Rencana Kunjungan</label>
                    <input type="date" required className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" />
                  </div>
                  <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors mt-6 shadow-md hover:shadow-lg">
                    Kirim Permintaan Janji
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
