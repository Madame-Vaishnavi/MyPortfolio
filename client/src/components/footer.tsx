export default function Footer() {
  return (
    <footer className="py-12 bg-gray-900 text-white" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="font-display font-bold text-xl text-lavender-400 mb-4 md:mb-0" data-testid="footer-logo">
            Portfolio
          </div>
          <div className="text-gray-400 text-sm" data-testid="footer-copyright">
            © 2024 Portfolio. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
