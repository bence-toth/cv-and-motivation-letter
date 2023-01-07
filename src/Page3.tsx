import Stripes from "./Stripes";
import Signature from "./signature.png";

import "./Page3.css";

const Page3 = () => (
  <div className="page page3">
    <Stripes />
    <div>
      <h2>Motivation letter</h2>
      <p>
        <strong>Dear hiring manager,</strong>
      </p>
      <p>
        I am writing to express my strong interest in the Engineering Manager
        role at Spotify. As a software engineer with over 19 years of experience
        and a background in mentoring and leading inclusive and diverse
        engineering teams, I believe that my skills and experience make me a
        great fit for this position.
      </p>
      <p>
        Throughout my career, I have been driven by my passion for software
        engineering and leadership, as well as my commitment to honesty and
        empowering my team members. These values, along with my track record of
        fostering strong engineering cultures and driving high-quality
        deliveries in an agile environment, make me excited about the
        opportunity to join the Experimentation Platform team at Spotify.
      </p>
      <p>
        As a company known for its commitment to innovation and inclusivity, I
        believe that Spotify is the perfect place for me to continue growing as
        a leader and making a meaningful contribution to the industry. I am
        particularly drawn to the mission of Spotify and the chance to help
        unlock the potential of human creativity by giving creative artists the
        opportunity to live off their art and providing billions of fans the
        chance to enjoy and be passionate about these creators.
      </p>
      <p>
        In my role as Engineering Manager, I hope to bring my leadership
        experience and technical expertise to the table in order to support a
        highly effective engineering team. I believe that empowering my team
        members and fostering an inclusive work environment built on mutual
        trust and support are crucial for driving innovation and success, and I
        am excited about the opportunity to contribute to Spotify’s journey of
        innovation in this way.
      </p>
      <p>
        Thank you for considering my application. I am confident that my skills
        and experience make me a great fit for this role and I am eager to join
        the Spotify team and make a positive impact on the company’s continued
        success.
      </p>
      <p>Yours sincerely,</p>
      <div className="signature">
        <p>Bence A. Tóth</p>
        <img src={Signature} alt="" />
      </div>
    </div>
  </div>
);

export default Page3;
