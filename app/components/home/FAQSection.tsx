"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/app/components/ui/accordion';

export function FAQSection() {
  const faqs = [
    {
      question: 'How is your training approach different from other trainers?',
      answer: 'Unlike generic programs, I create completely personalized training and nutrition plans based on your individual body type, goals, injury history, and lifestyle. Every client receives one-on-one attention and ongoing support throughout their journey.',
    },
    {
      question: 'Can you help with back injuries or chronic pain?',
      answer: 'Absolutely! I specialize in back injury recovery and have helped numerous clients overcome chronic back pain. My approach focuses on corrective exercises, proper form, and progressive overload to rebuild strength safely.',
    },
    {
      question: 'Do I need to give up alcohol completely?',
      answer: 'No, but moderation is key. I provide guidance on safe alcohol consumption, liver support strategies, and how to minimize its impact on your fitness goals. We work together to create a sustainable approach that fits your lifestyle.',
    },
    {
      question: 'What kind of results can I expect and how quickly?',
      answer: 'Results vary based on your starting point and commitment, but most clients see noticeable changes in 4-6 weeks. Sustainable fat loss is typically 0.5-1kg per week, while muscle gain is slower but steady. I focus on long-term, lasting results.',
    },
    {
      question: 'Do you provide meal plans or just guidelines?',
      answer: 'I provide detailed, customized meal plans with specific portions, macro breakdowns, and food options based on your preferences and dietary restrictions. You\'ll also get meal timing strategies and recipe suggestions.',
    },
    {
      question: 'Can I train at home or do I need a gym?',
      answer: 'Both! I can create effective programs for home training with minimal equipment or design gym-based programs. The key is consistency and proper execution, not the location.',
    },
    {
      question: 'How do you handle supplement recommendations?',
      answer: 'I provide honest, evidence-based supplement guidance. I only recommend supplements that have proven benefits for your specific goals. I never push unnecessary products and always prioritize nutrition from whole foods first.',
    },
    {
      question: 'What support do I get between check-ins?',
      answer: 'Depending on your plan, you get email support, WhatsApp access, and regular video calls. I\'m here to answer questions, make adjustments, and keep you motivated throughout your journey.',
    },
    {
      question: 'Do you work with beginners or just advanced trainees?',
      answer: 'I work with all fitness levels! Whether you\'re a complete beginner or an experienced athlete, I create programs tailored to your current level and help you progress safely and effectively.',
    },
    {
      question: 'What if I have dietary restrictions or allergies?',
      answer: 'No problem! I customize all nutrition plans to accommodate allergies, dietary restrictions, religious preferences, and food dislikes. Your plan will be delicious and practical for you.',
    },
  ];

  return (
    <section id="faq" className="py-12 md:py-16 bg-gradient-to-br from-gray-50 via-white to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-600 mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Got questions? We've got answers. Here are the most common questions
            I receive from clients.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="rounded-2xl border border-gray-200 bg-white px-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 rounded-3xl bg-gradient-to-r from-orange-500 to-red-600 p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-2">Still Have Questions?</h3>
            <p className="mb-4 text-white/90">
              Let's have a conversation about your fitness goals
            </p>
            <button
              onClick={() => {
                const event = new CustomEvent('open-chat');
                window.dispatchEvent(event);
              }}
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 font-semibold text-orange-600 transition-transform hover:scale-105"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
