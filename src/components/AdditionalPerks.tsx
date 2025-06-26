
import { Gift, Award, Users, Zap, BookOpen, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";

const AdditionalPerks = () => {
  const perks = [
    {
      icon: <Gift className="w-12 h-12 text-coral" />,
      title: "AI Toolkit Bundle",
      value: "$497 Value",
      description: "Complete collection of premium AI tools, templates, and resources"
    },
    {
      icon: <Users className="w-12 h-12 text-coral" />,
      title: "Exclusive Community Access",
      value: "$297 Value",
      description: "Lifetime access to our private community of AI professionals"
    },
    {
      icon: <Zap className="w-12 h-12 text-coral" />,
      title: "Monthly AI Updates",
      value: "$197 Value",
      description: "Stay current with monthly briefings on latest AI developments"
    },
    {
      icon: <BookOpen className="w-12 h-12 text-coral" />,
      title: "Implementation Workbook",
      value: "$147 Value",
      description: "Step-by-step workbook to implement everything you learn"
    },
    {
      icon: <Headphones className="w-12 h-12 text-coral" />,
      title: "1-on-1 Strategy Call",
      value: "$297 Value",
      description: "Personal 30-minute session to create your AI implementation plan"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            But Wait, There's
            <span className="text-rose"> More!</span>
          </h2>
          <p className="text-xl text-black/70 mb-8">
            These valuable bonuses are included at no extra cost
          </p>
          <div className="bg-rose-light border-2 border-rose/20 rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="text-2xl font-bold text-black">
              Total Bonus Value: <span className="text-rose">$1,435</span>
            </p>
            <p className="text-black/70 mt-2">Yours FREE when you enroll today</p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {perks.map((perk, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-rose-light to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-coral/20"
            >
              <div className="bg-coral/10 p-4 rounded-xl w-fit mb-6 mx-auto">
                {perk.icon}
              </div>
              <div className="text-center">
                <div className="bg-rose text-white px-4 py-2 rounded-full text-sm font-bold mb-4 inline-block">
                  {perk.value}
                </div>
                <h3 className="text-xl font-bold text-black mb-4">{perk.title}</h3>
                <p className="text-black/70 leading-relaxed">{perk.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            className="bg-rose text-white hover:bg-rose/90 px-12 py-6 text-xl font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl"
            size="lg"
          >
            Get Everything Now - Only $97
          </Button>
          <p className="text-sm text-black/60 mt-4">30-day money-back guarantee</p>
        </div>
      </div>
    </section>
  );
};

export default AdditionalPerks;
