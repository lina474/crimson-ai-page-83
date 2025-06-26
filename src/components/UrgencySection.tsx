
import { Clock, TrendingUp, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const UrgencySection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-rose to-coral text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="animate-fade-in">
          <div className="bg-white/20 p-4 rounded-2xl inline-block mb-8">
            <AlertTriangle className="w-12 h-12 text-white" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Don't Wait - AI Won't Wait for You
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <Clock className="w-8 h-8 text-white mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Limited Time</h3>
              <p>This special price ends in 48 hours</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <TrendingUp className="w-8 h-8 text-white mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Price Increasing</h3>
              <p>Regular price returns to $297 soon</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <AlertTriangle className="w-8 h-8 text-white mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Opportunity Cost</h3>
              <p>Every day you wait, competitors get ahead</p>
            </div>
          </div>
          
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <p className="text-2xl font-bold mb-4">
              🔥 FLASH SALE: 67% OFF ENDS SOON! 🔥
            </p>
            <div className="flex justify-center items-center gap-4 text-lg">
              <span className="line-through opacity-70">$297</span>
              <span className="text-3xl font-bold">$97</span>
              <span className="bg-white text-rose px-3 py-1 rounded-full text-sm font-bold">
                SAVE $200
              </span>
            </div>
          </div>
          
          <Button 
            className="bg-white text-rose hover:bg-white/90 px-12 py-6 text-xl font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-pulse-scale"
            size="lg"
          >
            Secure Your Spot Now - $97
          </Button>
          
          <p className="text-white/80 mt-6">
            ✅ 30-Day Money-Back Guarantee | ✅ Instant Access | ✅ All Bonuses Included
          </p>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;
