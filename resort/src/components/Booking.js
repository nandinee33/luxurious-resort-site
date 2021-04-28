import React, { Component } from 'react'
import Title from "./Title";
import { Link } from "react-router-dom";
import { GiBank } from "react-icons/gi";

export default class Booking extends Component {

    state = {
        booking: [
          {
            icon: <GiBank />,
            title: "UPI Pay"
          },
          {
            icon: <GiBank />,
            title: "Google Pay"
          },
          {
            icon: <GiBank />,
            title: "Paytm"
          },
          {
            icon: <GiBank />,
            title: "Net Banking",

          }
        ]
      };

    render() {
        return (
            <section className="services">
                <Title title="payment Modes" />
                <div className="services-center">
                {this.state.booking.map(item => {
                    return (
                    <article key={`item-${item.title}`} className="service">
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <Link to="/comingsoon" className="btn-primary">Pay Now</Link>
                    </article>
                    );
                })}
                </div>
            </section>
        )
    }
}
