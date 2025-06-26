
import { Award, Download, LinkedinIcon } from "lucide-react";

const CertificateSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-rose-light to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Get Your Official
              <span className="text-coral"> AI Certificate</span>
            </h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Award className="w-6 h-6 text-coral" />
                <span className="text-lg text-black">Industry-recognized certification</span>
              </div>
              <div className="flex items-center gap-3">
                <Download className="w-6 h-6 text-coral" />
                <span className="text-lg text-black">Digital & printable formats</span>
              </div>
              <div className="flex items-center gap-3">
                <LinkedinIcon className="w-6 h-6 text-coral" />
                <span className="text-lg text-black">Perfect for LinkedIn profile</span>
              </div>
            </div>
            <p className="text-xl text-black/70 leading-relaxed">
              Showcase your AI expertise with a professional certificate that employers recognize and respect. 
              Stand out in job applications and promotions.
            </p>
          </div>
          
          <div className="animate-slide-in-right">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-coral/10 to-rose/10 rounded-xl p-8 text-center">
                <Award className="w-16 h-16 text-coral mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-black mb-4">Certificate of Completion</h3>
                <div className="border-2 border-coral/20 rounded-lg p-6 bg-white">
                  <p className="text-black/70 mb-2">This certifies that</p>
                  <p className="text-xl font-bold text-black mb-2">[Your Name]</p>
                  <p className="text-black/70 mb-4">has successfully completed</p>
                  <p className="text-lg font-semibold text-coral mb-4">AI Mastery Course</p>
                  <div className="flex justify-between items-center text-sm text-black/60">
                    <span>6 Hours Completed</span>
                    <span>Certificate ID: #AI2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;
