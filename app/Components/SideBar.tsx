"use client";
import React from "react";
import styled from "styled-components";
import { useGlobalState } from "./../context/globalProvider";
import Image from "next/image";
import dharzan from './images/dharzan.png'

const SideBar = () => {
  const { theme } = useGlobalState();

  return (
    <SideBarStyled theme={theme}>
      <div className="profile">
        <div className="profile-ovelay"></div>
        <div className="image"><Image
          width={70}
          height={70}
          src={dharzan}
          alt={'temporary image'}
        />

        <h1>
        <span>Dharsan</span>
        <span>Guruparan</span>
        </h1>

        

        </div>
      </div>

    </SideBarStyled>
  );
};

const SideBarStyled = styled.nav`
  position: relative;
  background-color: ${(props) => props.theme.colorBg2};
  border: 2px solid ${(props) => props.theme.borderColor2};
  border-radius: 1rem;
  width: 15rem;
  width: ${(props) => props.theme.sideBarWidth};
`;

export default SideBar;
