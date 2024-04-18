import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from 'react'
import List from '../../public/List.json'
import Cards from "./Cards";


function FreeBook() {
    // InOrder to show data from json first you have to filter the data using 'filter()' method
    // then you have to 'map()' the data in order to display all items in a loop
    const filterData = List.filter((item)=>item.category === "Free");
    

    var settings = {
    dots:true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }}]
    }
      
    

  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white'>
        <h1 className='font-semi-bold text-xl pb-2'>Free Offered Courses</h1>
        <p className='font-thin mb-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, magni consequatur dolore doloremque optio beatae?</p>

        <div>
        {/* Now we have to map the data using 'map()' method in order to display all items in a loop */}
        {/* Below 'item' is nothing but props importing parent data to child component */}
        <Slider {...settings}>
        {filterData.map((item)=>(
            <Cards  item={item} key={item.id}/>
        ))}
      </Slider>
        </div>
    </div>
    
  )
}

export default FreeBook
