import React from 'react';
import Image from 'next/image';
import Arrow from '@/components/ui/arrow';
import { Button } from '@/components/ui/button';
import Send from '@/components/ui/send';
import { Typography } from './typography';

interface CardProps {
    img: string;
    title: string;
    desc: string;
    link: string;
}

function Card({ img, title, desc, link }: CardProps) {
    return (
        <div className="my-6 flex flex-col items-start gap-6 md:flex-row md:items-center">
            <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="group relative block w-fit"
            >
                <Image
                    src={img}
                    width={350}
                    height={200}
                    alt={`Project ${title}`}
                    className="h-[220px] rounded border border-[#2B364C] drop-shadow-md grayscale hover:grayscale-0 group-hover:border-gray-400"
                />
                <Arrow />
            </a>
            <div className="flex flex-col gap-2">
                <Typography
                    variant="h5"
                    className="text-2xl font-bold text-gray-100"
                >
                    {title}
                </Typography>
                <Typography variant="p">{desc}</Typography>
                <a href={link} target="_blank" rel="noreferrer">
                    <Button
                        variant="contained"
                        className="text-md gap-2 px-4 font-semibold"
                    >
                        Live
                        <Send />
                    </Button>
                </a>
            </div>
        </div>
    );
}

export default Card;
