import React, { useState, useEffect, Suspense } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const About = () => {
  const [photo, setPhoto] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos?_limit=20")
      .then((resp) => resp.json())
      .then((data) => {
        setPhoto(data);
        setLoading(false); 
      })
      .catch((err) => {
        console.log(err);
        setLoading(false); 
      });
  }, []);

  return (
    <div className="container mx-auto mt-10">
      <Suspense fallback={<div>Yuklanmoqda...</div>}>
        {loading ? (
          <div className="text-center">Yuklanmoqda...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {photo.length > 0 &&
              photo.map((value) => (
                <div key={value.id} className="flex justify-center">
                  <LazyLoadImage className="w-96 h-96"
                    alt={""}
                    src={value.thumbnailUrl}
                    effect="blur"
                    placeholderSrc={value.thumbnailUrl}
                  />
                </div>
              ))}

          
          </div>
        )}
      </Suspense>
    </div>
  );
};

export default About;
