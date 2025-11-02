export const HowToUseSection = () => {
  const steps = [
    {
      number: 1,
      title: "Enter Your Names",
      description: "Start by typing the first person's name in the top input field. This can be your name, your crush's name, or anyone you want to check compatibility with. Then enter the second person's name in the bottom field. Make sure both names are spelled correctly to get accurate results.",
      icon: "✍️"
    },
    {
      number: 2,
      title: "Click Check My Name Now",
      description: "Once both names are entered, click the button labeled 'Check My Name Now' or press Enter. Our algorithm will instantly process the letters in both names using a combination of numerology and the classic FLAMES game mechanics. The calculation happens in seconds, so you won't have to wait long.",
      icon: "🔍"
    },
    {
      number: 3,
      title: "Get Your FLAMES Result",
      description: "After the calculation is complete, you'll see your relationship status displayed. Your result will be one of six letters: L for Love, F for Friendship, A for Affection, M for Marriage, E for Enemy, or S for Sibling. Each result comes with a detailed explanation of what it means for your relationship dynamic.",
      icon: "🎯"
    },
    {
      number: 4,
      title: "Share Your Results",
      description: "Got interesting results? Share them with your friends on social media! You can easily take a screenshot or share directly to platforms like TikTok, Instagram, Facebook, or your favorite group chat. Don't forget to tag @FlamesCheck so we can see your results too. Whether it's a Love connection or a surprising outcome, sharing makes the experience even more fun.",
      icon: "📱"
    },
    {
      number: 5,
      title: "Try More Combinations",
      description: "The fun doesn't stop with just one check. Try testing different name combinations to see how your relationships stack up. Check your compatibility with multiple crushes, compare results with different friends, or even test celebrity couples just for fun. Each calculation is independent and takes only a few seconds to complete.",
      icon: "🔄"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900">
            How to Use Flames Check
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Getting your relationship compatibility score is quick and easy. Follow these simple steps to discover what your connection really means.
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border-l-4 border-purple-500"
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Number and Icon */}
                <div className="flex-shrink-0 flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-black text-2xl shadow-lg">
                    {step.number}
                  </div>
                  <div className="text-4xl">{step.icon}</div>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Tips */}
        <div className="mt-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8 border-l-4 border-purple-500">
          <h3 className="text-2xl font-black text-gray-900 mb-4 flex items-center gap-2">
            <span>💡</span> Pro Tips for Best Results
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-purple-600 font-bold">•</span>
              <span className="text-lg">Use full names for the most accurate results. Nicknames can work too, but full names tend to be more precise.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-600 font-bold">•</span>
              <span className="text-lg">Try testing with middle names or different variations to see how results compare. Sometimes small changes can lead to different outcomes.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-600 font-bold">•</span>
              <span className="text-lg">Remember that Flames Check is designed for entertainment. While it's fun and can provide interesting insights, take the results with a grain of salt and enjoy the process.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-600 font-bold">•</span>
              <span className="text-lg">Explore the Celebrity Flames Check feature to see how famous couples score. It's a great way to understand the different relationship outcomes.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-600 font-bold">•</span>
              <span className="text-lg">Share your results with friends and start conversations. The best part about Flames Check is the community and laughs it creates.</span>
            </li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-xl text-gray-800 font-semibold mb-4">
            Ready to discover your relationship vibe?
          </p>
          <a
            href="#calculator"
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get Started Now →
          </a>
        </div>
      </div>
    </section>
  );
};

