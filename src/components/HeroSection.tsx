
import { Button } from "@/components/ui/button";
import { Play, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-rose-light to-white flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <div className="animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-1 bg-coral/10 px-4 py-2 rounded-full">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-coral text-coral" />
              ))}
              <span className="ml-2 text-sm text-black font-medium">4.9/5 from 10,000+ students</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 leading-tight">
            Master AI in
            <span className="text-coral"> 6 Hours</span>
            <br />
            Transform Your Career
          </h1>
          
          <p className="text-xl md:text-2xl text-black/70 mb-12 max-w-3xl mx-auto leading-relaxed">
            From zero to AI expert. Learn practical AI skills that Fortune 500 companies are desperately seeking. 
            No coding experience required.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              className="bg-rose text-white hover:bg-rose/90 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
              size="lg"
            >
              Enroll Now - $297 $97
            </Button>
            
            <Button 
              variant="outline" 
              className="border-coral text-coral hover:bg-coral hover:text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
              size="lg"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Preview
            </Button>
          </div>
          
          <div className="mt-12 flex justify-center">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl w-full">
              <div className="aspect-video bg-gradient-to-br from-coral/20 to-rose/20 rounded-xl flex items-center justify-center">
                <div className="bg-white rounded-full p-6 shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <Play className="w-12 h-12 text-rose fill-rose" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
