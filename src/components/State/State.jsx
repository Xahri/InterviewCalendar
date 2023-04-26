import { proxy, subscribe } from "valtio";
import { subscribeKey } from 'valtio/utils'

const state = proxy({
  monthYear: null,
  days: [null, null, null, null, null, null, null],
  saved: localStorage.getItem("saved") ? JSON.parse(localStorage.getItem("saved")) : [],
  deleted: false,
  selectedDate: [
    new Date().getDate(),
    new Date().toLocaleString("default", { month: "long" }),
    new Date().getFullYear(),
  ],
  selectedCell: null,
});

// These two subscriptions lets us listen to changes made to 'state.saved' and 'deleted'.
subscribe(state.saved, () => {
    console.log('Added to state.saved');
    localStorage.setItem("saved", JSON.stringify(state.saved));
})
subscribeKey(state, 'deleted', () => {
    console.log('Deleted from state.saved');
    localStorage.setItem("saved", JSON.stringify(state.saved));
})

export { state };
