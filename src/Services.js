import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
import "./App.css";

const Services = () => {
  return (
    <div>
      <h1>Here's how I can help.</h1>
      <nav className="ServiceNav">
        <ol>
          <li>
            <Link className="Link" to="#fb">
              Facebook Ads
            </Link>
          </li>
          <li>
            <Link className="Link" to="#app-dev">
              Custom Development
            </Link>
          </li>
          <li>
            <Link className="Link" to="#pm">
              Product and Technical Product Management{" "}
            </Link> 
          </li>
          <li>
            <Link className="Link" to="#crm">
              CRM Implementation and Customization
            </Link>
          </li>
        </ol>
      </nav>
      <h2 id="fb">Facebook Advertising and Commerce Integrations</h2>
      <p>
        While at Facebook, I{" "}
        <span className="semi-bold">
          {" "}
          built the Facebook Marketing for Technical Services Advanced API
          Course and Certification
        </span>
        . I also worked closely with the product teams related to signals
        (offline conversions, server-side events, and pixel), targeting (custom
        audiences), and lead generation, and worked with some of Facebook's
        largest clients and partners to get these integrations off the ground.
      </p>
      <p>
        The most common reason marketers did not setup these advanced Facebook
        Integrations was lack of technical resources. I can help
      </p>
      <ul>
        <li>Offline Conversions</li>
        <li>Pixel</li>
        <li>Server-side Events</li>
        <li>Custom Audience Integrations</li>
        <li>Catalog</li>
        <li>Instagram Shopping</li>
        <li>Dynamic Ads</li>
        <li>Collaborative Ads</li>
      </ul>
      <iframe
        title="dynamic ads example"
        src="https://player.vimeo.com/video/427478359?autoplay=1&loop=1"
        height="300"
        width="600"
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
      ></iframe>
      <h2 id="app-dev">Custom Development</h2>
      <p>
        With experience across multiple tech stacks, I'm here to help if you
        need an engineer to ramp up quickly and ship code.
      </p>
      <h3>Languages and frameworks I've used professionally </h3>

      <div className="Tech-flex">
        <div className="Tech">
          <h4>Front-end</h4>
          <ul>
            <li>JavaScript</li>

            <li> ReactJS </li>
            <li> AngularS </li>
            <li> Bootstrap </li>
            <li> Material Design </li>
            <li> Electron </li>
            <li> WPF</li>
            <li>TypeScript</li>
          </ul>
        </div>
        <div className="Tech">
          <h4>Back-end</h4>
          <ul>
            <li>C#</li>
            <li>Java</li>
            <li>Hack</li>
            <li>WebAPI</li>
            <li>Spring</li>
          </ul>
        </div>
        <div className="Tech">
          <h4>Data</h4>
          <ul>
            <li>Spark</li>
            <li>Hadoop</li>
            <li>Hive</li>
            <li>SQL</li>
            <li>MySQL</li>
            <li>MongoDB</li>
          </ul>
        </div>
      </div>
      <h2 id="pm">Product and Technical Product Management</h2>
      <p>Having worked as a PM at Microsoft, I can help </p>
      <ul>
        <li>Organizing workstreams, deliverables, and releases</li>
        <li>
          Keeping your engineering team focused by prioritizing the
          highest-impact work
        </li>
        <li>
          Performring market research, long-term roadmapping, and spec'ing out
          new features{" "}
        </li>
      </ul>
      <h2 id="crm">CRM Customization and Implementation</h2>
      <p>
        I have developed CRM systems for several Fortune 500 companies using
        both Microsoft Dynamics, Salesforce, and entirely custom. I can help
      </p>
      <ul>
        <li>Develop plugins and workflows</li>
        <li>Product/data integrations</li> 
        <li>Completely custom UIs </li>
      </ul>
    </div>
  );
};
export default Services;
