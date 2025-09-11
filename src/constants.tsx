
import React from 'react';
import { ZapIcon, CodeIcon, UsersIcon, GithubIcon, BookOpenIcon, HeartIcon } from './components/IconComponents';
import { Feature } from './types';

export const FEATURES: Feature[] = [
  {
    icon: <CodeIcon />,
    title: 'Genz Syntax',
    description: 'Write code that sounds like you talk. `sus` for if, `vibeCheck` for asserts. It just makes sense, no cap.',
  },
  {
    icon: <ZapIcon />,
    title: 'Blazing Fast',
    description: 'Powered by C++, Rizz++ runs at supersonic speeds. Your code won\'t just be cool, it will be fast AF.',
  },
  {
    icon: <UsersIcon />,
    title: 'Community Driven',
    description: 'Join the squad. Contribute to the language, build dope projects, and shape the future of Rizz++.',
  },
  {
    icon: <GithubIcon />,
    title: 'Open Source',
    description: 'Rizz++ is fully open-source. Peep the code on GitHub, fork it, and make it your own. The community is the main character.',
  },
  {
    icon: <BookOpenIcon />,
    title: 'Easy to Learn',
    description: 'If you can text, you can code in Rizz++. The syntax is intuitive, making it a W for new programmers.',
  },
  {
    icon: <HeartIcon />,
    title: 'Maximum Vibe',
    description: 'Writing code should be a vibe. Rizz++ is designed to be fun, expressive, and a joy to use. ',
  },
];


export const INITIAL_RIZZ_CODE = `rizz Dog:
    drip bark():
        bruh "woof!"
    finna
gonner

x = pullup Dog()
x.bark()`;
