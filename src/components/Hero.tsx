
import { Button } from "@/components/ui/button";
import { Play, Code, Users, Sparkles, Zap, Globe } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950">
      {/* Enhanced 3D animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-3xl transform rotate-45 animate-pulse hover:rotate-90 transition-transform duration-1000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full animate-bounce hover:scale-110 transition-transform duration-500"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-full blur-xl animate-pulse"></div>
        
        {/* 3D Grid overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(120,119,198,0.03)_50%,transparent_100%)]"></div>
        
        {/* Floating particles with 3D effect */}
        <div className="absolute top-20 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-bounce shadow-[0_0_20px_rgba(59,130,246,0.5)]" style={{ animationDelay: '0.3s' }}></div>
        <div className="absolute bottom-32 right-1/4 w-3 h-3 bg-purple-400 rounded-full animate-bounce shadow-[0_0_20px_rgba(168,85,247,0.5)]" style={{ animationDelay: '0.7s' }}></div>
        <div className="absolute top-1/3 right-20 w-1 h-1 bg-cyan-400 rounded-full animate-ping shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
        <div className="absolute bottom-1/3 left-20 w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_15px_rgba(52,211,153,0.6)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Enhanced Logo/Brand with 3D effect */}
        <div className="flex items-center justify-center mb-8 animate-fade-in">
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative transform transition-all duration-500 hover:scale-110 hover:rotate-6">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl blur-md opacity-75 group-hover:opacity-100 transition duration-500 transform group-hover:scale-110"></div>
              <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-3 sm:p-4 rounded-xl shadow-2xl border border-slate-700/50">
                <Code className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-cyan-400" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full animate-pulse shadow-lg">
                <Sparkles className="w-2 h-2 sm:w-3 sm:h-3 text-white absolute top-0.5 left-0.5" />
              </div>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent transform transition-all duration-300 hover:scale-105">
              Cocode
            </h1>
          </div>
        </div>

        {/* Enhanced Main Headline with better responsive typography */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in delay-200">
          Code Together,
          <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse transform transition-all duration-500 hover:scale-105">
            Build Faster
          </span>
        </h2>

        {/* Enhanced subtitle with better responsive text */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in delay-300 px-4">
          Real-time collaborative coding platform for teams, interviews, and hackathons. 
          Write, execute, and debug code together in perfect sync.
        </p>

        {/* Enhanced feature highlights with 3D cards */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 mb-12 animate-fade-in delay-500">
          <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 sm:py-3 border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] transform hover:-translate-y-1">
            <Users className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
            <span className="text-white text-sm sm:text-base">Multi-user collaboration</span>
          </div>
          <div className="flex items-center space-x-2 bg-gradient-to-r from-emerald-500/20 to-green-500/20 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 sm:py-3 border border-emerald-400/30 hover:border-emerald-400/60 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(52,211,153,0.3)] transform hover:-translate-y-1">
            <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
            <span className="text-white text-sm sm:text-base">Real-time execution</span>
          </div>
          <div className="flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 sm:py-3 border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transform hover:-translate-y-1">
            <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
            <span className="text-white text-sm sm:text-base">Multiple languages</span>
          </div>
        </div>

        {/* Enhanced CTA Buttons with 3D effects */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-16 animate-fade-in delay-700">
          <Button 
            size="lg" 
            className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 hover:from-cyan-400 hover:via-blue-400 hover:to-purple-500 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl shadow-2xl hover:shadow-[0_0_40px_rgba(34,211,238,0.4)] transition-all duration-300 hover:scale-105 group transform hover:-translate-y-1"
          >
            <span className="flex items-center">
              Start Coding Now
              <Play className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="w-full sm:w-auto border-slate-600 bg-slate-800/50 text-white hover:bg-slate-700/80 hover:border-slate-500 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(100,116,139,0.3)] transform hover:-translate-y-1"
          >
            See Live Demo
          </Button>
        </div>

        {/* Enhanced stats with 3D cards and better responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto animate-fade-in delay-1000">
          <div className="text-center group">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] transform hover:-translate-y-2 cursor-pointer">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2 transition-all duration-300 group-hover:scale-110">10K+</div>
              <div className="text-slate-400 text-sm sm:text-base">Active Developers</div>
            </div>
          </div>
          <div className="text-center group">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-slate-700/50 hover:border-emerald-400/50 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(52,211,153,0.2)] transform hover:-translate-y-2 cursor-pointer">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent mb-2 transition-all duration-300 group-hover:scale-110">50K+</div>
              <div className="text-slate-400 text-sm sm:text-base">Collaborative Sessions</div>
            </div>
          </div>
          <div className="text-center group sm:col-span-1">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-slate-700/50 hover:border-purple-400/50 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transform hover:-translate-y-2 cursor-pointer">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2 transition-all duration-300 group-hover:scale-110">99.9%</div>
              <div className="text-slate-400 text-sm sm:text-base">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
