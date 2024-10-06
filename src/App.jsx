import React, { useState } from "react";
import { AppProvider } from './AppContext'; // Import the provider
import { useAppContext } from './AppContext';
import {
  Loader2,
  ShieldCheck,
  ShieldAlert,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const NavLogo = () => (
  <div className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text">
    LinkGuard
  </div>
);

const Header = ({ setCurrentPage }) => (
  <header className="bg-white text-gray-800 p-4 shadow-md">
    <nav className="container mx-auto flex justify-between items-center">
      <NavLogo />
      <ul className="flex space-x-6">
        <li>
          <button
            onClick={() => setCurrentPage("home")}
            className="hover:text-teal-500 transition-colors"
          >
            Home
          </button>
        </li>
        <li>
          <button
            onClick={() => setCurrentPage("check")}
            className="hover:text-teal-500 transition-colors"
          >
            Check URL
          </button>
        </li>
        <li>
          <button
            onClick={() => setCurrentPage("about")}
            className="hover:text-teal-500 transition-colors"
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => setCurrentPage("blog")}
            className="hover:text-teal-500 transition-colors"
          >
            Blog
          </button>
        </li>
      </ul>
    </nav>
  </header>
);

const Footer = () => (
  <footer className="bg-gray-800 text-white py-10">
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <h3 className="font-bold text-lg mb-4">QuickLinks</h3>
        <ul className="space-y-2">
          <li>
            <a href="#" className="hover:text-teal-400">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-teal-400">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-teal-400">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-teal-400">
              Contact Us
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-teal-400">
              FAQs
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold text-lg mb-4">Legal Info</h3>
        <ul className="space-y-2">
          <li>
            <a href="#" className="hover:text-teal-400">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-teal-400">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-teal-400">
              Cookie Policy
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold text-lg mb-4">Contact Info</h3>
        <ul className="space-y-2">
          <li className="flex items-center">
            <Mail size={16} className="mr-2" /> webfalainitiative@gmail.com
          </li>
          <li className="flex items-center">
            <Phone size={16} className="mr-2" /> +234 000000000
          </li>
          <li className="flex items-center">
            <MapPin size={16} className="mr-2" /> 12, Station Road, GRA, Ilorin
          </li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold text-lg mb-4">Subscribe</h3>
        <form className="flex">
          <input
            type="email"
            placeholder="Your email"
            className="p-2 rounded-l-md flex-grow"
          />
          <button
            type="submit"
            className="bg-teal-500 text-white p-2 rounded-r-md"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
    <div className="container mx-auto px-4 my-8 pt-8 border-t border-gray-700 text-center">
      <p>© 2024 LinkGuard. All rights reserved.</p>
      <p className="mt-2">
        <a href="#" className="hover:text-teal-400 mr-4">
          Terms
        </a>
        <a href="#" className="hover:text-teal-400">
          Privacy
        </a>
      </p>
    </div>
  </footer>
);

const LandingPage = ({ setCurrentPage }) => (
  <div className="bg-gradient-to-b from-teal-50 to-blue-50 py-20">
    <div className="container mx-auto px-4 text-center">
      <h1 className="text-5xl font-bold mb-6 text-gray-800">
        Stay Safe Online with AI
      </h1>
      <p className="text-2xl mb-8 text-gray-600">
        Instantly Detect Phishing Links
      </p>
      <h2 className="text-3xl font-semibold mb-12 text-gray-700">
        Protect Yourself from Cyber Threats with AI-Powered Security
      </h2>
      <button
        onClick={() => setCurrentPage("check")}
        className="bg-teal-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-teal-600 transition-colors flex items-center mx-auto"
      >
        Get Started
        <ChevronRight className="ml-2" />
      </button>
    </div>
  </div>
);

const VideoSection = () => (
  <div className="bg-white py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
        How LinkGuard Works
      </h2>
      <div className="aspect-w-16 aspect-h-9">
        <img
          src="http://via.placeholder.com/1280x720
"
          alt="Video placeholder"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  </div>
);

