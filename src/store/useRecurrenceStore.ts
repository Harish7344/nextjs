import create from "zustand";

// Define the RecurrenceState type
type RecurrenceState = {
  startDate: Date | null;
  endDate: Date | null;
  frequency: "daily" | "weekly" | "monthly" | "yearly";
  interval: number;
  specificDays: number[]; // For weekly
  nthDay: number | null; // For monthly/weekly
  recurrenceDates: Date[];

  setStartDate: (date: Date | null) => void;
  setEndDate: (date: Date | null) => void;
  setFrequency: (frequency: RecurrenceState["frequency"]) => void;
  setInterval: (interval: number) => void;
  setSpecificDays: (days: number[]) => void;
  setNthDay: (nth: number | null) => void;
  generateRecurrenceDates: () => void;
};

// Create the Zustand store with correct types
export const useRecurrenceStore = create<RecurrenceState>((set, get) => ({
  startDate: null,
  endDate: null,
  frequency: "daily",
  interval: 1,
  specificDays: [],
  nthDay: null,
  recurrenceDates: [],

  setStartDate: (date: Date | null) => set({ startDate: date }),
  setEndDate: (date: Date | null) => set({ endDate: date }),
  setFrequency: (frequency: RecurrenceState["frequency"]) => set({ frequency }),
  setInterval: (interval: number) => set({ interval }),
  setSpecificDays: (days: number[]) => set({ specificDays: days }),
  setNthDay: (nth: number | null) => set({ nthDay: nth }),

  generateRecurrenceDates: () => {
    const { startDate, endDate, frequency, interval } = get();
    const dates: Date[] = [];

    const generateDates = (startDate: Date, endDate: Date) => {
        const currentDate = new Date(startDate);
      while (currentDate <= endDate) {
        dates.push(new Date(currentDate)); // Create a new Date instance to avoid mutating the same object

        if (frequency === "daily") {
          currentDate.setDate(currentDate.getDate() + interval);
        } else if (frequency === "weekly") {
          currentDate.setDate(currentDate.getDate() + 7 * interval);
        } else if (frequency === "monthly") {
          currentDate.setMonth(currentDate.getMonth() + interval);
        } else if (frequency === "yearly") {
          currentDate.setFullYear(currentDate.getFullYear() + interval);
        }
      }
    };

    // Only generate dates if both startDate and endDate are available
    if (startDate && endDate) {
      generateDates(startDate, endDate);
    }

    set({ recurrenceDates: dates });
  },
}));
