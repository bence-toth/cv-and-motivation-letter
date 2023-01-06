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

const Page1 = () => (
  <div className="page page1">
    <Stripes />
    <div>
      <section className="avatar">
        <img
          className="picture"
          src="https://raw.githubusercontent.com/bence-toth/cv-and-motivation-letter/master/assets/avatar.jpg"
          alt=""
        />
        <div className="name">Bence A. Tóth</div>
        <div className="pronouns">they/them</div>
      </section>
      <section className="profile">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
          quia reiciendis nobis consequuntur delectus. Ut quidem, voluptates
          unde soluta eligendi excepturi rerum nobis, rem atque aspernatur
          beatae quaerat consequuntur totam!
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
        <h2>Work experience</h2>
        <section>
          <section>
            <h3>Zendesk</h3>
            <section>
              <h4>Team Lead in Engineering</h4>
              <span className="dates">October 2021 &ndash;</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                perspiciatis odio, architecto asperiores modi maiores
                praesentium, nemo recusandae porro hic, accusamus dolores. Ipsa
                doloribus accusantium eum commodi quae esse odio.
              </p>
            </section>
            <section>
              <h4>Senior Software Engineer</h4>
              <span className="dates">October 2021 &ndash;</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                perspiciatis odio, architecto asperiores modi maiores
                praesentium, nemo recusandae porro hic, accusamus dolores. Ipsa
                doloribus accusantium eum commodi quae esse odio.
              </p>
            </section>
          </section>
          <section>
            <h3>Agillic</h3>
            <section>
              <h4>Head of Front-End Development</h4>
              <span className="dates">October 2021 &ndash;</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                perspiciatis odio, architecto asperiores modi maiores
                praesentium, nemo recusandae porro hic, accusamus dolores. Ipsa
                doloribus accusantium eum commodi quae esse odio.
              </p>
            </section>
            <section>
              <h4>Senior Software Engineer</h4>
              <span className="dates">October 2021 &ndash;</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                perspiciatis odio, architecto asperiores modi maiores
                praesentium, nemo recusandae porro hic, accusamus dolores. Ipsa
                doloribus accusantium eum commodi quae esse odio.
              </p>
            </section>
          </section>
          <section>
            <h3>Vaavud</h3>
            <section>
              <h4>Head of Front-End Development</h4>
              <span className="dates">October 2021 &ndash;</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                perspiciatis odio, architecto asperiores modi maiores
                praesentium, nemo recusandae porro hic, accusamus dolores. Ipsa
                doloribus accusantium eum commodi quae esse odio.
              </p>
            </section>
          </section>
          <section>
            <h3>Apsis</h3>
            <section>
              <h4>Head of Front-End Development</h4>
              <span className="dates">October 2021 &ndash;</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                perspiciatis odio, architecto asperiores modi maiores
                praesentium, nemo recusandae porro hic, accusamus dolores. Ipsa
                doloribus accusantium eum commodi quae esse odio.
              </p>
            </section>
          </section>
          <section>
            <h3>Celanese</h3>
            <section>
              <h4>Head of Front-End Development</h4>
              <span className="dates">October 2021 &ndash;</span>
            </section>
          </section>
        </section>
      </section>
    </div>
  </div>
);

export default Page1;
