export interface FaqItem {
    question: string;
    answer: string;
}

// TODO: replace the placeholders with the confirmed questions and answers.
// The reference design's questions (seating, recording, refunds) belong to another event, so none are reused.
export const faqContent = {
    heading: {
        lead: "Everything you",
        highlight: "need to know.",
    },
    // Index of the question that starts open. The design shows the second one open; use -1 for all closed.
    openByDefault: 1,
    items: [
        { question: "[Question 1]", answer: "[Answer 1]" },
        { question: "[Question 2]", answer: "[Answer 2]" },
        { question: "[Question 3]", answer: "[Answer 3]" },
        { question: "[Question 4]", answer: "[Answer 4]" },
        { question: "[Question 5]", answer: "[Answer 5]" },
    ] satisfies FaqItem[],
};