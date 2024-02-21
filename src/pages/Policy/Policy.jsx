import React from "react";
import SinglePage from "../../shared/SinglePage/SinglePage";

const Policy = () => {
  return (
    <div>
      <SinglePage pageTitle={"Privacy Policy of AST Bangladesh"}>
        <div className="flex flex-col gap-5 p-5">
          <p className="font-jura text-base md:text-2xl font-bold">
            At AST Bangladesh, we are committed to protecting your privacy and
            ensuring the security of your personal information. This Privacy
            Policy outlines how we collect, use, and safeguard your data when
            you interact with our brand and use our services.
          </p>
          <p className="font-jura text-base md:text-2xl font-bold">
            1. *Information Collection:* <br />- We may collect personal
            information such as your name, contact details, address, and payment
            information when you place an order or engage with our website or
            other platforms. <br />- We may also collect non-personal
            information such as demographic data, preferences, and browsing
            history to improve our services and tailor our offerings to better
            meet your needs.
          </p>
          <p className="font-jura text-base md:text-2xl font-bold">
            2. *Use of Information:*
            <br /> - We use the information we collect to process orders,
            provide customer support, improve our products and services, and
            communicate with you about promotions, updates, and other relevant
            information. <br /> - Your personal information may also be used for
            internal purposes such as analytics, research, and marketing efforts
            to enhance your experience with AST Bangladesh.
          </p>
          <p className="font-jura text-base md:text-2xl font-bold">
            3. *Data Security:* <br /> - We employ industry-standard security
            measures to protect your personal information from unauthorized
            access, disclosure, alteration, or destruction. <br /> - Your
            payment information is encrypted using secure socket layer
            technology (SSL) and stored securely in compliance with PCI-DSS
            standards.
          </p>
          <p className="font-jura text-base md:text-2xl font-bold">
            4. *Third-Party Disclosure:* <br /> - We may share your information
            with trusted third-party service providers who assist us in
            operating our website, conducting business, or servicing you. These
            partners are contractually obligated to keep your information
            confidential and secure. <br /> - We may also disclose your
            information when required by law or to protect our rights, property,
            or safety, or that of others.
          </p>
          <p className="font-jura text-base md:text-2xl font-bold">
            5. *Cookies and Tracking Technologies:* <br /> - We use cookies and
            similar tracking technologies to enhance your browsing experience,
            analyze website traffic, and personalize content and advertisements.
            You have the option to disable cookies through your browser
            settings, although this may impact your ability to access certain
            features of our website.
          </p>
          <p className="font-jura text-base md:text-2xl font-bold">
            6. *Your Rights and Choices:* <br /> - You have the right to access,
            correct, or delete your personal information held by AST Bangladesh.
            You may also opt out of receiving marketing communications from us
            at any time. <br /> - Please contact us if you have any questions or
            concerns regarding your privacy rights or our data practices.
          </p>
          <p className="font-jura text-base md:text-2xl font-bold">
            7. *Changes to the Privacy Policy:* <br /> - We reserve the right to
            update or modify this Privacy Policy at any time. We will notify you
            of any changes by posting the revised policy on our website. Your
            continued use of our services after such changes constitute your
            acceptance of the updated policy.
          </p>
        </div>
      </SinglePage>
    </div>
  );
};

export default Policy;
