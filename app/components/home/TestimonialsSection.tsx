"use client";

import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card } from '@/app/components/ui/card';

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Raj Kumar',
      role: 'Software Engineer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'Prince helped me recover from a severe back injury and build muscle I never thought possible. His personalized approach and constant support made all the difference. Lost 15kg and gained incredible strength!',
      result: 'Lost 15kg, Recovered from injury',
    },
    {
      name: 'Priya Sharma',
      role: 'Marketing Manager',
      image: 'https://i.ibb.co/5W7ddknx/images.jpg',
      rating: 5,
      text: 'The nutrition plans are fantastic! No crash diets, just sustainable eating that fits my lifestyle. Prince\'s guidance on supplements and liver support has been invaluable. Feeling healthier than ever!',
      result: 'Lost 12kg, Better energy levels',
    },
    {
      name: 'Amit Patel',
      role: 'Entrepreneur',
      image: 'https://i.ibb.co/tw9zM88S/download-1.jpg',
      rating: 5,
      text: 'As someone who struggled with alcohol consumption, Prince\'s holistic approach to liver health and fitness transformation changed my life. His expertise in managing nutrition while social drinking is unmatched.',
      result: 'Transformed lifestyle, Gained muscle',
    },
    {
      name: 'Larren',
      role: 'Teacher',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'After having my second child, I struggled to lose the baby weight. Prince\'s postpartum fitness program was exactly what I needed. Safe, effective, and tailored to my needs as a busy mom.',
      result: 'Lost 18kg postpartum, Regained confidence',
    },
    // {
    //   name: 'Vikram Singh',
    //   role: 'Corporate Executive',
    //   image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face',
    //   rating: 5,
    //   text: 'The personalized attention and detailed meal plans make this program worth every penny. Prince doesn\'t just give you a plan and forget about you - he\'s there every step of the way.',
    //   result: 'Lost 20kg, Reversed pre-diabetes',
    // },
    {
      name: 'Dr. Meera Reddy',
      role: 'Physician',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'As a medical professional, I appreciate Prince\'s evidence-based approach. His understanding of nutrition science and body mechanics is impressive. Results speak for themselves!',
      result: 'Toned body, Better cholesterol',
    },
    {
      name: 'Suresh Kumar',
      role: 'Business Owner',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'Running my own business left me with no time for fitness. Prince created a program that fits my hectic schedule. The results have been amazing and sustainable.',
      result: 'Lost 14kg, More energy for business',
    },
    {
      name: 'Kavita Jain',
      role: 'Homemaker',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'I never thought I could transform my body after 40. Prince proved me wrong! His approach considers hormonal changes and makes fitness enjoyable and achievable.',
      result: 'Lost 16kg, Improved health markers',
    },
  ];

  // Calculate slides per view based on screen size
  const getSlidesPerView = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 1024 ? 3 : 1; // 3 on desktop, 1 on mobile
    }
    return 1;
  };

  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    setSlidesPerView(getSlidesPerView());
    if (typeof window !== 'undefined') {
      const handleResize = () => setSlidesPerView(getSlidesPerView());
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const totalSlides = Math.ceil(testimonials.length / slidesPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 via-orange-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block rounded-full bg-orange-100 px-4 py-1 text-sm font-semibold text-orange-600 mb-4">
            Client Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Real people, real transformations. Here's what our clients have to say
            about their journey with Prince Rajput.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-7xl mx-auto relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)`,
                width: `${(testimonials.length / slidesPerView) * 100}%`
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="px-3"
                  style={{ width: `${100 / testimonials.length}%` }}
                >
                  <Card className="p-6 hover:shadow-xl transition-shadow h-full">
                    <div className="mb-4">
                      <Quote className="h-8 w-8 text-orange-500 opacity-50" />
                    </div>

                    <div className="mb-4 flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    <p className="text-gray-700 mb-4 italic leading-relaxed line-clamp-4">
                      "{testimonial.text}"
                    </p>

                    <div className="mb-4 rounded-lg bg-green-50 px-3 py-2">
                      <p className="text-sm font-semibold text-green-700">
                        ✓ {testimonial.result}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 border-t pt-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full p-3 hover:bg-orange-50 transition-colors z-10"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="h-6 w-6 text-orange-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full p-3 hover:bg-orange-50 transition-colors z-10"
            aria-label="Next testimonials"
          >
            <ChevronRight className="h-6 w-6 text-orange-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-orange-500' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Join hundreds of satisfied clients!</p>
        </div>
      </div>
    </section>
  );
}
