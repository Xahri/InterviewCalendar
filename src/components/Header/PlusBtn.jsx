import { useState } from 'react';
import { state } from '../State/State';
import DatePicker from 'react-datepicker';
import PlusBtnStyles from './PlusBtnStyles';

export default function PlusBtn() {  

    function CustomDatePicker() {
        const [showCalendar, setShowCalendar] = useState(false);
        const [showDatePicker, setShowDatePicker] = useState(true);
        const [,setShowTimePicker] = useState(false);
        const [selectedDate, setSelectedDate] = useState(new Date())
        const [selectedTime, setSelectedTime] = useState(0);

        const handleDateChange = (date) => {
            setSelectedDate(date);
        };

        function handleCancelBtn() {
            setShowCalendar(false);
            setShowTimePicker(false);
            setShowDatePicker(true);
            setSelectedDate(new Date());
        }

        function handleOkBtn() {

            if (showDatePicker === true) {
                setShowDatePicker(false);
                setShowTimePicker(true);
            } else {
                setShowTimePicker(false);
                setShowCalendar(false);
                setShowDatePicker(true);
            }

            const monthYear = (selectedDate.toLocaleDateString('en-US', {
                month: 'long',
                year: 'numeric',
            }));

            const cellID = monthYear.toString() + ' ' + selectedDate.getDate().toString() + ' ' + selectedTime.toString();
            if (!state.saved.includes(cellID) && showDatePicker !== true)
                state.saved.push(cellID)
        }

        function handleHourChange(event) {
            console.log(event.target.value);
            setSelectedTime(event.target.value);
        }

        return (

            <>
                {showCalendar ? 
                    <>
                        <PlusBtnStyles.Overlay />
                        <PlusBtnStyles.DatePickerWrapper>
                            {
                                showDatePicker ?
                                <>
                                    <PlusBtnStyles.Text>Enter event date:</PlusBtnStyles.Text>
                                    <PlusBtnStyles.Text>YYYY-MM-DD</PlusBtnStyles.Text>
                                </>
                                :
                                <>
                                    <PlusBtnStyles.Text>Enter event time:</PlusBtnStyles.Text>
                                    <PlusBtnStyles.Text>HH:mm</PlusBtnStyles.Text>
                                </>
                            }
                            {showDatePicker ?
                                <DatePicker selected={selectedDate} onChange={handleDateChange} dateFormat="yyyy/MM/dd" />
                                :
                                <select onChange={handleHourChange} style={{marginTop: '2px'}}>
                                    {[...Array(24).keys()].map(hour => (
                                        <option key={hour} value={hour}>
                                            {hour < 10 ? '0'+hour+':00' : hour+':00'} 
                                        </option>
                                    ))}
                                </select>
                            }
                            <PlusBtnStyles.ButtonsWrapper>
                                <PlusBtnStyles.Button onClick={handleCancelBtn}>Cancel</PlusBtnStyles.Button>
                                <PlusBtnStyles.Button onClick={handleOkBtn}>Ok</PlusBtnStyles.Button>
                            </PlusBtnStyles.ButtonsWrapper>
                        </PlusBtnStyles.DatePickerWrapper>
                    </>
                    :
                    <PlusBtnStyles.RedBtn onClick={() => setShowCalendar(true)}>+</PlusBtnStyles.RedBtn>
                }
            </>
        );
    }

    return (
        <CustomDatePicker />
    )
}
