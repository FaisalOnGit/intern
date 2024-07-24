import HeroImg from "@/public/hero.png";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-custom-blue-hover">
      <div className="container mx-auto pt-16 px-16 flex justify-between items-center font-bold">
        <Image src={HeroImg} alt="Turned In Logo" />
        <div>
          <h2 className="text-white text-5xl text-start">
            Platform kebutuhan Mahasiswa Nomor #1
          </h2>
          <p className="text-white mt-2 pr-20 font-thin">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            gravida dolor a varius ullamcorper. Integer malesuada, lectus et
            euismod posuere, velit sapien semper leo, vel cursus erat diam at
            risus. Nam a ornare turpis. Praesent ultrices diam vitae ante luctus
            lobortis. Curabitur ultrices risus nec odio varius lacinia. Morbi
            consectetur
          </p>
          <div className="bg-white shadow-md items-start rounded-lg p-6 mt-4">
            <h2 className="text-2xl text-custom-blue font-bold mb-2">
              Order Terselesaikan
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
