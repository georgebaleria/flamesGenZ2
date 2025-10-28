export const ContactContent = () => {
  return (
    <div className="space-y-6 text-gray-700">
      <div className="prose prose-lg max-w-none">
        <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-8 rounded-xl text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Get in Touch</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-3">
              <span className="text-2xl">📧</span>
              <a 
                href="mailto:flamescheck2025@gmail.com"
                className="text-xl font-semibold text-blue-600 hover:text-blue-800 transition-colors"
              >
                flamescheck2025@gmail.com
              </a>
            </div>
            <p className="text-gray-600 mt-4">
              Have questions, feedback, or just want to say hi? We'd love to hear from you!
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">💬 General Inquiries</h4>
            <p className="text-gray-600">
              Questions about how Flames Check works, feature requests, or general feedback.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">🤝 Partnerships</h4>
            <p className="text-gray-600">
              Interested in collaborating or featuring Flames Check? Let's talk!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
