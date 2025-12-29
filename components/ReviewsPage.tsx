import React from 'react';
import { reviews } from '../data/reviews';

const ReviewsPage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-beige-100">
      <div className="w-full max-w-site mx-auto px-[clamp(1.5rem,5vw,5rem)] py-12">
        <div className="text-center mb-16">
           <span className="font-sans text-xs md:text-sm font-bold tracking-[0.2em] text-primary uppercase mb-3 block">
             The Collection
           </span>
           <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-beige-900 mb-6">
             Book Reviews
           </h1>
           <p className="font-sans text-beige-800/70 max-w-2xl mx-auto text-lg font-light leading-relaxed">
             Dive into our extensive library of thoughts, critiques, and recommendations.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
          {reviews.map((item, index) => {
             const reviewType = item.taxonomies['review-type']?.[0]?.name || 'Review';
             
             return (
               <article key={item.post.ID} className="group cursor-pointer flex flex-col items-center">
                 <div className="relative w-full mb-8 flex items-center justify-center transition-all duration-500 group-hover:-translate-y-2">
                   <div className="w-[160px] md:w-[180px] shadow-book transition-transform duration-500 group-hover:scale-105 rounded-sm overflow-hidden">
                     <img 
                       src={item.featured_image.url} 
                       alt={item.book.title} 
                       className="w-full h-auto block"
                       loading="lazy"
                     />
                   </div>
                 </div>
                 
                 <div className="text-center px-4 w-full">
                   <div className="mb-3 flex items-center justify-center gap-2">
                     <span className="px-2 py-0.5 border border-beige-300 rounded-full text-[10px] font-bold tracking-widest uppercase text-beige-800/60 bg-white/50">
                       {reviewType}
                     </span>
                   </div>
                   
                   <h3 className="font-serif text-xl md:text-2xl text-beige-900 mb-2 group-hover:text-primary transition-colors duration-300 leading-tight line-clamp-2">
                     {item.book.title}
                   </h3>
                   <p className="font-sans text-xs font-bold tracking-widest text-beige-900/50 uppercase mb-4">
                     {item.book.author_first} {item.book.author_last}
                   </p>
                   <p className="font-sans text-beige-800/80 text-sm leading-relaxed line-clamp-3 mb-6">
                     {item.content.text}
                   </p>
                   
                   <a href={item.post.permalink} className="inline-flex items-center text-xs font-bold tracking-widest uppercase text-primary border-b border-primary/20 pb-0.5 hover:text-primary-dark hover:border-primary transition-all">
                     Read Review
                   </a>
                 </div>
               </article>
             );
          })}
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage;