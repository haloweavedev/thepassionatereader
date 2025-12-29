import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ReviewsPage from './components/ReviewsPage';

function App() {
  const [view, setView] = useState('home');

  return (
    <div className="min-h-screen bg-beige-100 text-beige-900 selection:bg-primary/20 selection:text-primary-dark">
      <Navbar onNavigate={setView} />
      <main>
        {view === 'home' ? (
          <>
            <Hero />
            
            {/* Latest from the Journal */}
            <section className="py-24 px-[clamp(1.5rem,5vw,5rem)] w-full max-w-site mx-auto border-t border-beige-300/50">
               <div className="text-center mb-20">
                 <span className="font-sans text-xs md:text-sm font-bold tracking-[0.2em] text-primary uppercase mb-3 block">Fresh Off the Press</span>
                 <h2 className="font-serif text-4xl md:text-5xl text-beige-900 mb-6">Latest from the Journal</h2>
                 <p className="font-sans text-beige-800/70 max-w-2xl mx-auto text-lg font-light leading-relaxed">
                   Explore our most recent thoughts on classic literature, modern fiction, and the writing life.
                 </p>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
                 
                 {/* Article 1 */}
                 <article className="group cursor-pointer flex flex-col items-center">
                   <div className="relative w-full mb-8 flex items-center justify-center transition-all duration-500 group-hover:-translate-y-2">
                     <div className="w-[180px] md:w-[200px] shadow-book transition-transform duration-500 group-hover:scale-105 rounded-sm overflow-hidden">
                       <img src="https://allaboutromance.com/wp-content/uploads/2019/12/1-29.jpg" alt="The Christmas Miracle of Jonathan Toomey" className="w-full h-auto block" />
                     </div>
                   </div>
                   
                   <div className="text-center px-4">
                     <div className="mb-3 flex items-center justify-center gap-2">
                       <span className="px-2 py-0.5 border border-beige-300 rounded-full text-[10px] font-bold tracking-widest uppercase text-beige-800/60 bg-white/50">Desert Isle Keeper</span>
                     </div>
                     
                     <h3 className="font-serif text-2xl text-beige-900 mb-2 group-hover:text-primary transition-colors duration-300 leading-tight">
                       The Christmas Miracle of Jonathan Toomey
                     </h3>
                     <p className="font-sans text-xs font-bold tracking-widest text-beige-900/50 uppercase mb-4">
                       Susan Wojciechowski
                     </p>
                     <p className="font-sans text-beige-800/80 text-sm leading-relaxed line-clamp-3 mb-6">
                       Despite being a family of non-believers, every year we pull out our holiday paraphernalia. We dress the tree, hanging with care the delicate glass ornaments gifted to us over the many years...
                     </p>
                     
                     <a href="#" className="inline-flex items-center text-xs font-bold tracking-widest uppercase text-primary border-b border-primary/20 pb-0.5 hover:text-primary-dark hover:border-primary transition-all">
                       Read Review
                     </a>
                   </div>
                 </article>

                 {/* Article 2 */}
                 <article className="group cursor-pointer flex flex-col items-center">
                   <div className="relative w-full mb-8 flex items-center justify-center transition-all duration-500 group-hover:-translate-y-2">
                     <div className="w-[180px] md:w-[200px] shadow-book transition-transform duration-500 group-hover:scale-105 rounded-sm overflow-hidden">
                       <img src="https://allaboutromance.com/wp-content/uploads/2025/12/1-24.jpg" alt="The Plight Before Christmas" className="w-full h-auto block" />
                     </div>
                   </div>
                   
                   <div className="text-center px-4">
                     <div className="mb-3 flex items-center justify-center gap-2">
                       <span className="px-2 py-0.5 border border-beige-300 rounded-full text-[10px] font-bold tracking-widest uppercase text-beige-800/60 bg-white/50">AAR Review</span>
                     </div>
                     
                     <h3 className="font-serif text-2xl text-beige-900 mb-2 group-hover:text-primary transition-colors duration-300 leading-tight">
                       The Plight Before Christmas
                     </h3>
                     <p className="font-sans text-xs font-bold tracking-widest text-beige-900/50 uppercase mb-4">
                       Kate Stewart
                     </p>
                     <p className="font-sans text-beige-800/80 text-sm leading-relaxed line-clamp-3 mb-6">
                       The Plight Before Christmas needs an editor, has leads in their late thirties who behave at least ten years younger, and manufactures so much angst in its final few chapters...
                     </p>
                     
                     <a href="#" className="inline-flex items-center text-xs font-bold tracking-widest uppercase text-primary border-b border-primary/20 pb-0.5 hover:text-primary-dark hover:border-primary transition-all">
                       Read Review
                     </a>
                   </div>
                 </article>

                 {/* Article 3 */}
                 <article className="group cursor-pointer flex flex-col items-center">
                   <div className="relative w-full mb-8 flex items-center justify-center transition-all duration-500 group-hover:-translate-y-2">
                     <div className="w-[180px] md:w-[200px] shadow-book transition-transform duration-500 group-hover:scale-105 rounded-sm overflow-hidden">
                       <img src="https://allaboutromance.com/wp-content/uploads/2025/12/1-8.jpg" alt="Hunk for the Holidays" className="w-full h-auto block" />
                     </div>
                   </div>
                   
                   <div className="text-center px-4">
                     <div className="mb-3 flex items-center justify-center gap-2">
                       <span className="px-2 py-0.5 border border-beige-300 rounded-full text-[10px] font-bold tracking-widest uppercase text-beige-800/60 bg-white/50">AAR Review</span>
                     </div>
                     
                     <h3 className="font-serif text-2xl text-beige-900 mb-2 group-hover:text-primary transition-colors duration-300 leading-tight">
                       Hunk for the Holidays
                     </h3>
                     <p className="font-sans text-xs font-bold tracking-widest text-beige-900/50 uppercase mb-4">
                       Katie Lane
                     </p>
                     <p className="font-sans text-beige-800/80 text-sm leading-relaxed line-clamp-3 mb-6">
                       Hunk for the Holidays knows exactly what it is: a light Christmas love story that exists just to entertain. Lane leans into the charm of a slightly ridiculous premise...
                     </p>
                     
                     <a href="#" className="inline-flex items-center text-xs font-bold tracking-widest uppercase text-primary border-b border-primary/20 pb-0.5 hover:text-primary-dark hover:border-primary transition-all">
                       Read Review
                     </a>
                   </div>
                 </article>

               </div>
               
               <div className="mt-16 text-center">
                  <button 
                    onClick={() => setView('reviews')}
                    className="inline-flex items-center justify-center transition-all duration-300 ease-out font-sans font-medium rounded-full tracking-wide bg-white text-beige-900 border border-beige-300 hover:border-primary hover:text-primary hover:shadow-lg transform hover:-translate-y-0.5 text-sm px-8 py-3"
                  >
                      View All Reviews
                  </button>
               </div>
            </section>
          </>
        ) : (
          <ReviewsPage />
        )}
      </main>
      
      <footer className="bg-beige-200 py-12 px-6 text-center font-sans text-beige-800 text-sm">
        <p>&copy; {new Date().getFullYear()} The Passionate Reader. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;