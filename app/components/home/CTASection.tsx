"use client";

import { 
  ArrowRight, 
  CheckCircle, 
  Facebook, 
  Instagram, 
  Youtube, 
  Twitter, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  Heart 
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';

export function CTASection() {
  const navigationLinks = {
    'Main': [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/?page=about' },
      { label: 'Services', href: '/?page=services' },
      { label: 'Testimonials', href: '/?page=testimonials' },
      { label: 'Contact', href: '/?page=contact' },
    ],
    'Services': [
      { label: 'Personal Training', href: '/?page=services#personal-training' },
      { label: 'Nutrition Plans', href: '/?page=services#nutrition' },
      { label: 'Online Coaching', href: '/?page=services#online-coaching' },
      { label: 'Back Injury Recovery', href: '/?page=services#back-injury' },
      { label: 'Corporate Wellness', href: '/?page=services#corporate' },
    ],
    'Resources': [
      { label: 'Blog', href: '/blog' },
      { label: 'Success Stories', href: '/?page=success-stories' },
      { label: 'Free Guides', href: '/tools' },
      { label: 'FAQ', href: '/?page=faq' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
    ],
  };

  const contactInfo = [
    { icon: Phone, text: '+919871890607' },
    { icon: Mail, text: 'fitwidprincmaile@g.com' },
    { icon: MapPin, text: 'New Delhi,110059' },
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  const benefits = [
    'Personalized Training Plans',
    'Custom Nutrition Guidance',
    'Ongoing Support & Motivation',
    'Proven Results',
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 text-white">
      {/* Top CTA Section */}
      {/* <section className="py-12 md:py-16 bg-gradient-to-r from-orange-500 via-red-600 to-pink-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Life?
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Join hundreds of satisfied clients and start your fitness journey today
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-4 py-2"
                >
                  <CheckCircle className="h-5 w-5" />
                  <span className="font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8"
                onClick={() => {
                  const event = new CustomEvent('open-chat');
                  window.dispatchEvent(event);
                }}
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 text-lg px-8"
              >
                View Plans
              </Button>
            </div>

            <p className="mt-8 text-white/80 text-sm">
              Free consultation • No credit card required • Cancel anytime
            </p>
          </div>
        </div>
      </section> */}

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">
                Prince <span className="text-orange-400">Rajput</span>
              </h3>
              <p className="text-gray-300">
                Certified Fitness Trainer & Nutrition Expert with 12+ years of experience
                transforming lives through personalized fitness and nutrition guidance.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-start gap-3">
                    <Icon className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{item.text}</span>
                  </div>
                );
              })}
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="h-10 w-10 rounded-full bg-white/10 hover:bg-orange-500 transition-colors flex items-center justify-center"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          {Object.entries(navigationLinks).map(([category, links], index) => (
            <div key={category} className="lg:col-span-2">
              <h4 className="text-lg font-semibold mb-4 text-orange-400">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block transition-transform cursor-pointer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Column */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-semibold mb-4 text-orange-400">
              Get Free Fitness Tips
            </h4>
            <p className="text-gray-300 mb-6">
              Subscribe to my newsletter for weekly fitness tips, nutrition advice, 
              and exclusive offers.
            </p>
            
            <form className="space-y-4">
              <div className="space-y-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition"
                />
                <p className="text-xs text-gray-400">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
              <Button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3"
              >
                Subscribe Now
              </Button>
            </form>

            {/* Certifications */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <h4 className="text-lg font-semibold mb-4 text-orange-400">
                Certifications
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-white/10 text-sm">ISSA Certified</span>
                <span className="px-3 py-1 rounded-full bg-white/10 text-sm">NASM Certified</span>
                <span className="px-3 py-1 rounded-full bg-white/10 text-sm">Nutrition Specialist</span>
                <span className="px-3 py-1 rounded-full bg-white/10 text-sm">CPR/AED</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Prince Rajput Fitness. All rights reserved.
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                Terms of Service
              </a>
              <a href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                Privacy Policy
              </a>
              <a href="/cookie-policy" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                Cookie Policy
              </a>
              <a href="/disclaimer" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                Disclaimer
              </a>
            </div>
            
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              Made with <Heart className="h-4 w-4 text-red-400" /> by Prince Rajput
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}