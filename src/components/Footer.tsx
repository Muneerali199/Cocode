
import { Code, Github, Twitter, MessageCircle, Linkedin, Sparkles } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-slate-950 to-black border-t border-slate-800/50 py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300 transform group-hover:scale-110"></div>
                <div className="relative bg-slate-900 p-2 sm:p-3 rounded-lg shadow-2xl">
                  <Code className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400" />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent">
                Cocode
              </h3>
            </div>
            <p className="text-slate-400 max-w-md mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
              The future of collaborative coding. Build together, ship faster, and code with confidence in real-time.
            </p>
            
            {/* Enhanced Social Links with 3D effects */}
            <div className="flex space-x-3 sm:space-x-4">
              {[
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Twitter, href: "#", label: "Twitter" }, 
                { icon: MessageCircle, href: "#", label: "Discord" },
                { icon: Linkedin, href: "#", label: "LinkedIn" }
              ].map((social, index) => (
                <a 
                  key={social.label}
                  href={social.href} 
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-lg flex items-center justify-center text-slate-400 hover:text-white border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110 group transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                  aria-label={social.label}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <div className="flex items-center space-x-2 mb-4 sm:mb-6">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
              <h4 className="text-white font-semibold text-base sm:text-lg">Product</h4>
            </div>
            <ul className="space-y-2 sm:space-y-3 text-slate-400">
              {["Features", "Pricing", "Enterprise", "API", "Documentation"].map((item, index) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block text-sm sm:text-base hover:text-cyan-400 transform"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <div className="flex items-center space-x-2 mb-4 sm:mb-6">
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
              <h4 className="text-white font-semibold text-base sm:text-lg">Support</h4>
            </div>
            <ul className="space-y-2 sm:space-y-3 text-slate-400">
              {["Help Center", "Contact Us", "Privacy Policy", "Terms of Service", "Status"].map((item, index) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block text-sm sm:text-base hover:text-emerald-400 transform"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Enhanced Bottom Section with 3D effects */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-slate-800/50 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="text-slate-500 text-sm text-center sm:text-left">
            <span className="inline-flex items-center">
              Made with 
              <span className="text-red-400 mx-1 animate-pulse text-base">❤️</span> 
              for developers worldwide
            </span>
            <div className="mt-1">
              © 2024 Cocode. All rights reserved.
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 border border-slate-600/50 hover:border-emerald-400/50 transition-all duration-300 hover:scale-105 transform hover:shadow-[0_0_20px_rgba(52,211,153,0.2)]">
            <span className="text-slate-300 text-sm">
              <span className="text-emerald-400 font-semibold">v2.0</span> - Now with AI assistance
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
