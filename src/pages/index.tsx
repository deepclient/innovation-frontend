import Image from "next/image";
import logo from '../assets/logo.png';
import monitor from '../assets/monitor.png';
import avatar_capone from '../assets/capone.png';
import avatar_kaiki from '../assets/kaiki.png';
import avatar_keven from '../assets/keven.png';

import { Avatar } from "../components/Avatar";

import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Navbar } from "../components/Navbar";

export default function Home() {

  function discordLink() {
    window.open("https://discord.com/invite/F8M9KnuAHz", "_blank");
  }

  return (
    <div>
      <header>
        <div className="flex justify-between mt-9 h-1/4">
          <Image className="ml-20 w-40 h-auto" src={logo} alt='Meta Codes'></Image>
          <Navbar />
        </div>
        <div className="mt-24 flex justify-between">
          <div className='ml-24 text-white'>
            <h1 className='font-mono font-extrabold text-2xl'>
              A INNOVATION COMMUNITY È UM <br />
              PROJETO VOLTADO PARA A <br /> 
              COMUNIDADE DO MTA!
            </h1>
            <p className="font-mono font-light mb-8">FOCADO EM MELHOR A COMUNIDADE DO MTA:SA</p>
            <Button onClick={discordLink} content="ENTRAR NA COMUNIDADE" color="blue"/>
          </div>
          <div className="mr-44">
            <Image className="w-96 h-auto" src={monitor} alt='Meta Codes'></Image>
          </div>
        </div>
      </header>
      <main>
        <div className="flex justify-center mt-48 font-mono font-extrabold text-lg space-x-2 mb-16">
          <p className="text-white">NOSSAS</p>
          <p className="text-meta-500 underline">POSTAGENS</p>
        </div>
        <div className="flex flex-row mb-56 justify-center ">
          <Card title="Custom descompilado" developer="Capone" description="Ativar todos os scripts que estão na pastar para funcionar" image="image_drop" />
          <Card title="Inventario System" developer="Kaiki" description="Ativar todos os scripts que estão na pastar para funcionar" image="image_drop" />
          <Card title="Celular" developer="Keven" description="Ativar todos os scripts que estão na pastar para funcionar" image="image_drop" />
          <Card title="Concessionaria" developer="XernobyL" description="Ativar todos os scripts que estão na pastar para funcionar" image="image_drop" />
        </div>
        <div className="flex flex-row justify-between mx-32 ">
          <Avatar image={avatar_capone} /> 
          <Avatar image={avatar_kaiki} /> 
          <Avatar image={avatar_keven} /> 
        </div>
      </main>

      <footer className="absolute w-full bg-gray-700 mt-48 py-20">
      </footer>
    </div>
  )
}
