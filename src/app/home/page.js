// app/page.tsx
export default function Home() {
  return (
    <div className="bg-dark-gray text-white min-h-screen">
      {/* Header */}
      <header className="p-8 border-b border-light-gray">
        <h1 className="text-4xl font-bold text-neon-cyan">Radiant Front</h1>
        <p className="text-neon-pink">Building the future, one pixel at a time.</p>
      </header>

      {/* Hero Section */}
      <section className="p-8">
        <h2 className="text-3xl font-bold text-neon-green">Welcome to the Future</h2>
        <p className="text-neon-purple mt-4">
          Experience cutting-edge design and innovation with our futuristic themes.
        </p>
        <button className="bg-electric-blue hover:bg-neon-purple text-white font-bold py-2 px-4 rounded mt-6">
          Explore Now
        </button>
      </section>

      {/* Features Section */}
      <section className="p-8 bg-light-gray">
        <h2 className="text-3xl font-bold text-neon-cyan">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="p-6 border border-neon-pink rounded-lg">
            <h3 className="text-xl font-bold text-neon-green">Fast Performance</h3>
            <p className="text-neon-purple mt-2">Blazing-fast load times for a seamless experience.</p>
          </div>
          <div className="p-6 border border-neon-pink rounded-lg">
            <h3 className="text-xl font-bold text-neon-green">Modern Design</h3>
            <p className="text-neon-purple mt-2">Sleek and futuristic visuals that captivate users.</p>
          </div>
          <div className="p-6 border border-neon-pink rounded-lg">
            <h3 className="text-xl font-bold text-neon-green">Customizable</h3>
            <p className="text-neon-purple mt-2">Tailor the theme to fit your brand's identity.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-8 border-t border-light-gray">
        <p className="text-neon-pink text-center">© 2023 Radiant Front. All rights reserved.</p>
      </footer>
    </div>
  );
}