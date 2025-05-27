
import { MacbookScroll } from "@/components/ui/macbook-scroll";


export const MacbookShowcase = () => {
  return (
    <section className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      <div className="absolute inset-0">
        {/* Enhanced background elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-emerald-500/3 to-teal-500/3 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <MacbookScroll
        src="/placeholder.svg"
        showGradient={false}
        title={
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Code Like Never Before
            <br />
            <span className="text-2xl text-slate-300 block mt-4">
              Real-time collaboration meets powerful IDE features
            </span>
          </span>
        }
        badge={
          <div className="bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 backdrop-blur-sm rounded-full px-4 py-2 border border-emerald-400/30 flex items-center space-x-2">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-emerald-400 text-sm font-medium">Live Demo</span>
          </div>
        }
      />
    </section>
  );
};
