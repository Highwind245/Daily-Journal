import { useJournalEntries } from "./JournalDataPrivoder.js";
import { EntryListComponent } from "./JournalEntryList.js";

const entries = useJournalEntries();

EntryListComponent();