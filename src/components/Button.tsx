export interface ButtonProps {
  content: string;
  contentColor?: string;
  color: string;
  onClick?: () => void;
}

export function Button({ content, contentColor = 'white', color, onClick }: ButtonProps) {
  return (
    <button 
      onClick={onClick}
      className={`${contentColor === 'black' ? 'text-black' : 'text-white'} ${color === 'white' ? "bg-white" : "bg-meta-500"} rounded-lg px-14 py-4 font-bold`}>{content}
    </button>
  );
}