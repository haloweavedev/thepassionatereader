import React from 'react';

interface ReviewData {
  post: {
    title: string;
    date: string;
  };
  featured_image: {
    url: string;
  };
  book: {
    title: string;
    author_first: string;
    author_last: string;
    publisher: string;
    publish_date: string;
    grade: string;
    // sensuality: string; // Excluded as requested
  };
  content: {
    text: string;
  };
}

interface SingleBookPageProps {
  review: ReviewData;
  onBack: () => void;
}

const SingleBookPage: React.FC<SingleBookPageProps> = ({ review, onBack }) => {
  const { book, content, featured_image } = review;

  // Simple formatter for the text content to handle newlines
  const formattedContent = content.text.split('\n').map((paragraph, index) => (
    paragraph.trim() ? (
      <p key={index} className="mb-6 leading-relaxed text-lg text-beige-900/90 font-serif">
        {paragraph}
      </p>
    ) : null
  ));

  return (
    <div className="min-h-screen bg-beige-100/50 py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-sm overflow-hidden border border-beige-200">
        
        {/* Navigation / Header */}
        <div className="px-8 py-6 border-b border-beige-100 flex justify-between items-center bg-beige-50/30">
          <button 
            onClick={onBack}
            className="group flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-beige-800 hover:text-primary transition-colors"
          >
            <span className="transform group-hover:-translate-x-1 transition-transform">←</span>
            Back to Journal
          </button>
          <div className="text-xs font-serif italic text-beige-400">
            {review.post.date ? new Date(review.post.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' }) : ''}
          </div>
        </div>

        <div className="p-8 md:p-12 lg:p-16">
          
          {/* Big Title Section */}
          <div className="mb-10 border-b-2 border-primary/10 pb-8">
             <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-beige-900 mb-4 leading-tight">
              {book.title}
            </h1>
            <div className="font-sans text-sm tracking-widest uppercase text-beige-500 font-bold">
              By {book.author_first} {book.author_last}
            </div>
          </div>

          {/* Content Wrapper */}
          <div className="clearfix">
            
            {/* Book Cover - Floated Left */}
            <div className="float-left mr-8 mb-6 md:mr-10 md:mb-8 w-[200px] md:w-[280px]">
              <div className="relative group">
                <div className="absolute inset-0 bg-primary/20 translate-x-2 translate-y-2 rounded-sm transition-transform group-hover:translate-x-1 group-hover:translate-y-1"></div>
                <img 
                  src={featured_image.url} 
                  alt={`Cover of ${book.title}`}
                  className="relative z-10 w-full h-auto shadow-book rounded-sm border border-beige-200" 
                />
              </div>
              
              {/* Book Metadata Sidebar (under image in mobile, but logically associated) */}
              <div className="mt-6 pt-6 border-t border-beige-200 text-sm font-sans text-beige-600">
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest text-beige-400 font-bold">Publisher</span>
                    <span className="text-beige-800">{book.publisher}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest text-beige-400 font-bold">Published</span>
                    <span className="text-beige-800">{book.publish_date}</span>
                  </div>
                   <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest text-beige-400 font-bold">Grade</span>
                    <span className="text-primary font-bold text-lg">{book.grade}</span>
                  </div>
                  {/* Sensuality intentionally omitted */}
                </div>
              </div>
            </div>

            {/* Review Text wrapping around */}
            <div className="relative">
              <span className="first-letter:text-6xl first-letter:font-serif first-letter:text-primary first-letter:float-left first-letter:mr-3 first-letter:mt-[-10px]">
                {/* Drop cap handling */}
              </span>
              {formattedContent}
            </div>
            
          </div>

        </div>
      </div>
    </div>
  );
};

export default SingleBookPage;
