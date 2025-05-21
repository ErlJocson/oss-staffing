//  @media screen and (max-width: 800px) {}

import { useState, useEffect } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default function NavigationBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const thresholdInPx = window.innerHeight * 0.6;
      setScrolled(window.scrollY > thresholdInPx);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <>
      <Header scrolled={scrolled}>
        <img
          src={
            scrolled
              ? process.env.PUBLIC_URL + "/Images/HGSLogoBlack.png"
              : process.env.PUBLIC_URL + "/Images/HGSLogoWhite.png"
          }
          alt=""
        />
        <div>
          <nav>
            <MyLink scrolled={scrolled} to="/">
              SERVICES
            </MyLink>
            <MyLink scrolled={scrolled} to="/pricing">
              PRICING
            </MyLink>
            <MyLink scrolled={scrolled} to="/insights">
              INSIGHTS
            </MyLink>
            <MyLink scrolled={scrolled} to="/about">
              ABOUT
            </MyLink>
            <MyLink scrolled={scrolled} to="/contact-us">
              CONTACT US
            </MyLink>
          </nav>
        </div>
      </Header>
    </>
  );
}

const Header = styled.div`
  position: sticky;
  top: 0;
  height: 8vh;
  background-color: ${({ scrolled }) =>
    scrolled ? "white" : "rgb(0, 20, 45)"};

  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    height: 50px;
    margin-left: 40px;
  }

  div {
    margin-right: 40px;
  }
`;

const MyLink = styled(NavLink)`
  margin: 0 20px;
  padding: 0 5px;
  color: ${({ scrolled }) => (scrolled ? "black" : "white")};
  text-decoration: none;
  font-weight: bold;

  &.active {
    color: #cc0066;
  }
`;
