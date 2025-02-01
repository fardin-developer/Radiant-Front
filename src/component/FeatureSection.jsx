import OrbitingBalls from "./OrbitingBalls";

// components/FeaturesSection.js
const features = [
    {
      icon: '🏫',
      title: 'Modern Facilities',
      description: 'State-of-the-art classrooms, labs, and sports facilities.',
    },
    {
      icon: '👩‍🏫',
      title: 'Expert Faculty',
      description: 'Highly qualified and experienced teachers.',
    },
    {
      icon: '🚀',
      title: 'Future-Ready Curriculum',
      description: 'Focus on STEM, arts, and holistic development.',
    },
  ];
  
  const FeaturesSection = () => {
    return (
      <div className="py-20  from-blue-900 via-purple-900 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-12">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-800/20 to-purple-800/20 p-8 rounded-lg border border-purple-500/20 hover:border-purple-500/50 transition-all backdrop-blur-sm"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default FeaturesSection;