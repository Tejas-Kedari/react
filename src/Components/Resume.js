import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
//import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    //const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'resume'} />
            <InnerLayout>
                {/*<div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'2015 - 2020'} 
                        title={'Computer Science Teacher'}
                        subTitle={'Sussex University'}
                        text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. '} 
                    />
                    <ResumeItem 
                        year={'2015 - Present'} 
                        title={'Full Stack Developer'}
                        subTitle={'Microsoft Studios'}
                        text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. '} 
                    />
                    <ResumeItem 
                        year={'2010 - 2017'} 
                        title={'User Interface Designer'}
                        subTitle={'Google Inc'}
                        text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. '} 
                    />
                    </div>*/}
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'2018 - 2021'} 
                        title={'Computer Science Degree'}
                        subTitle={'Shivaji University, Kolhapur'}
                        text={'I got my Computer Science (BCS) degree from Rajarshi Chhatrapati Shahu College, Shivaji University, Kolhapur. Where I learned some Programming languages like C/C++, C#, Java, Python, PHP... etc. I studied some extra stacks like reactJs, NodeJs, ExpressJs, Django Framework. Android devlopment (react-native).'} 
                    />
                    <ResumeItem 
                        year={'2016 - 2018'} 
                        title={'H.S.C'}
                        subTitle={'A.A.C Manchar, Pune'}
                        text={'I Completed my Higher Secondary School education (H.S.C) from Annasaheb Awate College, Manchar, Pune, When I was in the studying in this college, I have get more passion about IT field and I started learning from online resources and learned skills like HTML, CSS, and JavaScript. '} 
                    />
                    <ResumeItem 
                        year={'2015 - 2016'} 
                        title={'S.S.C'}
                        subTitle={'B.V.S Shinoli, Pune'}
                        text={'I Completed my Secondary School education (S.S.C) from Bhimashankar Vidyamandir Shinoli, Pune, Here I get the basic ideas of problem solving methods by solving the geometric and algebric expressions step by step which help in my logic develpment and I learned some basic web development in dreamwaver IDE. '} 
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume
