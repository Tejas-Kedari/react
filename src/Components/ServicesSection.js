import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ServiceCard from '../Components/ServiceCard';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
// import gamedev from '../img/game-dev.svg';
import seo from '../img/Increase.svg';
import uiux from '../img/Web.svg';
import content from '../img/WordPress.svg';
import mobile from '../img/mobile.svg';

function ServicesSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={'Services'} span={'services'} />
                <div className="services">
                    <ServiceCard 
                        image={design} 
                        title={'Web Development'} 
                        paragraph={'I have good experience in web developement. I build so much WebApplications and websites, specially single page applications.'}
                    />
                    <div className="mid-card">
                        <ServiceCard 
                            image={intelligence} 
                            title={'IOT'} 
                            paragraph={'I developed IOT based projects so that we can operate the devices thorough the internet. Which ultimately save the time and management of devices manually.'}
                        />
                    </div>
                    <ServiceCard 
                        image={mobile} 
                        title={'Mobile Apps'} 
                        paragraph={'I developed mobile apps in flutter and react-native. Those technologies reduce the code developement time and gives same UI in all platforms'}
                    />
                </div>
                <div className="services">
                    <ServiceCard 
                        image={uiux} 
                        title={'Graphics Design'} 
                        paragraph={'I design UI/UX for webapplications and mobile apps. Also hands on Adobe Softwares like Photoshop, Primier Pro and After Effects'}
                    />
                    <div className="mid-card">
                        <ServiceCard 
                            image={seo} 
                            title={'SEO'} 
                            paragraph={'I optimize the website as per seo rules and can do offpage, onpage and technical seo. As well as i do seo for youtube and other social media platforms.'}
                        />
                    </div>
                    <ServiceCard 
                        image={content} 
                        title={'Content Writing'} 
                        paragraph={'I write seo freindly content in technical field like programming concepts and informations and explanations about functions and structures of languages.'}
                    />
                </div>
            </ServicesSectionStyled>
        </InnerLayout>
    )
}

const ServicesSectionStyled = styled.section`
    .services{
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width:1000px){
            flex-direction: column;
        }
        @media screen and (max-width:950px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
       
    }
`;

export default ServicesSection;
