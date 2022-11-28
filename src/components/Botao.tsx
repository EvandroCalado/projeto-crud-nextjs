interface BotaoProps {
  className?: string;
  children: any;
  onClick?: () => void;
}

export default function Botao(props: BotaoProps) {
  return (
    <button
      onClick={props.onClick}
      className={`bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors ${props.className}`}
    >
      {props.children}
    </button>
  );
}
