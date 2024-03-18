"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import { useGlobalState } from "./../context/globalProvider";
import menu from "./../utils/utils/menu";
import dharzan from "./images/dharzan.png";

const SideBar = () => {
  const { theme } = useGlobalState();

  const router = useRouter();


  const handleClick = (link: string) => {
    
    router.push(link);
  }

  return (
    <SideBarStyled theme={theme}>
      <div className="profile">
        <div className="profile-ovelay"></div>
        <div className="image">
          <Image width={70} height={70} src={dharzan} alt={"temporary image"} />

          <h1>
            <span>Dharsan</span>
            <span>Guruparan</span>
          </h1>
        </div>

        <ul className="navItem">
          {menu.map((item) => {
            return (
              <li className="navItem" onClick={() => handleClick}>
                {item.icon} <Link href={item.link}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
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
