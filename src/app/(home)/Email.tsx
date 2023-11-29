'use client';
import React from 'react';
import copy from 'copy-to-clipboard';
import { Button } from '@/components/ui/button';
import Clipboard from '@/components/ui/clipboard';
import Mail from '@/components/ui/email';
import Send from '@/components/ui/send';
import Title from '../(shared)/title';

function Email() {
    const handleClick = () => {
        copy('facunorie.dev@gmail.com');
    };
    return (
        <div>
            <Title title="Email" icon={<Mail />} />
            <div className="flex gap-2">
                <input
                    placeholder="facunorie.dev@gmail.com"
                    type="text"
                    disabled
                    className="w-full rounded bg-black/10 px-3 text-lg text-slate-300"
                />
                <a
                    href="mailto:facunorie.dev@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    <Button variant="contained" className="font-semibold">
                        <Send />
                        Send
                    </Button>
                </a>
                <Button
                    variant="contained"
                    onClick={handleClick}
                    className="font-semibold"
                >
                    <Clipboard />
                    Copy
                </Button>
            </div>
        </div>
    );
}

export default Email;
