
import React from 'react';
import HeroSection from '@/components/HeroSection';
import PropertyCategories from '@/components/PropertyCategories';
import PropertyCard from '@/components/PropertyCard';
import Testimonials from '@/components/Testimonials';
import { properties } from '@/data/properties';
import { aboutData } from '@/data/about';
import { ArrowRight, Map, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  const featuredProperties = properties.filter(property => property.featured);
  const popularProperties = properties.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection />

        {/* Property Categories */}
        <section className="section-container">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center font-poppins">
            Trouvez l'hébergement idéal
          </h2>
          <PropertyCategories />
        </section>

        {/* Featured Properties */}
        <section className="bg-brand-beige py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold font-poppins">Logements en vedette</h2>
              <Link to="/properties" className="flex items-center text-brand-blue font-medium hover:text-brand-pink transition-colors">
                Voir tout <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-8">
              {featuredProperties.map(property => (
                <PropertyCard key={property.id} property={property} isFeatured={true} />
              ))}
            </div>
          </div>
        </section>

        {/* Map Banner */}
        <section className="relative py-20 md:py-28 bg-gradient-to-r from-brand-blue to-brand-pink text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 font-poppins">Découvrez des logements dans le monde entier</h2>
            <p className="max-w-2xl mx-auto mb-8 text-lg">Utilisez notre carte interactive pour trouver des logements dans les destinations les plus prisées.</p>
            <button className="bg-white text-brand-blue px-8 py-3 rounded-lg font-medium flex items-center mx-auto hover:bg-opacity-90 transition-all">
              <Map size={20} className="mr-2" /> Explorer la carte
            </button>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        {/* Popular Properties */}
        <section className="section-container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold font-poppins">Destinations populaires</h2>
            <Link to="/properties" className="flex items-center text-brand-blue font-medium hover:text-brand-pink transition-colors">
              Voir tout <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-brand-beige py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <div className="flex justify-center mb-4">
                <Star size={24} className="text-brand-pink fill-current" />
                <Star size={24} className="text-brand-pink fill-current" />
                <Star size={24} className="text-brand-pink fill-current" />
                <Star size={24} className="text-brand-pink fill-current" />
                <Star size={24} className="text-brand-pink fill-current" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 font-poppins">Ce que disent nos clients</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Découvrez les expériences vécues par notre communauté de voyageurs et de propriétaires.</p>
            </div>
            <Testimonials testimonials={aboutData.testimonials} />
          </div>
        </section>

        {/* Newsletter */}
        <section className="section-container">
          <div className="bg-white rounded-xl shadow-md p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 font-poppins">Restez informé</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Inscrivez-vous à notre newsletter pour recevoir nos meilleures offres et découvrir de nouvelles destinations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
              <button className="bg-brand-blue text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all">
                S'abonner
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
