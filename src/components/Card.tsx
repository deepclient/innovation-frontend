import Image from "next/image";
import image_drop from '../assets/image_drop.png';

export interface CardProps {
  title: string;
  developer: string;
  description: string;
  image: string;
}

export function Card({ title, developer, description, image }: CardProps) {
  return (
    <div>
      <div className="flex flex-col justify-center text-center mr-5 bg-gray-500 text-white font-mono w-56 rounded-2xl gap-7">
        <div className="pt-5 px-5">
        <p className="font-bold uppercase mb-2">{title}</p>
          <Image className="w-56 h-auto rounded-2xl" src={image_drop} alt='Imagem do drop'></Image>
          <div className="font-extralight text-xs mt-5">
            <p>DESENVOLVEDOR:{developer}</p>
            <p>Descrição:{description}</p>
          </div>
        </div>
          <button className="bg-meta-500 w-full rounded-b-2xl py-2">DOWNLOAD</button>
      </div>
    </div>
  );
}
