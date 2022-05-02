import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.scss";

const Info = () => {
  return (
    <section className="bg-gray-light">
      <div className="">
        <div className="py-20 lg:grid grid-cols-12 gap-12">
          <div className="col-span-7">
            <div className="w-full">
              <div className="w-1/2 py-2 bg-green-primary"></div>
              <div className="pl-10">
                <div
                  className="lg:w-1/2 w-full my-5 font-semibold leading-tight
                text-6xl text-green-secondary"
                >
                  Keep the Money You Make
                </div>
                <div className="w-full my-5 font-thin">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                  sed diam nonumy
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-5">
            <div className="w-full flex items-end h-full">
              <div className="w-full">
                <div className="w-full float-right mb-12">
                  <div
                    className="float-right w-3/12 
                      py-2 bg-green-primary"
                  ></div>
                </div>

                <div className="w-full float-right mb-12">
                  <div
                    className="float-right w-6/12 
                        py-2 bg-green-primary"
                  ></div>
                </div>

                <div className="w-full float-right mb-12">
                  <div
                    className="float-right w-9/12 
                        py-2 bg-green-primary"
                  ></div>
                </div>

                <div className="w-full float-right mb-4">
                  <div
                    className="float-right w-full 
                        py-2 bg-green-primary"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
