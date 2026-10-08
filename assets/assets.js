import right_arrow_white from './right-arrow-white.png';
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
import right_arrow from './right-arrow.png';
import headshot from './headshot.jpg'
import logoNick from './logoNick.png'
import camping from './camping.jpg'

export const assets = {
    right_arrow_white,
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
    right_arrow,
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
        tryIt: {
            steps: [
                { title: 'Book as a customer', detail: 'No login needed. Fill out the form and submit it.', href: 'https://craft-desk-rho.vercel.app/book/mikes-glove-shop', linkLabel: 'Booking page' },
                { title: 'Log in as the shop owner', detail: 'Email: Mike@mikesgloves.com | Password: Mike123', href: 'https://craft-desk-rho.vercel.app/login', linkLabel: 'Owner login' },
                { title: 'Approve the request', detail: 'It appears under Pending Requests. Approving it generates a Stripe payment link automatically.' },
                { title: 'Track the job', detail: 'In the Active Jobs tab, move it through Deposit Paid, In Progress, Ready for Pickup, and Completed.' },
            ],
            payment: 'Stripe runs in test mode, so no real charges. Pay with card 4242 4242 4242 4242, any future expiry, any 3-digit CVC, and any 5-digit ZIP.',
        },
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
