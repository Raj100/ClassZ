import React from 'react'
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import Popup from '../../components/Popup';




const SmartBoard = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [message, setMessage] = useState("");
    const [loader, setLoader] = useState(false);
    const [smartBoardMessage, setSmartBoardMessage] = useState("");
    const [smartBoardVideoLink, setSmartBoardVideoLink] = useState("");

    const handleClick = () => {
        console.info(`You clicked `);
        setLoader(false)
        setShowPopup(true)
        setMessage("Done Successfully")
        setSmartBoardMessage("");
        setSmartBoardVideoLink("");

    };
    return (
        <div>
            <h1>SmartBoard Settings</h1>
            <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '35ch' } }}
                noValidate
                autoComplete="off"
            >
                <TextField onChange={(e) => setSmartBoardMessage(e.target.value)} value={smartBoardMessage} id="standard-basic" label="Sent a Message to the Smart Board" variant="standard" />
            </Box>
            <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '35ch' } }}
                noValidate
                autoComplete="off"
            >
                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                    <InputLabel   htmlFor="standard-adornment-amount">Sent A video link to smartboard</InputLabel>
                    <Input
                        onChange={(e) => setSmartBoardVideoLink(e.target.value)}
                        value={smartBoardVideoLink}
                        id="standard-adornment-amount"
                        startAdornment={<InputAdornment position="start">https://</InputAdornment>}
                    />
                </FormControl>

            </Box>
            <Button onClick={handleClick} variant="contained" sx={{ m: 1 }} endIcon={<SendIcon />}>
  Send
</Button>
<Popup message={message} setShowPopup={setShowPopup} showPopup={showPopup} />

        </div>
    )
}

export default SmartBoard
