interface BotaoProps {
  className?: string 
  children: any
  cor?: 'green' | 'blue' | 'red'
  onClick?: () => void
}

export default function Botao(props: BotaoProps) {
  const cor = props.cor ?? 'gray'
  return (
    <button onClick={props.onClick} className={`bg-${cor}-500 hover:bg-${cor}-600 text-white px-4 py-2 rounded-md transition-colors ${props.className}`}>
      {props.children}
    </button>
  )
}