import React from 'react';
import Briefcase from '@/components/ui/briefcase';
import Title from '../(shared)/title';
import { Typography } from '../(shared)/typography';

function Experience() {
    return (
        <div>
            <Title title="Experience" icon={<Briefcase />} />
            <div>
                <Typography
                    variant="p"
                    className="text-xl font-semibold text-gray-100"
                >
                    Frontend developer • Esto es SRL
                </Typography>
                <Typography variant="p" className="text-md">
                    Jun 2022 - now
                </Typography>
                <ul className="ml-5 mt-4 list-disc text-lg text-gray-300">
                    <li>
                        Spearheading frontend development for diverse projects
                        using Next.js, React, Tailwind CSS, Material-UI, and
                        Strapi.
                    </li>
                    <li>
                        Managing multiple projects concurrently and
                        collaborating closely with clients for tailored
                        solutions.
                    </li>
                    <li>
                        Showcasing a diverse skill set in frontend development
                        and contributing to the optimization of web performance.
                    </li>
                </ul>
            </div>
            <div className="mt-5">
                <Typography
                    variant="p"
                    className="text-xl font-semibold text-gray-100"
                >
                    Internship Frontend • Alkemy
                </Typography>
                <Typography variant="p" className="text-md">
                    Oct 2021 - Nov 2021
                </Typography>
                <ul className="ml-5 mt-4 list-disc text-lg text-gray-300">
                    <li>
                        Collaborated with a group of developers to create a
                        small-scale e-commerce platform using React.js.
                    </li>
                    <li>
                        Gained valuable experience in teamwork and React.js
                        application development in a professional setting.
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Experience;
