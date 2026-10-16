import { TrendingUp, Award, Target } from 'lucide-react';

export function SuccessStories() {
  const stories = [
    {
      name: 'Rahul M.',
      achievement: 'Back Injury to Bodybuilder',
      before: '75kg, Chronic back pain',
      after: '82kg, Pain-free, Competition ready',
      duration: '10 months',
      story: 'After a severe back injury from incorrect deadlift form, I thought my fitness journey was over. Prince not only helped me recover completely but also taught me proper technique. Now I compete in bodybuilding!',
      icon: Award,
    },
    {
      name: 'Anjali K.',
      achievement: 'From Overweight to Marathon Runner',
      before: '88kg, Sedentary lifestyle',
      after: '62kg, Ran first marathon',
      duration: '14 months',
      story: 'I never thought I could run a marathon. Prince\'s progressive training approach and nutritional guidance transformed me from someone who couldn\'t run 1km to completing a full marathon!',
      icon: TrendingUp,
    },
    {
      name: 'Sameer D.',
      achievement: 'Reversed Fatty Liver',
      before: 'Fatty liver, High cholesterol',
      after: 'Healthy liver, Normal cholesterol',
      duration: '8 months',
      story: 'My doctor recommended medication for fatty liver. Instead, I worked with Prince on liver-supporting nutrition and exercise. My latest tests show my liver is completely healthy!',
      icon: Target,
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-600 mb-4">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Inspiring Transformations
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            These are real transformation stories from clients who committed to their goals
            and achieved remarkable results.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {stories.map((story, index) => {
            const Icon = story.icon;
            return (
              <div
                key={index}
                className="group rounded-3xl border-2 border-gray-200 bg-gradient-to-br from-white to-green-50/30 p-8 transition-all hover:border-green-300 hover:shadow-xl"
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 text-white">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="text-xl font-bold mb-2">{story.name}</h3>
                <p className="text-green-600 font-semibold mb-4">{story.achievement}</p>

                <div className="mb-4 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Before:</span>
                    <span className="font-medium">{story.before}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">After:</span>
                    <span className="font-medium text-green-600">{story.after}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">{story.duration}</span>
                  </div>
                </div>

                <p className="text-gray-700 italic text-sm leading-relaxed">
                  "{story.story}"
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
