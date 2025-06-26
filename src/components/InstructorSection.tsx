
import { Award, Users, BookOpen, Star } from "lucide-react";

const InstructorSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Meet Your
            <span className="text-coral"> AI Expert</span>
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <div className="bg-gradient-to-br from-coral to-rose rounded-3xl p-2 w-fit mx-auto lg:mx-0">
              <div className="bg-white rounded-2xl p-8 text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-coral/20 to-rose/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-coral to-rose rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">JS</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-black mb-2">Dr. Sarah Johnson</h3>
                <p className="text-coral font-semibold mb-4">AI Strategy Consultant</p>
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-coral text-coral" />
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-slide-in-right">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-coral/10 p-3 rounded-xl">
                  <Award className="w-6 h-6 text-coral" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-black mb-2">10+ Years AI Experience</h4>
                  <p className="text-black/70">Former AI researcher at Google and Microsoft, now helping businesses transform with AI.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-coral/10 p-3 rounded-xl">
                  <Users className="w-6 h-6 text-coral" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-black mb-2">50,000+ Students Taught</h4>
                  <p className="text-black/70">Trained professionals from Fortune 500 companies including Apple, Amazon, and Tesla.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-coral/10 p-3 rounded-xl">
                  <BookOpen className="w-6 h-6 text-coral" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-black mb-2">Published AI Author</h4>
                  <p className="text-black/70">Author of 3 bestselling books on AI implementation and business transformation.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-rose-light rounded-2xl">
              <p className="text-lg text-black italic leading-relaxed">
                "I've seen firsthand how AI transforms careers and businesses. This course distills everything I've learned 
                into practical, actionable strategies that anyone can implement immediately."
              </p>
              <p className="text-coral font-semibold mt-4">- Dr. Sarah Johnson</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorSection;
