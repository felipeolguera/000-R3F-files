import React from "react";

export default function GoawkCaseStudy() {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-10 space-y-16">

      {/* Feature Image */}
      <div >
        <img style={{width: '60%', paddingBottom: '5.5rem'}}
          src="/0.png" // Replace with your actual image path
          alt="GOAWK Dashboard Preview"
          className="w-full rounded-xl shadow-xl mb-8"
        />
      </div>
       <div >
        <img style={{width: '60%', paddingBottom: '4rem', position: 'absolute', top: 50, right: -210}}
          src="/0b.png" // Replace with your actual image path
          alt="GOAWK Dashboard Preview"
          className="w-full rounded-xl shadow-xl mb-8"
        />
      </div>

      {/* Title & Intro */}
      <section  style={{  paddingBottom: '2rem'}}>
        <h2 className="text-4xl font-bold">GOAWK Live Bidding Vendor Dashboard</h2>
        <p className="text-lg text-gray-300">
          Designing a real-time performance dashboard for modern livestream commerce sellers.
        </p>
      </section>

      {/* Remaining Sections */}
      <section  style={{  paddingBottom: '2rem'}}>
        <h3 className="text-2xl font-semibold">Project Overview</h3>
        <p>
          GOAWK is a live-streaming commerce platform for vendors to run real-time product sales. I designed a futuristic, user-centered dashboard giving vendors full visibility over their sales, refunds, inventory, and customer data.
        </p>
        <p className="text-gray-400">
          Tools: Figma, Adobe XD, Webflow, ReactJS, WebGL<br />Role: Senior UX/UI Designer
        </p>
      </section>

      <section  style={{  paddingBottom: '2rem'}}>
        <h3 className="text-2xl font-semibold">The Problem</h3>
        <p>
          Vendors using GOAWK were struggling with scattered tools and lack of real-time performance insights during live selling events. They had no clarity on top customers, refund rates, or regional sales effectiveness.
        </p>
      </section>

      <section  style={{  paddingBottom: '2rem'}}>
        <h3 className="text-2xl font-semibold">User Personas</h3>
        <ul className="space-y-4">
          <li>
            <strong>Aisha – Solo Entrepreneur:</strong> Needs clarity on refunds and real-time metrics. Wants to scale based on data.
          </li>
          <li>
            <strong>Marcus – Enterprise Vendor:</strong> Oversees multiple vendor teams. Needs location breakdown and comparison features.
          </li>
          <li>
            <strong>Leila – First-Time Seller:</strong> Needs an intuitive, friendly interface to track her progress.
          </li>
        </ul>
      </section>

      <section  style={{  paddingBottom: '2rem'}}>
        <h3 className="text-2xl font-semibold">Design Process</h3>
        <p>
          Starting from interviews and user flows, I translated insights into a modular layout. I used a dark UI theme to reduce strain and highlight KPIs, and applied visual hierarchy to guide focus.
        </p>
      </section>

      <section  style={{  paddingBottom: '2rem'}}>
        <h3 className="text-2xl font-semibold">Key Features</h3>
        <ul className="list-disc list-inside">
          <li>Live performance KPIs (Total Sales, Orders, Profit)</li>
          <li>Visual analytics for cancellations, refunds, and location breakdown</li>
          <li>Top customer insights with avatars and revenue data</li>
        </ul>
      </section>

      <section  style={{  paddingBottom: '2rem'}}>
        <h3 className="text-2xl font-semibold">Results</h3>
        <p>
          Vendors reported faster decision-making and greater confidence during live selling. Feedback highlighted clarity of layout and speed of information delivery.
        </p>
      </section>

      <section className="max-w-4xl mx-auto space-y-4 pb-20">
        <h3 className="text-2xl font-semibold">Reflection</h3>
        <p>
          This project reinforced the value of designing for speed, emotion, and simplicity. I learned how to balance business intelligence with engaging visual design, especially under real-time constraints.
        </p>
      </section>
    </div>
  );
}
