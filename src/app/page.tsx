'use client'

import withPublicRoute from "@/utils/WithPublicRoute";
import {useRouter} from "next/navigation";
import {COLORS} from "@/utils/constants/colors";

export default withPublicRoute(HomePage);
function HomePage() {
  const router = useRouter();
  return (
      <div className="min-h-screen bg-white flex items-center justify-center p-4">
        <div className="max-w-6xl w-full">
          <div className="text-center px-8 md:px-12 py-16">
            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: COLORS.darkGrey }}>
              Campaign Management
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed" style={{ color: COLORS.darkGrey }}>
              A powerful web application for managing marketing campaigns with real-time tracking,
              country-specific payouts, and comprehensive campaign control.
            </p>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-12 text-left">
              <div className="border-2 p-6 rounded-xl" style={{ borderColor: COLORS.darkGrey }}>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: COLORS.yellow }}>
                  <span className="text-2xl" style={{ color: COLORS.darkGrey }}>📊</span>
                </div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: COLORS.darkGrey }}>Campaign Creation</h3>
                <p style={{ color: COLORS.darkGrey }}>Create and configure campaigns with titles, landing pages, and country-specific payouts.</p>
              </div>

              <div className="border-2 p-6 rounded-xl" style={{ borderColor: COLORS.darkGrey }}>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: COLORS.yellow }}>
                  <span className="text-2xl" style={{ color: COLORS.darkGrey }}>⚡</span>
                </div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: COLORS.darkGrey }}>Real-time Control</h3>
                <p style={{ color: COLORS.darkGrey }}>Start and stop campaigns instantly with our intuitive toggle controls.</p>
              </div>

              <div className="border-2 p-6 rounded-xl" style={{ borderColor: COLORS.darkGrey }}>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: COLORS.yellow }}>
                  <span className="text-2xl" style={{ color: COLORS.darkGrey }}>🔍</span>
                </div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: COLORS.darkGrey }}>Smart Search</h3>
                <p style={{ color: COLORS.darkGrey }}>Filter and search campaigns by title, URL, and running status for quick access.</p>
              </div>
            </div>

            {/* Screenshot Placeholder */}
            <div className="mb-12">
              <div className="mx-auto max-w-4xl">
                <img
                    src={'./cmt-screenshot.jpg'}
                    alt="Campaign Management App Screenshot"
                    className="w-full rounded-2xl shadow-xl border-2"
                    style={{ borderColor: COLORS.darkGrey }}
                />
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6" style={{ color: COLORS.darkGrey }}>Built With Modern Technology</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 rounded-full font-medium border-2" style={{ backgroundColor: COLORS.yellow, color: COLORS.darkGrey, borderColor: COLORS.darkGrey }}>React</span>
                <span className="px-4 py-2 rounded-full font-medium border-2" style={{ backgroundColor: COLORS.yellow, color: COLORS.darkGrey, borderColor: COLORS.darkGrey }}>TypeScript</span>
                <span className="px-4 py-2 rounded-full font-medium border-2" style={{ backgroundColor: COLORS.yellow, color: COLORS.darkGrey, borderColor: COLORS.darkGrey }}>Node.js</span>
                <span className="px-4 py-2 rounded-full font-medium border-2" style={{ backgroundColor: COLORS.yellow, color: COLORS.darkGrey, borderColor: COLORS.darkGrey }}>RESTful API</span>
                <span className="px-4 py-2 rounded-full font-medium border-2" style={{ backgroundColor: COLORS.yellow, color: COLORS.darkGrey, borderColor: COLORS.darkGrey }}>Full Stack</span>
              </div>
            </div>

            {/* CTA Button */}
            <button
                onClick={()=>router.push("/login")}
                className="group font-bold py-4 px-12 rounded-full text-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto border-2"
                style={{
                  backgroundColor: COLORS.yellow,
                  color: COLORS.darkGrey,
                  borderColor: COLORS.darkGrey
                }}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
  );}
