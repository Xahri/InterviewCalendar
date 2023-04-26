import { useSnapshot } from "valtio";
import { state } from '../State/State';
import FooterStyles from './FooterStyles';


export default function Footer() {

    const snap = useSnapshot(state);
    const month = new Date().toLocaleString('default', { month: 'long' });
    const currentDate = [new Date().getDate(), month, new Date().getFullYear()]
    // Check if the selected date is today's date, if so, we render "Today", if not, we render the selected date.
    let equalDates = snap.selectedDate[0] === currentDate[0]
        && snap.selectedDate[1] === currentDate[1]
        && snap.selectedDate[2] === currentDate[2];

    function handleAdd() {
        if (!snap.saved.includes(snap.selectedCell)) {
            state.saved.push(snap.selectedCell);
            state.deleted = !snap.deleted; // Just as a refresher.
        }
    }

    function handleDelete() {
        let value = snap.selectedCell;

        // Remove the selected cell from the state's saved array.
        state.saved = state.saved.filter(function(item) {
            return item !== value
        })
        state.deleted = !snap.deleted;
    }

    return (
        <FooterStyles.FooterContainer>
            <FooterStyles.FooterContentContainer>
                <FooterStyles.Title>
                    {equalDates ? 'Today' : `${snap.selectedDate[0]} ${snap.selectedDate[1]} ${snap.selectedDate[2]}`}
                </FooterStyles.Title>
                {snap.selectedCell !== null && snap.saved.includes(snap.selectedCell) ? (
                    <FooterStyles.Action onClick={handleDelete}>Delete</FooterStyles.Action>
                ) : snap.selectedCell !== null && !snap.saved.includes(snap.selectedCell) ? (
                    <FooterStyles.Action onClick={handleAdd}>Add</FooterStyles.Action>
                ) : null}
            </FooterStyles.FooterContentContainer>
        </FooterStyles.FooterContainer>
    )
}
