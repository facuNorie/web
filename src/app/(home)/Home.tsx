import React from 'react';
import Email from './Email';
import Experience from './Experience';
import Profile from './Profile';
import Projects from './Projects';
import Skills from './Skills';

function Home() {
    return (
        <div className="mx-auto flex max-w-3xl flex-col gap-14 px-8 py-8 pt-20 lg:gap-20 lg:px-2">
            <Profile />
            <hr className="border-gray-400" />
            <Experience />
            <Projects />
            <Skills />
            <Email />
        </div>
    );
}

export default Home;
