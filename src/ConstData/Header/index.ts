import { PopoverData } from "../../Components/Header/Header"
import { PostEntity } from "../../Interfaces/PostEntity";

export const About: PopoverData = {
    elements: [
        { name: "Home", isLink: true },
        { name: "Services", isLink: true },
        { name: "Contact Us", isLink: true },
        { name: "FAQ", isLink: true },
        { name: "Blog", isLink: true },
        { name: "Career", isLink: true },

    ],
};


export const History: PopoverData = {
    elements: [
        { name: "Profile", isLink: true },
        { name: "Messages", isLink: true },
        { name: "Notifications", isLink: true },
        { name: "Settings", isLink: true },

    ],
};

export const Overview: PopoverData = {
    elements: [
        { name: "Sales", isLink: true },
        { name: "Traffic", isLink: true },
        { name: "Customers", isLink: true },

    ],
};

export const headerTsParticles = {
    style: {
        position: 'absolute'
    },
    background: {
        color: {
            value: "#353535",
        },
    },
    fullScreen: false,
    fpsLimit: 140,




    interactivity: {
        resize: true,
        events: {
            onClick: {
                enable: false,
                mode: "push",
            },
            onHover: {
                enable: true,
                mode: "grab",
                // mode: "connect",
                // mode: "bubble",
                parallax: {
                    "enable": true,
                    "force": 80,
                    "smooth": 50
                }
            },
            resize: true,
        },


        modes: {
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
            bubble: {
                "distance": 90,
                "duration": 10,
                "mix": true,
                "opacity": 1,
                "size": 0.4,
            },
            connect: {
                "distance": 100,
                "links": {
                    "opacity": 0.5
                },
                "radius": 60
            },
            grab: {
                "distance": 130
            }
        },
    },




    particles: {
        color: {
            // value: ["#231123cc", "#e94f3794", "#e94f3737", "#ffffff"],
            value: ["#ffffff0b", "#ffffff17", "#ffffff28", "#ffffff30", "#ffffff33", "#ffffff7c", "#ffffffcc", "#ffffff"],

        },
        links: {
            color: "#ffffff",
            distance: 200,
            enable: true,
            opacity: 1,
            width: 0,
            // strength: 1,
            // type: "static"
        },
        collisions: {
            enable: true,
        },
        move: {
            direction: "none",
            enable: true,
            outModes: {
                default: "bounce",
            },
            random: true,
            speed: 1.1,
            straight: true,
        },
        number: {
            density: {
                enable: true,
                value_area: 800
            },
            value: 100
        },
        opacity: {
            value: 0,
        },
        shape: {
            type: "circle",
        },
        size: {
            value: { min: 1.1, max: 1.5 },
        },
    },
    detectRetina: true,
}


