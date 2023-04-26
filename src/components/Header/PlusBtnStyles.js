import styled from 'styled-components'
import 'react-datepicker/dist/react-datepicker.css';

const PlusBtnStyles = {};

PlusBtnStyles.ButtonsWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  padding: 8px 0 0 0;
`;

PlusBtnStyles.Button = styled.button`
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 10px;
  cursor: pointer;
  border-radius: 4px;
`;

PlusBtnStyles.Text = styled.p`
  margin: 0;
  margin-bottom: 10px;
  text-align: center;
  line-height: 0;
  padding: 6px;
`;

PlusBtnStyles.Overlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  z-index: 2;
`;


PlusBtnStyles.DatePickerWrapper = styled.div`
  position: relative;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  align-items: center;
  align-content: center;
  text-align: center;
  z-index: 3;
`;


PlusBtnStyles.RedBtn = styled.div`
    border-radius: 50%;
    padding: 6px 6px 6px 6px;
    text-align: center;
    cursor: pointer;
    align-content: center;
    align-items: center;
    width: 29.74px;
    height: 29.74px;
    background: #ff3131;
    display: flex;
    justify-content: center;
    color: white;
`;

export default PlusBtnStyles;
