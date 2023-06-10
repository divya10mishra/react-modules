import React, { useState } from "react";
import CarouselCard from "./carouselCard";


function carousel() {
  const data = [
    {
      picture:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ynjihgahhoga3oncp5py",
      title: "image2",
      id: "987",
    },
    {
      picture:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/126ea26268daed2437a1f243cb315ea8",
      title: "image1",
      id: "678",
    },
    {
      picture:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/itgg7ha1ewpq1iwdgc0e",
      title: "image3",
      id: "563",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (currIndex) => {
    if (currIndex < 0) {
      currIndex = 0;
    } else if (currIndex >= data.length) {
      currIndex = data.length - 1;
    }
    setActiveIndex(currIndex);
  };

  return (
    <>
      <section style={{ display: "flex" }}>

      <h2>Carousel</h2>
        <article
          className="carousel-container"
          style={{
            display: "flex",
            transform: `translate(-${activeIndex * 30}%)`,
          }}
        >
          {/* {Array(10)
               .fill('')
               .map((_,index)=>{
                return <CarouselCard num={activeIndex }/>
               })
               } */}
          {/* {data?.map((item, index) => {
            return <CarouselCard key={item.id} details={item} />;
          })} */}
           <CarouselCard details={data} ind={activeIndex}/>;
        </article>    
      </section>

      <section
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <button
          style={{
            alignSelf: "center",
          }}
        //   onClick={() => {
        //     updateIndex(activeIndex - 1);
        //   }}
        onClick={()=>setActiveIndex(activeIndex-1)}
        >
          👈
        </button>

        <button
          style={{
            alignSelf: "center",
          }}
        //   onClick={() => {
        //     updateIndex(activeIndex + 1);
        //   }}
        onClick={()=>setActiveIndex(activeIndex+1)}
        >
          👉
        </button>
      </section>
    </>
  );
}

export default carousel;
