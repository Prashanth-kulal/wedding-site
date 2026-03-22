"use client";

export default function Home() {

  return (
    <main className="bg-[#fdf6f6] min-h-screen">

      {/* FLOATING HEARTS */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="animate-bounce text-rose-400 text-2xl absolute left-10 top-20">❤️</div>
        <div className="animate-ping text-pink-300 text-xl absolute right-10 top-40">💖</div>
        <div className="animate-bounce text-rose-300 text-lg absolute left-1/2 bottom-20">💕</div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">

        {/* HERO */}
        <section className="p-6">
          <div className="bg-white rounded-3xl shadow-lg p-6">
            <img
              src="/images/hero.jpg"
              className="w-full h-[250px] md:h-[400px] object-cover rounded-2xl"
            />

            <h1 className="text-3xl md:text-5xl font-serif text-rose-600 mt-6">
              Kavya ❤️ Arjun
            </h1>

            <p className="italic text-gray-600 mt-2">
              are getting married 💍
            </p>
          </div>
        </section>

        {/* INTRO */}
        <section className="px-4 md:px-10 py-6">
          <p className="text-gray-700 italic">
            Together with their families, we invite you to celebrate our special day as we begin our journey as one.
          </p>
        </section>

        {/* ENGAGEMENT */}
        <section className="px-4 md:px-10 py-8">
          <h2 className="text-2xl md:text-3xl font-serif text-rose-500 mb-6">
            Our Engagement 💖
          </h2>

          <div className="bg-white rounded-2xl shadow p-4">
            <img
              src="/images/engagement.jpg"
              className="w-full h-[200px] md:h-[300px] object-cover rounded-xl mb-4"
            />
            <p className="text-gray-600 text-sm">
              Surrounded by our loved ones, we began our journey together with joy and blessings.
            </p>
          </div>
        </section>

        {/* EVENTS */}
        <section className="px-4 md:px-10 py-8 bg-rose-50">
          <h2 className="text-2xl md:text-3xl font-serif text-rose-500 mb-8">
            Wedding Celebrations 🎉
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-white rounded-2xl shadow p-5 hover:scale-105 transition">
              <h3 className="font-semibold text-lg">Mehendi 🌿</h3>
              <p className="text-sm text-gray-600">Feb 20, 2026 • 6:00 PM</p>
              <p className="text-sm mt-1">📍 Green Garden Hall, Bengaluru</p>
              <a href="https://maps.google.com" target="_blank"
                className="mt-3 inline-block bg-rose-400 text-white px-4 py-1 rounded-full">
                View Location
              </a>
            </div>

            <div className="bg-white rounded-2xl shadow p-5 hover:scale-105 transition">
              <h3 className="font-semibold text-lg">Haldi 💛</h3>
              <p className="text-sm text-gray-600">Feb 21, 2026 • 10:00 AM</p>
              <p className="text-sm mt-1">📍 Sunshine Venue, Bengaluru</p>
              <a href="https://maps.google.com" target="_blank"
                className="mt-3 inline-block bg-yellow-500 text-white px-4 py-1 rounded-full">
                View Location
              </a>
            </div>

            <div className="bg-white rounded-2xl shadow p-5 hover:scale-105 transition">
              <h3 className="font-semibold text-lg">Wedding 💍</h3>
              <p className="text-sm text-gray-600">Feb 22, 2026 • 10:00 AM</p>
              <p className="text-sm mt-1">📍 Temple Hall, Udupi</p>
              <a href="https://maps.google.com" target="_blank"
                className="mt-3 inline-block bg-rose-500 text-white px-4 py-1 rounded-full">
                View Location
              </a>
            </div>

            <div className="bg-white rounded-2xl shadow p-5 hover:scale-105 transition">
              <h3 className="font-semibold text-lg">Reception 🎊</h3>
              <p className="text-sm text-gray-600">Feb 22, 2026 • 7:00 PM</p>
              <p className="text-sm mt-1">📍 City Convention Hall</p>
              <a href="https://maps.google.com" target="_blank"
                className="mt-3 inline-block bg-purple-500 text-white px-4 py-1 rounded-full">
                View Location
              </a>
            </div>

          </div>
        </section>

        {/* GALLERY */}
        <section className="px-4 md:px-10 py-10 bg-white">
          <h2 className="text-2xl md:text-3xl font-serif text-rose-500 mb-6">
            Our Memories 📸
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img src="/images/img1.jpg" className="w-full h-40 object-cover rounded-xl hover:scale-110 transition" />
            <img src="/images/img2.jpg" className="w-full h-40 object-cover rounded-xl hover:scale-110 transition" />
            <img src="/images/img3.jpg" className="w-full h-40 object-cover rounded-xl hover:scale-110 transition" />
            <img src="/images/img4.jpg" className="w-full h-40 object-cover rounded-xl hover:scale-110 transition" />
          </div>
        </section>

        {/* SHARE SECTION */}
        <section className="px-4 md:px-10 py-10 bg-white">
          <h2 className="text-2xl font-serif text-rose-500 mb-6">
            Share the Love 💌
          </h2>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">

            <a
              href="https://wa.me/?text=You're invited to our wedding! 💍 Check this out: https://your-site-link.vercel.app"
              target="_blank"
              className="bg-green-500 text-white px-6 py-2 rounded-full w-64 text-center"
            >
              Share on WhatsApp 📲
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-6 py-2 rounded-full w-64 text-center"
            >
              Share on Instagram 📸
            </a>

          </div>
        </section>

        {/* LOCATION CTA */}
        <section className="px-4 md:px-10 py-10">
          <p className="italic text-gray-700 mb-4">
            We can't wait to celebrate with you! Find all locations below 👇
          </p>

          <div className="flex flex-col md:flex-row gap-3 justify-center items-center">
            <a href="https://maps.google.com" target="_blank"
              className="border px-6 py-2 rounded-full w-64">
              📍 Wedding Location
            </a>

            <a href="https://maps.google.com" target="_blank"
              className="bg-rose-500 text-white px-6 py-2 rounded-full w-64">
              📍 Temple Location
            </a>

            <a href="https://maps.google.com" target="_blank"
              className="border border-rose-400 text-rose-500 px-6 py-2 rounded-full w-64">
              📍 Reception Location
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-6 text-gray-500 text-sm">
          Made with ❤️ for a beautiful beginning
        </footer>

      </div>
    </main>
  );
}