export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
        <h2 class="title">${entry.title}</h2>
        <div class="date">${entry.date}</div>
        <div class="mood">${entry.mood}</div>
        <p class="text">${entry.entryText}</p>
        </section>
    `
}