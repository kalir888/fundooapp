import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { connect } from 'react-redux';

const drawerWidth = 240;

const openedMixin = (theme) => ({
    marginTop: 85,
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  });
  
  const closedMixin = (theme) => ({
    marginTop: 85,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(9)} + 1px)`,
    },
  });
  
  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));
  
  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));
  
  const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      }),
      ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      }),
    }),
  );

function MiniDrawer(props) {
  const theme = useTheme();

  const getNormalNotes = () => {
    props.showNormalNotes(props.books);
  }

  const getArchivedNotes = () => {
    props.showArchivedNotes();
  }
 
  const getTrashedNotes = () => {
    props.showTrashedNotes();
  }

  const noteChoice = (noteType) => {
    props.dispatch({type : `${noteType}`});
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer variant="permanent" open={props.status}>
        <List>
            <ListItem button onClick={() => {
              noteChoice('notes');
              getNormalNotes();
            }}>
                <ListItemIcon>
                    <LightbulbOutlinedIcon/>
                </ListItemIcon>
                <ListItemText primary='Notes'/>
            </ListItem>
            <ListItem button onClick={() => noteChoice('reminders')}>
                <ListItemIcon>
                    <NotificationsOutlinedIcon/>
                </ListItemIcon>
                <ListItemText primary='Reminders'/>
            </ListItem>
            <ListItem button onClick={() => noteChoice('edit')}>
                <ListItemIcon>
                    <EditOutlinedIcon/>
                </ListItemIcon>
                <ListItemText primary='Edit labels'/>
            </ListItem>
            <ListItem button onClick={() => {
              noteChoice('archive');
              getArchivedNotes();
            }}>
                <ListItemIcon>
                    <ArchiveOutlinedIcon/>
                </ListItemIcon>
                <ListItemText primary='Archive'/>
            </ListItem>
            <ListItem button onClick={() => {
              noteChoice('trash');
              getTrashedNotes();
            }}>
                <ListItemIcon>
                    <DeleteOutlineOutlinedIcon/>
                </ListItemIcon>
                <ListItemText primary='Trash' sx={{fontWeight: 500}} />
            </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}

export default connect()(MiniDrawer);