import React from 'react'
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import Telegram from '@material-ui/icons/Telegram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram'
import GithubIcon from '@material-ui/icons/GitHub';
import YoutubeIcon from '@material-ui/icons/YouTube';
import Particle from '../Components/Particle';

function HomePage() {
    return (
        <HomePageStyled>
            <div className="particle-con">
                <Particle />
            </div>
            <div className="typography">
                <h1>Hi, I'm <span>Tejas Kedari</span></h1>
                <p>
                    I am Computer Science Enthusiast. I started learning programming languages since when I was 14 years old. I worked on several frameworks such as Angular, React, Django, NodeJs, ExpressJs ...
                </p>
                <div className="icons">
                    <a href="https://www.google.com" className="icon i-facebook">
                        <FacebookIcon />
                    </a>
                    <a href="https://www.google.com" className="icon i-insta">
                        <InstagramIcon />
                    </a>
                    <a href="https://www.google.com" className="icon i-twitter">
                        <TwitterIcon />
                    </a>
                    <a href="https://www.google.com" className="icon i-github">
                        <GithubIcon />
                    </a>
                    <a href="https://www.google.com" className="icon i-linkedIn">
                        <LinkedInIcon />
                    </a>
                    <a href="https://www.google.com" className="icon i-youtube">
                        <YoutubeIcon />
                    </a>
                    <a href="https://www.google.com" className="icon i-telegram">
                        <Telegram />
                    </a>
                </div>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
   
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;

        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }

            .i-youtube{
                &:hover{
                    border: 2px solid red;
                    color: red;
                }
            }

            .i-telegram{
                &:hover{
                    border: 2px solid #0088CC;
                    color: #0088CC;
                }
            }

            .i-twitter{
                &:hover{
                    border: 2px solid #00ACEE;
                    color: #00ACEE;
                }
            }

            .i-insta{
                &:hover{
                    border: 2px solid deeppink;
                    color: deeppink;
                }
            }

            .i-github{
                &:hover{
                    border: 2px solid #5F4687;
                    color: #5F4687;
                }
            }

            .i-linkedIn{
                &:hover{
                    border: 2px solid #0A66C2;
                    color: #0A66C2;
                }
            }
        }
    }
`;

export default HomePage;
