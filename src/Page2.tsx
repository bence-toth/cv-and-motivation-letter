import Stripes from "./Stripes";

import {
  FaNpm,
  FaGithub,
  FaPaperPlane,
  FaMobileAlt,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

import "./Page2.css";

import Profile from "./profile.png";

const Page2 = () => (
  <div className="page page2">
    <Stripes />
    <div>
      <div>
        <section>
          <h2>Education</h2>
          <section>
            <section>
              <h3>Web Developer</h3>
              <section>
                <h4>University of West-Hungary</h4>
                <span className="dates">2011 &ndash; 2013</span>
                <p>
                  Specialized in front-end development, internship and thesis
                  about custom CMS development for a competition organized
                  yearly by the Panel on the Elementary IT Education of
                  Budapest. Graduated Summa cum Laude.
                </p>
              </section>
            </section>
            <section>
              <h3>General System Administrator</h3>
              <section>
                <h4>University of West-Hungary</h4>
                <span className="dates">2012 &ndash; 2014</span>
                <p>
                  Specialized in web servers and web database systems,
                  internship and thesis about web-based solutions supporting
                  corporate services and internal communications. Graduated
                  Summa cum Laude.
                </p>
              </section>
            </section>
            <section>
              <h3>Software Engineer</h3>
              <section>
                <h4>Eötvös Loránd University</h4>
                <span className="dates">2006 &ndash; 2009</span>
                <p>
                  Studied data structures and algorithms, functional and
                  object-oriented paradigms, design patterns, UNIX system
                  development, software project management, software life cycle
                  management, calculus, discrete mathematics, linear algebra,
                  formal languages and computational science.
                </p>
                <p>
                  Specialized in mathematical logic, and parallelism in
                  functional programming.
                </p>
                <p>
                  Participated in Scientific Students’ Association working on
                  CERN’s computing grid. Yay Higgs Boson!
                </p>
              </section>
            </section>
          </section>
        </section>
      </div>
      <div>
        <section>
          <h2>Volunteering</h2>
          <section>
            <section>
              <h3>HealHealth</h3>
              <section>
                <h4>Advisor</h4>
                <span className="dates">November 2022 &ndash;</span>
                <p>
                  HealHealth are mental health and digital experts who help
                  mental health professionals to overcome their challenges,
                  facilitate and accelerate their services aiming to improve
                  mental health and wellbeing in the society.
                </p>
              </section>
            </section>
            <section>
              <h3>HackYourFuture</h3>
              <section>
                <h4>Mentor</h4>
                <span className="dates">May 2020 &ndash;</span>
                <p>
                  HackYourFuture supports refugees, asylum seekers and
                  disadvantaged groups with limited access the labour market in
                  acquiring the necessary skills to become web developers.
                </p>
              </section>
            </section>
            <section>
              <h3>Impact Roasters</h3>
              <section>
                <h4>Mentor, Software Engineer</h4>
                <span className="dates">October 2021 &ndash;</span>
                <p>
                  Impact Roasters is a social enterprise striving for the most
                  ethical and sustainable trade model that can bring change to
                  the local communities in Ethiopia, in which their coffee is
                  grown.
                </p>
              </section>
            </section>
            <section>
              <h3>Copenhagen 2021</h3>
              <section>
                <h4>Software Engineer</h4>
                <span className="dates">October 2021 &ndash;</span>
                <p>
                  Copenhagen 2021 was the most significant LGBTI+ event in 2021
                  combining WorldPride, EuroGames, an eclectic arts and culture
                  program, and the biggest ever LGBTQI+ human rights forum.
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
            for
            <br /> further volunteer experience.
          </p>
        </section>
      </div>
    </div>
    <footer>
      <section className="avatar">
        <img className="picture" src={Profile} alt="" />
        <div className="name">Bence A. Tóth</div>
        <div className="pronouns">they/them</div>
      </section>
      <div className="message">
        <span>I’m looking forward to working with you!</span>
      </div>
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
    </footer>
  </div>
);

export default Page2;
