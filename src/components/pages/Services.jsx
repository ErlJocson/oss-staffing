import styled from "styled-components";

export default function Services() {
  return (
    <ServicesMainContainer>
      <IntroContainer>
        <TopIntro className="dark-shadow">
          <div>
            <h1>Offshore Staffing Solutions</h1>
            <hr />
            <h3>Find the Perfect Fit for Any Role, Team, or Industry</h3>
            <div>
              <button>REQUEST A QUOTE</button>
            </div>
          </div>
        </TopIntro>
        <BottomIntro>
          <div>
            <h4>OUR SERVICES</h4>
            <p>
              Leverage our global talent pool to enhance your operations, reduce
              costs, and maintain high-quality service across key business
              functions.
            </p>
          </div>
        </BottomIntro>
      </IntroContainer>

      <AllProductContainer>
        <ProductContainer>
          <h3>Customer Service</h3>
          <p>
            Enhance customer experience, improve customer satisfaction, and
            streamline workflows with experienced customer agents.
          </p>
          <button>ORDER NOW</button>
        </ProductContainer>

        <ProductContainer>
          <h3>Back office support</h3>
          <p>
            Leverage cost-effective labor for managing repetitive tasks like
            data entry, record-keeping, and internal processes.
          </p>
          <button>ORDER NOW</button>
        </ProductContainer>

        <ProductContainer>
          <h3>Finance & Accounting</h3>
          <p>
            Employ offshore professionals to reduce labor costs while ensuring
            operational efficiency and regulatory compliance.
          </p>
          <button>ORDER NOW</button>
        </ProductContainer>

        <ProductContainer>
          <h3>Digital Marketing</h3>
          <p>
            Enhance customer experience, improve customer satisfaction, and
            streamline workflows iwth experienced customer agents
          </p>
          <button>ORDER NOW</button>
        </ProductContainer>

        <ProductContainer>
          <h3>IT & Development</h3>
          <p>
            Levlerage cost-effective labor for managing repetitive tasks like
            data entry, record-keeping, and internal processes
          </p>
          <button>ORDER NOW</button>
        </ProductContainer>

        <ProductContainer>
          <h3>Sales Enablement</h3>
          <p>
            Employ offshore professionals to reduce labor costs while ensuring
            operational efficiency and regulatory compliance
          </p>
          <button>ORDER NOW</button>
        </ProductContainer>
      </AllProductContainer>

      <MainFooterContainer>
        <FooterTitleContainer>
          <h1>UNLOCK THE POWER OF OFFSHORE STAFFING</h1>
          <p>
            From small businesses to large enterprises, our solutions scale to
            meet the needs of businesses of all sizes
          </p>
        </FooterTitleContainer>
        <CardFooterContainer>
          <CardFooter>
            <h3>EMPLOYEE SATISFACTION RATE</h3> <hr />
            <p>
              Our annula staff satisfaction survey has consistently exceeded
              92.0% outperforming the industry average by 16.0%. this reflects
              on our commitment to employee well-being and a positve work
              enivronment
            </p>
          </CardFooter>
          <CardFooter>
            <h3>WORD-CLASS FACILITIES</h3> <hr />
            <p>
              Our offices are location in A-grade buildings within Manila's
              premier business hub, Bonifacio Global City. These modern spaces
              are designed to foster collaboration, productivity, and a
              world-class work environment
            </p>
          </CardFooter>
          <CardFooter>
            <h3>SPECIALIST IN LARGE TEAMS</h3> <hr />
            <p>
              We support publicly listed and private equity-backed clients with
              large, multifunctional teams. Our expertise in scaling operations
              ensures seamless collaboration, efficiency, and high-performance
              results.
            </p>
          </CardFooter>
        </CardFooterContainer>
        <FinalFooterContainer>
          <FinalFooterContentContainer>
            <h1>Empowering</h1>
            <h3>Local Workforce for Innovation</h3>
            <p>
              Offshoring time-intensive tasks enabled local employees to focus
              on strategic growth and delivering exceptional customer service
            </p>
          </FinalFooterContentContainer>
          <FinalFooterContentContainer>
            <h1>Streamlining</h1>
            <h3>Business Operations Efficiency</h3>
            <p>
              Transitioning to full-time offshore teams gave the company more
              control, improving service quality and boosting efficiency
            </p>
          </FinalFooterContentContainer>
        </FinalFooterContainer>
      </MainFooterContainer>
    </ServicesMainContainer>
  );
}

const ServicesMainContainer = styled.div`
  color: white;
`;

const IntroContainer = styled.div`
  height: 92vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const bgImageFirst = process.env.PUBLIC_URL + "/bgImages/firstBg.png";

const TopIntro = styled.div`
  background-image: url(${bgImageFirst});
  background-size: cover;
  background-position: center;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 6px solid #00b0f0;

  h1,
  h3,
  hr,
  button {
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 50px;
  }

  hr {
    height: 6px;
    background-color: #00b0f0;
    border: none;
    width: 35%;
  }

  h1 {
    font-size: 50px;
    font-weight: normal;
  }

  h3 {
    font-size: 30px;
    font-weight: normal;
  }

  button {
    padding: 15px 20px;
    background-color: #b90462;
    color: white;
    font-size: 20px;
    cursor: pointer;
    border-radius: 10px;
    border: none;
  }
`;

const BottomIntro = styled.div`
  height: 30%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  h4 {
    font-size: 20px;
  }

  p {
    font-size: 18px;
  }
`;

const AllProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 50%;
`;

const ProductContainer = styled.div`
  width: 250px;
  height: 280px;
  margin: 20px;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 10px;
  button {
    padding: 8px 12px;
    background-color: #b90462;
    color: white;
    cursor: pointer;
    border-radius: 10px;
    border: none;
  }

  p {
    margin: 20px 0;
    text-align: center;
  }
`;

const MainFooterContainer = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FooterTitleContainer = styled.div`
  * {
    margin: 20px 0;
    text-align: center;
  }
`;

const CardFooterContainer = styled.div`
  display: flex;
  hr {
    height: 6px;
    background-color: #00b0f0;
    border: none;
    margin: 10px 0;
  }
`;

const CardFooter = styled.div`
  margin: 20px;
  padding: 20px;
  height: 200px;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  width: 400px;
  text-align: center;
`;

const FinalFooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FinalFooterContentContainer = styled.div`
  width: 40%;
  margin: 20px;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 10px;

  h1 {
    color: #38b6ff;
    text-transform: uppercase;
  }

  h3 {
    margin: 10px 0;
  }
`;
