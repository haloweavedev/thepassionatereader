import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="min-h-screen bg-beige-100 text-beige-900 selection:bg-primary/20 selection:text-primary-dark">
      <Navbar />
      <main>
        <Hero />
        
        {/* Placeholder for future sections */}
        <section className="py-24 px-6 md:px-16 w-full max-w-site mx-auto border-t border-beige-200">
           <div className="text-center mb-16">
             <h2 className="font-serif text-4xl text-beige-900 mb-4">Latest from the Journal</h2>
             <p className="font-sans text-beige-800 max-w-2xl mx-auto">
               Explore our most recent thoughts on classic literature, modern fiction, and the writing life.
             </p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 opacity-50 pointer-events-none grayscale">
             {[1, 2, 3].map((i) => (
               <div key={i} className="aspect-[4/3] bg-beige-200 rounded-lg"></div>
             ))}
           </div>
           <div className="mt-8 text-center text-beige-800 italic opacity-60">
             (More content coming soon)
           </div>
        </section>
      </main>
      
      <footer className="bg-beige-200 py-12 px-6 text-center font-sans text-beige-800 text-sm">
        <p>&copy; {new Date().getFullYear()} The Passionate Reader. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;