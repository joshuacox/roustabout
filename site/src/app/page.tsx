'use client';

import React, { useState } from 'react';
import AdBanner from '@/components/AdBanner';

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'last' | 'enter' | 'logs' | 'kill' | 'clean' | 'krm'>('last');

  const oneliner = 'curl -fsSL https://raw.githubusercontent.com/joshuacox/roustabout/master/bootstraproustabout.sh | bash';

  const handleCopy = () => {
    navigator.clipboard.writeText(oneliner);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              ⚓ Roustabout
            </span>
            <span className="px-2 py-0.5 text-xs font-semibold bg-cyan-950 text-cyan-400 border border-cyan-800 rounded-full">
              v1.0.0
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
            <a href="#install" className="hover:text-cyan-400 transition-colors">Install</a>
            <a href="#cli" className="hover:text-cyan-400 transition-colors">CLI Reference</a>
            <a href="#aliases" className="hover:text-cyan-400 transition-colors">Legacy Aliases</a>
            <a href="#docs" className="hover:text-cyan-400 transition-colors">Documentation</a>
            <a
              href="https://github.com/joshuacox/roustabout"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 flex items-center space-x-2 transition-all"
            >
              <span>GitHub</span>
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="absolute inset-0 -z-10 flex items-center justify-center">
          <div className="w-[600px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6">
          The High-Velocity <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
            Docker Assistant
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg text-slate-300 mb-10 leading-relaxed">
          A lightning-fast, zero-dependency CLI for instantly interacting with ephemeral containers,
          inspecting logs, killing rogue processes, and safely pruning Docker resources.
        </p>

        {/* Oneliner Box */}
        <div id="install" className="max-w-3xl mx-auto bg-slate-900/90 border border-slate-800 rounded-xl p-3 shadow-2xl backdrop-blur-sm flex flex-col sm:flex-row items-center gap-3">
          <div className="flex-1 font-mono text-left text-xs sm:text-sm text-cyan-300 px-3 py-2 bg-slate-950/80 rounded-lg w-full overflow-x-auto border border-slate-800/80 select-all">
            {oneliner}
          </div>
          <button
            onClick={handleCopy}
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm transition-all shadow-md active:scale-95 flex items-center justify-center space-x-2 whitespace-nowrap"
          >
            {copied ? (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Copied!</span>
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span>Copy Bootstrap</span>
              </>
            )}
          </button>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span> 100% Native Bash
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span> ShellCheck Verified
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-blue-400"></span> 100% Backward Compatible
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-purple-400"></span> Auto-Completion Ready
          </span>
        </div>
      </section>

      {/* Top Advertisement Slot */}
      <div className="max-w-5xl mx-auto px-4 w-full">
        <AdBanner slot="9876543210" format="horizontal" />
      </div>

      {/* Feature Highlights Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-900/50 border border-slate-800/80 rounded-2xl p-6 hover:border-slate-700 transition-all">
            <div className="w-12 h-12 rounded-xl bg-cyan-950 border border-cyan-800 flex items-center justify-center text-cyan-400 mb-4 text-xl">
              ⚡
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Zero-Lookup Workflow</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Stop running <code className="text-cyan-300">docker ps</code> just to copy-paste container hashes.
              Instantly jump into or tail logs from the most recent container with <code className="text-cyan-300">roustabout last</code>.
            </p>
          </div>

          <div className="bg-slate-900/50 border border-slate-800/80 rounded-2xl p-6 hover:border-slate-700 transition-all">
            <div className="w-12 h-12 rounded-xl bg-blue-950 border border-blue-800 flex items-center justify-center text-blue-400 mb-4 text-xl">
              🛡️
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Safe Resource Pruning</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Native Docker commands error out when argument lists are empty. Roustabout guards against empty state failures
              and safely cleans orphaned volumes, containers, and 24h-stale images.
            </p>
          </div>

          <div className="bg-slate-900/50 border border-slate-800/80 rounded-2xl p-6 hover:border-slate-700 transition-all">
            <div className="w-12 h-12 rounded-xl bg-sky-950 border border-sky-800 flex items-center justify-center text-sky-400 mb-4 text-xl">
              🔄
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Unified &amp; Backward Compatible</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              A single multi-call binary handles everything. Classic commands like <code className="text-cyan-300">LastDocker</code>,
              <code className="text-cyan-300">CleanDocker</code>, and <code className="text-cyan-300">EnterDocker</code> remain 100% operational.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Command Playground / Explorer */}
      <section id="cli" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-3">CLI Command Explorer</h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Discover the streamlined commands that replace verbose Docker commands with concise, safe primitives.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {(['last', 'enter', 'logs', 'kill', 'clean', 'krm'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                activeTab === tab
                  ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20'
                  : 'bg-slate-900 text-slate-300 border border-slate-800 hover:bg-slate-800'
              }`}
            >
              roustabout {tab}
            </button>
          ))}
        </div>

        {/* Tab Content Display */}
        <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 md:p-8 max-w-4xl mx-auto">
          {activeTab === 'last' && (
            <div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                <span className="font-mono text-cyan-400 text-lg font-bold">roustabout last [enter | logs | id]</span>
                <span className="text-xs bg-slate-800 text-slate-400 px-2.5 py-1 rounded-md">Alias: LastDocker</span>
              </div>
              <p className="text-slate-300 text-sm mb-4">
                Directly targets the most recently spawned Docker container via <code className="text-cyan-300">docker ps -ql</code>.
                Eliminates the need to copy-paste container hashes.
              </p>
              <div className="bg-slate-950 rounded-lg p-4 font-mono text-xs text-slate-200 space-y-2 border border-slate-800/80">
                <p className="text-slate-500"># Shell into the last container (tries /bin/bash, falls back to /bin/sh):</p>
                <p className="text-cyan-400 font-semibold">$ roustabout last</p>
                <p className="text-slate-500 mt-2"># Stream logs from the last container:</p>
                <p className="text-cyan-400 font-semibold">$ roustabout last logs</p>
                <p className="text-slate-500 mt-2"># Print the ID of the last container:</p>
                <p className="text-cyan-400 font-semibold">$ roustabout last id</p>
              </div>
            </div>
          )}

          {activeTab === 'enter' && (
            <div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                <span className="font-mono text-cyan-400 text-lg font-bold">roustabout enter [container_id]</span>
                <span className="text-xs bg-slate-800 text-slate-400 px-2.5 py-1 rounded-md">Alias: EnterDocker</span>
              </div>
              <p className="text-slate-300 text-sm mb-4">
                Enters any container with an interactive shell. Automatically tries <code className="text-cyan-300">/bin/bash</code> and
                seamlessly falls back to <code className="text-cyan-300">/bin/sh</code> if bash is not installed in the target image.
              </p>
              <div className="bg-slate-950 rounded-lg p-4 font-mono text-xs text-slate-200 space-y-2 border border-slate-800/80">
                <p className="text-slate-500"># Enter container by ID or name:</p>
                <p className="text-cyan-400 font-semibold">$ roustabout enter 6b44e56c1826</p>
                <p className="text-slate-500 mt-2"># Enter the last container if no ID is specified:</p>
                <p className="text-cyan-400 font-semibold">$ roustabout enter</p>
              </div>
            </div>
          )}

          {activeTab === 'logs' && (
            <div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                <span className="font-mono text-cyan-400 text-lg font-bold">roustabout logs [container_id]</span>
                <span className="text-xs bg-slate-800 text-slate-400 px-2.5 py-1 rounded-md">Alias: LogDockerLast</span>
              </div>
              <p className="text-slate-300 text-sm mb-4">
                Follows output logs (<code className="text-cyan-300">docker logs -f</code>) of a specific container or the last spawned container.
              </p>
              <div className="bg-slate-950 rounded-lg p-4 font-mono text-xs text-slate-200 space-y-2 border border-slate-800/80">
                <p className="text-slate-500"># Tail logs of the last spawned container:</p>
                <p className="text-cyan-400 font-semibold">$ roustabout logs</p>
                <p className="text-slate-500 mt-2"># Tail logs of a specific container:</p>
                <p className="text-cyan-400 font-semibold">$ roustabout logs api_server</p>
              </div>
            </div>
          )}

          {activeTab === 'kill' && (
            <div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                <span className="font-mono text-cyan-400 text-lg font-bold">roustabout kill [--all | id...]</span>
                <span className="text-xs bg-slate-800 text-slate-400 px-2.5 py-1 rounded-md">Alias: KillDocker</span>
              </div>
              <p className="text-slate-300 text-sm mb-4">
                Kills one or more specified containers, or immediately terminates all active running containers with <code className="text-cyan-300">--all</code>.
                Safely checks for active containers to prevent empty <code className="text-cyan-300">xargs</code> errors.
              </p>
              <div className="bg-slate-950 rounded-lg p-4 font-mono text-xs text-slate-200 space-y-2 border border-slate-800/80">
                <p className="text-slate-500"># Terminate all running containers safely:</p>
                <p className="text-cyan-400 font-semibold">$ roustabout kill --all</p>
                <p className="text-slate-500 mt-2"># Kill specific containers:</p>
                <p className="text-cyan-400 font-semibold">$ roustabout kill web_app db_1</p>
              </div>
            </div>
          )}

          {activeTab === 'clean' && (
            <div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                <span className="font-mono text-cyan-400 text-lg font-bold">roustabout clean [options]</span>
                <span className="text-xs bg-slate-800 text-slate-400 px-2.5 py-1 rounded-md">Aliases: CleanDocker, StaleDocker</span>
              </div>
              <p className="text-slate-300 text-sm mb-4">
                Clean and prune Docker resources without hitting crashes from empty argument lists.
              </p>
              <div className="bg-slate-950 rounded-lg p-4 font-mono text-xs text-slate-200 space-y-2 border border-slate-800/80">
                <p className="text-slate-500"># Prune stopped containers and dangling images (default):</p>
                <p className="text-cyan-400 font-semibold">$ roustabout clean</p>
                <p className="text-slate-500 mt-2"># Prune dangling/orphaned volumes:</p>
                <p className="text-cyan-400 font-semibold">$ roustabout clean --volumes</p>
                <p className="text-slate-500 mt-2"># Prune unused images older than 24 hours:</p>
                <p className="text-cyan-400 font-semibold">$ roustabout clean --stale</p>
                <p className="text-slate-500 mt-2"># Prune all unused images:</p>
                <p className="text-cyan-400 font-semibold">$ roustabout clean --images</p>
              </div>
            </div>
          )}

          {activeTab === 'krm' && (
            <div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                <span className="font-mono text-cyan-400 text-lg font-bold">roustabout krm &lt;id...&gt;</span>
                <span className="text-xs bg-slate-800 text-slate-400 px-2.5 py-1 rounded-md">Alias: KRMdocker</span>
              </div>
              <p className="text-slate-300 text-sm mb-4">
                Combines <code className="text-cyan-300">docker kill</code> and <code className="text-cyan-300">docker rm</code> into a single atomic operation.
                Gracefully suppresses errors if the container is already stopped.
              </p>
              <div className="bg-slate-950 rounded-lg p-4 font-mono text-xs text-slate-200 space-y-2 border border-slate-800/80">
                <p className="text-slate-500"># Force kill and remove a container by name or ID:</p>
                <p className="text-cyan-400 font-semibold">$ roustabout krm faulty_service</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Mid-Page Advertisement Slot */}
      <div className="max-w-5xl mx-auto px-4 w-full">
        <AdBanner slot="1357924680" format="rectangle" />
      </div>

      {/* Legacy Aliases Mapping Table */}
      <section id="aliases" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-3">Legacy Script Aliases</h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            100% backward compatibility is guaranteed. The original standalone scripts continue to work seamlessly.
          </p>
        </div>

        <div className="max-w-4xl mx-auto overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse bg-slate-900/40 border border-slate-800 rounded-xl overflow-hidden">
            <thead className="bg-slate-900 border-b border-slate-800 text-slate-300 font-mono text-xs uppercase tracking-wider">
              <tr>
                <th className="py-3 px-4">Legacy Command</th>
                <th className="py-3 px-4">Modern Equivalent</th>
                <th className="py-3 px-4">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/70 font-mono text-xs text-slate-300">
              <tr className="hover:bg-slate-800/30">
                <td className="py-3 px-4 text-cyan-400 font-semibold">LastDocker</td>
                <td className="py-3 px-4 text-blue-400">roustabout last</td>
                <td className="py-3 px-4 text-slate-400 font-sans">Enters the last spawned container</td>
              </tr>
              <tr className="hover:bg-slate-800/30">
                <td className="py-3 px-4 text-cyan-400 font-semibold">LogDockerLast</td>
                <td className="py-3 px-4 text-blue-400">roustabout logs</td>
                <td className="py-3 px-4 text-slate-400 font-sans">Streams logs from the last spawned container</td>
              </tr>
              <tr className="hover:bg-slate-800/30">
                <td className="py-3 px-4 text-cyan-400 font-semibold">EnterDocker &lt;id&gt;</td>
                <td className="py-3 px-4 text-blue-400">roustabout enter &lt;id&gt;</td>
                <td className="py-3 px-4 text-slate-400 font-sans">Enters container (bash with sh fallback)</td>
              </tr>
              <tr className="hover:bg-slate-800/30">
                <td className="py-3 px-4 text-cyan-400 font-semibold">KillDocker</td>
                <td className="py-3 px-4 text-blue-400">roustabout kill --all</td>
                <td className="py-3 px-4 text-slate-400 font-sans">Safely terminates all running containers</td>
              </tr>
              <tr className="hover:bg-slate-800/30">
                <td className="py-3 px-4 text-cyan-400 font-semibold">KRMdocker &lt;id&gt;</td>
                <td className="py-3 px-4 text-blue-400">roustabout krm &lt;id&gt;</td>
                <td className="py-3 px-4 text-slate-400 font-sans">Kills and removes specified container</td>
              </tr>
              <tr className="hover:bg-slate-800/30">
                <td className="py-3 px-4 text-cyan-400 font-semibold">CleanDocker</td>
                <td className="py-3 px-4 text-blue-400">roustabout clean</td>
                <td className="py-3 px-4 text-slate-400 font-sans">Prunes stopped containers and dangling images</td>
              </tr>
              <tr className="hover:bg-slate-800/30">
                <td className="py-3 px-4 text-cyan-400 font-semibold">CleanOrphanedVolumes</td>
                <td className="py-3 px-4 text-blue-400">roustabout clean-volumes</td>
                <td className="py-3 px-4 text-slate-400 font-sans">Prunes dangling volumes</td>
              </tr>
              <tr className="hover:bg-slate-800/30">
                <td className="py-3 px-4 text-cyan-400 font-semibold">StaleDocker</td>
                <td className="py-3 px-4 text-blue-400">roustabout stale</td>
                <td className="py-3 px-4 text-slate-400 font-sans">Prunes images older than 24 hours</td>
              </tr>
              <tr className="hover:bg-slate-800/30">
                <td className="py-3 px-4 text-cyan-400 font-semibold">createOpenVPNdockercreds</td>
                <td className="py-3 px-4 text-blue-400">roustabout openvpn-creds</td>
                <td className="py-3 px-4 text-slate-400 font-sans">Generates client .ovpn profiles</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Comprehensive Documentation Section */}
      <section id="docs" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Installation &amp; Setup Guide</h2>

            <div className="space-y-6 text-sm text-slate-300">
              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
                <h4 className="font-semibold text-white text-base mb-2">1. One-Line Automated Bootstrap</h4>
                <p className="text-slate-400 mb-3">
                  Downloads the latest release into an isolated temporary directory, runs the build and install suite, and cleans up automatically:
                </p>
                <div className="bg-slate-950 p-3 rounded-lg font-mono text-cyan-300 text-xs select-all">
                  curl -fsSL https://raw.githubusercontent.com/joshuacox/roustabout/master/bootstraproustabout.sh | bash
                </div>
              </div>

              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
                <h4 className="font-semibold text-white text-base mb-2">2. Manual Installation via Make</h4>
                <p className="text-slate-400 mb-3">
                  Clone the repository and install system-wide to <code className="text-cyan-300">/usr/local/bin</code>:
                </p>
                <div className="bg-slate-950 p-3 rounded-lg font-mono text-cyan-300 text-xs space-y-1">
                  <p>git clone https://github.com/joshuacox/roustabout.git</p>
                  <p>cd roustabout</p>
                  <p>sudo make install</p>
                </div>
                <p className="text-slate-400 mt-3">
                  Or install to your local user directory without needing sudo:
                </p>
                <div className="bg-slate-950 p-3 rounded-lg font-mono text-cyan-300 text-xs mt-2">
                  make install PREFIX=$HOME/.local
                </div>
              </div>

              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
                <h4 className="font-semibold text-white text-base mb-2">3. Shell Autocompletion</h4>
                <p className="text-slate-400 mb-3">
                  Roustabout includes a built-in Bash completion script providing tab completion for subcommands, flags, and active container IDs.
                  When installed via <code className="text-cyan-300">make install</code>, it is automatically placed in your system bash-completion directory.
                </p>
                <div className="bg-slate-950 p-3 rounded-lg font-mono text-cyan-300 text-xs">
                  source completions/roustabout.bash
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Advertisement Slot */}
      <div className="max-w-5xl mx-auto px-4 w-full">
        <AdBanner slot="2468135790" format="horizontal" />
      </div>

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-800 bg-slate-950 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Roustabout Project. Licensed under the Apache-2.0 License.
          </div>
          <div className="flex items-center space-x-6">
            <a href="https://github.com/joshuacox/roustabout" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">
              GitHub Repository
            </a>
            <a href="https://github.com/joshuacox/roustabout/blob/master/LICENSE" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">
              Apache License
            </a>
            <a href="https://github.com/joshuacox/roustabout/issues" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">
              Report Issue
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
