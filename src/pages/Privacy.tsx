import React from "react";
import { PageLayout } from "../components";
import { PrivacyPolicy } from "../assets/index";

const Privacy: React.FC = () => {
  return (
    <PageLayout>
      <div className="w-full h-screen flex flex-col justify-center items-center pt-16">
        <embed src={PrivacyPolicy} className="w-full h-full" />
      </div>
    </PageLayout>
  );
};

export default Privacy;
