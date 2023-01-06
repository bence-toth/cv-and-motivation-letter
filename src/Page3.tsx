import Stripes from "./Stripes";
import Signature from "./signature.png";

import "./Page3.css";

const Page3 = () => (
  <div className="page page3">
    <Stripes />
    <div>
      <h2>Motivation letter</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi magnam
        laudantium laboriosam hic ab sunt, eaque cumque porro saepe excepturi
        voluptatibus illo, repellat nobis quaerat amet quo perferendis quis
        ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Voluptatem ducimus recusandae nobis fuga voluptatibus labore eos
        quibusdam earum dolor, illum ipsa impedit quidem non expedita. Provident
        dignissimos dolorum consequatur nulla. Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Nisi magnam laudantium laboriosam hic ab
        sunt, eaque cumque porro saepe excepturi voluptatibus illo, repellat
        nobis quaerat amet quo perferendis quis ullam. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Voluptatem ducimus recusandae nobis
        fuga voluptatibus labore eos quibusdam earum dolor, illum ipsa impedit
        quidem non expedita. Provident dignissimos dolorum consequatur nulla.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi magnam
        laudantium laboriosam hic ab sunt, eaque cumque porro saepe excepturi
        voluptatibus illo, repellat nobis quaerat amet quo perferendis quis
        ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Voluptatem ducimus recusandae nobis fuga voluptatibus labore eos
        quibusdam earum dolor, illum ipsa impedit quidem non expedita. Provident
        dignissimos dolorum consequatur nulla. Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Nisi magnam laudantium laboriosam hic ab
        sunt, eaque cumque porro saepe excepturi voluptatibus illo, repellat
        nobis quaerat amet quo perferendis quis ullam. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Voluptatem ducimus recusandae nobis
        fuga voluptatibus labore eos quibusdam earum dolor, illum ipsa impedit
        quidem non expedita. Provident dignissimos dolorum consequatur nulla.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi magnam
        laudantium laboriosam hic ab sunt, eaque cumque porro saepe excepturi
        voluptatibus illo, repellat nobis quaerat amet quo perferendis quis
        ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Voluptatem ducimus recusandae nobis fuga voluptatibus labore eos
        quibusdam earum dolor, illum ipsa impedit quidem non expedita. Provident
        dignissimos dolorum consequatur nulla.
      </p>
      <p>Yours sincierily,</p>
      <div className="signature">
        <p>Bence A. Tóth</p>
        <img src={Signature} alt="" />
      </div>
    </div>
  </div>
);

export default Page3;
