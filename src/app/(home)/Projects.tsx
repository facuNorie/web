import React from 'react';
import Code from '@/components/ui/code';
import { projects } from '@/utils/project.data';
import Card from '../(shared)/card';
import Title from '../(shared)/title';

function Projects() {
    return (
        <div>
            <Title title="Projects" icon={<Code />} />
            {projects.map((project) => (
                <Card {...project} key={project.id} />
            ))}
        </div>
    );
}

export default Projects;
