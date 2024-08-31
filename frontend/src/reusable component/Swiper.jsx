// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import quoteICON from "./../assets/Get Quote.png";
import { useNavigate } from "react-router-dom";

export const MySwiper = ({ purpose, data, availableTimes }) => {
  const navigate = useNavigate();

  console.log("Available timess fetch from swiper is ", availableTimes);
  return (
    <>
      {purpose === "highlights" ? (
        <Swiper
          spaceBetween={30}
          slidesPerView={4}
          style={{ padding: "1rem", margin: "0 4rem" }}
        >
          {data?.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="swiperslide--container">
                <img src={item.foodPicture} alt="food image" height={200} />
                <div className="content">
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <h3 style={{ color: "#CDAB01" }}>{item.foodName}</h3>
                    <h3
                      style={{
                        backgroundColor: "#CDAB01",
                        padding: "0 .3rem",
                        color: "white",
                      }}
                    >
                      ₱ {item.foodPrice}
                    </h3>
                  </div>
                  <p style={{ marginTop: ".6rem", color: "gray" }}>
                    {item.foodDescription}
                  </p>
                  <button
                    style={{
                      position: "absolute",
                      bottom: 10,
                      border: "none",
                      backgroundColor: "#3F3F3F",
                      color: "white",
                      padding: ".5rem 1rem",
                      borderRadius: ".3rem",
                      cursor: "pointer",
                    }}
                    onClick={() => navigate("/booking")}
                  >
                    Order a delivery
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Swiper
          spaceBetween={40}
          slidesPerView={3}
          style={{ padding: "1rem", margin: "0 4rem" }}
        >
          {data?.map((item, i) => (
            <SwiperSlide
              key={i}
              style={{
                textAlign: "center",
                boxShadow: "0 0 5px #cfcfcf",
                borderRadius: ".3rem",
                padding: "1rem",
                position: "relative",
                minHeight: "300px",
              }}
            >
              <img
                src={item.profile}
                alt="user profile"
                width={100}
                height={100}
                style={{ borderRadius: "100%", objectFit: "cover" }}
              />
              <div style={{ position: "relative", marginTop: "4rem" }}>
                <p>{item.comment}</p>
                <div
                  style={{
                    position: "absolute",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: "-1",
                    paddingBottom: "1rem",

                    width: "100%",
                    height: "100%",
                    bottom: 0,
                    left: 0,
                  }}
                >
                  <img src={quoteICON} width={150} />
                </div>
              </div>

              <div
                style={{
                  position: "relative",
                  bottom: 0,
                  textAlign: "center",
                  width: "100%",
                }}
              >
                <img
                  src={
                    "https://www.pngplay.com/wp-content/uploads/6/5-Star-Rating-Review-Transparent-PNG-420x102.png"
                  }
                  alt="ratings"
                  width={150}
                />
                <p style={{ color: "#cdab01" }}>{item.fullname}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};
