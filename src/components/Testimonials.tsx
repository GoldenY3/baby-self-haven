
import React from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  id: number;
  text: string;
  author: string;
  location: string;
  rating: number;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex space-x-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={18}
                className={`${i < testimonial.rating ? 'text-brand-pink fill-current' : 'text-gray-300'}`}
              />
            ))}
          </div>
          <p className="text-gray-700 mb-4 italic">{`"${testimonial.text}"`}</p>
          <div className="flex items-center">
            <div className="mr-3 w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center text-white font-medium">
              {testimonial.author.split(' ')[0][0]}
              {testimonial.author.split(' ')[1] && testimonial.author.split(' ')[1][0]}
            </div>
            <div>
              <h4 className="font-medium">{testimonial.author}</h4>
              <p className="text-sm text-gray-500">{testimonial.location}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
