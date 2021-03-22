import styled from "styled-components";

export const Container = styled.div `
    position: fixed;
    width: 1900px;
    background: #1054BA;
    box-shadow: 0px 7px 4px rgba(0, 0, 0, 0.25);
 
    margin-top: -10px;
    margin-left: -14px;
 
    color: white;
`
export const Botaodrop = styled.div `
    background-color: #0B3067;
    color: white;
    font-family: 'Courier New', Courier;
    padding: 27px 27px;
    border: none;
    cursor: pointer;
`

export const Dropdown =  styled.div `
    position: relative;
    display: inline-block;
`

export const Dropdowncontent = styled.div `
    display: none;
    position: absolute;
    background-color: #071E41;
    float: center;
    color: white;
    padding: 27px 27px;
    border: none;
    text-decoration: none;
    display: block;
`