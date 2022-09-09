import React from "react";
import { PageLayout } from "../components";

const Privacy: React.FC = () => {
  return (
    <PageLayout>
      <div className="w-full h-screen flex flex-col justify-center items-center pt-16">
        <embed
          src="../../DLTx Labs Privacy Policy Mobile.pdf"
          className="w-full h-full"
        />
      </div>
    </PageLayout>
  );
};

export default Privacy;
