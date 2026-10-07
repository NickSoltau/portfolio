import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import headshot from './headshot.jpg'
import logoNick from './logoNick.png'
import camping from './camping.jpg'

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    headshot,
    logoNick,
    camping,
};

export const workData = [
    {
        title: 'CraftDesk',
        description: 'Booking and deposit platform for small service businesses. A customer requests a job, the shop approves it, the customer pays a deposit through Stripe, and both sides track its status. Emails go out automatically at each step.',
        stack: ['React', 'Vite', 'Tailwind', 'Supabase', 'Stripe', 'Resend'],
        live: 'https://craft-desk-rho.vercel.app',
        github: 'https://github.com/NickSoltau/craftDesk',
        bgImage: '/work-1.png',
    },
    {
        title: 'Summarist',
        description: 'Book-summary app where readers browse and read condensed non-fiction titles. Includes account sign-in and a premium subscription tier for unlocking more books.',
        stack: ['Next.js', 'TypeScript', 'Redux Toolkit', 'Firebase Auth', 'Stripe'],
        live: 'https://summarist-swart.vercel.app',
        github: 'https://github.com/NickSoltau/summarist',
        bgImage: '/work-3.png',
    },
    {
        title: 'Ultraverse NFT Marketplace',
        description: 'A static starter template that I turned into a working app: live API data on every page, skeleton loading states, working Explore filters, a functioning auction countdown, and scroll animations.',
        stack: ['React', 'Axios', 'React Router'],
        live: 'https://nick-internship-seven.vercel.app',
        github: 'https://github.com/NickSoltau/nft-marketplace-api-integration',
        bgImage: '/work-4.png',
    },
    {
        title: 'Skinstric AI Powered Skincare',
        description: 'Front-end internship project built from Figma specs. Uses camera or upload image to perform an AI analysis API returns results with confidence rings. Features animated diamond transitions and a responsive layout.',
        stack: ['Next.js', 'React', 'Tailwind CSS', 'Fetch API'],
        live: 'https://skinstric-phi-olive.vercel.app/',
        github: 'https://github.com/NickSoltau/Skinstric',
        bgImage: '/work-2.png',
    },



]

export const serviceData = [
    { icon: assets.web_icon, title: 'Web design', description: 'Web development is the process of building, programming...', link: '' },
    { icon: assets.mobile_icon, title: 'Mobile app', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
    { icon: assets.ui_icon, title: 'UI/UX design', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
    { icon: assets.graphics_icon, title: 'Graphics design', description: 'Creative design solutions to enhance visual communication...', link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript React Js, Next Js' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'BA Philosophy' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Visit my Github repo' }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
];