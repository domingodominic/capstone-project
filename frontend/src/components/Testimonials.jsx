import React from "react";
import { MySwiper } from "../reusable component/Swiper";

function Testimonials() {
  const testimonialsData = [
    {
      profile:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
      comment: "Great service! The photographer was very professional.",
      ratingValue: 5,
      fullname: "John Doe",
    },
    {
      profile:
        "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600",
      comment: "Amazing experience, highly recommend!",
      ratingValue: 5,
      fullname: "Jane Smith",
    },
    {
      profile:
        "https://images.pexels.com/photos/8159657/pexels-photo-8159657.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=252&fit=crop&h=408",
      comment: "Loved the studio setup, will book again.",
      ratingValue: 4,
      fullname: "Emily Johnson",
    },
    {
      profile:
        "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=600",
      comment: "The photos turned out beautiful. Thank you!",
      ratingValue: 5,
      fullname: "Michael Brown",
    },
    {
      profile:
        "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=600",
      comment: "Good service, but the session started a bit late.",
      ratingValue: 4,
      fullname: "Sarah Davis",
    },
    {
      profile:
        "https://images.pexels.com/photos/1547971/pexels-photo-1547971.jpeg?auto=compress&cs=tinysrgb&w=600",
      comment: "Very professional and friendly staff.",
      ratingValue: 5,
      fullname: "David Wilson",
    },
    {
      profile:
        "https://images.pexels.com/photos/1484810/pexels-photo-1484810.jpeg?auto=compress&cs=tinysrgb&w=600",
      comment: "The photographer captured exactly what I wanted!",
      ratingValue: 5,
      fullname: "Laura Martinez",
    },
    {
      profile:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
      comment: "A wonderful experience from start to finish.",
      ratingValue: 5,
      fullname: "James Anderson",
    },
  ];

  return (
    <section>
      <h1
        style={{ textAlign: "center", fontFamily: "Kadwa", color: "#cdab01" }}
      >
        Testimonials
      </h1>
      <MySwiper purpose="testimonials" data={testimonialsData} />
    </section>
  );
}

export default Testimonials;
