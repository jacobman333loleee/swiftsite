"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Sidebar */}
        <aside className="md:col-span-1 bg-zinc-900/60 rounded-2xl p-6 shadow-lg border border-zinc-800">
          <div className="flex items-center gap-3 mb-6">
            <img
              src="/swift-main.png"
              alt="Swift Logo"
              className="h-10 w-10"
            />
            <span className="text-xl font-semibold text-emerald-400">
              Swift
            </span>
          </div>

          <div className="space-y-4 text-sm text-zinc-400">
            <p className="text-emerald-400 font-medium">Welcome to Swift</p>
            <p>Choose Modules</p>
            <p>Verification System</p>
            <p>Roblox Integration</p>
            <p>Logging & Channels</p>
          </div>
        </aside>

        {/* Main Content */}
        <main className="md:col-span-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <span className="inline-block mb-4 px-4 py-1 text-xs rounded-full bg-emerald-500/10 text-emerald-400">
              Welcome to the future of Discord–Roblox integration
            </span>

            <h1 className="text-4xl font-bold mb-3">
              Welcome to Swift!
            </h1>

            <p className="text-zinc-400 max-w-2xl">
              Transform your Discord server with powerful Roblox integration.
              Set up automated workflows in just a few simple steps.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Feature
              title="Group Management"
              description="Manage Roblox groups directly from Discord with powerful automation."
            />
            <Feature
              title="Role Synchronization"
              description="Automatically sync Discord roles with Roblox ranks in real time."
            />
            <Feature
              title="Permission Control"
              description="Granular permissions and restrictions for enhanced security."
            />
            <Feature
              title="Smart Logging"
              description="Comprehensive logs and notifications to keep your team informed."
            />
          </div>

          <div className="flex justify-end mt-10">
            <a
              href="https://discord.com/oauth2/authorize?client_id=1393382460011581610&permissions=8&integration_type=0&scope=bot"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-500 hover:bg-emerald-600 text-black rounded-xl px-6 py-2 font-medium transition"
            >
              Get Started →
            </a>
          </div>
        </main>

      </div>
    </div>
  );
}

// ------------------- Fixed Feature component with TypeScript types -------------------
interface FeatureProps {
  title: string;
  description: string;
}

function Feature({ title, description }: FeatureProps) {
  return (
    <div className="bg-zinc-900/70 border border-zinc-800 rounded-2xl shadow-lg p-6">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-sm text-zinc-400">{description}</p>
    </div>
  );
}
