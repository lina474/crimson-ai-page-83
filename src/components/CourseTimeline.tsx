
import { Clock, CheckCircle } from "lucide-react";

const CourseTimeline = () => {
  const timeline = [
    {
      hour: 1,
      title: "AI Fundamentals & Mindset Shift",
      content: "Understanding AI basics, debunking myths, and developing the right mindset for AI adoption."
    },
    {
      hour: 2,
      title: "ChatGPT Mastery for Professionals",
      content: "Advanced prompting techniques, workflow optimization, and professional use cases."
    },
    {
      hour: 3,
      title: "AI Tools for Content Creation",
      content: "Creating compelling content, presentations, and marketing materials using AI."
    },
    {
      hour: 4,
      title: "Data Analysis & Insights with AI",
      content: "Turning raw data into actionable insights without complex coding or software."
    },
    {
      hour: 5,
      title: "AI for Business Automation",
      content: "Automating workflows, customer service, and repetitive business processes."
    },
    {
      hour: 6,
      title: "Building Your AI-Powered Future",
      content: "Creating your personal AI strategy, implementation roadmap, and career advancement plan."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-rose-light to-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Complete Course
            <span className="text-rose"> Timeline</span>
          </h2>
          <p className="text-xl text-black/70">
            6 intensive hours that will transform how you work and think about AI
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-coral/30"></div>
          
          {timeline.map((item, index) => (
            <div 
              key={index}
              className={`relative flex items-center mb-12 animate-slide-in-${index % 2 === 0 ? 'left' : 'right'}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-coral rounded-full flex items-center justify-center z-10">
                <Clock className="w-4 h-4 text-white" />
              </div>
              
              {/* Content */}
              <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'}`}>
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-rose text-white px-3 py-1 rounded-full text-sm font-bold">
                      Hour {item.hour}
                    </div>
                    <CheckCircle className="w-5 h-5 text-coral" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">{item.title}</h3>
                  <p className="text-black/70 leading-relaxed">{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseTimeline;
