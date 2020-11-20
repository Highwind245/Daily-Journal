const journal = [
    {
        id: 1,
        date: "07/24/2025",
        title: "HTML & CSS",
        entryText: "We talked about HTML components and how to make grid layouts with Flexbox and CSS.",
        mood: "Neutral"
    },
    {
        id: 2,
        date: "03/11/2026",
        title: "GRADUATION",
        entryText: "Finally graduating, thanks for the support!!!",
        mood: "Excited"
    },
    {
        id: 3,
        date: "12/20/2026",
        title: "Christmas Time is Coming",
        entryText: "Merry Christmas Y'all!",
        mood: "Happy"

    }
]

export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
        Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}