import { FaPuzzlePiece } from "react-icons/fa";
import styled from "styled-components";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaFolderOpen } from "react-icons/fa";
import { BsCalculator } from "react-icons/bs";
import { GrCloudComputer } from "react-icons/gr";
import { FaGithubAlt } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import { RiUserSearchLine } from "react-icons/ri";
import { FaRegHandshake } from "react-icons/fa6";
import { GrCluster } from "react-icons/gr";

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
          <RiCustomerService2Fill size={70} />

          <h3>Customer Service</h3>
          <p>
            Enhance customer experience, improve customer satisfaction, and
            streamline workflows with experienced customer agents.
          </p>
          <button>ORDER NOW</button>
        </ProductContainer>

        <ProductContainer>
          <FaFolderOpen size={70} />
          <h3>Back office support</h3>
          <p>
            Leverage cost-effective labor for managing repetitive tasks like
            data entry, record-keeping, and internal processes.
          </p>
          <button>ORDER NOW</button>
        </ProductContainer>

        <ProductContainer>
          <BsCalculator size={70} />
          <h3>Finance & Accounting</h3>
          <p>
            Employ offshore professionals to reduce labor costs while ensuring
            operational efficiency and regulatory compliance.
          </p>
          <button>ORDER NOW</button>
        </ProductContainer>

        <ProductContainer>
          <GrCloudComputer size={70} />

          <h3>Digital Marketing</h3>
          <p>
            Enhance customer experience, improve customer satisfaction, and
            streamline workflows iwth experienced customer agents
          </p>
          <button>ORDER NOW</button>
        </ProductContainer>

        <ProductContainer>
          <FaGithubAlt size={70} />
          <h3>IT & Development</h3>
          <p>
            Levlerage cost-effective labor for managing repetitive tasks like
            data entry, record-keeping, and internal processes
          </p>
          <button>ORDER NOW</button>
        </ProductContainer>

        <ProductContainer>
          <MdAttachMoney size={70} />

          <h3>Sales Enablement</h3>
          <p>
            Employ offshore professionals to reduce labor costs while ensuring
            operational efficiency and regulatory compliance
          </p>
          <button>ORDER NOW</button>
        </ProductContainer>
      </AllProductContainer>

      <SomeExtraDesignContainer>
        <HeaderExtraDesign>
          <h1>PROVEN OFFSHORE STAFFING PROCESS FROM START TO FINISH</h1>
          <p>
            Our detailed, step-by-step approach ensures that you receive
            tailored staffing solutions, perfectly aligned with your business
            objectives, throughout every stage of the process.
          </p>
        </HeaderExtraDesign>
        <ContentContainerExtraDesign>
          <ContentExtraDesign>
            <GrCluster size={70} />
            <h3>Step 1</h3>
            <p>
              Assess business needs and formulate tailored staffing strategies
            </p>
          </ContentExtraDesign>

          <ContentExtraDesign>
            <FaPuzzlePiece size={70} />
            <h3>Step 2</h3>
            <p>Define job roles, responsibilities, and expected outcomes</p>
          </ContentExtraDesign>

          <ContentExtraDesign>
            <RiUserSearchLine size={70} />

            <h3>Step 3</h3>
            <p>
              Facilitate smooth hiring through seamless onboarding processes
            </p>
          </ContentExtraDesign>

          <ContentExtraDesign>
            <FaRegHandshake size={70} />

            <h3>Step 4</h3>
            <p>
              Offer continuous support and maximize the value of offshore teams
            </p>
          </ContentExtraDesign>
        </ContentContainerExtraDesign>
      </SomeExtraDesignContainer>

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

      <MoreFooterNotesContainer>
        <h1>HGS INSIGHTS</h1>
        <ContentsContainer>
          <TheContents>
            <img src="" alt="" />
            <h3>OFFSHORING BACK-OFFICE ROLES TO THE PHILIPPINES</h3>
            <p>
              Tap into the Philippines’ skilled and English-proficient workforce
              for back-office roles such as data entry, finance, and IT support.
              HGS OSS helps businesses build efficient offshore teams, enhancing
              productivity and enabling growth
            </p>
          </TheContents>

          <TheContents>
            <img src="" alt="" />
            <h3>FOSTERING DEI WITH AN INCLUSIVE SOCIAL MEDIA MANAGER</h3>
            <p>
              Build authentic connections by championing diversity and inclusion
              on social media. An inclusive social media manager ensures
              accessible, respectful, and engaging content that reflects your
              brand’s values
            </p>
          </TheContents>

          <TheContents>
            <img src="" alt="" />
            <h3>
              THE SUSTAINABLE OFFSHORE STRATEGY: BRIDGING THE TALENT SHORTAGE
            </h3>
            <p>
              The global talent shortage is disrupting business growth across
              industries. Offshoring provides a strategic solution by giving
              companies access to skilled professionals, reducing operational
              costs, and enabling round-the-clock productivity
            </p>
          </TheContents>
        </ContentsContainer>
      </MoreFooterNotesContainer>
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
  position: relative;

  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 90%);

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 6px;
    background: #00b0f0;
    transform: skewY(2deg);
    transform-origin: bottom right;
  }

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
  margin: 0 auto 50px;
  width: 70%;
`;

const ProductContainer = styled.div`
  width: 20%;
  height: 40%;
  margin: 20px;
  background-color: rgba(0, 0, 0, 0.4);
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

  h3 {
    margin-top: 10px;
  }
`;

const MainFooterContainer = styled.div`
  margin: 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(15, 23, 42, 0.4);
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
    border: none;
    background-color: #b90462;
    margin: 10px 0;
  }
`;

const CardFooter = styled.div`
  margin: 20px;
  padding: 20px;
  height: 200px;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  width: 400px;
  text-align: center;
`;

const FinalFooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
`;

const FinalFooterContentContainer = styled.div`
  width: 40%;
  margin: 20px;
  padding: 20px;

  border-radius: 10px;

  h1 {
    color: #38b6ff;
    text-transform: uppercase;
  }

  h3 {
    margin: 10px 0;
  }
`;

const MoreFooterNotesContainer = styled.div`
  margin: 50px 0;
  h1 {
    text-align: center;
    margin: 20px 0;
  }
`;

const ContentsContainer = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
`;

const TheContents = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  width: 30%;
  height: 400px;
  border-radius: 10px;
  padding: 20px;
  margin: auto;

  h3 {
    text-align: center;
    margin: 20px 0;
  }
`;

const SomeExtraDesignContainer = styled.div`
  width: 90%;
  margin: 100px auto 0;
`;

const HeaderExtraDesign = styled.div`
  * {
    text-align: center;
    margin: 10px 0;
  }
`;

const ContentContainerExtraDesign = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentExtraDesign = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  width: 300px;
  height: 300px;
  margin: 20px;
  padding: 20px;
  display: flex;
  border-radius: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    text-align: center;
  }

  h3 {
    margin: 20px 0;
  }
`;
