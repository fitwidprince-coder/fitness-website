import { CheckCircle2, Heart, Target, Trophy } from 'lucide-react';
// Make sure to import the image if needed (depending on your setup)
// import transformation from './transformation.png';

export function AboutSection() {
  const highlights = [
    {
      icon: Trophy,
      title: '12+ Years Experience',
      description: 'Proven track record in transforming lives through fitness',
    },
    {
      icon: Heart,
      title: 'Certified Nutritionist',
      description: 'Expert in creating personalized nutrition plans',
    },
    {
      icon: Target,
      title: 'Back Injury Specialist',
      description: 'Helped numerous clients recover from back injuries',
    },
  ];

  const expertise = [
    'Muscle Building & Hypertrophy',
    'Fat Loss & Body Composition',
    'Strength & Power Training',
    'Endurance & Cardio',
    'Back Injury Recovery',
    'Nutrition Planning',
    'Supplement Guidance',
    'Lifestyle Coaching',
  ];

  return (
    <section id="about" className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block rounded-full bg-orange-100 px-4 py-1 text-sm font-semibold text-orange-600 mb-4">
            About Prince Rajput
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Trusted Fitness & Nutrition Expert
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            With over 12 years of dedicated experience, Prince Rajput has transformed hundreds
            of lives through personalized fitness training and evidence-based nutrition guidance.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 items-center mb-16">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl">
              {/* Replace the gradient div with your image */}
              <img 
                src="/transformation.png" // or use {transformation} if imported
                alt="Fitness Transformation"
                className="h-full w-full object-cover object-center"
              />
              {/* Optional: Add a subtle overlay to match the original theme if needed */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 to-red-600/10 mix-blend-overlay"></div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="prose prose-lg">
              <p className="text-gray-700 leading-relaxed">
                Prince Rajput is a highly experienced fitness trainer and certified health nutritionist
                who has dedicated his career to helping individuals achieve their fitness goals. With
                a specialization in back injury recovery, he has helped countless clients not only
                overcome physical limitations but also build stronger, healthier bodies.
              </p>
              <p className="text-gray-700 leading-relaxed">
                His holistic approach combines cutting-edge training techniques with personalized
                nutrition strategies, ensuring sustainable results that last a lifetime.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                        <Icon className="h-6 w-6 text-orange-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Expertise Grid */}
        <div className="bg-gradient-to-br from-gray-50 to-orange-50 rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Areas of Expertise
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {expertise.map((item, index) => (
              <div key={index} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="font-medium text-gray-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}