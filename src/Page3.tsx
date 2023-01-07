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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eum
        aspernatur voluptas odio neque magnam maxime repudiandae, laborum iste
        nisi accusantium et sint repellendus assumenda. Dolorem eaque
        praesentium rerum at!
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
