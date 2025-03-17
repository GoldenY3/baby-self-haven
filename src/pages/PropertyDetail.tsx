
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { properties } from '@/data/properties';
import { Button } from '@/components/ui/button';
import { Star, Share, Heart, Check, ChevronLeft, ChevronRight, MapPin, Calendar, User, MessageCircle } from 'lucide-react';

const PropertyDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const property = properties.find(p => p.id === Number(id));
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!property) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="container mx-auto px-4 py-12 flex-grow flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold mb-4">Propriété non trouvée</h1>
          <p className="mb-6">La propriété que vous recherchez n'existe pas ou a été supprimée.</p>
          <Link to="/" className="text-brand-blue hover:underline">
            Retour à l'accueil
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const nextImage = () => {
    if (property.images) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % property.images!.length);
    }
  };

  const prevImage = () => {
    if (property.images) {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + property.images!.length) % property.images!.length);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-6">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          <div className="mb-4">
            <div className="flex items-center text-sm text-gray-500">
              <Link to="/" className="hover:text-brand-blue">Accueil</Link>
              <span className="mx-2">/</span>
              <Link to="/properties" className="hover:text-brand-blue">Propriétés</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-700">{property.title}</span>
            </div>
          </div>

          {/* Property Title */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2 font-poppins">{property.title}</h1>
            <div className="flex items-center flex-wrap gap-y-2">
              <div className="flex items-center mr-4">
                <Star size={18} className="text-brand-pink fill-current mr-1" />
                <span className="font-medium">{property.rating}</span>
                <span className="text-gray-500 ml-1">({property.reviewCount} avis)</span>
              </div>
              <span className="text-gray-500 mr-4">•</span>
              <div className="flex items-center mr-4">
                <MapPin size={18} className="text-brand-pink mr-1" />
                <span>{property.location}</span>
              </div>
              <div className="flex ml-auto space-x-3">
                <button className="flex items-center text-gray-700 hover:text-brand-blue">
                  <Share size={18} className="mr-1" />
                  <span className="text-sm">Partager</span>
                </button>
                <button className="flex items-center text-gray-700 hover:text-brand-pink">
                  <Heart size={18} className="mr-1" />
                  <span className="text-sm">Enregistrer</span>
                </button>
              </div>
            </div>
          </div>

          {/* Property Images */}
          <div className="relative mb-10 rounded-xl overflow-hidden shadow-lg">
            {property.images && (
              <>
                <div className="relative aspect-video">
                  <img
                    src={property.images[currentImageIndex]}
                    alt={`${property.title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                >
                  <ChevronRight size={24} />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {property.images.length}
                </div>
              </>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Property Info */}
              <div className="border-b border-gray-200 pb-6 mb-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-xl font-semibold mb-2 font-poppins">{property.type} à {property.location}</h2>
                    <div className="flex flex-wrap gap-x-4 text-gray-600">
                      <span>{property.guests} voyageurs</span>
                      <span>•</span>
                      <span>{property.beds} {property.beds > 1 ? 'lits' : 'lit'}</span>
                      <span>•</span>
                      <span>{property.baths} {property.baths > 1 ? 'salles de bain' : 'salle de bain'}</span>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                        <img
                          src={property.host.image}
                          alt={property.host.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium">{property.host.name}</p>
                        <p className="text-sm text-gray-500">
                          Hôte depuis {property.host.joinedDate}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4 font-poppins">Description</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {property.description || 
                    "Ce logement exceptionnel offre tout le confort nécessaire pour un séjour inoubliable. Idéalement situé, il vous permettra de profiter pleinement de votre destination de vacances."}
                </p>
              </div>

              {/* Amenities */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4 font-poppins">Équipements</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {property.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center">
                      <Check size={20} className="text-brand-blue mr-2" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4 font-poppins">Emplacement</h2>
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center mb-3">
                  <p className="text-gray-500">Carte sera affichée ici</p>
                </div>
                <p className="text-gray-700">{property.location}</p>
              </div>

              {/* Reviews */}
              <div>
                <div className="flex items-center mb-6">
                  <h2 className="text-xl font-semibold font-poppins mr-2">Commentaires</h2>
                  <div className="flex items-center">
                    <Star size={18} className="text-brand-pink fill-current mr-1" />
                    <span className="font-medium">{property.rating}</span>
                    <span className="text-gray-500 ml-1">({property.reviewCount} avis)</span>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-6 pb-2">
                  <p className="text-gray-600 mb-4">Les commentaires des voyageurs précédents seront affichés ici.</p>
                  <Button className="bg-brand-blue hover:bg-opacity-90">
                    Voir tous les commentaires
                  </Button>
                </div>
              </div>
            </div>

            {/* Booking Card */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 sticky top-24">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-2xl font-semibold">{property.currency}{property.price}</span>
                    <span className="text-gray-500">/{property.period}</span>
                  </div>
                  <div className="flex items-center">
                    <Star size={16} className="text-brand-pink fill-current mr-1" />
                    <span className="text-sm">{property.rating} ({property.reviewCount})</span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="border border-gray-300 rounded-t-lg">
                    <div className="grid grid-cols-2">
                      <div className="p-3 border-r border-b border-gray-300">
                        <label className="block text-xs font-medium text-gray-700 mb-1">Arrivée</label>
                        <input
                          type="date"
                          className="w-full outline-none text-gray-900"
                        />
                      </div>
                      <div className="p-3 border-b border-gray-300">
                        <label className="block text-xs font-medium text-gray-700 mb-1">Départ</label>
                        <input
                          type="date"
                          className="w-full outline-none text-gray-900"
                        />
                      </div>
                    </div>
                    <div className="p-3 border-b border-gray-300">
                      <label className="block text-xs font-medium text-gray-700 mb-1">Voyageurs</label>
                      <select className="w-full outline-none text-gray-900 bg-transparent">
                        <option value="1">1 voyageur</option>
                        <option value="2">2 voyageurs</option>
                        <option value="3">3 voyageurs</option>
                        <option value="4">4 voyageurs</option>
                        <option value="5">5 voyageurs</option>
                        <option value="6">6 voyageurs</option>
                      </select>
                    </div>
                  </div>
                </div>

                <Button className="w-full mb-4 bg-brand-pink hover:bg-opacity-90 h-12 text-lg">
                  Réserver
                </Button>

                <p className="text-center text-sm text-gray-500 mb-6">
                  Vous ne serez pas débité pour le moment
                </p>

                <div className="space-y-4 text-sm">
                  <div className="flex justify-between">
                    <span className="underline">{property.currency}{property.price} x 5 nuits</span>
                    <span>{property.currency}{property.price * 5}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="underline">Frais de service</span>
                    <span>{property.currency}{Math.round(property.price * 5 * 0.15)}</span>
                  </div>
                  <div className="flex justify-between pt-4 border-t border-gray-200 font-semibold">
                    <span>Total</span>
                    <span>{property.currency}{Math.round(property.price * 5 * 1.15)}</span>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <button className="flex items-center text-brand-blue">
                    <MessageCircle size={18} className="mr-2" />
                    <span>Contacter l'hôte</span>
                  </button>
                  <button className="flex items-center text-brand-pink">
                    <Calendar size={18} className="mr-2" />
                    <span>Disponibilités</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PropertyDetail;
