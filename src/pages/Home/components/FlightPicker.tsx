import { FC, useState } from "react";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { Destination } from "../../../models";

interface Props {
  items: Destination[];
  className?: string;
}

const FlightPicker: FC<Props> = ({ items, className }) => {
  const [country, setCountry] = useState<string>('')

  const onChange = (event: SelectChangeEvent) => setCountry(event.target.value);

  return (
    <FormControl fullWidth className={className ?? ''}>
      <InputLabel id="originLabel">Origen</InputLabel>
      <Select
        labelId="originLabel"
        value={country}
        label="Origen"
        onChange={onChange}
      >
        {items?.map((option, index) => <MenuItem value={option.name} key={index}>{option.name}</MenuItem>)}
        {/* <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem> */}
      </Select>
    </FormControl>
  )
}

export default FlightPicker;