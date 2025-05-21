import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default function NavigationBar() {
  return (
    <>
      <Header>
        <img src={process.env.PUBLIC_URL + "/Images/HGSLogo.svg"} alt="" />
        <div>
          <nav>
            <MyLink to="/">SERVICES</MyLink>
            <MyLink to="/pricing">PRICING</MyLink>
            <MyLink to="/insights">INSIGHTS</MyLink>
            <MyLink to="/about">ABOUT</MyLink>
            <MyLink to="/contact-us">CONTACT US</MyLink>
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
  background-color: rgba(0, 20, 45, 1);
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
  text-decoration: none;
  font-weight: bold;
  color: white;

  &.active {
    color: #cc0066;
  }
`;
