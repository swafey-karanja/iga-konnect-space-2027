export type SocialNetwork = "linkedin" | "x" | "instagram" | "facebook" | "website";

export const socialLabels: Record<SocialNetwork, string> = {
    linkedin: "LinkedIn",
    x: "X",
    instagram: "Instagram",
    facebook: "Facebook",
    website: "their website",
};

export interface Speaker {
    name: string;
    company: string;
    role: string;
    image: string;
    // Only the networks listed here get an icon. Leave out any that don't apply.
    socials: Partial<Record<SocialNetwork, string>>;
}

// TODO: replace every bracketed placeholder with approved content.
export const speakersContent = {
    heading: {
        lead: "Meet Some of Our",
        highlight: "Notable Attendees",
    },
    intro: "World-class operators, innovators, and CEOs connecting and growing through our event.",
    cta: { label: "[Button label]", href: "#" },
    speakers: [
        {
            name: "Elena Rostova",
            company: "Vortex AI",
            role: "Head of Machine Learning",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=761&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
            socials: {
                linkedin: "https://linkedin.com/in/elenarostova",
                x: "https://x.com/elena_ai",
                website: "https://elenarostova.dev",
            },
        },
        {
            name: "Sarah Chen",
            company: "Starlight Ventures",
            role: "Partner & Tech Lead",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
            socials: {
                linkedin: "https://linkedin.com/in/sarahchen-vc",
            },
        },
        {
            name: "Marcus Vance",
            company: "Apex Cloud Systems",
            role: "Principal Infrastructure Architect",
            image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
            socials: {
                linkedin: "https://linkedin.com/in/marcusvance",
                x: "https://x.com/marcusvance_ops",
                facebook: "https://facebook.com/marcus.vance.tech",
                website: "https://marcusvance.io",
            },
        },
        {
            name: "David Kim",
            company: "Nexus Design Studio",
            role: "VP of Product Experience",
            image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
            socials: {
                linkedin: "https://linkedin.com/in/davidkim-ux",
                instagram: "https://instagram.com/dkim_design",
            },
        },
        {
            name: "Aisha Patel",
            company: "CyberGuard Labs",
            role: "Chief Information Security Officer",
            image: "https://images.unsplash.com/photo-1615813967515-e1838c1c5116?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
            socials: {
                linkedin: "https://linkedin.com/in/aishapatel-sec",
                x: "https://x.com/aishasec",
                website: "https://aishapatel.com",
            },
        },
        {
            name: "Carlos Mendez",
            company: "FlowState Data",
            role: "Lead Data Engineer",
            image: "https://images.unsplash.com/photo-1679480911476-3ee732578062?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
            socials: {
                linkedin: "https://linkedin.com/in/carlosmendez-data",
                instagram: "https://instagram.com/carlos_code",
                facebook: "https://facebook.com/carlosmendez.dev",
            },
        },
        {
            name: "Amara Okezie",
            company: "Fin Pulse",
            role: "Director of Fintech Innovation",
            image: "https://images.unsplash.com/photo-1589696485114-9e2f81d83484?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
            socials: {
                linkedin: "https://linkedin.com/in/amaraokezie",
                x: "https://x.com/amara_fintech",
            },
        },
        {
            name: "Dr. Jonathan Thorne",
            company: "Quantum Dynamics",
            role: "Senior Research Scientist",
            image: "https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
            socials: {
                website: "https://jthorne-quantum.org",
            },
        },
        {
            name: "Maya Lin",
            company: "HyperScale Robotics",
            role: "Co-Founder & CTO",
            image: "https://images.unsplash.com/photo-1563132337-f159f484226c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
            socials: {
                linkedin: "https://linkedin.com/in/mayalin-robotics",
                x: "https://x.com/mayalin_cto",
                instagram: "https://instagram.com/mayalin_tech",
                website: "https://mayalin.io",
            },
        },
    ] satisfies Speaker[],
};