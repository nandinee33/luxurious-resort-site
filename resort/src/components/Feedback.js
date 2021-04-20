import React, { Component } from 'react'
import Title from "./Title";
import { MdRateReview } from "react-icons/md";

export default class Services extends Component {

    state = {
        services: [
          {
            icon: <MdRateReview />,
            title: "Naina Gupta",
            info:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
          },
          {
            icon: <MdRateReview />,
            title: "Naina Gupta",
            info:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
          },
          {
            icon: <MdRateReview />,
            title: "Naina Gupta",
            info:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
          },
          {
            icon: <MdRateReview />,
            title: "Naina Gupta",
            info:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
          },
          {
            icon: <MdRateReview />,
            title: "Naina Gupta",
            info:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
          },
          {
            icon: <MdRateReview />,
            title: "Naina Gupta",
            info:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
          },
          {
            icon: <MdRateReview />,
            title: "Naina Gupta",
            info:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
          },
          {
            icon: <MdRateReview />,
            title: "Naina Gupta",
            info:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
          }
          
          
        ]
      };

    render() {
        return (
            <section className="services">
                <Title title="Testimonials" />
                <div className="services-center">
                {this.state.services.map(item => {
                    return (
                    <article key={`item-${item.title}`} className="service">
                        <span>{item.icon}</span>
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
