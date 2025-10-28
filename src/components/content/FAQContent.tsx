export const FAQContent = () => {
  const faqs = [
    {
      question: "What is Flames Check?",
      answer: "Flames Check is a modern glow-up of the classic 90s FLAMES love game — powered by a mix of numerology and nostalgia. Just type two names, and we'll instantly reveal your relationship vibe: Love, Friendship, Affection, Marriage, Enemy, or Sibling. It's fast, fun, and totally free."
    },
    {
      question: "How does Flames Check work?",
      answer: "Flames Check uses a simple yet calculated process that matches the letters in your names, runs them through our upgraded algorithm, and gives you a result that represents your connection energy. It's like a vibe calculator — fun enough to play with your crush, friends, or even your favorite celebrities."
    },
    {
      question: "Is the Flames Check result accurate?",
      answer: "It's meant for fun and self-discovery, not serious matchmaking. 🔮 While the numerology adds a unique twist, Flames Check is designed to give you playful insights — so take it as entertainment, not absolute truth."
    },
    {
      question: "Can I use Flames Check for anyone?",
      answer: "Yes! 💞 Use it to check your vibe with: Your crush or partner ❤️, Your best friend or barkada 🤝, A classmate, ex, or even a celebrity 👀. Basically, if there's a connection, you can test it!"
    },
    {
      question: "What do the FLAMES letters mean?",
      answer: "Each letter stands for a different type of connection: 🔥 L — Love: Mutual attraction or deeper connection. 🤝 F — Friendship: Pure good vibes; your ride-or-die. 💖 A — Affection: A spark that's still growing. 🔪 E — Enemy: Watch out for drama — maybe not your match. 💍 M — Marriage: The ultimate \"forever\" bond. 🏡 S — Sibling: Loyal, platonic, and always there for you."
    },
    {
      question: "What is \"Celebrity Flames Check\"?",
      answer: "It's a fun feature where you can test the FLAMES compatibility of your favorite celebrity couples — just for laughs or curiosity! Think: Taylor Swift & Travis Kelce? KathNiel? DonBelle? 🔥 See what the algorithm says about their vibe!"
    },
    {
      question: "Is Flames Check free to use?",
      answer: "Yes — 100% free. No sign-ups, no weird subscriptions, no hidden fees. Just drop the names, get your result, and share the tea."
    },
    {
      question: "Is my information safe?",
      answer: "Absolutely. 🔐 Flames Check doesn't store your data, names, or results. Everything happens instantly in your browser — your secrets stay safe with you."
    },
    {
      question: "Can I share my Flames Check result on social media?",
      answer: "Yes! 📱 After you get your result, you can easily screenshot or share it on TikTok, Instagram, Facebook, or with your group chat. Tag us @FlamesCheck so we can repost your results!"
    },
    {
      question: "Who created Flames Check?",
      answer: "Flames Check was built by a small creative team passionate about combining nostalgic fun and modern tech — inspired by the Filipino schoolyard game we all loved, but redesigned for a global Gen Z audience."
    },
    {
      question: "Why do people love Flames Check?",
      answer: "Because it's fun, fast, and feels real. 💫 It helps you get clarity (or chaos 😅) in a few seconds — without the stress of guessing what your connection means. Plus, it's totally shareable and main-character energy approved."
    },
    {
      question: "How can I get started?",
      answer: "Easy! 🔥 Go to FlamesCheck.com, type your names, and hit \"Check My Name Now.\" In just seconds, your result will pop up — ready to share with the world."
    }
  ];

  return (
    <div className="space-y-6 text-gray-700">
      <div className="prose prose-lg max-w-none">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Flames Check — Frequently Asked Questions (FAQ)</h3>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
              <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-start gap-2">
                <span className="text-purple-500">❓</span>
                {faq.question}
              </h4>
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
