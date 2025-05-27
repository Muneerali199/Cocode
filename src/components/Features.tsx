
import { Code, Users, Play, Monitor, Search, Check, Sparkles, Zap, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const Features = () => {
  const features = [
    {
      icon: Users,
      title: "Real-time Collaboration",
      description: "Multiple developers can code simultaneously with live cursors, instant updates, and seamless synchronization.",
      color: "text-cyan-400",
      bgGradient: "from-slate-800/60 to-slate-900/80",
      borderColor: "border-cyan-400/40 hover:border-cyan-400/70",
      shadowColor: "hover:shadow-[0_0_40px_rgba(34,211,238,0.4)]"
    },
    {
      icon: Zap,
      title: "Instant Code Execution",
      description: "Run code directly in the browser with support for Python, JavaScript, Java, C++, and many more languages.",
      color: "text-emerald-400",
      bgGradient: "from-slate-800/60 to-slate-900/80",
      borderColor: "border-emerald-400/40 hover:border-emerald-400/70",
      shadowColor: "hover:shadow-[0_0_40px_rgba(52,211,153,0.4)]"
    },
    {
      icon: Code,
      title: "Smart Code Editor",
      description: "Advanced IDE features including syntax highlighting, auto-completion, error detection, and debugging tools.",
      color: "text-purple-400",
      bgGradient: "from-slate-800/60 to-slate-900/80",
      borderColor: "border-purple-400/40 hover:border-purple-400/70",
      shadowColor: "hover:shadow-[0_0_40px_rgba(168,85,247,0.4)]"
    },
    {
      icon: Monitor,
      title: "Screen Sharing",
      description: "Share your screen during coding sessions for better collaboration and pair programming experiences.",
      color: "text-amber-400",
      bgGradient: "from-slate-800/60 to-slate-900/80",
      borderColor: "border-amber-400/40 hover:border-amber-400/70",
      shadowColor: "hover:shadow-[0_0_40px_rgba(251,191,36,0.4)]"
    },
    {
      icon: Search,
      title: "Version Control",
      description: "Built-in Git integration with branch management, commit history, and collaborative code reviews.",
      color: "text-rose-400",
      bgGradient: "from-slate-800/60 to-slate-900/80",
      borderColor: "border-rose-400/40 hover:border-rose-400/70",
      shadowColor: "hover:shadow-[0_0_40px_rgba(251,113,133,0.4)]"
    },
    {
      icon: Shield,
      title: "Interview Ready",
      description: "Perfect for technical interviews with recording capabilities, whiteboard mode, and assessment tools.",
      color: "text-indigo-400",
      bgGradient: "from-slate-800/60 to-slate-900/80",
      borderColor: "border-indigo-400/40 hover:border-indigo-400/70",
      shadowColor: "hover:shadow-[0_0_40px_rgba(99,102,241,0.4)]"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 border border-slate-600/50 mb-6 sm:mb-8 transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_20px_rgba(100,116,139,0.3)]">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
            <span className="text-slate-300 text-xs sm:text-sm font-medium">Powerful Features</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Everything for
            <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent transform transition-all duration-500 hover:scale-105">
              Modern Development
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed px-4">
            From real-time editing to seamless execution, we've got everything covered
          </p>
        </div>

        {/* Enhanced Features Grid with 3D effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`bg-gradient-to-br ${feature.bgGradient} backdrop-blur-sm border ${feature.borderColor} transition-all duration-500 hover:scale-105 group relative overflow-hidden ${feature.shadowColor} transform hover:-translate-y-2 cursor-pointer`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Enhanced animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800/20 to-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* 3D shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 group-hover:translate-x-full"></div>

              <CardContent className="p-4 sm:p-6 lg:p-8 relative z-10">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className={`p-3 sm:p-4 rounded-2xl bg-gradient-to-br from-slate-700/80 to-slate-800/80 ${feature.color} group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-2xl`}>
                    <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-200 group-hover:bg-clip-text transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base group-hover:text-slate-200 transition-colors duration-300">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Technologies Section with 3D effects */}
        <div className="mt-12 sm:mt-16 lg:mt-20 xl:mt-24 text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 border border-slate-600/50 mb-6 sm:mb-8 transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_20px_rgba(100,116,139,0.3)]">
            <Code className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
            <span className="text-slate-300 text-xs sm:text-sm font-medium">Supported Languages</span>
          </div>

          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 sm:mb-8">
            Code in Your
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Favorite Language</span>
          </h3>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 max-w-4xl mx-auto">
            {[
              { name: "Python", color: "from-yellow-400 to-blue-500" },
              { name: "JavaScript", color: "from-yellow-300 to-yellow-500" },
              { name: "TypeScript", color: "from-blue-400 to-blue-600" },
              { name: "Java", color: "from-orange-400 to-red-500" },
              { name: "C++", color: "from-blue-500 to-purple-600" },
              { name: "Go", color: "from-cyan-400 to-blue-500" },
              { name: "Rust", color: "from-orange-500 to-red-600" },
              { name: "PHP", color: "from-purple-500 to-indigo-600" }
            ].map((lang, index) => (
              <div
                key={lang.name}
                className={`bg-gradient-to-r ${lang.color} p-0.5 rounded-full hover:scale-110 transition-all duration-300 group cursor-pointer transform hover:-translate-y-1 hover:shadow-lg`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-slate-900 rounded-full px-3 sm:px-4 lg:px-6 py-2 sm:py-3 group-hover:bg-slate-800 transition-colors duration-300">
                  <span className="text-white text-xs sm:text-sm lg:text-base font-medium">{lang.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
