import { useState } from 'react';

export default function BirthdaySurprise() {
  const [currentSection, setCurrentSection] = useState(0);
  const [timelineModal, setTimelineModal] = useState(null);
  const [celebration, setCelebration] = useState(null);

  const createConfetti = () => {
    const colors = ['#FF6B9D', '#FFD9E8', '#87CEEB', '#FFB3D9', '#FF8FA3', '#FFB3D9'];
    for (let i = 0; i < 80; i++) {
      const confetti = document.createElement('div');
      confetti.style.position = 'fixed';
      confetti.style.width = '10px';
      confetti.style.height = '10px';
      confetti.style.left = Math.random() * window.innerWidth + 'px';
      confetti.style.top = '-10px';
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.borderRadius = '50%';
      confetti.style.pointerEvents = 'none';
      confetti.style.zIndex = '9999';
      confetti.style.animation = `confetti-fall ${2 + Math.random() * 1}s ease-in forwards`;
      confetti.style.animationDelay = Math.random() * 0.5 + 's';
      document.body.appendChild(confetti);
      setTimeout(() => confetti.remove(), 4000);
    }
  };

  const timelineData = [
    { photo: "photo12.jpeg", date: "01.01.2026", memory: "Our first photo" },
    { photo: "photo13.jpeg", date: "5 February", memory: "The day you graduated, we went to a weird restaurant and you paid. You know I never say no to free food, and the duck burger was delicious" },
    { photo: "photo14.jpeg", date: "14 April", memory: "How can someone sleep while looking at their phone, I don't know" },
    { photo: "photo15.jpeg", date: "21 February", memory: "We went on a long walk and protected our neighborhood from bad people haha" },
    { photo: "photo16.jpeg", date: "2 March", memory: "I put you on the princess chair and took a photo, and you posed like a real princess" },
    { photo: "photo17.jpeg", date: "4 April", memory: "Our first Easter together and you're holding our breakfast while I, as always, was taking photos" },
    { photo: "photo18.jpeg", date: "10 April", memory: "A photo looking 100% drunk and yes, I'm not smiling again" },
    { photo: "photo19.jpeg", date: "16 April", memory: "Our first Turkish breakfast together and when you became a simit monster" },
    { photo: "photo20.jpeg", date: "2 February", memory: "I think I woke you up from sleep, you didn't smile genuinely at all" },
    { photo: "photo21.jpeg", date: "22 February", memory: "McDonald's monster" },
    { photo: "photo22.jpeg", date: "5 April", memory: "A cool photo left from Easter, we'll show our future kids how perfect we looked together haha" },
    { photo: "photo23.jpeg", date: "18 April", memory: "Our first wedding, before our real one haha" }
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [quiz2Tab, setQuiz2Tab] = useState('gift1');
  const [quiz2Answers, setQuiz2Answers] = useState({});
  const [giftUnlocked, setGiftUnlocked] = useState({ gift1: false, gift2: false });

  // QUIZ 1 DATA
  const quiz1Data = [
    {
      id: 1,
      question: "Who is more sleepy?",
      a: "Tosia",
      b: "Baturay",
      correct: "a",
      correctMessage: "Yes! Tosia sleeps way more than Baturay 😴",
      wrongMessage: "Wrong! Tosia is the sleepy one, not Baturay 😅",
      photo: "photo2.jpeg"
    },
    {
      id: 2,
      question: "Who takes up the most space in bed while sleeping?",
      a: "Tosia",
      b: "Baturay",
      correct: "a",
      correctMessage: "Correct! Tosia takes up the whole bed 😂",
      wrongMessage: "Wrong! Baturay sleeps quietly, Tosia moves more",
      photo: "photo3.jpeg"
    },
    {
      id: 3,
      question: "Who is better at computer games?",
      a: "Tosia",
      b: "Baturay",
      correct: "a",
      correctMessage: "Yes! Tosia is the gaming queen 👑",
      wrongMessage: "Wrong! Tosia beats Baturay in every game 🎮",
      photo: "photo4.jpeg"
    },
    {
      id: 4,
      question: "Who is a plain bread monster?",
      a: "Tosia",
      b: "Baturay",
      correct: "a",
      correctMessage: "Correct! Tosia's love for bread knows no bounds 🍞",
      wrongMessage: "Wrong! Tosia can't live without bread, Baturay prefers meat",
      photo: "photo5.jpeg"
    },
    {
      id: 5,
      question: "Who is a kebab monster?",
      a: "Tosia",
      b: "Baturay",
      correct: "b",
      correctMessage: "Yes! Baturay is a huge kebab fan 🍖",
      wrongMessage: "Wrong! Baturay's eyes light up when eating kebab",
      photo: "photo6.jpeg"
    },
    {
      id: 6,
      question: "Who always takes absurd photos?",
      a: "Tosia",
      b: "Baturay",
      correct: "b",
      correctMessage: "Correct! Baturay takes all kinds of silly photos 📸",
      wrongMessage: "Wrong! Baturay goes crazy in front of the camera 😂",
      photo: "photo7.jpeg"
    },
    {
      id: 7,
      question: "Who is a simit monster?",
      a: "Tosia",
      b: "Baturay",
      correct: "a",
      correctMessage: "Yes! Tosia's love for simit is endless 🥯",
      wrongMessage: "Wrong! Tosia wants simit every morning, she wins here",
      photo: "photo8.jpeg"
    },
    {
      id: 8,
      question: "Who is tea monster?",
      a: "Tosia",
      b: "Baturay",
      correct: "b",
      correctMessage: "Correct! Baturay replaced water with tea 🍵",
      wrongMessage: "Wrong! Baturay wants tea every minute, it's like water to him",
      photo: "photo9.jpeg"
    },
    {
      id: 9,
      question: "Who is more romantic?",
      a: "Tosia",
      b: "Baturay",
      correct: "b",
      correctMessage: "Yes! Baturay's romantic side melts Tosia every day 💕",
      wrongMessage: "Wrong! Baturay sings, writes poems, says romantic things",
      photo: "photo10.jpeg"
    },
    {
      id: 10,
      question: "Who can never hold themselves back from laughing in situations where they're not supposed to?",
      a: "Tosia",
      b: "Baturay",
      correct: "b",
      correctMessage: "Correct! Baturay can't hold his laughter even in serious moments 😂",
      wrongMessage: "Wrong! Baturay makes even serious moments funny, loses control",
      photo: "photo1.jpeg"
    },
    {
      id: 11,
      question: "Who never smile at the photos?",
      a: "Tosia",
      b: "Baturay",
      correct: "b",
      correctMessage: "Correct! Baturay keeps his seriousness in photos 😂",
      wrongMessage: "Wrong! Baturay stays serious in photos, Tosia smiles more",
      photo: "photo11.jpeg"
    }
  ];

  // QUIZ 2 DATA
  const quiz2Data = {
    gift1: [
      {
        id: 1,
        question: "What is Baturay's favorite Polish word",
        a: "Kurwa",
        b: "Dzien dobry",
        c: "Chema",
        d: "Daway",
        correct: "a"
      },
      {
        id: 2,
        question: "What is Baturay's favorite thing",
        a: "Back kisses",
        b: "Hair stroking",
        c: "Massage",
        d: "McDonald's",
        correct: "c"
      },
      {
        id: 3,
        question: "What is Baturay's favorite drink",
        a: "Ice tea",
        b: "Cola",
        c: "Sprite",
        d: "All of them",
        correct: "a"
      },
      {
        id: 4,
        question: "What annoys Baturay the most",
        a: "Getting errors while coding",
        b: "Being exposed to too much Polish",
        c: "Being woken up from sleep",
        d: "Being sick",
        correct: "c"
      },
      {
        id: 5,
        question: "What is the topic Tosia warns Baturay about the most",
        a: "Farting",
        b: "Biting nails",
        c: "Taking off socks inside out",
        d: "Not cuddling while sleeping",
        correct: "b"
      },
      {
        id: 6,
        question: "If we get a cat or dog, what will its name be",
        a: "Tom",
        b: "Batosia",
        c: "Dexter",
        d: "Mehmet",
        correct: "c"
      },
      {
        id: 7,
        question: "Who is funnier",
        a: "Baturay",
        b: "Baturay",
        c: "Baturay",
        d: "All of them",
        correct: "d"
      }
    ],
    gift2: [
      {
        id: 1,
        question: "How does Baturay annoy Tosia",
        a: "Attacks her with his feet",
        b: "Tickles her",
        c: "Farts",
        d: "Messes with her hair",
        correct: "b"
      },
      {
        id: 2,
        question: "What does Tosia want most from Baturay",
        a: "Food",
        b: "Ring",
        c: "Flowers",
        d: "All of them",
        correct: "d"
      },
      {
        id: 3,
        question: "What does Baturay call Tosia the most",
        a: "Babe",
        b: "Tosia",
        c: "Baby",
        d: "My dear",
        correct: "c"
      },
      {
        id: 4,
        question: "What name did Baturay give to Axel",
        a: "Dexter",
        b: "Mehmet",
        c: "Batu",
        d: "Axhel",
        correct: "b"
      },
      {
        id: 5,
        question: "What color was the first flower Baturay gave to Tosia",
        a: "Blue",
        b: "Pink",
        c: "Red",
        d: "Green",
        correct: "c"
      },
      {
        id: 6,
        question: "Who is more autistic",
        a: "Baturay",
        b: "Tosia",
        c: "Both of them",
        d: "None",
        correct: "c"
      },
      {
        id: 7,
        question: "What is Baturay's biggest struggle",
        a: "Choosing flowers for Tosia",
        b: "Deciding what to eat today",
        c: "Putting clothes on properly",
        d: "Choosing a ring",
        correct: "d"
      },
      {
        id: 8,
        question: "How does Tosia pronounce Baturay's name",
        a: "Beaturayy",
        b: "Batiray",
        c: "Baturrray",
        d: "Batu",
        correct: "d"
      }
    ]
  };

  const sections = [
    { title: "⏰ Timeline", id: 1, color: "#FFE5EC", music: "🎵 Motive Hanımefendi", spotifyId: "6jQHBTdXEUx7LDjrkEiCax" },
    { title: "📸 Quiz 1", id: 2, color: "#E5F3FF", music: "🎵 LVBEL C5 - Coook Pardon", spotifyId: "0P45YtqtAT6AkNDDX1lySE" },
    { title: "🎁 Quiz 2", id: 3, color: "#FFF5E5", music: "🎵 LVBEL C5 - Tak Tak Tak", spotifyId: "28TeosAOQZvsftj5ZxucaX" },
    { title: "💌 My Letter", id: 4, color: "#F0E5FF", music: "🎵 Mac Miller - Congratulations", spotifyId: "1OubIZ0ARYCUq5kceYUQiO" },
    { title: "💍 Marriage Hint", id: 5, color: "#E5FFEC", music: null, spotifyId: null }
  ];

  const handleQuiz1Answer = (answer) => {
    setIsCorrect(answer === quiz1Data[currentQuestion].correct);
    setAnswered(true);
  };

  const handleQuiz1Next = () => {
    if (currentQuestion < quiz1Data.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswered(false);
      setIsCorrect(null);
    } else {
      alert('Quiz 1 finished! 🎉');
      setCurrentQuestion(0);
      setAnswered(false);
    }
  };

  const handleQuiz2Answer = (questionId, answer) => {
    setQuiz2Answers(prev => ({ ...prev, [`${quiz2Tab}_${questionId}`]: answer }));
  };

  const checkQuiz2Score = (tab) => {
    const questions = quiz2Data[tab];
    const correct = questions.filter(q => quiz2Answers[`${tab}_${q.id}`] === q.correct).length;
    return correct >= 3 ? true : false;
  };

  const checkQuiz2Perfect = (tab) => {
    const questions = quiz2Data[tab];
    const correct = questions.filter(q => quiz2Answers[`${tab}_${q.id}`] === q.correct).length;
    return correct === questions.length ? true : false;
  };

  const handleQuiz2TabChange = (tab) => {
    setQuiz2Tab(tab);
    const unlocked = checkQuiz2Score(tab);
    setGiftUnlocked(prev => ({ ...prev, [tab]: unlocked }));
    
    if (checkQuiz2Perfect(tab)) {
      createConfetti();
      setCelebration({
        tab: tab,
        message: tab === 'gift1' ? 'Congratulations Baby! You unlocked Gift 1! 🎁' : 'Congratulations Baby! You unlocked Gift 2! 💎'
      });
      setTimeout(() => setCelebration(null), 4000);
    }
  };

  const current1 = quiz1Data[currentQuestion];

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #FFB3D9 0%, #FFD9E8 100%)", padding: "30px 20px", fontFamily: "'Segoe UI', 'Roboto', sans-serif" }}>
      <style>{`
        @keyframes softFadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes softBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes confetti-fall {
          0% { 
            transform: translateY(-10px) rotate(0deg); 
            opacity: 1; 
          }
          90% { 
            opacity: 1; 
          }
          100% { 
            transform: translateY(window.innerHeight) rotate(720deg); 
            opacity: 0; 
          }
        }
        @keyframes confetti-spin {
          0% { transform: rotateZ(0deg); }
          100% { transform: rotateZ(360deg); }
        }
        .confetti {
          position: fixed;
          width: 10px;
          height: 10px;
          pointer-events: none;
          animation: confetti-fall 3s ease-in forwards;
        }
        * { transition: all 0.3s ease; }
      `}</style>

      <div style={{ maxWidth: "750px", margin: "0 auto" }}>
        
        {/* HEADER */}
        <div style={{ textAlign: "center", marginBottom: "40px", animation: "softFadeIn 0.6s ease" }}>
          <h1 style={{ fontSize: "32px", color: "#FF6B9D", margin: "0 0 10px 0", fontWeight: "700" }}>💖 Happy Birthday Tosia! 💖</h1>
          <p style={{ fontSize: "16px", color: "#FF8FA3", margin: "0", fontWeight: "300" }}>A special surprise for you...</p>
        </div>

        {/* SECTIONS NAVIGATION - SOFT BUTTONS */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "40px" }}>
          {sections.map((sec, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSection(idx)}
              style={{
                padding: "16px 20px",
                borderRadius: "16px",
                border: "none",
                background: currentSection === idx ? "linear-gradient(135deg, #FF6B9D 0%, #FF8FA3 100%)" : sec.color,
                color: currentSection === idx ? "white" : "#FF6B9D",
                cursor: "pointer",
                fontWeight: currentSection === idx ? "600" : "500",
                fontSize: "16px",
                boxShadow: currentSection === idx ? "0 8px 25px rgba(255, 107, 157, 0.3)" : "0 4px 15px rgba(255, 107, 157, 0.1)",
                textAlign: "left",
                animation: "softFadeIn 0.6s ease"
              }}
            >
              {sec.title}
            </button>
          ))}
        </div>

        {/* TIMELINE */}
        {currentSection === 0 && (
          <>
            <div style={{ background: "white", borderRadius: "24px", boxShadow: "0 8px 40px rgba(255, 107, 157, 0.15)", overflow: "hidden", animation: "softFadeIn 0.5s ease" }}>
              <div style={{ background: "linear-gradient(135deg, #FFB3D9 0%, #FFD9E8 100%)", padding: "40px 30px", textAlign: "center" }}>
                <h2 style={{ fontSize: "28px", color: "white", margin: "0 0 10px 0", fontWeight: "700" }}>⏰ Our Timeline</h2>
                <p style={{ fontSize: "16px", color: "rgba(255, 255, 255, 0.8)", margin: "0", fontWeight: "300" }}>Our beautiful memories together... 📸</p>
              </div>
              <div style={{ padding: "40px 30px", maxHeight: "700px", overflowY: "auto" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  {timelineData.map((item, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => setTimelineModal(item)}
                      style={{ borderLeft: "3px solid #FF6B9D", paddingLeft: "20px", paddingBottom: "15px", cursor: "pointer", transition: "all 0.3s ease", transform: "translateX(0)", opacity: 1 }}
                      onMouseEnter={(e) => { e.currentTarget.style.transform = "translateX(5px)"; e.currentTarget.style.opacity = "0.8"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.transform = "translateX(0)"; e.currentTarget.style.opacity = "1"; }}
                    >
                      <p style={{ fontSize: "14px", color: "#FF6B9D", fontWeight: "600", margin: "0 0 8px 0" }}>📅 {item.date}</p>
                      <p style={{ fontSize: "15px", color: "#666", lineHeight: "1.6", margin: "0" }}>{item.memory}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* TIMELINE MODAL */}
            {timelineModal && (
              <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(0, 0, 0, 0.7)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000, padding: "20px", animation: "softFadeIn 0.3s ease" }}>
                <div style={{ background: "white", borderRadius: "24px", maxWidth: "600px", width: "100%", overflow: "hidden", boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)", animation: "softFadeIn 0.3s ease" }}>
                  <div style={{ position: "relative", paddingBottom: "100%", overflow: "hidden" }}>
                    <img 
                      src={`/photos/${timelineModal.photo}`} 
                      alt="Memory"
                      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>
                  <div style={{ padding: "30px" }}>
                    <p style={{ fontSize: "16px", color: "#FF6B9D", fontWeight: "600", margin: "0 0 15px 0" }}>📅 {timelineModal.date}</p>
                    <p style={{ fontSize: "15px", color: "#666", lineHeight: "1.8", margin: "0 0 25px 0" }}>{timelineModal.memory}</p>
                    <button 
                      onClick={() => setTimelineModal(null)}
                      style={{ width: "100%", padding: "12px", background: "linear-gradient(135deg, #FF6B9D 0%, #FF8FA3 100%)", color: "white", border: "none", borderRadius: "12px", fontSize: "16px", fontWeight: "600", cursor: "pointer" }}
                    >
                      Close ✕
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        )}

        {/* QUIZ 1 */}
        {currentSection === 1 && (
          <div style={{ background: "white", borderRadius: "24px", boxShadow: "0 8px 40px rgba(255, 107, 157, 0.15)", overflow: "hidden", animation: "softFadeIn 0.5s ease" }}>
            <div style={{ padding: "20px 30px", background: "linear-gradient(135deg, #E5F3FF 0%, #E5EEFF 100%)", borderBottom: "1px solid rgba(100, 150, 200, 0.1)" }}>
              <div style={{ width: "100%", height: "8px", background: "rgba(100, 150, 200, 0.1)", borderRadius: "10px", overflow: "hidden", marginBottom: "12px" }}>
                <div style={{ height: "100%", background: "linear-gradient(90deg, #FF6B9D 0%, #FF8FA3 100%)", width: `${((currentQuestion + 1) / quiz1Data.length) * 100}%`, transition: "width 0.4s ease", borderRadius: "10px" }}></div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <p style={{ fontSize: "13px", color: "#666", fontWeight: "500", margin: "0" }}>🎵 {sections[1].music}</p>
                <p style={{ fontSize: "13px", color: "#666", textAlign: "right", fontWeight: "500", margin: "0" }}>{currentQuestion + 1} / {quiz1Data.length}</p>
              </div>
            </div>

            <div style={{ padding: "35px 30px" }}>
              <div style={{ marginBottom: "25px", textAlign: "center" }}>
                <iframe src={`https://open.spotify.com/embed/track/${sections[1].spotifyId}`} width="100%" height="152" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" style={{ borderRadius: "12px" }}></iframe>
              </div>
              <div style={{ marginBottom: "35px", borderRadius: "18px", overflow: "hidden", background: "#f8f8f8", height: "350px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img 
                  src={`/photos/${current1.photo}`} 
                  alt="Quiz"
                  style={{ width: "100%", height: "100%", objectFit: "cover", filter: answered ? "blur(0px)" : "blur(15px)", transition: "filter 0.7s ease" }}
                />
              </div>

              <h2 style={{ fontSize: "22px", color: "#333", marginBottom: "30px", fontWeight: "600", textAlign: "center", lineHeight: "1.4", margin: "0 0 30px 0" }}>{current1.question}</h2>

              {!answered ? (
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <button onClick={() => handleQuiz1Answer('a')} style={{ display: "flex", alignItems: "center", gap: "15px", padding: "16px 20px", border: "2px solid #FFE5EC", background: "white", borderRadius: "14px", cursor: "pointer", fontSize: "15px", fontWeight: "500", boxShadow: "0 4px 12px rgba(255, 107, 157, 0.08)" }}>
                    <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "38px", height: "38px", background: "linear-gradient(135deg, #FF6B9D 0%, #FF8FA3 100%)", color: "white", borderRadius: "12px", fontWeight: "700", fontSize: "16px" }}>A</span>
                    <span style={{ color: "#333", flex: 1, textAlign: "left" }}>{current1.a}</span>
                  </button>
                  <button onClick={() => handleQuiz1Answer('b')} style={{ display: "flex", alignItems: "center", gap: "15px", padding: "16px 20px", border: "2px solid #FFE5EC", background: "white", borderRadius: "14px", cursor: "pointer", fontSize: "15px", fontWeight: "500", boxShadow: "0 4px 12px rgba(255, 107, 157, 0.08)" }}>
                    <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "38px", height: "38px", background: "linear-gradient(135deg, #FF6B9D 0%, #FF8FA3 100%)", color: "white", borderRadius: "12px", fontWeight: "700", fontSize: "16px" }}>B</span>
                    <span style={{ color: "#333", flex: 1, textAlign: "left" }}>{current1.b}</span>
                  </button>
                </div>
              ) : (
                <div style={{ padding: "28px", borderRadius: "16px", background: isCorrect ? "#F0FFF4" : "#FFEAEA", border: isCorrect ? "2px solid #90EE90" : "2px solid #FFB3B3", animation: "softFadeIn 0.4s ease" }}>
                  <p style={{ fontSize: "18px", fontWeight: "600", margin: "0 0 12px 0", color: isCorrect ? "#28A745" : "#DC3545" }}>{isCorrect ? '✨ Correct! ✨' : '💭 Not quite...'}</p>
                  <p style={{ fontSize: "15px", lineHeight: "1.6", margin: "0 0 20px 0", color: isCorrect ? "#155724" : "#721c24" }}>{isCorrect ? current1.correctMessage : current1.wrongMessage}</p>
                  <button onClick={handleQuiz1Next} style={{ padding: "12px 28px", background: "linear-gradient(135deg, #FF6B9D 0%, #FF8FA3 100%)", color: "white", border: "none", borderRadius: "12px", fontSize: "15px", fontWeight: "600", cursor: "pointer", boxShadow: "0 4px 15px rgba(255, 107, 157, 0.3)" }}>
                    Next →
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* QUIZ 2 */}
        {currentSection === 2 && (
          <div style={{ background: "white", borderRadius: "24px", boxShadow: "0 8px 40px rgba(255, 107, 157, 0.15)", overflow: "hidden", padding: "35px 30px", animation: "softFadeIn 0.5s ease" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
              <h1 style={{ color: "#FF6B9D", marginTop: 0, marginBottom: 0, fontSize: "26px", fontWeight: "700" }}>About Me 🎁</h1>
              <p style={{ fontSize: "13px", color: "#999", margin: "0", fontStyle: "italic" }}>🎵 {sections[2].music}</p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "28px" }}>
              <button
                onClick={() => handleQuiz2TabChange('gift1')}
                style={{
                  padding: "16px",
                  borderRadius: "16px",
                  border: "none",
                  background: quiz2Tab === 'gift1' ? "linear-gradient(135deg, #FF6B9D 0%, #FF8FA3 100%)" : "#FFF5E5",
                  color: quiz2Tab === 'gift1' ? "white" : "#FF6B9D",
                  cursor: "pointer",
                  fontWeight: quiz2Tab === 'gift1' ? "600" : "500",
                  boxShadow: quiz2Tab === 'gift1' ? "0 6px 20px rgba(255, 107, 157, 0.25)" : "0 2px 8px rgba(255, 107, 157, 0.08)",
                  transition: "all 0.3s ease"
                }}
              >
                🎁 Gift 1 {giftUnlocked.gift1 && " ✅"}
              </button>
              <button
                onClick={() => handleQuiz2TabChange('gift2')}
                style={{
                  padding: "16px",
                  borderRadius: "16px",
                  border: "none",
                  background: quiz2Tab === 'gift2' ? "linear-gradient(135deg, #FF6B9D 0%, #FF8FA3 100%)" : "#FFF5E5",
                  color: quiz2Tab === 'gift2' ? "white" : "#FF6B9D",
                  cursor: "pointer",
                  fontWeight: quiz2Tab === 'gift2' ? "600" : "500",
                  boxShadow: quiz2Tab === 'gift2' ? "0 6px 20px rgba(255, 107, 157, 0.25)" : "0 2px 8px rgba(255, 107, 157, 0.08)",
                  transition: "all 0.3s ease"
                }}
              >
                🎁 Gift 2 {giftUnlocked.gift2 && " ✅"}
              </button>
            </div>

            <div style={{ marginBottom: "25px", textAlign: "center" }}>
              <iframe src={`https://open.spotify.com/embed/track/${sections[2].spotifyId}`} width="100%" height="152" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" style={{ borderRadius: "12px" }}></iframe>
            </div>

            {quiz2Data[quiz2Tab].map((q) => (
              <div key={q.id} style={{ marginBottom: "18px", padding: "18px", background: "#F9F9F9", borderRadius: "14px", border: "1px solid #FFE5EC" }}>
                <p style={{ fontSize: "15px", fontWeight: "500", marginTop: 0, marginBottom: "14px", color: "#333" }}>{q.id}. {q.question}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
                  {['a', 'b', 'c', 'd'].map((key) => {
                    const isSelected = quiz2Answers[`${quiz2Tab}_${q.id}`] === key;
                    const isCorrect = key === q.correct;
                    const showCorrect = isSelected && isCorrect;
                    
                    return (
                      <button
                        key={key}
                        onClick={() => handleQuiz2Answer(q.id, key)}
                        style={{
                          padding: "11px",
                          borderRadius: "12px",
                          border: showCorrect ? "2px solid #28A745" : isSelected ? "2px solid #FF6B9D" : "1px solid #FFE5EC",
                          background: showCorrect ? "#D4EDDA" : isSelected ? "#FFF0F6" : "#fff",
                          color: "#333",
                          cursor: "pointer",
                          fontWeight: showCorrect ? "600" : "500",
                          textAlign: "left",
                          fontSize: "14px",
                          boxShadow: showCorrect ? "0 3px 10px rgba(40, 167, 69, 0.25)" : isSelected ? "0 3px 10px rgba(255, 107, 157, 0.15)" : "none"
                        }}
                      >
                        {key.toUpperCase()}) {q[key]} {showCorrect && "✅"}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}

            {giftUnlocked[quiz2Tab] && (
              <div style={{ background: "linear-gradient(135deg, #FF6B9D 0%, #FF8FA3 100%)", color: "white", padding: "32px", borderRadius: "16px", textAlign: "center", marginTop: "28px", fontSize: "18px", fontWeight: "600", boxShadow: "0 8px 25px rgba(255, 107, 157, 0.3)", animation: "softBounce 0.6s ease" }}>
                ✨ Gift Unlocked! ✨
                {checkQuiz2Perfect(quiz2Tab) && (
                  <p style={{ fontSize: "16px", marginTop: "12px", fontWeight: "400", opacity: "0.95" }}>Perfect! All questions correct! 🎉</p>
                )}
                {!checkQuiz2Perfect(quiz2Tab) && (
                  <p style={{ fontSize: "15px", marginTop: "12px", fontWeight: "400", opacity: "0.95" }}>A special gift is waiting for you 🎉</p>
                )}
              </div>
            )}

            {celebration && (
              <div style={{ background: "linear-gradient(135deg, #FF6B9D 0%, #FF8FA3 100%)", color: "white", padding: "40px 30px", borderRadius: "16px", textAlign: "center", marginTop: "30px", fontSize: "24px", fontWeight: "700", boxShadow: "0 15px 50px rgba(255, 107, 157, 0.4)", animation: "softFadeIn 0.5s ease", zIndex: 100 }}>
                {celebration.message}
              </div>
            )}
          </div>
        )}

        {/* MY LETTER */}
        {currentSection === 3 && (
          <div style={{ background: "white", borderRadius: "24px", boxShadow: "0 8px 40px rgba(255, 107, 157, 0.15)", padding: "40px 30px", animation: "softFadeIn 0.5s ease" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px" }}>
              <h2 style={{ fontSize: "28px", color: "#FF6B9D", marginTop: 0, marginBottom: 0, fontWeight: "700" }}>💌 My Letter To You</h2>
              <p style={{ fontSize: "13px", color: "#999", margin: "0", fontStyle: "italic" }}>🎵 {sections[3].music}</p>
            </div>
            <div style={{ background: "linear-gradient(135deg, #87CEEB 0%, #E0F6FF 100%)", padding: "35px", borderRadius: "18px", color: "white", lineHeight: "1.9", fontSize: "15px", fontWeight: "300", marginBottom: "25px" }}>
              <p style={{ marginTop: 0, marginBottom: "18px" }}>I don't know how to start, but I'm writing this while sitting next to you, actually while you're changing your vape coil haha. Anyway, first of all, I want to start by saying that I love you so much.</p>
              
              <p style={{ marginBottom: "18px" }}>Thank you for valuing me above all else, for always supporting me, for always being by my side. Yes, this might be our first birthday together, but I want to be by your side on every single birthday of mine.</p>
              
              <p style={{ marginBottom: "18px" }}>So many things have changed since you came into my life that I couldn't describe it even if I tried. Because I fell in love with you. I want to shape everything according to you. My life, my work, our home - in short, I want to build everything around you.</p>
              
              <p style={{ marginBottom: "18px" }}>We've been through difficult times too, but we always managed to sleep in the same bed together. I hope that one day we'll look back on these times and smile about them. I want to lean against you and love you until my very last breath.</p>
              
              <p style={{ marginBottom: "18px" }}>And I promise you that I will love you until my last breath and never leave you. If needed, I would give up everything, but never you. I love you so much, thank you for existing, I'm so happy you're with me.</p>
              
              <p style={{ marginBottom: "18px" }}>My wife, I love you so much. Next year we'll celebrate your birthday with a ring on your finger, I promise you.</p>
              
              <p style={{ marginBottom: 0, fontStyle: "italic", fontWeight: "400" }}>Thank you for existing. ❤️</p>
            </div>
            <div style={{ textAlign: "center", marginTop: "30px" }}>
              <p style={{ fontSize: "16px", color: "#FF6B9D", fontWeight: "500", marginBottom: "20px" }}>— Baturay 💕</p>
              <iframe src={`https://open.spotify.com/embed/track/${sections[3].spotifyId}`} width="100%" height="152" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" style={{ borderRadius: "12px" }}></iframe>
            </div>
          </div>
        )}

        {/* MARRIAGE HINT */}
        {currentSection === 4 && (
          <div style={{ background: "white", borderRadius: "24px", boxShadow: "0 8px 40px rgba(255, 107, 157, 0.15)", padding: "40px 30px", textAlign: "center", animation: "softFadeIn 0.5s ease" }}>
            <h2 style={{ fontSize: "28px", color: "#FF6B9D", marginTop: 0, fontWeight: "700" }}>💍 A Question For You...</h2>
            <div style={{ background: "linear-gradient(135deg, #FFB3D9 0%, #FFD9E8 100%)", padding: "50px 30px", borderRadius: "20px", marginTop: "30px", boxShadow: "0 8px 30px rgba(255, 107, 157, 0.2)" }}>
              <p style={{ fontSize: "20px", fontWeight: "600", color: "white", margin: "20px 0", letterSpacing: "1px" }}>8 MONTHS FROM NOW</p>
              <p style={{ fontSize: "18px", color: "white", margin: "20px 0", fontWeight: "500" }}>✨ Will you marry me? ✨</p>
              <p style={{ fontSize: "16px", color: "rgba(255, 255, 255, 0.9)", marginBottom: 0, fontWeight: "300" }}>Think about it... 💕</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}