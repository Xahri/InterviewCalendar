import { useState } from 'react';
import PlusBtn from './PlusBtn';
import { state } from '../State/State';
import HeaderStyles from './HeaderStyles';

function Header() {

  const [date, setDate] = useState(new Date());
  const month = new Date().toLocaleString('default', { month: 'long' });
  const [selectedDate, setSelectedDate] = useState([new Date().getDate(), month, new Date().getFullYear()]);
  const daysOfWeek = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

  const monthYear = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  const getDatesArray = () => {
    const dates = [];
    const currentDate = new Date(date);
    const currentDay = currentDate.getDay();
    const startDate = new Date(currentDate);
    startDate.setDate(currentDate.getDate() - currentDay);
  
    for (let i = 0; i < 7; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i+1);
      dates.push(date);
    }

    state.monthYear = monthYear;
    for (let i = 0; i < 7; i++) {
      state.days[i] = dates[i].getDate();
    }
  
    return dates;
  };
  
  const handleDayClick = (index, date = null) => {
    const month = date.toLocaleString('default', { month: 'long' });
    setSelectedDate([date.getDate(), month, date.getFullYear()]);
    state.selectedDate[0] = date.getDate();
    state.selectedDate[1] = month;
    state.selectedDate[2] = date.getFullYear();
    console.log(date);
    // setDate(date);
  };

  const handleWeekLeftArrow = () => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() - 7);
    setDate(newDate);
  };

  const handleWeekRightArrow = () => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + 7);
    setDate(newDate);
  };

  const handleMonthLeftArrow = () => {
    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() - 1);
    setDate(newDate);
  };

  const handleMonthRightArrow = () => {
    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() + 1);
    setDate(newDate);
  };

  const dates = getDatesArray(date);

  return (
    <>
      <HeaderStyles.TitleWrapper>
        <h1>Interview Calendar</h1>
        <PlusBtn />
      </HeaderStyles.TitleWrapper>
      <HeaderStyles.HeaderNavWrapper>
        <HeaderStyles.WeeksWrapper>
          <HeaderStyles.TimeSpacer>00:00</HeaderStyles.TimeSpacer>
          <button onClick={handleWeekLeftArrow} style={{color: '#ff3131'}}>&lt;</button>
          {dates.map((date, index) => (
            <div key={index} style={{margin: '0 auto', textAlign: 'center', alignContent: 'center', alignItems: 'center'}}>
              <HeaderStyles.DaysOfWeekContainer>{daysOfWeek[index]}</HeaderStyles.DaysOfWeekContainer>

              <div
                style={{
                  borderRadius: '50%',
                  padding: '6px 6px 6px 6px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  alignContent: 'center',
                  alignItems: 'center',
                  width: '29.74px',
                  height: '29.74px',
                  display: 'flex',
                  justifyContent: 'center',
                  backgroundColor:
                    selectedDate[0] === date.getDate()
                    && selectedDate[1] === date.toLocaleString('default', { month: 'long' })
                    && selectedDate[2] === date.getFullYear() ? '#ff3131' : 'transparent',
                  color:
                    selectedDate[0] === date.getDate()
                    && selectedDate[1] === date.toLocaleString('default', { month: 'long' })
                    && selectedDate[2] === date.getFullYear() ? 'white' : 'black',
                }}
                onClick={() => handleDayClick(index, date)}
              >
                {date.getDate()}
              </div>
            </div>
          ))}
          <button onClick={handleWeekRightArrow} style={{color: '#ff3131'}}>&gt;</button>
        </HeaderStyles.WeeksWrapper>

        <div style={{display: 'flex', flexDirection: 'row', textAlign: 'center', alignContent: 'center', alignItems: 'center'}}>
          <HeaderStyles.TimeSpacer>00:00</HeaderStyles.TimeSpacer>
          <div style={{display: 'flex', gap: '24px', margin: '0 auto'}}>
            <button onClick={handleMonthLeftArrow} style={{color: '#ff3131'}}>&lt;</button>
            <div style={{ flex: 1 }}>
              <div>{monthYear}</div>
            </div>
            <button onClick={handleMonthRightArrow} style={{color: '#ff3131'}}>&gt;</button>
          </div>
        </div>
      </HeaderStyles.HeaderNavWrapper>
    </>
  );
}       

export default Header;
