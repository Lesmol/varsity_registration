import React from "react";
import Card from "./Features/Card";

function FeatureCards() {
  return (
    <div className="flex justify-center items-center mx-auto mt-12">
      <Card
        h1="One click, endless universities."
        p="Applying to as many tertiary institutions you like, without the
          drudgery of re-uploading documents and re-filling forms."
      />
      <Card
        h1="Single payment point."
        p="Pay a single application fee, instead of manually sending payments to
          10 different accounts."
      />
      <Card
        h1="Early application!!!"
        p="Select your institutions, upload your documents, pay your fee...we'll
          make sure to send your application on the day it opens."
      />
    </div>
  );
}

export default FeatureCards;
