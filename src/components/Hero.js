// components/Hero.js
export default function Hero() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-black flex items-center justify-center text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">TejoOne</h1>
        <p className="text-xl mb-8">O primeiro satélite português feito por estudantes</p>
        <button className="bg-blue-500 px-8 py-4 rounded-lg hover:bg-blue-600">
          Saber Mais
        </button>
      </div>
    </div>
  )
}