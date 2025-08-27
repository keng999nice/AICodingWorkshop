import './App.css'
import Datepicker from './components/Datepicker'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pastel-lavender via-pastel-pink to-pastel-peach flex items-center justify-center p-4">
      <div className="text-center bg-white/20 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-white/30 max-w-md w-full">
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-pastel-purple via-pastel-coral to-pastel-mint bg-clip-text text-transparent">
          Hello World!
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          Welcome to React with Vite and Tailwind CSS
        </p>
        
        {/* Datepicker Section */}
        <div className="mb-8">
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            📅 Select a Date:
          </label>
          <Datepicker />
        </div>
        
        <div className="space-x-4">
          <button className="bg-pastel-mint hover:bg-pastel-sage text-gray-800 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
            Get Started
          </button>
          <button className="bg-pastel-sky hover:bg-pastel-lavender text-gray-800 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
