import React from 'react';

const SliderBanner = ({ data }) => {
    return (
        <div
            className="slider-item bg-cover bg-center h-[600px] flex items-center justify-center text-white relative"
            style={{ backgroundImage: `url(${data.img})` }}
        >

            <div className="absolute inset-0 bg-black opacity-50"></div>

            <div className="relative z-10 text-center px-4">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">{data.title}</h2>
                <p className="text-lg md:text-xl mb-6 max-w-xl mx-auto">{data.description}</p>
                <button className="bg-violet-500 hover:bg-violet-600 text-white py-2 px-6 rounded transition duration-300">
                    {data.cta}
                </button>
            </div>
        </div>
    );
};

export default SliderBanner;