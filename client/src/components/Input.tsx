import React from "react";
import {Grid,TextField} from "@mui/material"
function Input({ name, handleChange, label, autoFocus, type, half }:{name:string,handleChange:React.ChangeEventHandler<HTMLInputElement>,label:string,autoFocus?:boolean,type?:string,half?:boolean}) {
  return (
    <Grid item xs={12} sm={half ? 6 : 12} style={{ padding: "20px" }}>
      <TextField
        name={name}
        onChange={handleChange}
        variant="outlined"
        required
        fullWidth
        label={label}
        autoFocus={autoFocus}
        type={type}
      />
    </Grid>
  );
}

export default Input;