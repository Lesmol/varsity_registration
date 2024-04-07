import React from "react";
import Card from "./Features/Card";

function FeatureCards() {
  return (
    <section className="max-w-maximum mx-auto">
      <main className="flex flex-wrap justify-center items-center mt-12">
        <Card
          h1="One click, endless universities."
          p="Applying to as many tertiary institutions you like, without the
          drudgery of re-uploading documents and re-filling forms."
          BIG_ellipse_top={-40}
          BIG_ellipse_right={-40}
          MEDIUM_ellipse_bottom={15}
          MEDIUM_ellipse_right={45}
          SMALL_ellipse_top={20}
          SMALL_ellipse_left={0}
        />
        <Card
          h1="Single payment point."
          p="Pay a single application fee, instead of manually sending payments to
          10 different accounts."
          BIG_ellipse_bottom={0}
          BIG_ellipse_right={16}
          MEDIUM_ellipse_top={15}
          MEDIUM_ellipse_left={45}
          SMALL_ellipse_top={65}
          SMALL_ellipse_right={145}
        />
        <Card
          h1="Early application!!!"
          p="Select your institutions, upload your documents, pay your fee...we'll
          make sure to send your application on the day it opens."
          BIG_ellipse_top={-46}
          BIG_ellipse_left={70}
          MEDIUM_ellipse_top={25}
          MEDIUM_ellipse_right={45}
          A_MEDIUM_ellipse={true}
          A_MEDIUM_ellipse_bottom={30}
          SMALL_ellipse_bottom={50}
          SMALL_ellipse_right={90}
        />
      </main>
    </section>
  );
}

export default FeatureCards;
