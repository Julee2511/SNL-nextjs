"use client"
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlickSlider = () => {
    const settings = {
        autoplay: true,
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 479, // Adjust breakpoint as needed
                settings: {
                    slidesToShow: 1, // Change slidesToShow for smaller screens
                },
            },
            {
                breakpoint: 1024, // Adjust breakpoint as needed
                settings: {
                    slidesToShow: 2, // Change slidesToShow for smaller screens
                },
            },
        ],
    };

};

export default SlickSlider;
