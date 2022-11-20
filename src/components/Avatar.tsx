import Image from "next/image";

export interface AvatarProps {
  image: any;
}

export function Avatar({ image }: AvatarProps) {
  return (
    <div className="flex flex-row items-center text-center space-x-2 ">
      <div className="w-32 h-32 rounded-full bg-meta-500">
        <Image src={image} alt="Avatar" />
        <h2 className="text-white font-mono font-extrabold mt-2">FUNDADOR</h2>
      </div>
    </div>
  );
}