
import { CheckCircle, Zap, TrendingUp, Shield, Award, Users } from "lucide-react";

const BenefitsWidget = () => {
  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-coral" />,
      title: "10x Your Productivity",
      description: "Automate repetitive tasks and focus on high-value work that only humans can do."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-coral" />,
      title: "Boost Your Salary by 40%+",
      description: "AI-skilled professionals earn significantly more. Our graduates see average salary increases of $25,000+."
    },
    {
      icon: <Shield className="w-8 h-8 text-coral" />,
      title: "Future-Proof Your Career",
      description: "Become the person who leverages AI, not the one replaced by it."
    },
    {
      icon: <Award className="w-8 h-8 text-coral" />,
      title: "Stand Out from Competition",
      description: "Only 5% of professionals have practical AI skills. Join the elite group."
    },
    {
      icon: <Users className="w-8 h-8 text-coral" />,
      title: "Build Valuable Networks",
      description: "Connect with like-minded professionals and industry leaders in our exclusive community."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-coral" />,
      title: "Get Real Results Fast",
      description: "Start seeing improvements in your work and career within the first week."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            What You'll
            <span className="text-coral"> Achieve</span>
          </h2>
          <p className="text-xl text-black/70 max-w-3xl mx-auto">
            Transform your career and life with practical AI skills that deliver immediate results.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-rose-light to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-slide-in-right"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-coral/10 p-4 rounded-xl w-fit mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-black mb-4">{benefit.title}</h3>
              <p className="text-black/70 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsWidget;