const ResultCard = ({ result }) => {
  const isSafe = result.predicted_label.toLowerCase() === "good";
  const confidenceScore = result.confidence_score.toFixed(2);

  return (
    <div
      className={`bg-white p-6 rounded-lg shadow-md border-l-4 ${
        isSafe ? "border-green-500" : "border-red-500"
      }`}
    >
      <div className="flex items-center mb-4">
        {isSafe ? (
          <ShieldCheck className="w-8 h-8 text-green-500 mr-2" />
        ) : (
          <ShieldAlert className="w-8 h-8 text-red-500 mr-2" />
        )}
        <h2 className="text-2xl font-bold">
          {isSafe ? "Safe" : "Potentially Unsafe"}
        </h2>
      </div>
      <p className="text-gray-700 mb-2">
        <span className="font-semibold">Predicted Label:</span>{" "}
        {result.predicted_label}
      </p>
      <div className="mt-4">
        <p className="text-sm text-gray-600 mb-1">Confidence Score</p>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className={`h-2.5 rounded-full ${
              isSafe ? "bg-green-500" : "bg-red-500"
            }`}
            style={{ width: `${confidenceScore}%` }}
          ></div>
        </div>
        <p className="text-right text-sm text-gray-600 mt-1">
          {confidenceScore}%
        </p>
      </div>
    </div>
  );
};

const CheckURL = () => {
  const { state, dispatch } = useAppContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: 'SET_LOADING', payload: true });
    dispatch({ type: 'SET_ERROR', payload: null });
    try {
      const response = await fetch('https://phishing-urls-pred-api-lyw2.onrender.com/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: state.url }),
      });
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      dispatch({ type: 'SET_RESULT', payload: data });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: 'An error occurred while checking the URL. Please try again.' });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  return (
    <div className="container mx-auto my-8 px-4 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Check URL Safety</h1>
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex flex-col md:flex-row gap-2">
          <input
            type="text"
            value={state.url}
            onChange={(e) => dispatch({ type: 'SET_URL', payload: e.target.value })}
            placeholder="Enter URL to check"
            className="flex-grow border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <button 
            type="submit" 
            className="bg-teal-500 text-white p-2 rounded-md hover:bg-teal-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            disabled={state.isLoading}
          >
            {state.isLoading ? (
              <Loader2 className="animate-spin h-5 w-5 mr-2" />
            ) : 'Check URL'}
          </button>
        </div>
      </form>
      {state.error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md mb-4" role="alert">
          <strong className="font-bold mr-1">Error:</strong>
          <span className="block sm:inline">{state.error}</span>
        </div>
      )}
      {state.result && <ResultCard result={state.result} />}
    </div>
  );
};;

const About = () => (
  <div className="container mx-auto my-8 px-4 max-w-2xl">
    <h1 className="text-3xl font-bold mb-4 text-gray-800">About LinkGuard</h1>
    <p className="text-gray-700">
      LinkGuard is a powerful tool designed to help you identify potentially
      dangerous URLs. Our advanced AI algorithm analyzes various aspects of a
      given URL to determine its safety, providing you with peace of mind while
      browsing the internet.
    </p>
  </div>
);

const Blog = () => (
  <div className="container mx-auto my-8 px-4 max-w-2xl">
    <h1 className="text-3xl font-bold mb-4 text-gray-800">Blog</h1>
    <p className="text-gray-700">
      Stay tuned for our latest updates, cybersecurity tips, and in-depth
      articles on how to protect yourself online. Our team of experts regularly
      shares insights to keep you informed and safe in the digital world.
    </p>
  </div>
);

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <LandingPage setCurrentPage={setCurrentPage} />;
      case 'check':
        return <CheckURL />;
      case 'about':
        return <About />;
      case 'blog':
        return <Blog />;
      default:
        return <LandingPage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <AppProvider> {/* Wrap the app in the provider */}
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header setCurrentPage={setCurrentPage} />
        {renderPage()}
        {currentPage === 'home' && <VideoSection />}
        <Footer />
      </div>
    </AppProvider>
  );
};

export default App;