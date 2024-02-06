import { useState } from "react";
import Hashtaurante from "./assets/Hash.png";
import "./App.css";
import { Navegacao } from "./navegacao";
import { ItemCardapio } from "./ItemCardapio";
import { pratosPrincipais, bebidas, sobremesas } from "./cardapio";


export function App(){
  const paginasMenu = [pratosPrincipais, sobremesas, bebidas];
  const [paginaSelecionada, atualizarPaginaSelecionada] = useState(0);
  return <>
          <img src={Hashtaurante} alt="" className="capa"/>
          <Navegacao atualizarPaginaSelecionada={atualizarPaginaSelecionada}/>
          <div className="menu">  
            {paginasMenu[paginaSelecionada].map(item => <ItemCardapio nome={item.nome} descricao={item.descricao} preco={item.preco} imagem={item.imagem}/>)}
          </div>
        </>
}