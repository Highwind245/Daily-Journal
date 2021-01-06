import { getEntries, useJournalEntries } from "./JournalDataPrivoder.js";
import { JournalEntryComponent } from "./JournalEntry.js";

const entryLog = document.querySelector("#entryLog");

export const EntryListComponent = () => {
    getEntries()
        .then(() => {
            let usingEntries = useJournalEntries()
            for (const entry of usingEntries) {
                const entryHTML = JournalEntryComponent(entry)
                entryLog.innerHTML += entryHTML
            }
        })
}