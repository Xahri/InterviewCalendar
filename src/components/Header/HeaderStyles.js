import styled from 'styled-components'
import 'react-datepicker/dist/react-datepicker.css';

const HeaderStyles = {};

HeaderStyles.TitleWrapper = styled.div`
  padding: 8px 24px 8px 24px;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
`;

HeaderStyles.HeaderNavWrapper = styled.div`
  background: #f6f6f6;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  padding: 12px 24px 12px 24px;
  margin-top: 1px;
`;

HeaderStyles.WeeksWrapper = styled.div`
  display: flex;
  padding: 0px 0px 8px 0px;
  justify-content: space-between;
  text-align: center;
  align-content: center;
  align-items: center;
`;

HeaderStyles.TimeSpacer = styled.div`
  position: relative;
  left: 0;
  text-align: left;
  padding-right: 12px;
  line-height: 0;
  font-size: calc(12px + 0.4vw);
  pointer-events: none;
  opacity: 0;
`;

HeaderStyles.DaysOfWeekContainer = styled.div`
  text-align: center;
  margin-bottom: 4px;
  align-content: center;
  align-items: center;
`;

export default HeaderStyles;
