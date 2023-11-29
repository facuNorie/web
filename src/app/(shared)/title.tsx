import React from 'react';
import { Typography } from './typography';

interface TitleProps {
    title: string;
    icon: React.JSX.Element;
}

function Title({ title, icon }: TitleProps) {
    return (
        <div className="mb-5 flex items-center gap-4">
            <Typography variant="h3" className="text-white">
                {title}
            </Typography>
            {icon}
        </div>
    );
}

export default Title;
