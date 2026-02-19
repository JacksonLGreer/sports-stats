"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableHeader, TableBody, TableFooter, TableRow } from "@/components/ui/table"
import { useEffect, useState } from "react";




export default function Home() {
  
  const [activeSport, setActiveSport] = useState("all");
  const [tickerIndex, setTickerIndex] = useState(0);

  // Placeholders
  const LIVE_SCORES = [
  { home: "LAL", away: "BOS", homeScore: 98, awayScore: 101, period: "Q4 2:34", sport: "nba" },
  { home: "NYR", away: "TOR", homeScore: 2, awayScore: 2, period: "3RD 8:11", sport: "nhl" },
  { home: "MCI", away: "ARS", homeScore: 1, awayScore: 0, period: "67'", sport: "soccer" },
];
  const tickerItems = [
    "🏈 Chiefs -3.5 vs Eagles · Super Bowl Sunday",
    "🏀 Lakers trade rumors intensify ahead of deadline",
    "⚽ Champions League draw set for quarterfinals",
    "🎾 Australian Open: Day 8 results",
    "⚾ Spring Training opens across Florida & Arizona",
  ];
  const SPORTS = [
  { id: "all", label: "All Sports", icon: "🏆" },
  { id: "nfl", label: "NFL", icon: "🏈" },
  { id: "nba", label: "NBA", icon: "🏀" },
  { id: "mlb", label: "MLB", icon: "⚾" },
  { id: "nhl", label: "NHL", icon: "🏒" },
];
const HEADLINES = [
  {
    id: 1,
    sport: "nba",
    category: "BREAKING",
    title: "Trade Deadline Shakeup: Star Point Guard Moves to Eastern Conference Contender",
    excerpt:
      "In a blockbuster deal finalized just before the deadline, the league's second-leading scorer has been traded in a package involving three players and two first-round picks.",
    time: "12 min ago",
    isBreaking: true,
    image: "🏀",
    accentColor: "#f97316",
  },
  {
    id: 2,
    sport: "nfl",
    category: "ANALYSIS",
    title: "Super Bowl Preview: Offensive Line Matchups That Will Decide the Championship",
    excerpt:
      "With kickoff approaching, analysts are dissecting the trenches battle that could swing the entire contest — and the numbers heavily favor one side.",
    time: "1 hr ago",
    isBreaking: false,
    image: "🏈",
    accentColor: "#22c55e",
  },
  {
    id: 3,
    sport: "soccer",
    category: "MATCH REPORT",
    title: "El Clásico Ends in Dramatic Stoppage-Time Draw After VAR Controversy",
    excerpt:
      "A contested penalty in the 94th minute sparked furious reactions from both benches as the season's most anticipated rivalry match concluded with a share of the spoils.",
    time: "2 hrs ago",
    isBreaking: false,
    image: "⚽",
    accentColor: "#3b82f6",
  },
  {
    id: 4,
    sport: "mlb",
    category: "ROSTER MOVE",
    title: "MLB Mega-Contract: Franchise Shortstop Inks Record-Setting 12-Year Extension",
    excerpt:
      "The deal eclipses the previous record by $40 million, locking up the two-time All-Star through the 2036 season in a statement of intent from the front office.",
    time: "3 hrs ago",
    isBreaking: false,
    image: "⚾",
    accentColor: "#a855f7",
  },
  {
    id: 5,
    sport: "nhl",
    category: "HIGHLIGHT",
    title: "Rookie Netminder Posts Back-to-Back Shutouts, Ignites Playoff Push",
    excerpt:
      "The 22-year-old undrafted sensation has now gone 147 minutes without allowing a goal as his team climbs within a single point of a wild card spot.",
    time: "5 hrs ago",
    isBreaking: false,
    image: "🏒",
    accentColor: "#06b6d4",
  },
  {
    id: 6,
    sport: "tennis",
    category: "TOURNAMENT",
    title: "Defending Champion Falls in Stunning Second-Round Upset at Grand Slam",
    excerpt:
      "Seeded first and undefeated on the surface this season, the world number one was undone by an unheralded qualifier playing the match of his career.",
    time: "6 hrs ago",
    isBreaking: false,
    image: "🎾",
    accentColor: "#eab308",
  },
];

  // Ticker timer
  useEffect(() => {
    const interval = setInterval(() => {
      setTickerIndex((i) => (i + 1) % tickerItems.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);
  // Headline filter
  const filteredHeadlines =
    activeSport === "all"
      ? HEADLINES
      : HEADLINES.filter((h) => h.sport === activeSport);
  
  return (
    <div
      className="min-h-screen text-white"
      style={{
        background: "linear-gradient(160deg, #0a0a0f 0%, #0f1420 40%, #0a0e1a 100%)",
        fontFamily: "'Georgia', 'Times New Roman', serif",
      }}
    >
      {/* ── TICKER BAR ── */}
      <div
        className="w-full py-1.5 px-4 flex items-center gap-3 text-xs tracking-widest uppercase overflow-hidden"
        style={{ background: "#c8102e", fontFamily: "monospace" }}
      >
        <span className="font-bold shrink-0 text-white/90">LIVE</span>
        <div className="w-px h-3 bg-white/40" />
        <div className="overflow-hidden flex-1">
          <p
            key={tickerIndex}
            className="text-white/85 whitespace-nowrap"
            style={{ animation: "fadeSlideIn 0.4s ease" }}
          >
            {tickerItems[tickerIndex]}
          </p>
        </div>
      </div>

       {/* ── HEADER ── */}
      <header className="relative pt-10 pb-8 px-6 text-center overflow-hidden">
        {/* Decorative grid lines */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(ellipse, rgba(200,16,46,0.18) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="h-px flex-1 max-w-24" style={{ background: "linear-gradient(90deg, transparent, #c8102e)" }} />
            <span className="text-xs tracking-[0.3em] uppercase text-white/40" style={{ fontFamily: "monospace" }}>
              Est. 2026
            </span>
            <div className="h-px flex-1 max-w-24" style={{ background: "linear-gradient(90deg, #c8102e, transparent)" }} />
          </div>

          <h1
            className="text-6xl md:text-8xl font-black uppercase tracking-tight leading-none"
            style={{
              fontFamily: "'Georgia', serif",
              background: "linear-gradient(180deg, #ffffff 0%, #a0a8b8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "none",
              letterSpacing: "-0.02em",
            }}
          >
            Sports
            <span style={{ WebkitTextFillColor: "#c8102e" }}>Stats</span>
          </h1>

          <p
            className="mt-2 text-sm tracking-[0.4em] uppercase text-white/40"
            style={{ fontFamily: "monospace" }}
          >
            Stats · Scores · Stories
          </p>
        </div>
        {/* ── SPORT SELECTOR ── */}
        <section className="px-6 py-6">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs tracking-[0.35em] uppercase text-white/30 mb-4 text-center" style={{ fontFamily: "monospace" }}>
              Browse by Sport
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {SPORTS.map((sport) => {
                const isActive = activeSport === sport.id;
                return (
                  <button
                    key={sport.id}
                    onClick={() => setActiveSport(sport.id)}
                    className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer"
                    style={{
                      fontFamily: "'Georgia', serif",
                      background: isActive
                        ? "#c8102e"
                        : "rgba(255,255,255,0.06)",
                      border: isActive
                        ? "1px solid #c8102e"
                        : "1px solid rgba(255,255,255,0.1)",
                      color: isActive ? "#ffffff" : "rgba(255,255,255,0.6)",
                      transform: isActive ? "translateY(-2px)" : "none",
                      boxShadow: isActive ? "0 4px 20px rgba(200,16,46,0.4)" : "none",
                    }}
                  >
                    <span>{sport.icon}</span>
                    <span>{sport.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>
      </header>

        {/* Live scores strip */}
        <div className="relative z-10 mt-8 flex flex-wrap justify-center gap-3">
          {LIVE_SCORES.map((g, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-4 py-2 rounded text-xs cursor-pointer hover:brightness-110 transition-all"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", fontFamily: "monospace" }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#22c55e" }} />
              <span className="font-bold text-white/90">{g.home}</span>
              <span className="text-white/40">{g.homeScore}</span>
              <span className="text-white/30">–</span>
              <span className="text-white/40">{g.awayScore}</span>
              <span className="font-bold text-white/90">{g.away}</span>
              <span className="text-white/30 ml-1">{g.period}</span>
            </div>
          ))}
        </div>
 
 {/* ── HEADLINES ────────────────────────────────────── */}
      <main className="px-6 py-8 max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <h2
              className="text-2xl font-black uppercase tracking-tight"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              {activeSport === "all" ? "Top Headlines" : SPORTS.find((s) => s.id === activeSport)?.label + " News"}
            </h2>
            <Badge
              className="text-xs font-mono"
              style={{ background: "rgba(200,16,46,0.2)", border: "1px solid rgba(200,16,46,0.4)", color: "#f87171" }}
            >
              {filteredHeadlines.length} stories
            </Badge>
          </div>
          <span className="text-xs text-white/30 font-mono tracking-widest uppercase">
            Updated live
          </span>
        </div>

        {filteredHeadlines.length === 0 ? (
          <div className="text-center py-24 text-white/30 font-mono text-sm">
            No headlines for this sport yet. Check back soon.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredHeadlines.map((headline, idx) => (
              <article
                key={headline.id}
                className={`group relative rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 ${
                  idx === 0 ? "md:col-span-2 lg:col-span-2" : ""
                }`}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
                }}
              >
                {/* Accent top bar */}
                <div
                  className="h-0.5 w-full"
                  style={{ background: headline.accentColor }}
                />

                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at top left, ${headline.accentColor}12 0%, transparent 60%)`,
                  }}
                />

                <div className={`relative p-5 ${idx === 0 ? "p-6" : ""}`}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">{headline.image}</span>
                    <Badge
                      className="text-[10px] tracking-widest uppercase font-mono px-2"
                      style={{
                        background: headline.isBreaking ? "rgba(200,16,46,0.25)" : "rgba(255,255,255,0.08)",
                        border: `1px solid ${headline.isBreaking ? "rgba(200,16,46,0.5)" : "rgba(255,255,255,0.15)"}`,
                        color: headline.isBreaking ? "#fca5a5" : "rgba(255,255,255,0.5)",
                      }}
                    >
                      {headline.isBreaking && <span className="mr-1 animate-pulse">●</span>}
                      {headline.category}
                    </Badge>
                  </div>

                  <h3
                    className={`font-bold leading-tight mb-2 group-hover:text-white transition-colors ${
                      idx === 0 ? "text-xl" : "text-base"
                    }`}
                    style={{
                      fontFamily: "'Georgia', serif",
                      color: "rgba(255,255,255,0.9)",
                    }}
                  >
                    {headline.title}
                  </h3>

                  <p
                    className="text-sm leading-relaxed mb-4"
                    style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'Georgia', serif" }}
                  >
                    {headline.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span
                      className="text-xs text-white/30 font-mono tracking-wider"
                    >
                      {headline.time}
                    </span>
                    <span
                      className="text-xs font-mono tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ color: headline.accentColor }}
                    >
                      Read more →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Load more */}
        <div className="flex justify-center mt-10">
          <Button
            variant="outline"
            className="px-8 py-2 text-sm tracking-widest uppercase font-mono cursor-pointer hover:bg-white/5 transition-colors"
            style={{
              border: "1px solid rgba(255,255,255,0.15)",
              color: "rgba(255,255,255,0.5)",
              background: "transparent",
            }}
          >
            Load More Stories
          </Button>
        </div>
      </main>

      {/* ── FOOTER ───────────────────────────────────────── */}
      <footer
        className="mt-12 py-6 px-6 text-center text-xs text-white/20 font-mono tracking-widest uppercase border-t"
        style={{ borderColor: "rgba(255,255,255,0.07)" }}
      >
        © 2026 SportsStats · All stats and scores are for demonstration purposes
      </footer>

      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}