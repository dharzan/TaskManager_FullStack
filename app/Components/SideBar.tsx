"use client"
import React from 'react'
import styled from 'styled-components';
import {useGlobalState} from './../context/globalProvider'

const SideBar = () => {

  const {theme} = useGlobalState();
  
  console.log(theme);
  return (
    <SideBarStyled>SideBar</SideBarStyled>
  )
}

const SideBarStyled= styled.nav`
`;

export default SideBar