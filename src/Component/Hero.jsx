import React from 'react'

const Hero = () => {
  return (
    <section className='bg-gray-300'>
      <div className="container mx-auto flex justify-center text-center">
        <div>
          <div>
            <h2 className="text-3xl py-4">
              <span className="text-primary">Unlock</span> Your Creative
              Potential
            </h2>
            <h3 className="text-2xl">
              with Online Design and Development Courses.
            </h3>
            <p>Learn from Industry Experts and Enhance Your Skills.</p>
          </div>
          <div className="flex justify-center  gap-3 py-6">
            <button className="bg-primary py-3 px-7">Explore Courses</button>
            <button className="py-3 px-7">View Pricing</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero
