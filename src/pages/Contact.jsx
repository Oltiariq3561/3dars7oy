import React, { useState, useEffect, Suspense } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Contact = () => {
  const [photo, setPhoto] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos?_limit=100")
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
    <div className="max-w-screen-lg mx-auto py-10 px-4">
      <Suspense fallback={<div>Yuklanmoqda...</div>}>
        {loading ? (
          <div className="text-center text-lg font-medium">Yuklanmoqda...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {photo.length > 0 &&
              photo.map((value) => (
                <div key={value.id} className="flex justify-center">
                  <LazyLoadImage
                    className="w-full h-64 object-cover rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
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

export default Contact;
