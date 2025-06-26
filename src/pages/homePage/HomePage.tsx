import styled from "styled-components";
import {forSize} from "@mixins";


import HomePageBanner from '@images/banners/homePageBanner.svg'; 
import RatingImg from '@images/icons/rating.svg';

import  ButtonPattern from "@ui/button/ButtonPattern";
import {useNavigate} from "react-router-dom";
import  useAppSelector  from "@hooks/useAppSelector";


const HomeSection = styled.section`
    padding: 100px 120px 140px;
    background-color: var(--background-primary);
    position: relative;
    z-index: 1;
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--background-details);
        clip-path: polygon(0% 0%, 0% -1%, 14% 65%, 100% 100%, 100% 0);
    }

    ${forSize("phone-only")`
    padding: 60px 20px 80px;
  `}
`;

const SectionContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    ${forSize("phone-only")`
    flex-direction: column;
    gap: 2rem;
    align-items: flex-start;
  `}
`;

const SectionContainerLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    max-width: 600px;

    ${forSize("phone-only")`
    max-width: 100%;
  `}
`;

const SectionContainerRight = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    max-width: 600px;

    ${forSize("phone-only")`
    display: none;
  `}
`;

const SectionTitle = styled.h2`
    color: var(--text-title-dark);
    font-size: 3.125rem;
    font-weight: 400;
    line-height: 3.75rem;
    letter-spacing: 1.8px;
    margin-bottom: 1.68rem;
    max-width: 519px;

    ${forSize("phone-only")`
    font-size: 2rem;
    line-height: 2.5rem;
    max-width: 100%;
  `}
`;

const SectionText = styled.p`
    color: var(--text-paragraph);
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 1.5075rem;
    letter-spacing: 0.36px;
    margin-bottom: 3.31rem;
    max-width: 539px;

    ${forSize("phone-only")`
    font-size: 1rem;
    line-height: 1.4rem;
    max-width: 100%;
  `}
`;

const AccentSpan = styled.span`
    color: var(--accent-primary);
`;

const Rating = styled.div`
    margin-top: 1.875rem;
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
`;

const RatingImage = styled.img`
    width: 110px;
    height: 27px;

    ${forSize("phone-only")`
    width: 90px;
    height: auto;
  `}
`;

const Paragraph = styled.p`
    color: var(--text-title-dark);
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.25rem;

    ${forSize("phone-only")`
    font-size: 0.9rem;
  `}
`;

 const HomePage = () => {
    const navigate = useNavigate();

         const user = useAppSelector((state) => state.auth.user)
     

    const handleOrderClick = () => {
        if (user) {
            navigate("/menu");
        } else {
            navigate("/login");
        }
    };
    return (
        <HomeSection>
            <SectionContainer>
                <SectionContainerLeft>
                    <SectionTitle>Beautiful food & takeaway, <AccentSpan>delivered</AccentSpan> to your door.</SectionTitle>
                    <SectionText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</SectionText>
                    <ButtonPattern onClick={handleOrderClick} >Place an order</ButtonPattern>
                    <Rating>
                        <RatingImage src={RatingImg} alt="Trustpilot"/>
                    <Paragraph> <AccentSpan>4.8 out of 5</AccentSpan> based on 2000+ reviews</Paragraph>
                    </Rating>
                </SectionContainerLeft>

                <SectionContainerRight>
                    <img src={HomePageBanner} alt="Banner" />
                </SectionContainerRight>
            </SectionContainer>
        </HomeSection>
    );
};

export default HomePage;
