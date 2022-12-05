import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Autocomplete from '@mui/material/Autocomplete';
import {useEffect} from "react";
import axios from "axios";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};


const AddWalletPopup = (props) => {

    const [open, setOpen] = React.useState(false);
    const [assetsData, setAssetsData] = React.useState([]);
    const [newWalletAssetId, setNewWalletAssetId] = React.useState();
    const localToken = JSON.parse(sessionStorage.token).token;


    useEffect(() => {
        axios.get('http://localhost:8089/api/assets')
            .then(response => {
                    setAssetsData(response.data);
                }
            ).catch((error) => {
            console.log(error)
        })
    }, []);

    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }

    function handleAdd() {
        if (newWalletAssetId != null) {
            switch (newWalletAssetId) {
                case 1:
                    addBtcWallet();
                    break;
                case 2:
                    addEthWallet();
                    break;
                default:
                    break;
            }
            setNewWalletAssetId(null);
        }
        handleClose();
        props.refreshRows();
    }

    const addBtcWallet = () => {
        alert("New key added for BTC");
        axios.post('http://localhost:8089/api/wallets/btc',
            {
                "vaultId": props.vaultId,
                "vaultName": props.vaultName,
                "assetId": newWalletAssetId,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': localToken,
                    'Access-Control-Allow-Origin': '*',
                    'Accept': 'application/json'
                },
            }).then(response => {
            alert(JSON.stringify(response.data));
        }).catch((error) => {
            console.log(error)
        })
    }


    const addEthWallet = () => {
        alert("New key added for ETH");
        axios.post('http://localhost:8089/api/wallets/eth',
            {
                "vaultId": props.vaultId,
                "vaultName": props.vaultName,
                "assetId": newWalletAssetId,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': localToken,
                    'Access-Control-Allow-Origin': '*',
                    'Accept': 'application/json'
                },
            }).then(response => {
                console.log(response)
            }
        ).catch((error) => {
            console.log(error)
        })
    }


    return (
        <div style={{display: "flex", justifyContent: "left", alignItems: "right", margin: "10px"}}>
            <Button variant="contained" onClick={handleOpen}>+ Wallet (Generate New Keys)</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >

                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle id="form-dialog-title">Add Wallet</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please select the cryptocurrency you would like to add to your vault
                        </DialogContentText>
                        <Autocomplete
                            id="country-select-demo"
                            onChange={
                                (event, value) => {
                                    setNewWalletAssetId(value.assetId)
                                }
                            }
                            options={assetsData}
                            autoHighlight

                            getOptionLabel={(option) => option.label}
                            renderOption={(props, option) => (
                                <Box component="li" sx={{'& > img': {mr: 2, flexShrink: 0}}} {...props}>
                                    <img
                                        loading="lazy"
                                        width="20"
                                        src={assetsData[option.id].image}
                                        alt=""
                                    />
                                    {option.label}
                                </Box>
                            )}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Cryptocurrency"
                                    inputProps={{
                                        ...params.inputProps,
                                        autoComplete: 'new-password', // disable autocomplete and autofill
                                    }}
                                />
                            )}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleAdd}>Add</Button>
                    </DialogActions>
                </Dialog>
            </Modal>
        </div>
    );
}

export default AddWalletPopup;

