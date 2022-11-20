import { Button } from "./Button";

export function Navbar() {
  return (        
    <div className="flex max-w-3xl mr-10">
      <div className="flex items-center text-white font-bold gap-11 text-sm z-3 before:bg-[url('../assets/background.png')]">
        <a href="">POSTAGENS</a>
        <a href="">DISCORD</a>
        <a href="">COMUNIDADE</a>
        <Button content="LOGIN" contentColor="black" color="white"/>
      </div>
    </div>
  )
}