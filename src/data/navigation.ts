export interface NavLink {
    label: string;
    href: string;
}

// Labels and order are copied from the reference design.
// Section ids are provisional until the real sections exist.
export const menuLinks: NavLink[] = [
    { label: "Home", href: "#top" },
    { label: "About Event", href: "#about" },
    { label: "Audeince", href: "#audience" },
    { label: "Notable Attendees", href: "#attendees" },
    { label: "Partners", href: "#partners" },
    { label: "FAQs", href: "#faq" },
];

// TODO: replace "#" with the confirmed social profile URLs.
export const socialLinks: NavLink[] = [
    { label: "Facebook", href: "#" },
    { label: "Twitter", href: "#" },
    { label: "Linkedin", href: "#" },
];

// TODO: point at the real registration or ticket destination once confirmed.
export const ticketLink: NavLink = {
    label: "Get Ticket",
    href: "#registration",
};