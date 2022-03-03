import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/FullWidthWithImage.js";
import Features from "components/features/ThreeColSimple.js";
import MainFeature from "components/features/TwoColSingleFeatureWithStats.js";
import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2";
import MainFeature3 from "components/features/ThreeColCenteredStatsPrimaryBackground";
import SliderCard from "components/cards/ThreeColSlider.js";
import Form from "components/forms/SimpleContactUs";
import Blog from "components/blogs/PopularAndRecentBlogPosts.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
import FAQ from "components/faqs/SimpleWithSideImage.js";
import SubscribeNewsLetterForm from "components/forms/SimpleSubscribeNewsletter.js";
import Footer from "components/footers/FiveColumnWithInputForm";

export default () => (
  <AnimationRevealPage
  >
    <div 
    style={{
      backgroundColor:'#f4fbff'
    }}
    >
      <Hero />
      <MainFeature2
        subheading=""
      />
      <SliderCard />
      <MainFeature3 />
      <Testimonial />
      <Form />
      <Footer />
    </div>
  </AnimationRevealPage>
);
