import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import GitIcon from '@/components/ui/gitIcon';
import LinkedinIcon from '@/components/ui/linkedinIcon';
import ResumeIcon from '@/components/ui/resumeIcon';
import { Typography } from '../(shared)/typography';

function Profile() {
    return (
        <div className="flex flex-col items-center gap-5 lg:flex-row">
            <Image
                src="/images/profile.jpg"
                width={160}
                height={160}
                alt="Profile img"
                className="rounded"
            />
            <div className="text-center lg:text-left">
                <Typography variant="h2" className="text-white">
                    Facundo Noriega
                </Typography>
                <Typography variant="h4" className="mb-3 font-medium">
                    I&apos;m a passionate frontend developer.
                </Typography>
                <div className="flex items-center justify-center gap-3 lg:justify-start">
                    <Button variant="contained" className="font-semibold">
                        <ResumeIcon />
                        Resume
                    </Button>
                    <a
                        href="https://www.linkedin.com/in/facunorie/"
                        target="_blank"
                        rel="noreferrer"
                        className="rounded border-2 border-teal-500 p-2"
                    >
                        <LinkedinIcon />
                    </a>
                    <a
                        href="https://github.com/facunorie"
                        target="_blank"
                        rel="noreferrer"
                        className="rounded border-2 border-teal-500 p-2"
                    >
                        <GitIcon />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Profile;
