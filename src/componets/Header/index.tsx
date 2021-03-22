import { useEffect, useState } from "react";
import {BsCloud} from "react-icons/bs";
import {useRouter} from "next/router";
import { apiTipo } from "../../api/data";
import { InterTipo } from "../../styles/Interfaces/Tipo.Interface";
import  Link from "../../styles/Link";
import {Container, Botaodrop, Dropdown, Dropdowncontent} from "./styles";


const Header = () =>{
    const router = useRouter();
    const [tipos, setTipos] = useState<InterTipo[]>([]);
    
    useEffect (() => {
        const FectchData = async () => {
            const response = await apiTipo.index();
            setTipos;(response.data);
        }
        FectchData();
    }, [])
    return (
        <Container>
            <div className= "container">
                    <BsCloud onClick = { () => router.push('/')} />
                    {tipos &&tipos.map((item) => (
                        <Link key={item.id} href={`/${item.id}`}>
                            {item.Tipo_de_nuvem}
                        </Link>
                ))}
            </div>
            <Dropdown>
                <Botaodrop> 
                    <button>Tipos de Nuvens</button>
                </Botaodrop>
                <Dropdowncontent>
                    <Link href={`/${item.id}`}>
                        {item.Cirrus}
                    </Link>
                </Dropdowncontent>
            </Dropdown>
        </Container>
    );
};



export default Header;