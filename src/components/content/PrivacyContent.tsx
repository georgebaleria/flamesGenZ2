export const PrivacyContent = () => {
  return (
    <div className="space-y-6 text-gray-700">
      <div className="prose prose-lg max-w-none">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Privacy Policy</h3>
        
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
          <p className="text-blue-800 font-semibold">
            🔐 Your privacy is important to us. This policy explains how we handle your information.
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">Information We Collect</h4>
            <p className="text-gray-600 leading-relaxed">
              Flames Check is designed with privacy in mind. We do not store, collect, or save any personal information you enter into our calculator. All calculations happen locally in your browser.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">How We Use Information</h4>
            <p className="text-gray-600 leading-relaxed">
              Since we don't collect personal data, there's no information to use or share. Your names and results stay private and are not transmitted to our servers.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">Cookies and Tracking</h4>
            <p className="text-gray-600 leading-relaxed">
              We may use essential cookies for website functionality and analytics cookies to improve our service. You can disable non-essential cookies in your browser settings.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">Third-Party Services</h4>
            <p className="text-gray-600 leading-relaxed">
              We may use third-party services like Google Analytics for website analytics. These services have their own privacy policies.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">Contact Us</h4>
            <p className="text-gray-600 leading-relaxed">
              If you have questions about this privacy policy, please contact us at{' '}
              <a href="mailto:flamescheck2025@gmail.com" className="text-blue-600 hover:text-blue-800">
                flamescheck2025@gmail.com
              </a>
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
            <p className="text-sm text-gray-500">
              <strong>Last Updated:</strong> October 28, 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
