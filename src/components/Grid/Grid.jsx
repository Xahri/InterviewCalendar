import './Grid.css';
import { useSnapshot } from "valtio";
import { state } from '../State/State';
import GridStyles from './GridStyles';

function Grid() {

  const snap = useSnapshot(state);
  console.log(snap.saved);
  // const hours = Array.from({length: 24}, (_, i) => i);

  const renderAll = () => {
    const cells = [];
    for (let i = 0; i < 24; i++) {
      const cellRows = [];
      for (let j = 0; j < 7; j++) {
        const cellID = snap.monthYear.toString() + ' ' + snap.days[j].toString() + ' ' + i.toString();
        cellRows.push(
          <div
            key={`${i}-${j}`}
            className="gridCell"
            onClick={() => {
              state.selectedCell = cellID;
            }}
            style={{
              background: snap.selectedCell === cellID ? '#b3b7ff'
              : snap.saved.includes(cellID) ? '#ebecff'
              : 'transparent',
              margin: '0 auto'
            }}
          >
          </div>
        );
      }
      cells.push(cellRows)
    }
    return cells;
  }

  const cells = renderAll();

  return (

    <div style={{ padding: '12px 24px 12px 24px' }} className='Cells'>
      <div style={{ display: 'flex', padding: '0px 0px 8px 0px',}}>
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%',}}>
          {cells.map((cellRow, index) => (
            <GridStyles.Container key={index}>
              {
                <div style={{position: 'relative', maxWidth: '740px', display: 'flex'}}>
                <GridStyles.TimeTitle>
                  {
                    index < 10
                    ?
                    '0'+index+':00'
                    :
                    index+':00'
                  }
                </GridStyles.TimeTitle>
                <button style={{color: '#ff3131', pointerEvents: 'none', opacity: '0'}}>&lt;</button>
                </div>
              }
              {cellRow}
            </GridStyles.Container>
          ))}
        </div>
        <button style={{color: '#ff3131', pointerEvents: 'none', opacity: '0'}}>&gt;</button>
      </div>
      <div style={{height: '80px'}}></div>
    </div>
  );
}

export default Grid;
