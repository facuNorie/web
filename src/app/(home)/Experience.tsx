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
                        Developer as fronted defvloepr with tecnolfies as nxt js
                        react reailwin
                    </li>
                    <li>been part of many proejets interat wit hte client</li>
                    <li>manitan & developer feruter as fornte devgloper</li>
                </ul>
            </div>
            <div className="mt-5">
                <Typography
                    variant="p"
                    className="text-xl font-semibold text-gray-100"
                >
                    Frontend trainee internship • Alkemy
                </Typography>
                <Typography variant="p" className="text-md">
                    Oct 2021 - Nov 2021
                </Typography>
                <ul className="ml-5 mt-4 list-disc text-lg text-gray-300">
                    <li>
                        Developer as fronted defvloepr with tecnolfies as nxt js
                        react reailwin
                    </li>
                    <li>been part of many proejets interat wit hte client</li>
                    <li>manitan & developer feruter as fornte devgloper</li>
                </ul>
            </div>
        </div>
    );
}

export default Experience;
