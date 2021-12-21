import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

interface Props {
    darkMode: boolean;
    changeMode: () => void;
}

export default function Header({darkMode, changeMode} : Props) {
    return (
        <AppBar position='static' sx={{mb: 4}}>
            <Toolbar>
                <Typography variant='h6'>
                    ReStore
                </Typography>
                <Switch color='default' checked={!darkMode} onChange={changeMode} />

            </Toolbar>
        </AppBar>
    );
}