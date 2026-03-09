import React from "react";

function About() {
  return (
    <section className="bg-slate-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">

       
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">About Our World 🌍</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Earth is the only known planet that supports life. It is a beautiful
            world full of oceans, continents, cultures, and amazing biodiversity.
          </p>
        </div>

       
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition">
            <img
              src="earth.avif"
              alt="Earth from space"
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">Our Planet</h3>
              <p className="text-gray-300 text-sm">
                Earth formed around 4.5 billion years ago and is the third planet
                from the Sun. It is the only known planet with liquid water and life.
              </p>
            </div>
          </div>

          
          <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition">
            <img
              src="ocean.avif"
              alt="Ocean"
              className="w-full h-48 "
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">Oceans</h3>
              <p className="text-gray-300 text-sm">
                About 71% of Earth’s surface is covered by oceans. They regulate
                climate, support marine life, and play a crucial role in the
                planet's ecosystem.
              </p>
            </div>
          </div>

          
          <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition">
            <img
              src="land.avif"
              alt="Mountains"
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">Land & Continents</h3>
              <p className="text-gray-300 text-sm">
                The land on Earth is divided into seven continents and nearly
                195 countries, each with unique cultures, landscapes, and histories.
              </p>
            </div>
          </div>

         
          <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition">
            <img
              src="biodivresity.avif"
              alt="Forest"
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">Biodiversity</h3>
              <p className="text-gray-300 text-sm">
                Earth is home to millions of species of plants, animals, and
                microorganisms, many of which scientists are still discovering.
              </p>
            </div>
          </div>

          
          <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition">
            <img
              src="natural.avif"
              alt="Nature landscape"
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">Natural Wonders</h3>
              <p className="text-gray-300 text-sm">
                Mountains, rivers, volcanoes, deserts, and glaciers shape our
                planet's beauty and demonstrate the powerful forces of nature.
              </p>
            </div>
          </div>

          
          <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition">
            <img
              src="responsbility.avif"
              alt="Sunrise"
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">Our Responsibility</h3>
              <p className="text-gray-300 text-sm">
                Protecting Earth’s environment is essential. Sustainable living
                helps preserve our planet for future generations.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;