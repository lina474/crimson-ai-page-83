
import { X, CheckCircle } from "lucide-react";

const BeforeAfterSection = () => {
  const comparison = [
    {
      before: "Spending hours on repetitive tasks",
      after: "Automating workflows in minutes"
    },
    {
      before: "Struggling with content creation",
      after: "Producing high-quality content effortlessly"
    },
    {
      before: "Manual data analysis and reporting",
      after: "AI-powered insights and automated reports"
    },
    {
      before: "Fear of being replaced by AI",
      after: "Leading AI adoption in your organization"
    },
    {
      before: "Working harder, not smarter",
      after: "Maximum output with minimal effort"
    },
    {
      before: "Falling behind competitors",
      after: "Staying ahead of industry trends"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Your Transformation
            <span className="text-coral"> Journey</span>
          </h2>
          <p className="text-xl text-black/70">
            See the dramatic difference this course will make in your professional life
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-rose-light to-white rounded-3xl p-8 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Before Column */}
            <div className="animate-slide-in-left">
              <div className="text-center mb-8">
                <div className="bg-rose/10 p-4 rounded-2xl inline-block mb-4">
                  <X className="w-8 h-8 text-rose" />
                </div>
                <h3 className="text-2xl font-bold text-rose mb-2">BEFORE</h3>
                <p className="text-black/70">Your current struggles</p>
              </div>
              
              <div className="space-y-4">
                {comparison.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm"
                  >
                    <X className="w-5 h-5 text-rose flex-shrink-0" />
                    <span className="text-black/80">{item.before}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* After Column */}
            <div className="animate-slide-in-right">
              <div className="text-center mb-8">
                <div className="bg-coral/10 p-4 rounded-2xl inline-block mb-4">
                  <CheckCircle className="w-8 h-8 text-coral" />
                </div>
                <h3 className="text-2xl font-bold text-coral mb-2">AFTER</h3>
                <p className="text-black/70">Your AI-powered future</p>
              </div>
              
              <div className="space-y-4">
                {comparison.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-4 bg-gradient-to-r from-coral/5 to-rose/5 rounded-xl border border-coral/20"
                  >
                    <CheckCircle className="w-5 h-5 text-coral flex-shrink-0" />
                    <span className="text-black font-medium">{item.after}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
