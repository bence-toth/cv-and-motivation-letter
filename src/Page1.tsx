import Stripes from "./Stripes";

import {
  FaNpm,
  FaGithub,
  FaPaperPlane,
  FaMobileAlt,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

import "./Page1.css";

import Profile from "./profile.png";

const Page1 = () => (
  <div className="page page1">
    <Stripes />
    <div>
      <section className="avatar">
        <img className="picture" src={Profile} alt="" />
        <div className="name">Bence A. Tóth</div>
        <div className="pronouns">they/them</div>
      </section>
      <section className="profile">
        <p>
          Engineering lead, front-end developer, software architect, mentor,
          teacher, volunteer, OSS advocate, functional programming enthusiast,
          a11y and i18n nerd, CSS ninja.
        </p>
        <p>
          I build software and relation&shy;ships. I thrive in teams fueled by
          the urge to experiment and innovate. Always ready to col&shy;laborate,
          teach, learn, and listen. I have high moral and ethical sensitivity, I
          value diversity, honesty, and trans&shy;parency. I take initiative and
          challenge the status quo. I am always eager to reach my full
          potential, and empower others to do the same.
        </p>
        <p>
          I believe that whatever you do, empathy and compassion will go a long
          way. Be a decent human, and everything else will fall in place.
        </p>
      </section>
      <section className="contact">
        <ul>
          <li>
            <span className="icon">
              <FaMobileAlt />
            </span>
            <a href="tel:+4527858025" target="_blank" rel="noopener noreferrer">
              +45 27 85 80 25
            </a>
          </li>
          <li>
            <span className="icon">
              <FaPaperPlane />
            </span>
            <a
              href="mailto:tothab@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              tothab@gmail.com
            </a>
          </li>
          <li>
            <span className="icon">
              <FaLinkedin />
            </span>
            <a
              href="https://www.linkedin.com/in/bence-a-toth/"
              target="_blank"
              rel="noopener noreferrer"
            >
              in/bence-a-toth
            </a>
          </li>
          <li>
            <span className="icon">
              <FaGithub />
            </span>
            <a
              href="https://github.com/bence-toth"
              target="_blank"
              rel="noopener noreferrer"
            >
              bence-toth
            </a>
          </li>
          <li>
            <span className="icon">
              <FaNpm />
            </span>
            <a
              href="https://www.npmjs.com/~bence.a.toth"
              target="_blank"
              rel="noopener noreferrer"
            >
              bence.a.toth
            </a>
          </li>
          <li>
            <span className="icon">
              <FaMapMarkerAlt />
            </span>
            Copenhagen, Denmark
          </li>
        </ul>
      </section>
    </div>
    <div>
      <section>
        <h2>Recent work experience</h2>
        <section>
          <section>
            <h3>Zendesk</h3>
            <section>
              <h4>Team Lead in Engineering</h4>
              <span className="dates">Mar 2021 &ndash;</span>
              <h4>Senior Software Engineer</h4>
              <span className="dates">May 2020 &ndash; Mar 2022</span>
              <p>
                Assembled and lead a cross-functional remote team building and
                maintaining a strategic innovation project bridging multiple
                Zendesk products, used by tens of thousands of agents daily,
                enabling them to utilise knowledge to service their customers
                with ease. Served on the Social Impact committee since 2022.
              </p>
            </section>
          </section>
          <section>
            <h3>Agillic</h3>
            <section>
              <h4>Head of Front-End Development</h4>
              <span className="dates">Jan 2019 &ndash; Mar 2020</span>
              <h4>Software Architect, Front-End Lead</h4>
              <span className="dates">Jul 2017 &ndash; Jan 2019</span>
              <p>
                Drove front-end architecture, feature design and development
                processes of the region’s first choice marketing automation
                platform. Built and managed a team of 6 developers while acting
                as tech lead. Mentored and coached multiple junior developers
                and interns, acted as SCRUM master of a cross-functional team of
                10. Lead the company’s OSS programme.
              </p>
            </section>
          </section>
          <section>
            <h3>Vaavud</h3>
            <section>
              <h4>Front-End Developer</h4>
              <span className="dates">Nov 2016 &ndash; Jun 2017</span>
              <p>
                Was in charge of progressive web applications and websites of
                the innovative tech start-up developing wind meters for smart
                phones and using the collected data for weather forecasting.
              </p>
            </section>
          </section>
          <section>
            <h3>Apsis</h3>
            <section>
              <h4>Front-End Developer</h4>
              <span className="dates">Jan 2016 &ndash; Nov 2016</span>
              <p>
                Developed new innovative features to lead generation and
                marketing automation products in a small engineering team,
                introducing various new product capabilities while focusing on
                product maintainability at scale.
              </p>
            </section>
          </section>
          <section>
            <h3>Celanese</h3>
            <section>
              <h4>Front-End Developer</h4>
              <span className="dates">October 2013 &ndash; Dec 2015</span>
              <p>
                Integrated big data, CRM, and lead generation platforms.
                Developed and maintained global, international and
                product-specific corporate websites, developed landing pages,
                respon&shy;sive emails and mobile applications for digital
                communication campaigns. Mentored junior developers, and managed
                interns.
              </p>
            </section>
          </section>
        </section>
        <p className="read-more">
          View{" "}
          <a
            href="https://www.linkedin.com/in/bence-a-toth/"
            target="_blank"
            rel="noopener noreferrer"
          >
            my LinkedIn profile
          </a>{" "}
          for further work experience.
        </p>
      </section>
    </div>
  </div>
);

export default Page1;
