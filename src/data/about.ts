export interface AboutStat {
    value: string;
    description: string;
}

export interface GalleryImage {
    src: string;
    alt: string;
    // Optional but recommended: the image's real pixel size (shown in the Cloudinary Media Library).
    // Reserves the right space before the image loads, so nothing jumps.
    width?: number;
    height?: number;
}

// TODO: replace every bracketed placeholder with approved copy.
// The reference design's copy and figures belong to another event, so none of it is reused.
export const aboutContent = {
    heading: {
        lead: "Where Global iGaming Leaders ",
        highlight: "Connect, Collaborate and Grow",
    },
    paragraphs: ["IGA Konnect is an exclusive networking space bringing together CEOs, senior executives and influential decision-makers from across the iGaming industry.", "Designed to foster meaningful connections, encourage collaboration and strengthen industry relationships, it offers a premium environment where leaders can exchange perspectives, explore opportunities and build partnerships shaping the future of gaming in Africa."],
    stats: [
        { value: "100+", description: "C-level Operators" },
        { value: "30+", description: "Betting Companies" },
    ] satisfies AboutStat[],
    cta: { label: "Learn More", href: "#registration" },
};

// TODO: alt text for the gallery images, in filename order (first entry = first image).
// An image with no entry here gets empty alt text and is treated as decorative.
export const galleryImages: GalleryImage[]  = [
    {
        src: "https://res.cloudinary.com/odxuv15g/image/upload/v1784632475/DSC03924_mgvc29_mi2z1k.webp",
        alt: "[Describe image 1]"
    },
    {
        src: "https://res.cloudinary.com/odxuv15g/image/upload/v1784632474/DSC03923_boivuu_ziqoxi.webp",
        alt: "[Describe image 2]"
    },
    {
        src: "https://res.cloudinary.com/odxuv15g/image/upload/v1784632472/DSC03907_uqt8nx_shdva1.webp",
        alt: "[Describe image 3]"
    },
    {
        src: "https://res.cloudinary.com/odxuv15g/image/upload/v1784632469/DSC03870_sodkva_eehmpz.webp",
        alt: "[Describe image 4]"
    },
    {
        src: "https://res.cloudinary.com/odxuv15g/image/upload/v1784632470/DSC03873_ypm6ct_twq3rq.webp",
        alt: "[Describe image 5]"
    },
    {
        src: "https://res.cloudinary.com/odxuv15g/image/upload/v1784632471/DSC03875_dfy5bt_rtzyg2.webp",
        alt: "[Describe image 6]"
    },
];