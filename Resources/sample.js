export default function QuailNestFarmHomepage() { return ( <div className="min-h-screen bg-neutral-950 text-white font-sans"> {/* Hero Section */} <section className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=1600&auto=format&fit=crop')", }} > <div className="absolute inset-0 bg-black/60"></div>

<div className="relative z-10 text-center px-6 max-w-4xl">
      <p className="uppercase tracking-[6px] text-yellow-400 text-sm mb-4">
        Premium Quail Farming in Sri Lanka
      </p>

      <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
        QuailNest <span className="text-yellow-400">Farm</span>
      </h1>

      <p className="text-lg md:text-2xl text-neutral-200 mb-8 leading-relaxed">
        Healthy quail chicks, quality breeding, professional cage setups,
        and trusted farming solutions for beginners and commercial farmers.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-4 rounded-2xl text-lg transition-all shadow-lg">
          View Products
        </button>

        <button className="border border-white hover:bg-white hover:text-black px-8 py-4 rounded-2xl text-lg transition-all">
          Contact Us
        </button>
      </div>
    </div>
  </section>

  {/* About Section */}
  <section className="py-24 px-6 md:px-16 bg-neutral-900">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div>
        <img
          src="https://images.unsplash.com/photo-1548767797-d8c844163c4c?q=80&w=1200&auto=format&fit=crop"
          alt="Quail Farm"
          className="rounded-3xl shadow-2xl object-cover h-[500px] w-full"
        />
      </div>

      <div>
        <p className="text-yellow-400 uppercase tracking-[4px] mb-4">
          About Us
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Building Better Quail Farming
        </h2>

        <p className="text-neutral-300 text-lg leading-relaxed mb-6">
          QuailNest Farm provides strong and healthy quail chicks for egg
          laying and breeding purposes. We focus on clean farming methods,
          proper nutrition, and high-quality cage systems.
        </p>

        <p className="text-neutral-400 leading-relaxed mb-8">
          Whether you are starting a small backyard farm or scaling a
          commercial operation, QuailNest Farm helps farmers with practical
          guidance and quality birds.
        </p>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-neutral-800 p-6 rounded-2xl">
            <h3 className="text-3xl font-bold text-yellow-400 mb-2">
              100+
            </h3>
            <p className="text-neutral-300">Healthy Chicks Weekly</p>
          </div>

          <div className="bg-neutral-800 p-6 rounded-2xl">
            <h3 className="text-3xl font-bold text-yellow-400 mb-2">
              24/7
            </h3>
            <p className="text-neutral-300">Customer Support</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Products Section */}
  <section className="py-24 px-6 md:px-16 bg-neutral-950">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-yellow-400 uppercase tracking-[4px] mb-4">
          Our Products
        </p>

        <h2 className="text-4xl md:text-5xl font-bold">
          Farm Products & Services
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: '3 Week Quail Chicks',
            desc: 'Healthy and active chicks suitable for fast growth and future egg production.',
            image:
              'https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1200&auto=format&fit=crop',
          },
          {
            title: 'Female Egg Layers',
            desc: 'Strong female quails prepared for quality egg laying performance.',
            image:
              'https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=1200&auto=format&fit=crop',
          },
          {
            title: 'Cage Setup Solutions',
            desc: 'Professional cage systems and farming guidance for quail farmers.',
            image:
              'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200&auto=format&fit=crop',
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-neutral-900 rounded-3xl overflow-hidden shadow-xl hover:scale-[1.02] transition-all duration-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-64 w-full object-cover"
            />

            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-4">
                {item.title}
              </h3>

              <p className="text-neutral-400 leading-relaxed mb-6">
                {item.desc}
              </p>

              <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-xl font-semibold transition-all">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Gallery Section */}
  <section className="py-24 px-6 md:px-16 bg-neutral-900">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-yellow-400 uppercase tracking-[4px] mb-4">
          Gallery
        </p>

        <h2 className="text-4xl md:text-5xl font-bold">
          Inside Our Farm
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          'https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?q=80&w=1200&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1494256997604-768d1f608cac?q=80&w=1200&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1200&auto=format&fit=crop',
        ].map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Farm Gallery"
            className="rounded-2xl object-cover h-64 w-full hover:scale-[1.03] transition-all duration-300"
          />
        ))}
      </div>
    </div>
  </section>

  {/* Contact Section */}
  <section className="py-24 px-6 md:px-16 bg-neutral-950">
    <div className="max-w-5xl mx-auto bg-neutral-900 rounded-[40px] p-10 md:p-16 shadow-2xl text-center">
      <p className="text-yellow-400 uppercase tracking-[4px] mb-4">
        Contact Us
      </p>

      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        Start Your Quail Farming Journey
      </h2>

      <p className="text-neutral-300 text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
        Contact QuailNest Farm for healthy quail chicks, egg layers,
        farming advice, and professional cage setup solutions.
      </p>

      <div className="grid md:grid-cols-3 gap-6 text-left">
        <div className="bg-neutral-800 rounded-2xl p-6">
          <h3 className="text-yellow-400 font-semibold mb-2">Phone</h3>
          <p className="text-neutral-300">077 XXX XXXX</p>
        </div>

        <div className="bg-neutral-800 rounded-2xl p-6">
          <h3 className="text-yellow-400 font-semibold mb-2">Location</h3>
          <p className="text-neutral-300">Padeniya, Wariyapola</p>
        </div>

        <div className="bg-neutral-800 rounded-2xl p-6">
          <h3 className="text-yellow-400 font-semibold mb-2">Facebook</h3>
          <p className="text-neutral-300">QuailNest Farm</p>
        </div>
      </div>

      <button className="mt-10 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-10 py-4 rounded-2xl text-lg transition-all shadow-lg">
        Message Us on WhatsApp
      </button>
    </div>
  </section>

  {/* Footer */}
  <footer className="border-t border-neutral-800 py-8 text-center text-neutral-500 text-sm">
    © 2026 QuailNest Farm — All Rights Reserved.
  </footer>
</div>

) }