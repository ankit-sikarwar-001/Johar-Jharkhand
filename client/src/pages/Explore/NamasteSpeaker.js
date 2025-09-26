import { useState } from "react";

export default function NamasteSpeaker() {
  const greetings = [
    { lang: "Hindi", text: "नमस्ते", voiceLang: "hi-IN" },
    { lang: "Bengali", text: "নমস্কার", voiceLang: "bn-IN" },
    { lang: "Punjabi", text: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ", voiceLang: "pa-IN" },
    { lang: "Gujarati", text: "નમસ્તે", voiceLang: "gu-IN" },
    { lang: "Marathi", text: "नमस्कार", voiceLang: "mr-IN" },
    { lang: "Tamil", text: "வணக்கம்", voiceLang: "ta-IN" },
    { lang: "Telugu", text: "నమస్కారం", voiceLang: "te-IN" },
    { lang: "Kannada", text: "ನಮಸ್ಕಾರ", voiceLang: "kn-IN" },
    { lang: "Malayalam", text: "നമസ്കാരം", voiceLang: "ml-IN" },
    { lang: "Odia", text: "ନମସ୍କାର", voiceLang: "or-IN" },
    { lang: "Urdu", text: "السلام علیکم", voiceLang: "ur-IN" },
    { lang: "Assamese", text: "নমস্কাৰ", voiceLang: "as-IN" },
  ];

  const [current, setCurrent] = useState(null);

  const speak = (text, voiceLang) => {
    const msg = new SpeechSynthesisUtterance(text);
    msg.lang = voiceLang;
    window.speechSynthesis.speak(msg);
  };
  const letters = [
    "अ",
    "আ",
    "ಅ",
    "ക",
    "ల",
    "પ",
    "జ",
    "ਖ",
    "സ",
    "த",
    "મ",
    "ಬ",
    "ವ",
    "হ",
    "ද",
    "మ",
    "చ",
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-r from-indigo-300 to-white">
      {/* Background */}
      <div className="absolute inset-0 grid grid-cols-6 gap-6 opacity-20 text-5xl font-bold select-none">
        {Array.from({ length: 200 }).map((_, i) => (
          <span
            key={i}
            className="text-gray-700"
            style={{
              color: `hsl(${Math.random() * 360}, 50%, 40%)`, // random color
            }}
          >
            {letters[Math.floor(Math.random() * letters.length)]}
          </span>
        ))}
      </div>

      {/* Foreground Content */}
      <h1 className="relative text-4xl md:text-5xl mb-5 font-extrabold text-gray-800 animate-bounce">
        Multilingual Hello Namaste 🎶
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
        {greetings.map((greet, index) => (
          <div
            key={index}
            onClick={() => {
              setCurrent(greet.text);
              speak(greet.text, greet.voiceLang);
            }}
            className="cursor-pointer bg-gray-200 rounded-2xl shadow-xl p-6 text-center transform hover:scale-110 transition-transform duration-300"
          >
            <p className="text-2xl font-bold">{greet.text}</p>
            <p className="text-sm opacity-80 mt-2">{greet.lang}</p>
          </div>
        ))}
      </div>

      {current && (
        <p className="mt-8 text-lg font-semibold animate-pulse">
          🔊 Speaking: <span className="italic">{current}</span>
        </p>
      )}
    </div>
  );
}
