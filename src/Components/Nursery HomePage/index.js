import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ScrollMagic from "scrollmagic";

import {
  Button,
  ContactUs,
  CopyRights,
  FooterWrapper,
  FormulaIcon,
  FormulaItem,
  HeroContent,
  HeroSection,
  HeroSubtitle,
  HeroSvg,
  HeroTitle,
  HowItWorksContainer,
  HowItWorksContent,
  ListStyle,
  PhoneInput,
  PhoneInputWrapper,
  PricingFormula,
  SectionContainer,
  SectionContent,
  SectionTitle,
  ShippingSteps,
} from "./NurseryPageElements";

import heroSvg from "../../Images/illustration.svg";
import logo from "../../Images/logo.svg";

const NurseryPage = () => {
  const controller = new ScrollMagic.Controller();

  useEffect(() => {
    new ScrollMagic.Scene({
      duration: 450,
      triggerElement: "#nursery-section-title",
      triggerHook: 0,
    })
      .setPin("#nursery-section-title")
      .addTo(controller);
  });

  return (
    <>
      <HeroSection>
        <HeroContent>
          <HeroTitle>Grow your business by multiple times</HeroTitle>
          <HeroSubtitle>
            Sell your products and provide services to thoudands of customers
          </HeroSubtitle>
          <PhoneInputWrapper>
            <span>+91</span>
            <PhoneInput
              type="number"
              name="phone"
              id="phone"
              placeholder="Enter your Number"
            />
            <Button>Start Selling</Button>
          </PhoneInputWrapper>
        </HeroContent>
        <HeroSvg src={heroSvg} alt="Hero Section Illustration" />
      </HeroSection>

      {/* How It Works */}
      <HowItWorksContainer id="how-it-works">
        <SectionTitle id="nursery-section-title">
          <h3>How It Works?</h3>
        </SectionTitle>
        <HowItWorksContent>
          <div>
            <div className="heading">Register your account</div>
            <p>To become a seller on Planting.io, all you need is:</p>
            <ul>
              <li>- Verification Document </li>
              <li>- Bank Account</li>
            </ul>
            <p>
              <Link to="/nursery/register">Click here</Link> to create your
              account.
            </p>
            <p>
              Once you complete your registration, our team will verify you
              based on the verification document provided and then you will have
              access to your Nursery Dashboard. You can add your products,
              manage inventory, process orders and check your payment status on
              the Nursery Dashboard.
            </p>
          </div>
          <div>
            <div className="heading">Adding your Product</div>
            <p>
              After completing your registration, you will be able to upload
              your products by logging on to the your dashboard.
            </p>
          </div>
          <div style={{ marginBottom: "0" }}>
            <div className="heading">Order Delivery and Payment</div>
            <div className="subtitle">Product Delivery</div>
            <p>
              When you receive orders for one of your products, Planting.io
              notifies you by email as well as on the Planting.io Nursery
              Dashboard.
            </p>
            <p>
              Please note that Planting.io takes care of the delivery of the
              product to the customer at zero cost to you. We have tied up with
              multiple Logistics Partners who pick the products from your
              location and deliver it straight to the customer.
            </p>
            <p>
              After receiving an order, please your dashboard and do the
              following steps: <br />
              - Accept your order <br />
              - Pack the product <br />- Hand over the product to our logistics
              partners
            </p>
            <div className="subtitle" style={{ marginTop: "2rem" }}>
              Payment for orders
            </div>
            <p>
              Payment for your sales is deposited securely into your bank
              account within 15 days from order delivery. <br />
              <br />
              For e.g. if your product is successfully delivered on 1st January
              2021, money for that product will be deposited in your bank
              account on 16th January 2021.
              <br />
              <br /> You can view your deposited balance along with future
              payments and other things in your dashboard.{" "}
              <a href="#pricing-commission">
                <br />
                Click here
              </a>{" "}
              to learn more about Pricing and Commission on Planting.io
            </p>
          </div>
        </HowItWorksContent>
      </HowItWorksContainer>

      {/* Pricing & Commission */}
      <SectionContainer id="pricing-commission">
        <h3 className="title">Pricing & Commission</h3>
        <div className="subtitle">How much do you get paid?</div>
        <PricingFormula>
          <FormulaItem>
            <div className="formula-title">Settlement Amount</div>
            <p className="formula-caption">
              Deposited to your bank account on 15th day of order delivery
            </p>
          </FormulaItem>
          <FormulaIcon>=</FormulaIcon>
          <FormulaItem>
            <div className="formula-title">Product Price</div>
            <div className="formula-caption">
              Price you decide to share with Planting.io
            </div>
          </FormulaItem>
          <FormulaIcon>-</FormulaIcon>
          <FormulaItem>
            <div className="formula-title">1% (Commission fee)</div>
            <div className="formula-caption">Percentage of product price</div>
          </FormulaItem>
          <FormulaIcon>-</FormulaIcon>
          <FormulaItem>
            <div className="formula-title">GST</div>
            <div className="formula-caption">18% GST on Commission Fee</div>
          </FormulaItem>
        </PricingFormula>
        <SectionContent>
          <div className="subtitle">Payment Cycle</div>
          <p>
            Settlement Amount is deposited securely into your bank account on
            15th day of order delivery.
            <br />
            For e.g. if your product is delivered on 1st Jan 2021, settlement
            amount for that product will be deposited in your bank account on
            16th Jan 2021.
          </p>
        </SectionContent>
      </SectionContainer>

      {/* Shipping & Returns */}
      <SectionContainer id="shipping-returns" style={{ marginBottom: "4rem" }}>
        <h3 className="title">Shipping & Returns</h3>
        <SectionContent>
          <div>
            <div className="subtitle">Shipping</div>
            <p>
              Planting.io takes care of delivering the product to the customer
              at the lowest shipping costs to the supplier. We have tied up with
              multiple Logistics Partners who pick the products from your
              location and deliver it straight to the customer.
            </p>
          </div>
          <div>
            <div className="subtitle">Steps in shipping your order</div>
            <ShippingSteps>
              <li>
                <ListStyle>1</ListStyle>
                <p className="step-info">
                  <strong>
                    Manage and process your order from Planting.io Nursery
                    Dashboard
                  </strong>
                  <br />
                  You need to do the below on the Planting.io nursery dashboard
                  in order to process your order. <br />- Accept your order
                  <br />- Download label
                </p>
              </li>
              <li>
                <ListStyle>2</ListStyle>
                <p className="step-info">
                  <strong>
                    Pack your products and keep it ready for pick-up
                  </strong>
                  <br />
                  Procure plain packaging material with no branding and ensure
                  that the product is packed properly.
                </p>
              </li>
              <li>
                <ListStyle>3</ListStyle>
                <p className="step-info">
                  <strong>
                    Hand over your packed product to the Meesho delivery partner
                  </strong>
                  <br />
                  Our delivery partner will come to your doorstep to pick your
                  order and will deliver it directly to the customer.
                </p>
              </li>
            </ShippingSteps>
          </div>
          <div>
            <div className="subtitle">Dispatch Timeline</div>
            <p>
              You need to dispatch the orders within the agreed time provided by
              you (generally 2-3 days from receiving the order) to avoid any
              late dispatch penalty. You will be able to check the time allowed
              for dispatching your orders on your dashboard.
            </p>
          </div>
          <div>
            <div className="subtitle">Product Returns</div>
            <p>
              We have a no questions asked policy for our customers within 7
              days of product delivery. This creates greater trust for a
              customer to place orders with us.
            </p>
          </div>
        </SectionContent>
      </SectionContainer>

      {/* Footer */}
      <footer>
        <FooterWrapper>
          <div>
            <img src={logo} alt="" />
          </div>
          <ContactUs>
            {" "}
            <p>Contact Us:</p>
            <a
              href="mailto:contact@planting.io"
              target="_blank"
              rel="noreferrer"
            >
              contact@planting.io
            </a>
          </ContactUs>
        </FooterWrapper>
        <CopyRights>Planting.io &copy; 2021. All rights reserved.</CopyRights>
      </footer>
    </>
  );
};

export default NurseryPage;
