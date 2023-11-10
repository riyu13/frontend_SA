import Image from "next/image";
import image1 from "../../../public/3992745.jpg";

const LandingPage = () => {
  return (
    <div className="flex items-center justify-center mt-36">
      <div className="flex flex-row space-x-5">
        <div className="flex items-center justify-center">
          <div className="flex flex-col">
            <div className="card w-96 bg-base-100 font-bold text-2xl mb-2">
              Kemudahan Dukungan
            </div>
            <div className="card w-96 bg-base-100 font-bold text-4xl mb-6">
              Layanan Terbaik
            </div>
            <div className="card w-96 bg-base-100">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
              explicabo sapiente. Qui aliquid nostrum necessitatibus quibusdam
              distinctio recusandae non aperiam, porro corrupti illo facilis
              atque officia neque quaerat autem doloribus.
            </div>
            <div className="flex flex-row space-x-2">
              <button className="btn btn-primary mt-6 text-white ">
                Our Services
              </button>
            </div>
          </div>
              <Image src={image1} width={500} height={500} alt="image1" />
        </div>
        <div className="flex items-center justify-center"></div>
      </div>
    </div>
  );
};

export default LandingPage;
