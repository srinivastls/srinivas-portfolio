import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          {/* <p className="text-gray-400 flex items-center gap-2">
            Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> and code
          </p> */}
          <p className="text-gray-400 text-center">
            © {new Date().getFullYear()} Lakshmi Srinivas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
