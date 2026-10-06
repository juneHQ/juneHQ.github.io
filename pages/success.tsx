import React from "react";
import NextImage from "next/image";
import Head from "next/head";
import dynamic from "next/dynamic";
import { Navbar } from "components/core/navbar/navbar";
import { NewFooter } from "components/core/footer/new-footer";
import { Box } from "@chakra-ui/react";

const Tooltip = dynamic(() => import('components/success/Tooltip'), {
  ssr: false,
});

export default function Success() {
  return (
    <>
      <Head>
        <title>June - Success</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content="June - Success" />
        <meta
          name="description"
          content="Discover how June helps businesses maintain high standards of service and customer experience as they grow."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://june.so/success" />
        <meta property="og:title" content="June - Success" />
        <meta
          property="og:description"
          content="Discover how June helps businesses maintain high standards of service and customer experience as they grow."
        />
        <meta property="og:image" content="https://june.so/social.png" />
        <meta property="twitter:url" content="https://june.so/success" />
        <meta property="twitter:title" content="June - Success" />
        <meta
          property="twitter:description"
          content="Discover how June helps businesses maintain high standards of service and customer experience as they grow."
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content="https://june.so/social.png" />
      </Head>
      <Navbar />
      <Box zIndex="docked" w="100%" maxW="100vw" overflowX="hidden" overflowY="hidden">
        <div className="mx-auto max-w-3xl isolate bg-white px-2 mt-24 sm:pt-16 lg:px-4">
          <h1 className="font-hero text-center mx-auto max-w-[600px] font-black text-primary text-5xl lg:text-6xl pb-16">
            Your customers should feel special
          </h1>
          <div className="bg-purple-50 lg:p-12 p-6 rounded-xl ring-1 ring-inset ring-gray-900/5 text-purple-800">
            <p className="font-bold text-md">October 25th, 2024</p>
            <div className="space-y-6 mt-10 font-hero">
              <p className="mt-6">
                Our mission is to be there when you can't afford to churn that big customer.                
              </p>
              <p className="mt-4">
              This means setting a higher standard for the service you are able to provide — one of intimacy, dedication, and excellence.
              </p>
              <h3 className="font-bold text-lg mt-6">The experience decay</h3>
              <p className="mt-4">Why do your first 10 customers get a better experience than your next 1000?</p>
              <p className="mt-4">
                In the early days of June, we personally onboarded each of our first hundred customers, one by one.
              </p>
              <p className="mt-4">This is not just our story, but a mirror of our own customer's experience.</p>
              <p className="mt-4">
                As growth happens, companies mature and the quality of service seems to inevitably degrade.
              </p>
              <p className="mt-4">
                Once everything is turned into a process we get frustrated that we can't provide the same level of
                experience the first 10 customers got.
              </p>
              <p className="mt-4">Just the thought of this makes a founder’s blood boil.</p>
              <p className="mt-4">
                The way this manifests itself is with surprise churn and customers that never fully activate after
                signing their contracts.
              </p>
              <p className="mt-4">
                We don’t think this decay is a law of nature - and we’re here to help you fight it.
              </p>
              <h3 className="font-bold text-lg mt-6">A new standard for Service</h3>
              <p className="mt-4">
                Why did the idea of <strong>founder mode</strong> resonate so much with the tech industry?
              </p>
              <p className="mt-4">
                Startups have been taught that you're supposed to follow one size fits all playbooks to growth.
              </p>
              <p className="mt-4">
                The hidden cost of these playbooks is that they make you feel that you have to trade intimacy with each
                customer for scale.
              </p>
              <p className="mt-4">We think we can do better.</p>
              <p className="mt-4">
                If in the early days from a shitty apartment in a dodgy part of town you can provide a five star
                customer experience, there's no reason you should be serving corporate slop once you move to a
                brick-walled warehouse in a gentrified neighborhood.
              </p>
              <p className="mt-4">The best companies in the world don't accept this drift to mediocrity.</p>
              <p className="mt-4">
                We've experienced this first hand using products like Deel, where even at a billion dollar scale, Alex
                {' '}
                <Tooltip
                  content={
                    <div className="flex flex-col gap-y-2">
                      <img
                        src="/success/alex-deel-message.png"
                        alt="Deel message reply"
                        className="w-full p-1 rounded-lg"
                      />
                      <div className="flex flex-col px-2 pb-4 gap-y-2">
                        <span className="font-bold text-white text-sm">
                          We can message him or his team on any channel from WhatsApp to live chat
                        </span>
                        <span className="text-gray-300 text-sm">
                          His fast and no-nonsense responses make us feel comfortable and confident that we're in good hands.
                        </span>
                      </div>
                    </div>
                  }
                >
                  <span
                    className="underline decoration-wavy decoration-purple-500 hover:bg-purple-100"
                    style={{ textDecorationThickness: '2px', textUnderlineOffset: '4px' }}
                  >
                    personally replies
                  </span>
                </Tooltip>{' '}
                to customers. Sometimes even from his personal phone number.
              </p>
              <p className="mt-4">
                Or at Stripe, where the team sends{' '}
                <Tooltip
                  content={
                    <div className="flex flex-col gap-y-2">
                      <img
                        src="/success/stripe-gift-tweet.jpg"
                        alt="Stripe gift tweet"
                        className="w-full p-1 rounded-lg"
                      />
                      <div className="flex flex-col px-2 pb-4 gap-y-2">
                        <span className="font-bold text-white text-sm">
                          Stripe sends super personalized gifts
                        </span>
                        <span className="text-gray-300 text-sm">
                          When customers hit a milestone and share it publicly, Stripe sends thoughtful gifts to
                          their customers.
                        </span>
                      </div>
                    </div>
                  }
                >
                  <span
                    className="underline decoration-wavy decoration-purple-500 hover:bg-purple-100"
                    style={{ textDecorationThickness: '2px', textUnderlineOffset: '4px' }}
                  >
                    thoughtful gifts
                  </span>
                </Tooltip>{' '}
                to indie hackers sharing their MRR milestone, like you would do with one of your first customers.
              </p>
              <p className="mt-4">
                Our ambition is to help you keep raising the bar for customer experience as you grow.
              </p>
              <h3 className="font-bold text-lg mt-6">Who we work with</h3>
              <p className="mt-4">
                If you’re serious about building strong, lasting relationships with your users and need a partner to
                help you do it, we’re ready to help.
              </p>
              <p className="mt-4">You should consider working with us if:</p>
              <ul className="list-disc mt-2 pl-4">
                <li>
                  You’re a B2B SaaS company where your users have to be actively using your product.
                  <br />
                  Generally, if you charge your customers per-seat there’s a good fit.
                </li>
                <li className="mt-2">
                  You charge some of your customers at least $50k a year.
                  <br />
                  Basically, preventing a single customer from churning every year or expanding an account successfully
                  will pay back for your subscription.
                </li>
              </ul>
              <p className="mt-4">This is not something for you if:</p>
              <ul className="list-disc mt-2 pl-4">
                <li>
                  Once customers set up your product they never churn.
                  <br />
                  For example, you’re a payment gateway that can’t be easily ripped out.
                </li>
                <li className="mt-2">
                  You don’t make enough money from each of your customers to dedicate time to them individually.
                </li>
              </ul>
              <h3 className="font-bold text-lg mt-6">Our Commitment to You</h3>
              <p className="mt-4">
                A five-star experience. We promise to keep things simple, to always prioritize quality over quantity and
                to give you straight answers with no fluff.
              </p>
              <p className="mt-4">
                We're here to partner with you. Whether that means refining your customer health definitions based on
                usage, building automations to identify key moments in your customer's journey or increasing the
                adoption of highly valuable features. Our priority is to help you make sure your customers get the most
                out of your product.
              </p>
              <p className="mt-4">Your customers deserve better,</p>
              <div>
                <p className="font-bold text-md">The June Team</p>
                <div className="flex mt-10 flex-col gap-y-8">
                  <div className="flex lg:flex-row flex-col gap-6 items-center">
                    <NextImage src="/enz.png" width="150px" height={50} alt="Enzo" />
                    <NextImage src="/ferr.png" width="250px" height={50} alt="Ferruccio" />
                    <NextImage src="/vin.png" width="140px" height={50} alt="Vinayak" />
                  </div>
                  <div className="flex lg:flex-row flex-col gap-6 items-center">
                    <NextImage src="/adis.png" width="140px" height={50} alt="Adis" />
                    <NextImage src="/dan.png" width="140px" height={50} alt="Dan" />
                    <NextImage src="/alberto.png" width="140px" height={50} alt="Alberto" />
                    <NextImage src="/pranav.png" width="140px" height={50} alt="Pranav" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <NewFooter />
      </Box>
    </>
  );
}
