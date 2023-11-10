import Image from "next/image";
import avatar from "../../../public/images/7309667.jpg";
import avatar1 from "../../../public/images/7309681.jpg";
import avatar2 from "../../../public/images/7309685.jpg";
const Team = () => {
  return (
    <div>
      <div className="flex items-center justify-center mt-36">
        <div className="flex flex-col space-x-5">
          <div className="text-3xl font-bold text-center mb-10">Our Team</div>
          <div className="flex flex-row space-x-5">
            <div className="carousel w-full">
              <div
                id="slide1"
                className="carousel-item relative w-full space-x-3 flex items-center justify-center"
              >
                <div className="flex flex-col space-x-5 items-center justify-center">
                  <div className="card w-96 bg-base-100 text-2xl mb-2 items-center">
                    <Image
                      src={avatar}
                      width={250}
                      height={250}
                      alt="image1"
                      style={{ borderRadius: "50%" }}
                    />
                    <div className="text-xl font-semibold text-center mt-3">
                      Sally
                    </div>
                    <div className="text-sm mt-5 text-center">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Repudiandae provident illum explicabo quam asperiores
                      ullam hic delectus, vero necessitatibus harum eveniet
                      doloremque, enim accusantium odio magni magnam, sapiente
                      cum minima.
                    </div>
                  </div>
                </div>
                <div className="flex flex-col space-x-5 items-center justify-center">
                  <div className="card w-96 bg-base-100 text-2xl mb-2 items-center">
                    <Image
                      src={avatar2}
                      width={250}
                      height={250}
                      alt="image1"
                      style={{ borderRadius: "50%" }}
                    />
                    <div className="text-xl font-semibold text-center mt-3">
                      Abraham
                    </div>
                    <div className="text-sm mt-5 text-center">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Repudiandae provident illum explicabo quam asperiores
                      ullam hic delectus, vero necessitatibus harum eveniet
                      doloremque, enim accusantium odio magni magnam, sapiente
                      cum minima.
                    </div>
                  </div>
                </div>
                <div className="flex flex-col space-x-5 items-center justify-center">
                  <div className="card w-96 bg-base-100 text-2xl mb-2 items-center">
                    <Image
                      src={avatar1}
                      width={250}
                      height={250}
                      alt="image1"
                      style={{ borderRadius: "50%" }}
                    />
                    <div className="text-xl font-semibold text-center mt-3">
                      John Doe
                    </div>
                    <div className="text-sm mt-5 text-center">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Repudiandae provident illum explicabo quam asperiores
                      ullam hic delectus, vero necessitatibus harum eveniet
                      doloremque, enim accusantium odio magni magnam, sapiente
                      cum minima.
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="slide2"
                className="carousel-item relative w-full space-x-3 flex items-center justify-center"
              >
                <div className="flex flex-col space-x-5 items-center justify-center">
                  <div className="card w-96 bg-base-100 text-2xl mb-2 items-center">
                    <Image
                      src={avatar}
                      width={250}
                      height={250}
                      alt="image1"
                      style={{ borderRadius: "50%" }}
                    />
                    <div className="text-xl font-semibold text-center mt-3">
                      Sally
                    </div>
                    <div className="text-sm mt-5 text-center">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Repudiandae provident illum explicabo quam asperiores
                      ullam hic delectus, vero necessitatibus harum eveniet
                      doloremque, enim accusantium odio magni magnam, sapiente
                      cum minima.
                    </div>
                  </div>
                </div>
                <div className="flex flex-col space-x-5 items-center justify-center">
                  <div className="card w-96 bg-base-100 text-2xl mb-2 items-center">
                    <Image
                      src={avatar2}
                      width={250}
                      height={250}
                      alt="image1"
                      style={{ borderRadius: "50%" }}
                    />
                    <div className="text-xl font-semibold text-center mt-3">
                      Abraham
                    </div>
                    <div className="text-sm mt-5 text-center">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Repudiandae provident illum explicabo quam asperiores
                      ullam hic delectus, vero necessitatibus harum eveniet
                      doloremque, enim accusantium odio magni magnam, sapiente
                      cum minima.
                    </div>
                  </div>
                </div>
                <div className="flex flex-col space-x-5 items-center justify-center">
                  <div className="card w-96 bg-base-100 text-2xl mb-2 items-center">
                    <Image
                      src={avatar1}
                      width={250}
                      height={250}
                      alt="image1"
                      style={{ borderRadius: "50%" }}
                    />
                    <div className="text-xl font-semibold text-center mt-3">
                      John Doe
                    </div>
                    <div className="text-sm mt-5 text-center">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Repudiandae provident illum explicabo quam asperiores
                      ullam hic delectus, vero necessitatibus harum eveniet
                      doloremque, enim accusantium odio magni magnam, sapiente
                      cum minima.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team