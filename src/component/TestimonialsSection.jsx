// components/TestimonialsSection.js
const testimonials = [
    {
      name: 'John Doe',
      role: 'Parent',
      quote: 'This school has transformed my child’s learning experience. Highly recommended!',
    },
    {
      name: 'Jane Smith',
      role: 'Student',
      quote: 'The teachers are amazing, and the facilities are top-notch.',
    },
    {
      name: 'Alice Johnson',
      role: 'Parent',
      quote: 'A perfect blend of academics and extracurricular activities.',
    },
  ];
  
  const TestimonialsSection = () => {
    return (
      <div className="py-20 from-blue-900 via-purple-900 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-12">
            What People Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-800/20 to-purple-800/20 p-8 rounded-lg border border-purple-500/20 hover:border-purple-500/50 transition-all backdrop-blur-sm"
              >
                <p className="text-gray-300 italic mb-4">"{testimonial.quote}"</p>
                <p className="text-white font-semibold">{testimonial.name}</p>
                <p className="text-gray-400">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default TestimonialsSection;