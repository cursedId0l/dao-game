"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { scenes } from "@/lib/scenes";
import type { LessonCard } from "@/lib/types";

const SCENE_PROGRESS: Record<string, number> = {
  // Prologue
  intro_1: 2,
  intro_2: 4,
  intro_3: 6,
  intro_4: 8,
  intro_5: 10,
  intro_6: 12,
  intro_7: 14,
  intro_choice: 16,
  intro_more_1: 16,
  intro_more_2: 18,
  // Act 1
  act1_start: 20,
  act1_humpy_1: 22,
  act1_humpy_2: 24,
  act1_delegation_lesson: 26,
  act1_humpy_post_delegation: 28,
  act1_quorum_lesson: 30,
  act1_humpy_3: 32,
  act1_roi_explain: 34,
  act2_anticapture: 35,
  act1_strategy_choice: 36,
  buy_1: 37,
  buy_2: 38,
  delegate_1: 37,
  delegate_2: 38,
  delegate_3: 39,
  act1_merge: 39,
  act1_power_secured: 40,
  // Act 2
  act2_start: 42,
  act2_humpy_1: 44,
  act2_humpy_2: 46,
  act2_humpy_3: 48,
  act2_draft_choice: 50,
  draft_param: 51,
  draft_upgrade_intro: 51,
  draft_upgrade: 52,
  act2_forum_choice: 56,
  forum_genuine: 58,
  forum_influencer: 58,
  forum_merge: 60,
  act2_you_submit: 61,
  act2_submitted: 62,
  act2_timelock_lesson: 64,
  act2_humpy_countdown: 66,
  // Act 3
  act3_start: 68,
  act3_goldenboyz_appears: 70,
  act3_humpy_reassure: 72,
  act3_patrick_appears: 73,
  act3_humpy_patrick: 74,
  act3_goldenboyz_2: 75,
  act3_community_heat: 76,
  act3_humpy_4: 77,
  act3_vote_passing: 78,
  act3_timelock_ticking: 79,
  act3_guardian_lesson: 80,
  act3_humpy_quiet: 81,
  // Act 4
  act4_start: 82,
  act4_forum_post: 83,
  act4_narrator_realization: 84,
  act4_telegram_ping: 85,
  act4_humpy_telegram: 86,
  act4_humpy_explains_1: 87,
  act4_humpy_explains_2: 88,
  act4_humpy_explains_3: 89,
  act4_humpy_explains_4: 90,
  act4_final_choice: 91,
  // Epilogue / endings
  fight_1: 92,
  fight_2: 94,
  fight_5: 96,
  fight_6: 97,
  accept_1: 92,
  accept_2: 94,
  accept_3: 96,
  ending_good: 98,
  ending_bad: 98,
  credits: 99,
  game_end: 100,
};

const CHAR = {
  humpy: {
    name: "HUMPY",
    emoji: "🐋",
    color: "text-amber-400",
    border: "border-amber-500/40",
    bg: "bg-amber-500/10",
    shadow: "0 0 60px rgba(245,158,11,0.15)",
  },
  goldenboyz: {
    name: "GOLDENBOYZ69",
    emoji: "👑",
    color: "text-yellow-300",
    border: "border-yellow-400/40",
    bg: "bg-yellow-400/10",
    shadow: "0 0 60px rgba(250,204,21,0.15)",
  },
  patrick: {
    name: "PATRICK COLLINS",
    emoji: "🐸",
    color: "text-blue-400",
    border: "border-blue-500/40",
    bg: "bg-blue-500/10",
    shadow: "0 0 60px rgba(59,130,246,0.15)",
  },
  guardian: {
    name: "GUARDIAN",
    emoji: "🛡️",
    color: "text-purple-400",
    border: "border-purple-500/40",
    bg: "bg-purple-500/10",
    shadow: "0 0 60px rgba(168,85,247,0.15)",
  },
  narrator: {
    name: "",
    emoji: "",
    color: "text-gray-400",
    border: "border-gray-700",
    bg: "bg-gray-900/50",
    shadow: "",
  },
  system: {
    name: "SYSTEM",
    emoji: "⬡",
    color: "text-emerald-400",
    border: "border-emerald-500/40",
    bg: "bg-emerald-500/10",
    shadow: "0 0 60px rgba(16,185,129,0.15)",
  },
} as const;

