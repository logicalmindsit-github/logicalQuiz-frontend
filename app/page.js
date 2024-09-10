import React, { Suspense } from "react";

const LazyLandingList = React.lazy(() => import("./LandingPage/LandingList"));
const LazyGridOfCards = React.lazy(() => import("./LandingPage/GridOfCards"));
const LazyVideoPlayer = React.lazy(() => import("./LandingPage/VideoPlayer"));
const LazyTestimonial = React.lazy(() => import("./LandingPage/Testimonial"));
const LazyFooter = React.lazy(() => import("./footercomponent/footer/page"));

const LazyScrollToTopButton = React.lazy(() =>import("./LandingPage/ScrollToTopButton"));

const Page = () => {
  const containerStyle = {
    backgroundColor: "rgb(240, 255, 255)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "100vh",
    position: "relative",
  };

  return (
    <div style={containerStyle}>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyGridOfCards />
        <LazyLandingList />
        <LazyVideoPlayer />
        <LazyTestimonial />
        <LazyScrollToTopButton />
        <LazyFooter />
      </Suspense>
    </div>
  );
};

export default Page;

