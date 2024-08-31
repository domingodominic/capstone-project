import React from "react";
import ReserveATableBtn from "../reusable component/ReserveATableBtn";
import { MySwiper } from "../reusable component/Swiper";

function Highlights({ availableTimes }) {
  console.log("Available times from hughlights ", availableTimes);
  const highlightsData = [
    {
      foodName: "Salad",
      foodPrice: 300,
      foodDescription:
        " A crisp, refreshing mix of fresh greens, colorful veggies, and a light, tangy dressing.",
      foodPicture:
        "https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      foodName: "Sisig",
      foodPrice: 800,
      foodDescription:
        " A sizzling Filipino dish made with chopped pork, onions, and chili, served with a zesty kick.",
      foodPicture:
        "https://images.pexels.com/photos/27352272/pexels-photo-27352272/free-photo-of-sisg.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      foodName: "Adobo",
      foodPrice: 850,
      foodDescription:
        " A sizzling Filipino dish made with chopped pork, onions, and chili, served with a zesty kick.",
      foodPicture:
        "https://images.pexels.com/photos/6525933/pexels-photo-6525933.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      foodName: "Pares",
      foodPrice: 50,
      foodDescription:
        " A pares Filipino dish made with a pork or pork, onions, and chili.",
      foodPicture:
        "https://images.pexels.com/photos/15780649/pexels-photo-15780649/free-photo-of-mexican-menudo-soup-in-white-bowl.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      foodName: "Salad",
      foodPrice: 300,
      foodDescription:
        " A crisp, refreshing mix of fresh greens, colorful veggies, and a light, tangy dressing.",
      foodPicture:
        "https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      foodName: "Sisig",
      foodPrice: 800,
      foodDescription:
        " A sizzling Filipino dish made with chopped pork, onions, and chili, served with a zesty kick.",
      foodPicture:
        "https://images.pexels.com/photos/27352272/pexels-photo-27352272/free-photo-of-sisg.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      foodName: "Adobo",
      foodPrice: 850,
      foodDescription:
        " A sizzling Filipino dish made with chopped pork, onions, and chili, served with a zesty kick.",
      foodPicture:
        "https://images.pexels.com/photos/6525933/pexels-photo-6525933.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      foodName: "Pares",
      foodPrice: 50,
      foodDescription:
        " A pares Filipino dish made with a pork or pork, onions, and chili.",
      foodPicture:
        "https://images.pexels.com/photos/15780649/pexels-photo-15780649/free-photo-of-mexican-menudo-soup-in-white-bowl.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  const headingStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "0 5rem",
  };
  return (
    <section style={{ margin: "2rem 0" }}>
      <div style={headingStyle}>
        <h1 style={{ fontFamily: "Kadwa", color: "#CDAB01" }}>Specials</h1>
        <ReserveATableBtn />
      </div>
      <MySwiper
        purpose="highlights"
        data={highlightsData}
        availableTimes={availableTimes}
      />
    </section>
  );
}

export default Highlights;
