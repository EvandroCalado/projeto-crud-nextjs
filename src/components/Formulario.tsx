import { useState } from "react";
import Botao from "./Botao";
import Cliente from "./core/Cliente";
import Entrada from "./Entrada";

interface FormularioProps {
  cliente: Cliente;
  clienteMudou?: (cliente: Cliente) => void
  cancelado?: () => void 
}

export default function Formulario(props: FormularioProps) {
  const id = props.cliente?.id;
  const [nome, setNome] = useState(props.cliente?.nome ?? "");
  const [idade, setIdade] = useState(props.cliente?.idade ?? 0);
  return (
    <div>
      {id ? <Entrada somenteLeitura texto="Código" valor="teste" /> : false}

      <Entrada texto="Nome" valor={nome} valorMudou={setNome} />
      <Entrada texto="Idade" tipo="number" valor={idade} valorMudou={setIdade} />
      <div className="mt-7 flex justify-end">
        <Botao onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id)) } className="mr-2" >{id ? "alterar" : "salvar"}</Botao>
        <Botao onClick={props.cancelado} >Cancelar</Botao>
      </div>
    </div>
  );
}
