import React, { useEffect, useState } from "react";

const BeforeAfterSlider = ({ beforeImage, afterImage }) => {
  const [sliderPosition, setSliderPosition] = useState(50);

  useEffect(() => {
    let requestId;
    const updatePosition = () => {
      setSliderPosition((prev) => (prev >= 100 ? 0 : prev + 0.1));
      requestId = requestAnimationFrame(updatePosition);
    };

    requestId = requestAnimationFrame(updatePosition);
    return () => cancelAnimationFrame(requestId);
  }, []);

  return (
    <div className="relative w-full max-w-3xl mx-auto my-16">
      <div className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg">
        {/* Before Image */}
        <img
          src={beforeImage}
          alt="Before"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        {/* After Image */}
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `url(${afterImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
          }}
        ></div>
      </div>
      <div className="flex justify-between text-sm text-gray-700 mt-4">
        <span>Antes</span>
        <span>Después</span>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
