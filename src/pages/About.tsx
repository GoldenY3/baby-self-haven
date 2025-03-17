
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';
import { aboutData } from '@/data/about';
import { Calendar, Globe, Heart, Shield, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-brand-beige py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-poppins">À propos de Baby Self Homes</h1>
            <p className="text-xl max-w-3xl mx-auto mb-10 text-gray-700">
              {aboutData.companySummary.description}
            </p>
            <div className="flex justify-center">
              <div className="h-1 w-20 bg-brand-pink rounded-full"></div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-brand-blue p-8 text-white flex flex-col justify-center items-center text-center">
                  <Globe size={48} className="mb-4" />
                  <h2 className="text-2xl font-bold mb-4 font-poppins">Notre Vision</h2>
                </div>
                <div className="md:w-2/3 p-8">
                  <p className="text-lg leading-relaxed">
                    {aboutData.companySummary.vision}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Bio */}
        <section className="py-16 md:py-20 bg-brand-beige">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="md:flex items-center gap-12">
                <div className="md:w-1/3 mb-8 md:mb-0">
                  <div className="aspect-square rounded-3xl overflow-hidden shadow-lg">
                    <img
                      src={aboutData.founder.image}
                      alt={aboutData.founder.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-3xl font-bold mb-2 font-poppins">{aboutData.founder.name}</h2>
                  <p className="text-brand-pink font-medium mb-6">{aboutData.founder.title}</p>
                  <p className="text-lg mb-6 italic text-gray-700">
                    {aboutData.founder.shortBio}
                  </p>
                  <div className="space-y-4">
                    {aboutData.founder.fullBio.map((paragraph, index) => (
                      <p key={index} className="text-gray-700 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our History */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center font-poppins">{aboutData.history.title}</h2>
            <div className="max-w-4xl mx-auto">
              {aboutData.history.events.map((event, index) => (
                <div key={index} className="flex mb-8 last:mb-0">
                  <div className="mr-8 text-center">
                    <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold text-xl">
                      {event.year}
                    </div>
                    {index < aboutData.history.events.length - 1 && (
                      <div className="w-0.5 h-full bg-gray-200 mx-auto mt-2"></div>
                    )}
                  </div>
                  <div className="pt-3">
                    <h3 className="text-xl font-bold mb-2 font-poppins">{event.title}</h3>
                    <p className="text-gray-700">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 md:py-20 bg-brand-beige">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center font-poppins">{aboutData.values.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {aboutData.values.list.map((value, index) => {
                const icons = [
                  <Heart key={0} size={40} className="text-brand-pink mb-4" />,
                  <Shield key={1} size={40} className="text-brand-blue mb-4" />,
                  <Users key={2} size={40} className="text-brand-pink mb-4" />,
                  <Globe key={3} size={40} className="text-brand-blue mb-4" />,
                  <Calendar key={4} size={40} className="text-brand-pink mb-4" />
                ];
                return (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center">
                    {icons[index % icons.length]}
                    <h3 className="text-xl font-bold mb-3 font-poppins">{value.title}</h3>
                    <p className="text-gray-700">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center font-poppins">Témoignages</h2>
            <Testimonials testimonials={aboutData.testimonials} />
          </div>
        </section>

        {/* CTA */}
        <section className="bg-brand-blue text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 font-poppins">Prêt à découvrir des logements exceptionnels ?</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Rejoignez notre communauté et commencez à explorer des milliers de propriétés uniques dans le monde entier.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-brand-blue px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all">
                Rechercher un logement
              </button>
              <button className="bg-brand-pink text-white px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all">
                Devenir hôte
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
