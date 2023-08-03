import { FC, useState } from "react";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { Destination } from "../../../models";

interface Props {
  title: string;
  items: Destination[];
  className?: string;
}

const FlightPicker: FC<Props> = ({ title, items, className }) => {
  const [country, setCountry] = useState<string>('')

  const onChange = (event: SelectChangeEvent) => setCountry(event.target.value);

  return (
    <FormControl fullWidth className={className ?? ''}>
      <InputLabel id="originLabel">{title}</InputLabel>
      <Select
        labelId="originLabel"
        value={country}
        label="Origen"
        onChange={onChange}
      >
        {items?.map((option, index) => <MenuItem value={option.name} key={index}>{option.name} ({option.acronym})</MenuItem>)}
      </Select>
    </FormControl>
  )
}

export default FlightPicker;