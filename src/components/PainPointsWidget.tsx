
import { AlertTriangle, Clock, TrendingDown, X } from "lucide-react";

const PainPointsWidget = () => {
  const painPoints = [
    {
      icon: <TrendingDown className="w-8 h-8 text-rose" />,
      title: "Falling Behind in the AI Revolution",
      description: "While AI transforms every industry, you're watching opportunities slip away because you don't have the skills."
    },
    {
      icon: <Clock className="w-8 h-8 text-rose" />,
      title: "Wasting Time on Outdated Methods",
      description: "You're spending hours on tasks that AI could do in minutes, making you less competitive every day."
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-rose" />,
      title: "Fear of Being Replaced",
      description: "Your job could be automated soon, and you don't know how to stay relevant in an AI-driven world."
    },
    {
      icon: <X className="w-8 h-8 text-rose" />,
      title: "Complex Learning Curves",
      description: "Most AI courses are too technical, overwhelming, or require coding skills you don't have."
    }
  ];

  return (
    <section className="py-20 bg-rose-light">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Are You Struggling With These
            <span className="text-rose"> Pain Points?</span>
          </h2>
          <p className="text-xl text-black/70 max-w-3xl mx-auto">
            You're not alone. Thousands of professionals face these same challenges every day.
          </p>
        </div>
        
        <div className="grid md:grid-2 lg:grid-cols-2 gap-8">
          {painPoints.map((point, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 animate-slide-in-left border-l-4 border-rose"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-rose-light p-3 rounded-xl flex-shrink-0">
                  {point.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-3">{point.title}</h3>
                  <p className="text-black/70 leading-relaxed">{point.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPointsWidget;
