import { useEffect, useState } from "react";
import {useRouter} from "next/router";
import { apiTipo } from "../../api/data";
import { InterTipo } from "../../styles/Interfaces/Tipo.Interface";
import  Link from "../../styles/Link";
import {Foo} from "./styles";

const Pe = () =>{
    const router = useRouter();
    const [tipos, setTipos] = useState<InterTipo[]>([]);
    
    useEffect (() => {
        const FectchData = async () => {
            const response = await apiTipo.index();
            setTipos(response.data);
        }
        FectchData();
    }, [])
    return (
        <Foo>
            <footer>
                <ul>
                    <li>
                        <a className="f" href="galeriadasnuvens.html">Galeria das Nuvens</a>
                        <a className="f" href="registrarnuvens.html">Registrar Nuvens</a>
                        <a className="f" href="registrarlogar.html">Registrar/Logar</a>
                        <embed src="img/Circle of Life.mp3" hidden={true}></embed>
                    </li>
                </ul>
            </footer>  
        </Foo>
    );
};
export default Pe;