export default function GameEngine() {
  const [sceneId, setSceneId] = useState("intro_1");
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showChoices, setShowChoices] = useState(false);
  const [showLesson, setShowLesson] = useState(false);
  const [lesson, setLesson] = useState<LessonCard | null>(null);
  const [actOverlay, setActOverlay] = useState<string | null>(null);
  const [initialized, setInitialized] = useState(false);
  const [history, setHistory] = useState<string[]>([]);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const sceneIdRef = useRef(sceneId);
  const isTypingRef = useRef(isTyping);
  const showChoicesRef = useRef(showChoices);
  const showLessonRef = useRef(showLesson);
  const actOverlayRef = useRef(actOverlay);
  const historyRef = useRef(history);
  const skipHistoryRef = useRef(false);

  sceneIdRef.current = sceneId;
  isTypingRef.current = isTyping;
  showChoicesRef.current = showChoices;
  showLessonRef.current = showLesson;
  actOverlayRef.current = actOverlay;
  historyRef.current = history;

  const startTyping = useCallback((text: string) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setDisplayedText("");
    setShowChoices(false);
    setIsTyping(true);
    let i = 0;
    intervalRef.current = setInterval(() => {
      i++;
      setDisplayedText(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(intervalRef.current!);
        setIsTyping(false);
        setShowChoices(true);
      }
    }, 22);
  }, []);

  const goToScene = useCallback(
    (id: string) => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      const scene = scenes[id];
      if (!scene) return;

      if (!skipHistoryRef.current) {
        setHistory((prev) => [...prev, sceneIdRef.current]);
      }
      skipHistoryRef.current = false;

      setSceneId(id);
      setDisplayedText("");
      setShowChoices(false);
      setShowLesson(false);

      const enterScene = () => {
        if (scene.lesson) {
          setLesson(scene.lesson);
          setShowLesson(true);
          setIsTyping(false);
        } else {
          startTyping(scene.dialogue);
        }
      };

      if (scene.actTitle) {
        setActOverlay(scene.actTitle);
        setTimeout(() => {
          setActOverlay(null);
          enterScene();
        }, 2600);
      } else {
        enterScene();
      }
    },
    [startTyping],
  );

  useEffect(() => {
    if (!initialized) {
      setInitialized(true);
      goToScene("intro_1");
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleScreenClick = useCallback(() => {
    if (actOverlayRef.current || showLessonRef.current) return;
    const scene = scenes[sceneIdRef.current];
    if (!scene) return;

    if (isTypingRef.current) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setDisplayedText(scene.dialogue);
      setIsTyping(false);
      setShowChoices(true);
      return;
    }

    if (showChoicesRef.current && !scene.choices && scene.next) {
      goToScene(scene.next);
    }
  }, [goToScene]);

  const dismissLesson = useCallback(() => {
    setShowLesson(false);
    const scene = scenes[sceneIdRef.current];
    if (scene?.next) goToScene(scene.next);
  }, [goToScene]);

  const goBack = useCallback(() => {
    if (historyRef.current.length === 0) return;
    const prevId = historyRef.current[historyRef.current.length - 1];
    setHistory((prev) => prev.slice(0, -1));
    skipHistoryRef.current = true;
    goToScene(prevId);
  }, [goToScene]);

  // Keyboard: Enter advances, number keys select choices, Backspace goes back
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (actOverlayRef.current) return;

      // Number keys select choices
      const num = parseInt(e.key);
      if (!isNaN(num) && num >= 1 && num <= 4) {
        if (showLessonRef.current || isTypingRef.current) return;
        const scene = scenes[sceneIdRef.current];
        if (!scene?.choices) return;
        const choice = scene.choices[num - 1];
        if (!choice) return;
        goToScene(choice.next);
        return;
      }

      if (e.key === "Backspace") {
        goBack();
        return;
      }

      if (e.key !== "Enter") return;

      if (showLessonRef.current) {
        setShowLesson(false);
        const scene = scenes[sceneIdRef.current];
        if (scene?.next) goToScene(scene.next);
        return;
      }

      const scene = scenes[sceneIdRef.current];
      if (!scene) return;

      if (isTypingRef.current) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setDisplayedText(scene.dialogue);
        setIsTyping(false);
        setShowChoices(true);
        return;
      }

      if (showChoicesRef.current && !scene.choices && scene.next) {
        goToScene(scene.next);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToScene, goBack]);

  const scene = scenes[sceneId];
  if (!scene) return null;

  const char = CHAR[scene.character ?? "narrator"];
  const progress = SCENE_PROGRESS[sceneId] ?? 0;

  return (
    <div
      className="fixed inset-0 bg-[#070a0f] select-none overflow-hidden"
      style={{
        backgroundImage: [
          "linear-gradient(rgba(0,255,136,0.025) 1px, transparent 1px)",
          "linear-gradient(90deg, rgba(0,255,136,0.025) 1px, transparent 1px)",
        ].join(","),
        backgroundSize: "40px 40px",
      }}
      onClick={handleScreenClick}
    >
      {/* ── Header / Progress Bar ── */}
      <div className="absolute inset-x-0 top-0 h-10 bg-black/60 border-b border-emerald-500/15 flex items-center px-5 gap-4 z-10">
        <span className="text-emerald-500/50 text-[10px] font-mono tracking-[0.3em] shrink-0">
          DAO GAME
        </span>
        <div className="flex-1 h-1 bg-white/5 rounded-full overflow-hidden">
          <div
            className="h-full bg-emerald-500/60 rounded-full transition-all duration-700"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="text-emerald-500/40 text-[10px] font-mono shrink-0 tabular-nums">
          {progress}%
        </span>
      </div>

      {/* ── Portrait ── */}
      {char.emoji && (
        <div
          className="absolute inset-x-0 flex items-center justify-center"
          style={{ top: "40px", bottom: "38%" }}
        >
          <div
            className={`text-7xl sm:text-8xl md:text-9xl p-5 rounded-2xl border ${char.border} ${char.bg}`}
            style={{ boxShadow: char.shadow }}
          >
            {char.emoji}
          </div>
        </div>
      )}

      {/* ── Choices (float above dialogue box) ── */}
      {showChoices && scene.choices && (
        <div
          className="absolute inset-x-0 flex flex-col items-center gap-2 px-4 pb-2"
          style={{ bottom: "38%" }}
          onClick={(e) => e.stopPropagation()}
        >
          {scene.choices.map((choice, i) => (
            <button
              key={i}
              onClick={() => goToScene(choice.next)}
              className={`
                w-full max-w-2xl text-left px-5 py-3 rounded-lg font-mono text-sm
                bg-black/70 border border-emerald-500/25
                text-emerald-300 hover:text-emerald-200
                hover:border-emerald-400/60 hover:bg-emerald-500/10
                transition-all duration-150
              `}
            >
              <span className="text-emerald-500/40 mr-2 select-none">
                [{i + 1}]
              </span>
              {choice.label}
              {choice.hint && (
                <div className="text-emerald-600/60 text-xs mt-1 ml-6">
                  {choice.hint}
                </div>
              )}
            </button>
          ))}
        </div>
      )}

      {/* ── Dialogue Box ── */}
      <div
        className="absolute inset-x-0 bottom-0 bg-black/88 border-t border-emerald-500/15 backdrop-blur-sm cursor-pointer"
        style={{ height: "38%" }}
      >
        {char.name && (
          <div className="absolute -top-[22px] left-6">
            <span
              className={`px-3 py-0.5 text-xs font-mono tracking-widest ${char.color} bg-black border ${char.border} rounded-sm`}
            >
              {char.name}
            </span>
          </div>
        )}

        <div className="h-full px-6 pt-5 pb-8 overflow-hidden">
          <p className="font-mono text-sm md:text-[15px] text-gray-200 whitespace-pre-line leading-relaxed">
            {displayedText}
            {isTyping && (
              <span className="animate-[pulse_0.8s_ease-in-out_infinite] text-emerald-400">
                █
              </span>
            )}
          </p>
        </div>

        {!isTyping && !scene.choices && scene.next && (
          <div className="absolute bottom-5 right-6 text-emerald-400 text-sm font-mono animate-pulse tracking-widest">
            ▼ ENTER TO CONTINUE&nbsp;&nbsp;·&nbsp;&nbsp;[⌫] BACK
          </div>
        )}
      </div>

      {/* ── Lesson Card Overlay ── */}
      {showLesson && lesson && (
        <div
          className="fixed inset-0 bg-black/92 flex items-center justify-center z-50 p-4"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="w-full max-w-xl bg-[#0a0f0a] border border-emerald-500/35 rounded-xl p-7 shadow-2xl max-h-[88vh] flex flex-col">
            <div className="text-emerald-500/50 text-[10px] font-mono tracking-[0.3em] mb-2 shrink-0">
              GOVERNANCE CONCEPT
            </div>
            <h2 className="text-emerald-400 text-xl font-mono font-bold mb-4 leading-snug shrink-0">
              {lesson.term}
            </h2>
            <div className="overflow-y-auto flex-1 mb-4 pr-1">
              <p className="text-gray-300 font-mono text-sm leading-relaxed whitespace-pre-line">
                {lesson.definition}
              </p>
              {lesson.example && (
                <div className="bg-black/60 border border-emerald-500/15 rounded-lg p-4 mt-4">
                  <div className="text-emerald-500/50 text-[10px] font-mono tracking-[0.2em] mb-2">
                    EXAMPLE
                  </div>
                  <p className="text-emerald-300/75 text-xs font-mono leading-relaxed whitespace-pre-line">
                    {lesson.example}
                  </p>
                </div>
              )}
              {lesson.link && (
                <a
                  href={lesson.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-emerald-400/70 hover:text-emerald-400 font-mono text-sm underline underline-offset-2 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  learn more about the AntiCapture framework →
                </a>
              )}
            </div>
            <button
              onClick={dismissLesson}
              className="px-5 py-2 bg-emerald-500/10 border border-emerald-500/35 text-emerald-400 font-mono text-sm rounded-lg hover:bg-emerald-500/20 hover:border-emerald-500/60 transition-all shrink-0"
            >
              GOT IT → (or press Enter)
            </button>
          </div>
        </div>
      )}

      {/* ── Act Transition Overlay ── */}
      {actOverlay && (
        <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
          <div className="text-center">
            <div className="text-emerald-500/40 text-lg font-mono tracking-[0.5em] mb-6">
              DAO GAME
            </div>
            <div className="text-emerald-400 text-5xl sm:text-6xl md:text-7xl font-mono font-bold tracking-tight">
              {actOverlay}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
