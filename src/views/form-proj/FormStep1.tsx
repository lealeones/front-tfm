import { Card, CardContent, CardHeader, Chip, FormControl, Grid, IconButton, InputAdornment, ListItem, OutlinedInput, Paper, TextField } from '@mui/material'
import React, { useState } from 'react'

interface ChipData {
    key: number;
    label: string;
}
const FormStep1 = () => {

    //useStates

    const [keyWords, setKeyWords] = useState<ChipData[]>([])
	const [currWord, setCurrWord] = useState<string>('');

    //Functions
    const handleDelete = (chipToDelete: ChipData) => () => {
        setKeyWords((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    };
	const handleChangeCurrWord = (e) => {
		setCurrWord(e.target.value);
  };
 const handleKeyUpCurrWord = (e) => {
    console.log(e.keyCode);
    if (e.keyCode == 32) {
        const newChipData : ChipData = {key:keyWords.length + 1, label:currWord}
        setKeyWords((oldState) => [...oldState, newChipData]);
        setCurrWord('');
    }
};


    return (<Card>
        <CardHeader title='PASO 1' titleTypographyProps={{ variant: 'h6' }} />
        <CardContent>
            <form onSubmit={e => e.preventDefault()}>
                <Grid container spacing={5}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            type='text'
                            label='Titulo'
                            helperText='Titulo del proyecto'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            type='text'
                            label='Resumen'
                            helperText='Descripcion del proyecto'
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Paper
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                flexWrap: 'wrap',
                                listStyle: 'none',
                                p: 0.5,
                                m: 0,
                            }}
                            component="ul"
                        >


                            {keyWords && keyWords.map((data) => {
                                return (
                                    <Grid>
                                    <ListItem
                                    alignItems="flex-start"
                                    key={data.key} >
                                        <Chip
                                            label={data.label}
                                            onDelete={handleDelete(data)}
                                        />
                                    </ListItem>
                                    </Grid>
                                );
                            })}
                        <TextField
                            fullWidth
                            type='text'
                            label='Anadir palabra claves'
                            value={currWord}
                            onChange={handleChangeCurrWord}
                            onKeyDown={handleKeyUpCurrWord}
                        />

                        </Paper>

                    </Grid>


                </Grid>
            </form>
        </CardContent>
    </Card>

    )
}
export default FormStep1