export interface AudienceCard {
    title: string;
    description: string;
}

export const audienceContent = {
    heading: {
        lead: "Designed for iGaming",
        highlight: "operators and Stakeholders",
    },
    // TODO: the four groups come from the project brief; the descriptions are draft copy for approval.
    cards: [
        {
            title: "CEOs and C-Suite Executives",
            description:
                "Chief executives and senior leaders who set the direction of betting and gaming businesses.",
        },
        {
            title: "Founders and Owners",
            description:
                "The people who built and run betting and gaming companies, meeting peers who face the same decisions.",
        },
        {
            title: "Senior Operators",
            description:
                "Experienced operators leading betting and gaming businesses and shaping how the industry runs.",
        },
        {
            title: "Industry Leaders",
            description:
                "Other high-ranking leaders and decision-makers shaping the future of iGaming and betting.",
        },
    ] satisfies AudienceCard[],
};