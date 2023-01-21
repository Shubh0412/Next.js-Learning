import Image from "next/image";
import img from "../public/1.jpg";

function AnimePage() {
  return (
    <div>
      <Image
        src={img}
        placeholder="blur"
        alt="anime"
        width="680"
        height="480"
      />

      {["1", "3", "4", "5"].map((path) => {
        return (
          <div key={path}>
            <Image src={`/${path}.jpg`} alt="anime" width="680" height="480" />
          </div>
        );
      })}
    </div>
  );
}

export default AnimePage;
