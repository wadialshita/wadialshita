import DatePicker from 'react-date-picker';
import styled from 'styled-components';
export const DatePickerStyled = styled(DatePicker)<any>`
    background: transparent;
    .react-calendar__navigation button:disabled {
        background-color: hsl(var(--background)) !important;
    }
    .react-calendar__navigation button:hover {
        background-color: hsl(var(--primary)) !important;
    }
    .react-calendar button:enabled:hover {
        background-color: hsl(var(--primary)) !important;
        color: white;
    }
    .react-date-picker__wrapper {
        border-radius: 8px;
        height: 2.5;
        border: 1px solid #dbe4ef;
        border-color: hsl(var(--input));
        padding-left: 10px;
    }
    .react-calendar__tile--active {
        color: white;
    }
    .react-date-picker__calendar .react-calendar {
        position: fixed;
    }
    .react-calendar__tile--now {
        background: gray;
        color: white;
    }
    .react-calendar button:enabled:hover {
        color: white;
    }
    .react-calendar {
        border-color: #64748b;
    }
    .react-date-picker__inputGroup__input {
        font-size: 14px;
    }
`;
