
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Michael Chen",
      role: "Marketing Director",
      company: "TechCorp",
      image: "MC",
      quote: "This course completely transformed how I approach my work. I'm now 3x more productive and just got promoted to Senior Director!",
      rating: 5
    },
    {
      name: "Sarah Williams",
      role: "Business Analyst",
      company: "FinanceMax",
      image: "SW",
      quote: "I was skeptical about AI, but this course made everything so clear and practical. I'm now the go-to AI person in my company.",
      rating: 5
    },
    {
      name: "David Rodriguez",
      role: "Operations Manager",
      company: "LogiFlow",
      image: "DR",
      quote: "Best investment I've made in my career. The automation strategies alone save me 15 hours per week!",
      rating: 5
    },
    {
      name: "Emily Davis",
      role: "Content Creator",
      company: "CreativeHub",
      image: "ED",
      quote: "From struggling with content creation to producing viral posts daily. This course gave me superpowers!",
      rating: 5
    },
    {
      name: "James Thompson",
      role: "Sales Manager",
      company: "SalesPro",
      image: "JT",
      quote: "My sales have increased 40% since applying these AI techniques. The ROI was immediate and significant.",
      rating: 5
    },
    {
      name: "Lisa Park",
      role: "HR Director",
      company: "PeopleFirst",
      image: "LP",
      quote: "Revolutionary! I'm now automating recruitment processes and focusing on strategic HR initiatives.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-rose-light to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Success Stories from
            <span className="text-rose"> Real Students</span>
          </h2>
          <p className="text-xl text-black/70">
            Join thousands of professionals who've transformed their careers
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-slide-in-left"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-coral to-rose rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{testimonial.image}</span>
                </div>
                <div>
                  <h4 className="font-bold text-black">{testimonial.name}</h4>
                  <p className="text-sm text-black/70">{testimonial.role}</p>
                  <p className="text-xs text-coral font-semibold">{testimonial.company}</p>
                </div>
              </div>
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-coral text-coral" />
                ))}
              </div>
              
              <div className="relative">
                <Quote className="w-6 h-6 text-coral/30 absolute -top-2 -left-1" />
                <p className="text-black/80 leading-relaxed pl-6 italic">
                  {testimonial.quote}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
