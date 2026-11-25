import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Fully static site in out/; no server required.
  agentRules: false, // Stop `next dev` from generating AGENTS.md; project rules live in CLAUDE.md.
};

export default nextConfig;
