import { makeStyles } from "@material-ui/styles";
import React from "react";
import {
  Drawer,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  AppBar,
  Toolbar,
  Avatar,
} from "@material-ui/core";
import { AddCircleOutlined, SubjectOutlined } from "@material-ui/icons";
import { useLocation, useNavigate } from "react-router-dom";
import { format } from "date-fns";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  page: {
    background: "#f9f9f9",
    width: "100%",
    padding: 20,
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  root: {
    display: "flex",
  },
  active: {
    background: "#f4f4f4",
  },
  title: {
    padding: 10,
  },
  appbar: {
    width: `calc(100% - ${drawerWidth}px)`,
  },
  toolbar: {
    marginTop: 70,
  },
  date: {
    flexGrow: 1,
  },
  avatar: {
    marginLeft: 16,
  },
}));

function Layout({ children }) {
  const navigate = useNavigate();
  const classes = useStyles();
  const location = useLocation();

  const menuItems = [
    {
      text: "My Notes",
      icon: <SubjectOutlined color="secondary" />,
      path: "/",
    },
    {
      text: "Create Note",
      icon: <AddCircleOutlined color="secondary" />,
      path: "/create",
    },
  ];

  return (
    <div className={classes.root}>
      {/* app bar */}
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar>
          <Typography className={classes.date}>
            Today is {format(new Date(), "do MMMM Y")}
          </Typography>
          <Typography> Rahul </Typography>
          <Avatar src="/professional.jpeg" className={classes.avatar} />
        </Toolbar>
      </AppBar>
      {/* Side Drawer */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography variant="h5" className={classes.title}>
            Ninja Notes
          </Typography>
        </div>

        {/* List / links */}
        <List>
          {menuItems.map((item) => (
            <ListItem
              key={item.text}
              button
              onClick={() => navigate(item.path)}
              className={
                location.pathname === item.path ? classes.active : null
              }
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div className={classes.page}>
        <div className={classes.toolbar}>{children}</div>
      </div>
    </div>
  );
}

export default Layout;
