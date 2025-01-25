"use client";

const NewsletterIllustration = () => {
  return (
    <div className="relative w-full h-full">
      {/* Hand */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-accent/20 rounded-full animate-pulse">
        <div className="absolute inset-0 flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-32 h-32 text-accent transform -rotate-12">
            <path
              fill="currentColor"
              d="M12.5 1.5c-1.77 0-3.33 1.17-3.83 2.87C8.14 4.13 7.5 4 6.81 4 4.6 4 2.81 5.79 2.81 8c0 .75.21 1.46.58 2.06-.9.92-1.45 2.18-1.45 3.57 0 2.21 1.79 4 4 4h.31c-.13.27-.2.56-.2.87 0 1.1.9 2 2 2s2-.9 2-2c0-.31-.07-.6-.2-.87h4.3c-.13.27-.2.56-.2.87 0 1.1.9 2 2 2s2-.9 2-2c0-.31-.07-.6-.2-.87h.31c2.21 0 4-1.79 4-4 0-1.39-.55-2.65-1.45-3.57.37-.6.58-1.31.58-2.06 0-2.21-1.79-4-4-4-.69 0-1.33.13-1.86.37-.5-1.7-2.06-2.87-3.83-2.87z"
            />
          </svg>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0">
        {/* Email Icon */}
        <div className="absolute top-1/4 right-1/4 w-12 h-12 bg-accent text-white rounded-lg flex items-center justify-center animate-bounce">
          <svg className="w-6 h-6" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
            />
          </svg>
        </div>

        {/* Lock Icon */}
        <div className="absolute top-1/3 left-1/3 w-10 h-10 bg-accent/80 text-white rounded-full flex items-center justify-center animate-float">
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
            />
          </svg>
        </div>

        {/* Star decorations */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-yellow-400 rounded-full animate-twinkle"></div>
        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-twinkle delay-75"></div>
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-yellow-400 rounded-full animate-twinkle delay-150"></div>
      </div>
    </div>
  );
};

export default NewsletterIllustration;
