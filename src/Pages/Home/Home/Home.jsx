import React from 'react';
import TopSlider from '../TopSlider/TopSlider';
import ExtraSection from '../ExtraSection/ExtraSection';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructor from '../PopularInstructor/PopularInstructor';
import { Slide, Fade, Zoom } from 'react-awesome-reveal';

const Home = () => {
    return (
        <div>

            <TopSlider></TopSlider>
            <Fade delay={300}>
                <PopularClasses></PopularClasses>
            </Fade>
            <Fade delay={300}>
                <PopularInstructor></PopularInstructor>
            </Fade>
            <Slide direction="left">
                <ExtraSection></ExtraSection>
            </Slide>


        </div>

    );
};

export default Home;