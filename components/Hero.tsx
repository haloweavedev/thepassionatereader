import React from 'react';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[100vh] min-h-[100vh] max-h-[100vh] flex items-center overflow-hidden">
      
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center bg-no-repeat z-0"></div>
      
      {/* Stronger white overlay for legibility */}
      <div className="absolute inset-0 bg-white/70 z-0 backdrop-blur-[1px]"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-beige-100/90 via-white/30 to-transparent z-0"></div>

      {/* Content Container */}
      <div className="relative w-full max-w-site mx-auto px-6 md:px-12 lg:px-16 h-full flex items-center z-10">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          
          {/* Left Column: Typography */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 md:space-y-10 order-2 lg:order-1 pt-6 lg:pt-0">
            
            <div className="space-y-6 md:space-y-8 w-full">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/50 shadow-sm transition-transform hover:scale-105 cursor-default mx-auto lg:mx-0">
                 <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                 <span className="text-beige-900/90 text-[10px] md:text-xs font-bold uppercase tracking-widest font-sans">
                   Reviews by Dabney Grinnan
                 </span>
              </div>
              
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.05] text-beige-900 font-medium tracking-tight">
                The <span className="text-primary italic relative inline-block">Passionate
                  <svg className="absolute w-full h-3 md:h-4 -bottom-1 md:-bottom-2 left-0 text-primary opacity-40" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 12 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                </span> Reader
              </h1>
              
              <p className="font-sans text-lg md:text-xl lg:text-2xl text-beige-900/80 leading-relaxed font-light max-w-lg mx-auto lg:mx-0">
                Uncovering the finest in fiction. Join me for honest reviews, literary deep dives, and a celebration of the stories that move us.
              </p>
            </div>

            <div className="pt-4">
              <Button size="lg" className="shadow-lg shadow-primary/10 bg-primary/90 hover:bg-primary backdrop-blur-sm text-lg px-12 py-4">
                See more reviews
              </Button>
            </div>
          </div>

          {/* Right Column: Book/Visual */}
          <div className="relative flex flex-col items-center lg:items-end justify-center order-1 lg:order-2 w-full">
            
            <div className="flex flex-col items-center lg:items-end w-full max-w-[300px] md:max-w-[400px] lg:max-w-none lg:pr-8">
              
              {/* Main Book Card */}
              <div className="relative group perspective-1000 z-10 w-full flex justify-center lg:justify-end">
                {/* Reduced sizes: w-[150px] md:w-[200px] lg:w-[240px] */}
                <div className="relative w-[150px] md:w-[200px] lg:w-[240px] aspect-[2/3] shadow-book rounded-2xl overflow-hidden bg-gray-100 transition-all duration-700 ease-out group-hover:-translate-y-4 group-hover:shadow-2xl">
                    <img 
                    src="https://allaboutromance.com/wp-content/uploads/2013/11/1-4.jpg" 
                    alt="When the Marquess Met His Match by Laura Lee Guhrke" 
                    className="w-full h-full object-cover"
                    />
                    
                    {/* Realistic Lighting Effects */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/5 via-transparent to-white/20 pointer-events-none mix-blend-overlay" />
                    <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-l from-black/5 to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Book Metadata */}
              <div className="mt-6 md:mt-8 text-center lg:text-right max-w-sm animate-fade-in-up">
                  <div className="flex justify-center lg:justify-end space-x-1 text-primary mb-3">
                    {[1, 2, 3, 4].map(s => (
                      <svg key={s} className="w-4 h-4 md:w-5 md:h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    ))}
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-primary/40 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  </div>

                  <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-beige-900 leading-tight mb-2 italic">
                    When the Marquess Met His Match
                  </h3>
                  
                  <p className="font-sans text-xs md:text-sm font-bold tracking-widest uppercase text-beige-900/60 mb-4">
                    Laura Lee Guhrke
                  </p>
                  
                  <div className="flex flex-wrap justify-center lg:justify-end gap-x-4 md:gap-x-6 gap-y-2 text-xs md:text-sm font-sans text-beige-900/80">
                    <span className="relative after:content-['•'] after:absolute after:-right-2.5 md:after:-right-3.5 after:text-beige-400 last:after:hidden">
                      Historical Romance
                    </span>
                    <span>
                      American Heiress Series
                    </span>
                  </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;