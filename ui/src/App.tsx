import './App.css'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Box from '@mui/material/Box';
import {useState} from "react";
import 'dayjs/locale/pl';
import dayjs from 'dayjs';

function App() {
  const [value, setValue] = useState(dayjs('2022-04-17'));

  return <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pl">
      <Box
          sx={{
              width: '100%',
              height: '100%',
              justifyContent: 'center',
              position: 'relative',
          }}
      >
          <DemoItem label="X-Date-Pickers / DatePicker">
              <DatePicker
                  label="Data serwera"
                  formatDensity={"spacious"}
                  value={value}
                  onChange={ (v)=> {
                      setValue(v);
                  }}
                  slotProps={
                      {
                          textField:{ helperText: "DD.MM.YYYY" },
                          field: { clearable: true }
                      }
                  }
              />
          </DemoItem>
      </Box>
  </LocalizationProvider>
}

export default App
