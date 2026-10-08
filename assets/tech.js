import mail from './tech/mail.svg'
import linkedin from './tech/linkedin.svg'
import html5 from './tech/html5.svg'
import css3 from './tech/css3.svg'
import javascript from './tech/javascript.svg'
import typescript from './tech/typescript.svg'
import react from './tech/react.svg'
import nextjs from './tech/nextjs.svg'
import tailwind from './tech/tailwindcss.svg'
import github from './tech/github.svg'
import firebase from './tech/firebase.svg'
import supabase from './tech/supabase.svg'
import stripe from './tech/stripe.svg'
import vercel from './tech/vercel.svg'
import figma from './tech/figma.svg'
import vscode from './tech/vscode.svg'

// invert: true  -> the logo is black, so flip it to white in dark mode
// url           -> optional, turns the tile into a link
export const techGroups = [
    {
        label: 'Tech stack',
        items: [
            { name: 'HTML', icon: html5 },
            { name: 'CSS', icon: css3 },
            { name: 'JavaScript', icon: javascript },
            { name: 'TypeScript', icon: typescript },
            { name: 'React', icon: react },
            { name: 'Next.js', icon: nextjs, invert: true },
            { name: 'Tailwind', icon: tailwind },
        ],
    },
    {
        label: 'Tools & services',
        items: [
            { name: 'Firebase', icon: firebase },
            { name: 'Supabase', icon: supabase },
            { name: 'Stripe', icon: stripe },
            { name: 'Vercel', icon: vercel, invert: true },
            { name: 'Figma', icon: figma },
            { name: 'VS Code', icon: vscode },
        ],
    },
]

// Contact row under the About paragraph
export const contactLinks = [
    { name: 'Email', icon: mail, invert: true, url: 'mailto:Nick.Soltau@gmail.com' },
    { name: 'LinkedIn', icon: linkedin, url: 'https://www.linkedin.com/in/nicholas-soltau-075798376' },
    { name: 'GitHub', icon: github, invert: true, url: 'https://github.com/NickSoltau' },
]
