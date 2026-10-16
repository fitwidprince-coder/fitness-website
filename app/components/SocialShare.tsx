"use client";

import { Share2, Facebook, Twitter, Linkedin } from "lucide-react";

interface SocialShareProps {
  title: string;
  url: string;
}

export function SocialShare({ title, url }: SocialShareProps) {
  const handleFacebookShare = () => {
    const shareText = `Check out this article: ${title}`;
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(shareText)}`, '_blank');
  };

  const handleTwitterShare = () => {
    const shareText = `Check out: ${title}`;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(url)}`, '_blank');
  };

  const handleLinkedInShare = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: `Check out this article: ${title}`,
          url: url,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">Share this article</h3>
          <p className="text-gray-600 text-sm">Help others discover this valuable fitness content</p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={handleFacebookShare}
            className="p-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-200 hover:scale-105 shadow-md"
            aria-label="Share on Facebook"
          >
            <Facebook className="h-5 w-5" />
          </button>
          <button
            onClick={handleTwitterShare}
            className="p-3 bg-blue-400 text-white rounded-xl hover:bg-blue-500 transition-all duration-200 hover:scale-105 shadow-md"
            aria-label="Share on Twitter"
          >
            <Twitter className="h-5 w-5" />
          </button>
          <button
            onClick={handleLinkedInShare}
            className="p-3 bg-blue-700 text-white rounded-xl hover:bg-blue-800 transition-all duration-200 hover:scale-105 shadow-md"
            aria-label="Share on LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </button>
          <button
            onClick={handleNativeShare}
            className="p-3 bg-gray-600 text-white rounded-xl hover:bg-gray-700 transition-all duration-200 hover:scale-105 shadow-md"
            aria-label="Share article"
          >
            <Share2 className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}