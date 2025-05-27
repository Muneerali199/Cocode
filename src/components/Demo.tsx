
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Users, Code, Sparkles, Eye, Zap } from "lucide-react";

export const Demo = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 border border-slate-600/50 mb-6 sm:mb-8 transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_20px_rgba(100,116,139,0.3)]">
            <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
            <span className="text-slate-300 text-xs sm:text-sm font-medium">Live Demo</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            See Cocode in
            <span className="block mt-2 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent transform transition-all duration-500 hover:scale-105">
              Action
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed px-4">
            Experience the power of real-time collaborative coding
          </p>
        </div>

        {/* Enhanced Demo Preview with 3D effects */}
        <div className="relative max-w-6xl mx-auto">
          <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/80 backdrop-blur-sm border-slate-700/50 overflow-hidden shadow-2xl hover:shadow-[0_0_60px_rgba(34,211,238,0.2)] transition-all duration-500 group transform hover:scale-[1.02] hover:-translate-y-2">
            <CardContent className="p-0">
              {/* Enhanced Mock Browser Header with 3D effect */}
              <div className="bg-gradient-to-r from-slate-800/90 to-slate-900/90 px-3 sm:px-4 lg:px-6 py-3 sm:py-4 border-b border-slate-700/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="flex space-x-1 sm:space-x-2">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full hover:bg-red-400 transition-colors cursor-pointer transform hover:scale-110 shadow-lg"></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-amber-500 rounded-full hover:bg-amber-400 transition-colors cursor-pointer transform hover:scale-110 shadow-lg"></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-emerald-500 rounded-full hover:bg-emerald-400 transition-colors cursor-pointer transform hover:scale-110 shadow-lg"></div>
                    </div>
                    <div className="text-slate-400 text-xs sm:text-sm bg-slate-700/50 rounded-md px-2 sm:px-3 py-1 backdrop-blur-sm">
                      cocode.dev/session/abc123
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1 sm:space-x-2 bg-emerald-500/20 rounded-full px-2 sm:px-3 py-1 border border-emerald-400/30 backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.6)]"></div>
                      <span className="text-emerald-400 text-xs sm:text-sm font-medium">3 users online</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Mock Code Editor with better responsive design */}
              <div className="relative">
                <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-3 sm:p-4 lg:p-6">
                  {/* Enhanced mock code with better responsive font sizes */}
                  <div className="font-mono text-xs sm:text-sm space-y-1 sm:space-y-2 overflow-x-auto">
                    <div className="flex items-center space-x-2 sm:space-x-4 group hover:bg-slate-800/50 rounded px-1 sm:px-2 transition-colors duration-200">
                      <span className="text-slate-500 w-4 sm:w-8 text-right text-xs sm:text-sm">1</span>
                      <span className="text-purple-400 font-semibold">function</span>
                      <span className="text-cyan-400 font-semibold">fibonacci</span>
                      <span className="text-amber-400">(</span>
                      <span className="text-white">n</span>
                      <span className="text-amber-400">) {`{`}</span>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-4 group hover:bg-slate-800/50 rounded px-1 sm:px-2 transition-colors duration-200">
                      <span className="text-slate-500 w-4 sm:w-8 text-right text-xs sm:text-sm">2</span>
                      <span className="text-white ml-2 sm:ml-4">if (n {'<'}= 1) return n;</span>
                      <div className="w-1 sm:w-2 h-3 sm:h-4 bg-cyan-400 animate-pulse ml-2 rounded-sm shadow-[0_0_10px_rgba(34,211,238,0.6)]"></div>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-4 group hover:bg-slate-800/50 rounded px-1 sm:px-2 transition-colors duration-200">
                      <span className="text-slate-500 w-4 sm:w-8 text-right text-xs sm:text-sm">3</span>
                      <span className="text-white ml-2 sm:ml-4">return</span>
                      <span className="text-cyan-400 ml-1 sm:ml-2">fibonacci</span>
                      <span className="text-white">(n - 1) +</span>
                      <span className="text-cyan-400 ml-1 sm:ml-2">fibonacci</span>
                      <span className="text-white">(n - 2);</span>
                      <div className="w-1 sm:w-2 h-3 sm:h-4 bg-emerald-400 animate-pulse ml-2 rounded-sm shadow-[0_0_10px_rgba(52,211,153,0.6)]"></div>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-4 group hover:bg-slate-800/50 rounded px-1 sm:px-2 transition-colors duration-200">
                      <span className="text-slate-500 w-4 sm:w-8 text-right text-xs sm:text-sm">4</span>
                      <span className="text-amber-400">{`}`}</span>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-4">
                      <span className="text-slate-500 w-4 sm:w-8 text-right text-xs sm:text-sm">5</span>
                      <span className="text-white"></span>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-4 group hover:bg-slate-800/50 rounded px-1 sm:px-2 transition-colors duration-200">
                      <span className="text-slate-500 w-4 sm:w-8 text-right text-xs sm:text-sm">6</span>
                      <span className="text-emerald-400">console</span>
                      <span className="text-white">.</span>
                      <span className="text-emerald-400">log</span>
                      <span className="text-amber-400">(</span>
                      <span className="text-cyan-400">fibonacci</span>
                      <span className="text-amber-400">(</span>
                      <span className="text-orange-400">10</span>
                      <span className="text-amber-400">));</span>
                      <div className="w-1 sm:w-2 h-3 sm:h-4 bg-purple-400 animate-pulse ml-2 rounded-sm shadow-[0_0_10px_rgba(168,85,247,0.6)]"></div>
                    </div>
                  </div>

                  {/* Enhanced output panel with 3D effects */}
                  <div className="mt-4 sm:mt-6 bg-gradient-to-r from-slate-900/80 to-slate-800/80 rounded-lg p-3 sm:p-4 border border-slate-700/50 backdrop-blur-sm hover:border-emerald-400/30 transition-all duration-300">
                    <div className="flex items-center justify-between mb-2 sm:mb-3">
                      <span className="text-emerald-400 text-xs sm:text-sm font-semibold flex items-center">
                        <Zap className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                        Output
                      </span>
                      <Button size="sm" className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white shadow-lg hover:shadow-[0_0_20px_rgba(52,211,153,0.4)] transition-all duration-300 text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2 transform hover:scale-105">
                        <Play className="w-2 h-2 sm:w-3 sm:h-3 mr-1" />
                        Run
                      </Button>
                    </div>
                    <div className="text-white font-mono text-xs sm:text-sm bg-slate-900/50 rounded p-2 sm:p-3 border border-slate-700/30">
                      <span className="text-emerald-400">$</span> 
                      <span className="ml-2 text-cyan-300">55</span>
                    </div>
                  </div>
                </div>

                {/* Enhanced collaborative cursors with 3D effects */}
                <div className="absolute top-8 sm:top-12 right-12 sm:right-16 lg:right-20 flex items-center space-x-1 animate-bounce">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.6)]"></div>
                  <div className="bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 text-xs px-1 sm:px-2 py-0.5 sm:py-1 rounded-md font-medium shadow-lg transform hover:scale-105 transition-transform duration-200">
                    Alice
                  </div>
                </div>
                <div className="absolute top-16 sm:top-20 right-20 sm:right-24 lg:right-32 flex items-center space-x-1 animate-bounce delay-300">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full shadow-[0_0_15px_rgba(52,211,153,0.6)]"></div>
                  <div className="bg-gradient-to-r from-emerald-400 to-green-500 text-slate-900 text-xs px-1 sm:px-2 py-0.5 sm:py-1 rounded-md font-medium shadow-lg transform hover:scale-105 transition-transform duration-200">
                    Bob
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Enhanced Demo Features with 3D cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12 lg:mt-16">
            <div className="text-center group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 border border-cyan-400/30 group-hover:border-cyan-400/60 transition-all duration-300 group-hover:scale-110 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] transform group-hover:-translate-y-1 cursor-pointer">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-cyan-400" />
              </div>
              <h3 className="text-white font-semibold mb-2 text-base sm:text-lg lg:text-xl group-hover:text-cyan-400 transition-colors duration-300">Live Collaboration</h3>
              <p className="text-slate-400 text-xs sm:text-sm lg:text-base group-hover:text-slate-300 transition-colors duration-300">See everyone's cursors and edits in real-time</p>
            </div>
            <div className="text-center group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 border border-emerald-400/30 group-hover:border-emerald-400/60 transition-all duration-300 group-hover:scale-110 hover:shadow-[0_0_30px_rgba(52,211,153,0.3)] transform group-hover:-translate-y-1 cursor-pointer">
                <Play className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-emerald-400" />
              </div>
              <h3 className="text-white font-semibold mb-2 text-base sm:text-lg lg:text-xl group-hover:text-emerald-400 transition-colors duration-300">Instant Execution</h3>
              <p className="text-slate-400 text-xs sm:text-sm lg:text-base group-hover:text-slate-300 transition-colors duration-300">Run code immediately with shared output</p>
            </div>
            <div className="text-center group sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 border border-purple-400/30 group-hover:border-purple-400/60 transition-all duration-300 group-hover:scale-110 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transform group-hover:-translate-y-1 cursor-pointer">
                <Code className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-purple-400" />
              </div>
              <h3 className="text-white font-semibold mb-2 text-base sm:text-lg lg:text-xl group-hover:text-purple-400 transition-colors duration-300">Smart Editor</h3>
              <p className="text-slate-400 text-xs sm:text-sm lg:text-base group-hover:text-slate-300 transition-colors duration-300">Advanced IDE features and syntax highlighting</p>
            </div>
          </div>
        </div>

        {/* Enhanced CTA with 3D effects */}
        <div className="text-center mt-12 sm:mt-16 lg:mt-20">
          <Button 
            size="lg" 
            className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 hover:from-emerald-400 hover:via-cyan-400 hover:to-blue-500 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl shadow-2xl hover:shadow-[0_0_40px_rgba(52,211,153,0.4)] transition-all duration-300 hover:scale-105 group transform hover:-translate-y-1"
          >
            <span className="flex items-center">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              Try Cocode Free
              <Play className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};
