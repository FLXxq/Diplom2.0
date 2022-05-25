import * as React from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './style.css'
import {Grid} from "@mui/material";

export const parseNumber = string => {
    if (string === "") return null;
    return parseFloat(string.replace(',', '.'));
};

const CalculationForm = ({setData}) => {

    const [weight, setWeight] = React.useState("");
    const [height, setHeight] = React.useState("");
    const getResult = () => {
        const parseWeight = parseNumber(weight)
        const parseHeight = parseNumber(height)
     const result = Number(parseWeight) / (Number(parseHeight) * Number(parseHeight))
        setData(result)
    }

    return (
            <form className='calculation-form'>
                <Grid container direction={"column"} spacing={2}>
                    <Grid item>
                        <TextField
                            value={height}
                            onChange={(event) => {
                                setHeight(event.target.value)
                            }}
                            fullWidth
                            label="Ваш рост"
                            id="outlined-start-adornment"
                            InputProps={{
                                startAdornment: <InputAdornment position="start">СМ</InputAdornment>,
                            }}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            value={weight}
                            onChange={(event) => {
                                setWeight(event.target.value)
                            }}
                            fullWidth
                            label="Ваш вес"
                            id="outlined-start-adornment"
                            InputProps={{
                                startAdornment: <InputAdornment position="start">КГ</InputAdornment>,
                            }}
                        />
                    </Grid>
                    <Grid item alignSelf={"center"}>
                        <Button
                            onClick={getResult}
                            variant="contained"
                        >
                            Расчитать
                        </Button>
                    </Grid>
                </Grid>
            </form>
    )
}
export default CalculationForm