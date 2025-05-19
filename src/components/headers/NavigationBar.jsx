import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default function NavigationBar() {
  return (
    <>
      <Header className="shadow">
        <img src={process.env.PUBLIC_URL + "/Images/HGSLogo.png"} alt="" />
        <div>
          <nav>
            <MyLink to="/" end>
              Home
            </MyLink>
            <MyLink to="/services">Services</MyLink>
            <MyLink to="/request-quotations">Request Quotations</MyLink>
          </nav>
        </div>
      </Header>
    </>
  );
}

const Header = styled.div`
  height: 8vh;
  background-color: rgba(0, 20, 45, 0.5);
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
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
  color: white;
  text-decoration: none;

  &.active {
    color: #cc0066;
  }
`;
