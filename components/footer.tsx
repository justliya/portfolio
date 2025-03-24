export default function Footer() {
    return (
      <footer className="bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center border-t border-gray-800 pt-6">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Aaliyah Johnson. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  }
