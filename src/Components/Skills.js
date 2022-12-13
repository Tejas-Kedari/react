import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ProgressBar from './ProgressBar';

function Skills() {
    return (
        <SkillsStyled>
            
                <Title title={'Programming Languages'} span={'Languages'} />
                <InnerLayout>
                    <div className="skills">
                        <ProgressBar 
                            title={'HTML5'}
                            width={'78%'}
                            text={'78%'}
                        />
                        <ProgressBar 
                            title={'CSS3'}
                            width={'70%'}
                            text={'70%'}
                        />
                        <ProgressBar 
                            title={'SCSS'}
                            width={'70%'}
                            text={'70%'}
                        />
                        <ProgressBar 
                            title={'JAVASCRIPT'}
                            width={'65%'}
                            text={'65%'}
                        />
                        <ProgressBar 
                            title={'JAVA'}
                            width={'75%'}
                            text={'75%'}
                        />
                        <ProgressBar 
                            title={'PYTHON'}
                            width={'65%'}
                            text={'65%'}
                        />
                        <ProgressBar 
                            title={'C'}
                            width={'78%'}
                            text={'78%'}
                        />
                        <ProgressBar 
                            title={'C++'}
                            width={'63%'}
                            text={'63%'}
                        />
                    </div>
                </InnerLayout>
                <Title title={'FrameWorks I Worked On'} span={'FrameWorks'}/>
                <InnerLayout>
                    <div className="skills">
                        <ProgressBar 
                            title={'Angular'}
                            width={'82%'}
                            text={'82%'}
                        />
                        <ProgressBar 
                            title={'React Js'}
                            width={'70%'}
                            text={'70%'}
                        />
                        <ProgressBar 
                            title={'Django'}
                            width={'65%'}
                            text={'65%'}
                        />
                        <ProgressBar 
                            title={'Express Js'}
                            width={'75%'}
                            text={'75%'}
                        />
                        <ProgressBar 
                            title={'Node Js'}
                            width={'65%'}
                            text={'65%'}
                        />
                        <ProgressBar 
                            title={'React Native'}
                            width={'78%'}
                            text={'78%'}
                        />
                        <ProgressBar 
                            title={'Flutter'}
                            width={'70%'}
                            text={'70%'}
                        />
                    </div>
                </InnerLayout>
                <Title title={'UI/UX Graphics Designing'} span={'Designing'}/>
                <InnerLayout>
                    <div className="skills">
                        <ProgressBar 
                            title={'Figma'}
                            width={'78%'}
                            text={'78%'}
                        />
                        <ProgressBar 
                            title={'Adobe Photoshop 2020'}
                            width={'70%'}
                            text={'70%'}
                        />
                        <ProgressBar 
                            title={'Adobe Premier Pro 2020'}
                            width={'68%'}
                            text={'68%'}
                        />
                        <ProgressBar 
                            title={'Adobe After Effects 2020'}
                            width={'75%'}
                            text={'75%'}
                        />
                    </div>
                </InnerLayout>
                <Title title={'DataBases'} span={'Database'}/>
                <InnerLayout>
                    <div className="skills">
                        <ProgressBar 
                            title={'MySQL'}
                            width={'70%'}
                            text={'70%'}
                        />
                        <ProgressBar 
                            title={'MongoDB'}
                            width={'70%'}
                            text={'70%'}
                        />
                        <ProgressBar 
                            title={'Redis'}
                            width={'68%'}
                            text={'68%'}
                        />
                        <ProgressBar 
                            title={'FireBase'}
                            width={'60%'}
                            text={'60%'}
                        />
                        <ProgressBar 
                            title={'Influx DB'}
                            width={'65%'}
                            text={'65%'}
                        />
                    </div>
                </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default Skills;
