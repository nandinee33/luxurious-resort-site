import React, { Component } from 'react'
import Title from "./Title";
import unnati from "../images/teamNdTestimonials/Unnati.jpeg";
import roshni from "../images/teamNdTestimonials/Roshni.jpg";
import saumya from "../images/teamNdTestimonials/Saumya.jpg";
import nandinee from "../images/teamNdTestimonials/Nandinee.jpg";

export default class Services extends Component {

    state = {
        services: [
          {
            icon: nandinee,
            title: "Nandinee Gupta",
            info:
              "Frontend and backend Developer"
          },
          {
            icon: saumya,
            title: "Saumya Gupta",
            info:
            "Frontend and backend Developer"
          },
          {
            icon: unnati,
            title: "Unnati Goyal",
            info:
            "Frontend and backend Developer"
          },
          {
            icon: roshni,
            title: "Roshni Rawat",
            info:
            "Frontend and backend Developer"
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
