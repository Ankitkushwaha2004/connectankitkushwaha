import { Quote } from 'lucide-react';

const QuoteSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Quote className="w-12 h-12 text-primary/40 mx-auto mb-6 rotate-180" />
          
          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-display font-medium text-foreground leading-relaxed mb-6">
            <span className="gradient-text">
              "The true sign of intelligence is not knowledge but imagination"
            </span>
          </blockquote>
          
          <cite className="text-lg text-muted-foreground font-mono not-italic">
            — Albert Einstein
          </cite>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
