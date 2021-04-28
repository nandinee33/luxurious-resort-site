import React, { Component } from 'react'
import Title from "./Title";
import unnati from "../images/teamNdTestimonials/Unnati.jpeg";
import roshni from "../images/teamNdTestimonials/Roshni.jpeg";
import saumya from "../images/teamNdTestimonials/Saumya.jpeg";
import nandinee from "../images/teamNdTestimonials/Nandinee.jpeg";

export default class Services extends Component {

    state = {
        services: [
          {
            icon: nandinee,
            title: "Nandinee Gupta",
            info:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
          },
          {
            icon: saumya,
            title: "Saumya Gupta",
            info:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
          },
          {
            icon: unnati,
            title: "Unnati Goyal",
            info:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
          },
          {
            icon: roshni,
            title: "Roshni Rawat",
            info:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
          },
         
          
          
        ]
      };

    render() {
        return (
            <section className="services">
                <Title title="Our Team" />
                <div className="services-center">
                {this.state.services.map(item => {
                    return (
                    <article key={`item-${item.title}`} className="service">
                      <div className="testimonial-imgs">
                        <img src={item.icon}/>
                        </div>
                        {/* <span>{item.icon}</span> */}
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                    </article>
                    );
                })}
                </div>
            </section>
        )
    }
}
