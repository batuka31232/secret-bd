import { useState, useEffect } from 'react';
import './App.css';

export default function BirthdaySurprise() {
  const [currentSection, setCurrentSection] = useState(0);
  const [quiz1Answers, setQuiz1Answers] = useState({});
  const [quiz2Tab, setQuiz2Tab] = useState('gift1');
  const [quiz2Answers, setQuiz2Answers] = useState({});
  const [giftUnlocked, setGiftUnlocked] = useState({ gift1: false, gift2: false });
  const [currentQuizScore, setCurrentQuizScore] = useState(0);

  const quiz1Questions = [
    { id: 1, question: "Who is more sleepy?", a: "Tosia", b: "Baturay", correct: "b", img: "📸" },
    { id: 2, question: "Who takes up the most space in bed while sleeping?", a: "Tosia", b: "Baturay", correct: "a", img: "🛏️" },
    { id: 3, question: "Who is better at computer games?", a: "Tosia", b: "Baturay", correct: "a", img: "🎮" },
    { id: 4, question: "Who is a plain bread monster?", a: "Tosia", b: "Baturay", correct: "a", img: "🍞" },
    { id: 5, question: "Who is a kebab monster?", a: "Tosia", b: "Baturay", correct: "b", img: "🍖" },
    { id: 6, question: "Who always takes absurd photos?", a: "Tosia", b: "Baturay", correct: "b", img: "📷" },
    { id: 7, question: "Who is a simit monster?", a: "Tosia", b: "Baturay", correct: "a", img: "🥯" },
    { id: 8, question: "Who is tea monster?", a: "Tosia", b: "Baturay", correct: "b", img: "🍵" },
    { id: 9, question: "Who is more romantic?", a: "Tosia", b: "Baturay", correct: "b", img: "💕" },
    { id: 10, question: "Who can never hold themselves back from laughing in situations where they're not supposed to?", a: "Tosia", b: "Baturay", correct: "b", img: "😂" },
  ];

  const quiz2Questions = {
    gift1: [
      { id: 1, question: "Favori rengin ne?", a: "Pembe", b: "Mavi", correct: "a" },
      { id: 2, question: "En sevdiğin yemek?", a: "Makarna", b: "Pizza", correct: "a" },
      { id: 3, question: "Uyumayı sevir misin?", a: "Evet çok!", b: "Kimi zaman", correct: "a" },
      { id: 4, question: "Gülüşün ne kadar güzel?", a: "Dünyanın en güzeli", b: "Çok güzel", correct: "a" },
    ],
    gift2: [
      { id: 1, question: "Benim en iyi özelliğim?", a: "Bağlılık", b: "Humor", correct: "a" },
      { id: 2, question: "Seninle zaman geçirmek ne gibi hissettiriyor?", a: "Harika", b: "Süper harika", correct: "b" },
      { id: 3, question: "Gelecekte neler istiyorsun?", a: "Birlikte her şey", b: "Seninle mutluluk", correct: "a" },
      { id: 4, question: "Seninle olmak kaç yıldız?", a: "10 yıldız", b: "Sonsuz", correct: "b" },
    ]
  };

  const handleQuiz1Answer = (questionId, answer) => {
    setQuiz1Answers(prev => ({ ...prev, [questionId]: answer }));
  };

  const handleQuiz2Answer = (questionId, answer) => {
    setQuiz2Answers(prev => ({ ...prev, [questionId]: answer }));
  };

  const getQuiz1Score = () => {
    return quiz1Questions.filter(q => quiz1Answers[q.id] === q.correct).length;
  };

  const checkQuiz2Completion = (tab) => {
    const questions = quiz2Questions[tab];
    const correct = questions.filter(q => quiz2Answers[`${tab}_${q.id}`] === q.correct).length;
    return correct >= 3 ? true : false;
  };

  useEffect(() => {
    setCurrentQuizScore(getQuiz1Score());
  }, [quiz1Answers]);

  useEffect(() => {
    setGiftUnlocked(prev => ({
      ...prev,
      gift1: checkQuiz2Completion('gift1'),
      gift2: checkQuiz2Completion('gift2')
    }));
  }, [quiz2Answers]);

  const sections = [
    { title: "📸 Zamanı Tüneli", color: "linear-gradient(135deg, #ED93B1 0%, #378ADD 100%)", music: "Motive Hanımefendi" },
    { title: "❓ Quiz Defteri", color: "linear-gradient(135deg, #D4537E 0%, #185FA5 100%)", music: "LVBEL C5 - Coook Pardon" },
    { title: "🎁 Hediye Quizleri", color: "linear-gradient(135deg, #ED93B1 0%, #D4537E 100%)", music: "LVBEL C5 - Tak Tak Tak" },
    { title: "💌 Benim Yazım", color: "linear-gradient(135deg, #378ADD 0%, #ED93B1 100%)", music: "Mac Miller - Congratulations" },
    { title: "💍 Evlilik İpucu", color: "linear-gradient(135deg, #D4537E 0%, #378ADD 100%)", music: "Müzik seçimi yapılacak" }
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#f5f5f5", padding: "20px", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      
      <div style={{ display: "flex", gap: "10px", marginBottom: "30px", flexWrap: "wrap", justifyContent: "center" }}>
        {sections.map((sec, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSection(idx)}
            style={{
              padding: "12px 20px",
              borderRadius: "8px",
              border: currentSection === idx ? "2px solid #333" : "1px solid #ddd",
              background: currentSection === idx ? sec.color : "#fff",
              color: currentSection === idx ? "white" : "#333",
              cursor: "pointer",
              fontWeight: currentSection === idx ? "500" : "400",
              fontSize: "14px",
              transition: "all 0.3s ease"
            }}
          >
            {sec.title.split(" ")[0]}
          </button>
        ))}
      </div>

      {/* SECTION 1: TIMELINE */}
      {currentSection === 0 && (
        <div style={{ background: "#fff", borderRadius: "12px", padding: "30px", textAlign: "center", animation: "fadeIn 0.5s ease" }}>
          <h1 style={{ color: "#333", marginTop: 0 }}>Zamanı Tüneli ⏰</h1>
          <p style={{ color: "#666", fontSize: "16px" }}>🎵 {sections[0].music} çalıyor...</p>
          <div style={{ background: sections[0].color, height: "200px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", color: "white", marginTop: "20px", fontSize: "18px", fontWeight: "500" }}>
            Buraya Tosia'nın anıları ve fotoğrafları gelecek 📸
          </div>
          <p style={{ fontSize: "14px", color: "#666", marginTop: "20px" }}>✨ Her fotoğrafın altında o günün kısa hikayesi...</p>
        </div>
      )}

      {/* SECTION 2: QUIZ 1 */}
      {currentSection === 1 && (
        <div style={{ background: "#fff", borderRadius: "12px", padding: "30px", animation: "fadeIn 0.5s ease" }}>
          <h1 style={{ color: "#333", marginTop: 0 }}>Beni Ne Kadar Tanısın? ❓</h1>
          <p style={{ color: "#666" }}>🎵 {sections[1].music}</p>
          
          <div style={{ background: sections[1].color, padding: "15px 20px", borderRadius: "8px", color: "white", marginBottom: "30px", textAlign: "center", fontWeight: "500" }}>
            Doğru Cevaplar: {currentQuizScore} / 10
          </div>

          {quiz1Questions.map((q) => (
            <div key={q.id} style={{ marginBottom: "25px", padding: "20px", background: "#f9f9f9", borderRadius: "8px", border: "1px solid #ddd" }}>
              <p style={{ fontSize: "16px", fontWeight: "500", marginTop: 0 }}>{q.id}. {q.question} {q.img}</p>
              <div style={{ display: "flex", gap: "15px" }}>
                <button
                  onClick={() => handleQuiz1Answer(q.id, 'a')}
                  style={{
                    flex: 1,
                    padding: "12px",
                    borderRadius: "8px",
                    border: quiz1Answers[q.id] === 'a' ? "2px solid #378ADD" : "1px solid #ddd",
                    background: quiz1Answers[q.id] === 'a' ? "#E6F1FB" : "#fff",
                    color: quiz1Answers[q.id] === 'a' ? "#185FA5" : "#333",
                    cursor: "pointer",
                    fontWeight: "500",
                    transition: "all 0.2s"
                  }}
                >
                  A) {q.a}
                </button>
                <button
                  onClick={() => handleQuiz1Answer(q.id, 'b')}
                  style={{
                    flex: 1,
                    padding: "12px",
                    borderRadius: "8px",
                    border: quiz1Answers[q.id] === 'b' ? "2px solid #639922" : "1px solid #ddd",
                    background: quiz1Answers[q.id] === 'b' ? "#EAF3DE" : "#fff",
                    color: quiz1Answers[q.id] === 'b' ? "#3B6D11" : "#333",
                    cursor: "pointer",
                    fontWeight: "500",
                    transition: "all 0.2s"
                  }}
                >
                  B) {q.b}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* SECTION 3: GIFT QUIZ */}
      {currentSection === 2 && (
        <div style={{ background: "#fff", borderRadius: "12px", padding: "30px", animation: "fadeIn 0.5s ease" }}>
          <h1 style={{ color: "#333", marginTop: 0 }}>Benim Hakkımda Quizler 🎁</h1>
          <p style={{ color: "#666" }}>🎵 {sections[2].music}</p>

          <div style={{ display: "flex", gap: "15px", marginBottom: "25px" }}>
            <button
              onClick={() => setQuiz2Tab('gift1')}
              style={{
                flex: 1,
                padding: "15px",
                borderRadius: "8px",
                border: quiz2Tab === 'gift1' ? "2px solid #333" : "1px solid #ddd",
                background: quiz2Tab === 'gift1' ? "linear-gradient(135deg, #ED93B1 0%, #D4537E 100%)" : "#f9f9f9",
                color: quiz2Tab === 'gift1' ? "white" : "#333",
                cursor: "pointer",
                fontWeight: "500",
                transition: "all 0.3s"
              }}
            >
              🌸 Hediye 1 (Parfüm) {giftUnlocked.gift1 && " ✅"}
            </button>
            <button
              onClick={() => setQuiz2Tab('gift2')}
              style={{
                flex: 1,
                padding: "15px",
                borderRadius: "8px",
                border: quiz2Tab === 'gift2' ? "2px solid #333" : "1px solid #ddd",
                background: quiz2Tab === 'gift2' ? "linear-gradient(135deg, #378ADD 0%, #185FA5 100%)" : "#f9f9f9",
                color: quiz2Tab === 'gift2' ? "white" : "#333",
                cursor: "pointer",
                fontWeight: "500",
                transition: "all 0.3s"
              }}
            >
              💎 Hediye 2 (Kolye) {giftUnlocked.gift2 && " ✅"}
            </button>
          </div>

          {quiz2Questions[quiz2Tab].map((q) => (
            <div key={q.id} style={{ marginBottom: "20px", padding: "20px", background: "#f9f9f9", borderRadius: "8px", border: "1px solid #ddd" }}>
              <p style={{ fontSize: "16px", fontWeight: "500", marginTop: 0 }}>{q.id}. {q.question}</p>
              <div style={{ display: "flex", gap: "15px" }}>
                <button
                  onClick={() => handleQuiz2Answer(`${quiz2Tab}_${q.id}`, 'a')}
                  style={{
                    flex: 1,
                    padding: "12px",
                    borderRadius: "8px",
                    border: quiz2Answers[`${quiz2Tab}_${q.id}`] === 'a' ? "2px solid #333" : "1px solid #ddd",
                    background: "#fff",
                    cursor: "pointer",
                    fontWeight: "500",
                    transition: "all 0.2s"
                  }}
                >
                  A) {q.a}
                </button>
                <button
                  onClick={() => handleQuiz2Answer(`${quiz2Tab}_${q.id}`, 'b')}
                  style={{
                    flex: 1,
                    padding: "12px",
                    borderRadius: "8px",
                    border: quiz2Answers[`${quiz2Tab}_${q.id}`] === 'b' ? "2px solid #333" : "1px solid #ddd",
                    background: "#fff",
                    cursor: "pointer",
                    fontWeight: "500",
                    transition: "all 0.2s"
                  }}
                >
                  B) {q.b}
                </button>
              </div>
            </div>
          ))}

          {giftUnlocked[quiz2Tab] && (
            <div style={{
              background: quiz2Tab === 'gift1' ? "linear-gradient(135deg, #ED93B1 0%, #D4537E 100%)" : "linear-gradient(135deg, #378ADD 0%, #185FA5 100%)",
              color: "white",
              padding: "30px",
              borderRadius: "12px",
              textAlign: "center",
              marginTop: "25px",
              animation: "slideUp 0.5s ease",
              fontSize: "18px",
              fontWeight: "500"
            }}>
              ✨ Hediye'yi Açmaya Hak Kazandın! ✨
              <p style={{ fontSize: "16px", marginTop: "15px", opacity: 0.95 }}>
                {quiz2Tab === 'gift1' 
                  ? "🌸 Seni hatırlatan bir koku... Benim favorim sensin!"
                  : "💎 Beni taş gibi yanında tut... Seninle sonsuza kadar"}
              </p>
            </div>
          )}
        </div>
      )}

      {/* SECTION 4: MY LETTER */}
      {currentSection === 3 && (
        <div style={{ background: "#fff", borderRadius: "12px", padding: "30px", animation: "fadeIn 0.5s ease" }}>
          <h1 style={{ color: "#333", marginTop: 0 }}>💌 Benim Yazım</h1>
          <p style={{ color: "#666", marginBottom: "20px" }}>🎵 {sections[3].music}</p>
          
          <div style={{ background: sections[3].color, padding: "30px", borderRadius: "12px", color: "white", lineHeight: "1.8", fontSize: "16px" }}>
            <p style={{ marginTop: 0 }}>Sevgili Tosia,</p>
            <p>Seni tanıdığım günden bu yana, hayatım renglenmiş, gülüşüm daha çok olmuş, her anı daha güzel hale gelmiş. Seninle geçen her saniye bir hazine...</p>
            <p>Beni o kadar iyi anlıyorsun ki, bazen söylemeden biliyorsun neler düşündüğümü. Gülüşün, kahkahan, çilekli yüzün... Hepsi benim en sevdiği şeyler.</p>
            <p>İki yıl oldu, ama her gün seni daha çok sevdiğimi anlıyorum. Seninle olmak, hayalimin dışında bir şey... Seni seviyorum, çok seviyorum.</p>
            <p style={{ marginBottom: 0 }}>Selamlar, Baturay ❤️</p>
          </div>
        </div>
      )}

      {/* SECTION 5: MARRIAGE HINT */}
      {currentSection === 4 && (
        <div style={{ background: "#fff", borderRadius: "12px", padding: "30px", textAlign: "center", animation: "fadeIn 0.5s ease" }}>
          <h1 style={{ color: "#333", marginTop: 0 }}>💍 Sana Bir Sorum Var...</h1>
          
          <div style={{ background: sections[4].color, padding: "50px 30px", borderRadius: "12px", color: "white", marginTop: "30px", animation: "pulse 2s infinite" }}>
            <p style={{ fontSize: "24px", fontWeight: "500", margin: "20px 0" }}>8 AY SONRA</p>
            <p style={{ fontSize: "18px", margin: "20px 0" }}>✨ Evlenmek ister misin? ✨</p>
            <p style={{ fontSize: "16px", opacity: 0.95, marginBottom: 0 }}>Bundan emin misin? Düşün...</p>
          </div>

          <p style={{ fontSize: "14px", color: "#666", marginTop: "30px" }}>🎵 Müzik seçimi yapılacak...</p>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
      `}</style>
    </div>
  );
}