import { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import {Header, Loading} from "../componets"

export default function Home() {
    const [IsLoading, stIsLoading] = useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            stIsLoading(false);
        },4000);
    });
    return (
        <>
            {IsLoading ? (<Loading />): (<Header />)}
        </>
    );
}