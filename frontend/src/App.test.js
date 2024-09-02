import { render, screen } from "@testing-library/react";
import BookingForm from "./components/booking components/BookingForm";
import App from "./App";

jest.mock("swiper/react", () => ({
  Swiper: () => <div>Mocked Swiper</div>,
  SwiperSlide: () => <div>Mocked Swiper Slide</div>,
}));

test("Renders the BookingForm heading", () => {
  render(<BookingForm />);
  w;
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});
