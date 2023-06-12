import React from 'react';

const ExtraSection = () => {
    return (
        <div>
            <div className="bg-gray-100 py-12">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center">
        <div className="md:w-1/2">
          <img
            src="https://content.jdmagicbox.com/comp/delhi/w6/011pxx11.xx11.140423221649.u1w6/catalogue/roop-chand-institute-of-fine-art-ashok-vihar-1-delhi-fine-art-institutes-29j8v6x.jpg?clr="
            alt="Drawing Class"
            className="max-w-full h-auto rounded-lg shadow-lg animate-fade-in-up"
          />
        </div>
        <div className="md:w-1/2 md:ml-10">
          <h2 className="text-4xl font-bold mb-6 transition duration-1000 transform hover:-translate-y-1">
            Unlock Your Creative Potential
          </h2>
          <p className="text-lg mb-6">
            Our drawing school offers a nurturing environment where you can explore your creativity and learn various drawing techniques.
          </p>
        </div>
      </div>
    </div>
        </div>
    );
};

export default ExtraSection;