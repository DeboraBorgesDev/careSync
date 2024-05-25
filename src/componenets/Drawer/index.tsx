import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
} from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import useStyles from './styles';
import { Hidden, Typography } from '@mui/material';


interface NestedItem {
  label: string;
  link: string;
  icon: JSX.Element;
}

interface DrawerItem {
  label: string;
  link?: string;
  icon: JSX.Element;
  onClick?: () => void;
  open?: boolean;
  nestedItems?: NestedItem[];
}

interface ResponsiveDrawerProps {
  items: DrawerItem[];
}

const ResponsiveDrawer: React.FC<ResponsiveDrawerProps> = ({ items }) => {
  const classes = useStyles();
  const { pathname } = useLocation();

  const CustomLink = React.forwardRef<HTMLAnchorElement, any>((linkProps, ref) => (
    <Link role="button" {...linkProps} ref={ref} />
  ));


  const itemDrawer = classNames({
    [classes.borderColor]: false,
  });

  const itemDrawerActive = classNames({
    [classes.borderColor]: true,
  });

  const itemNested = classNames({
    [classes.nestedItem]: true,
  });

  const itemNestedActive = classNames({
    [classes.nestedItem]: true,
    [classes.borderColor]: true,
  });

  return (
    <nav className={classes.drawer} aria-label="drawer">
       <Drawer
        classes={{
          paper: classes.drawerPaper,
        }}
        variant="permanent"
        open
      >
       
        <div className={classes.toolbar} />
        <List disablePadding>
        <Typography className={classes.menuTitle}>MENU</Typography>
          {items.map((item) => (
            <div key={item.label}>
              <ListItem
                button
                component={item.link ? CustomLink : null}
                to={item.link ? item.link : null}
                //@ts-ignore
                onClick={item.onClick ? item.onClick : null}
                className={
                  item.link === pathname ? itemDrawerActive : itemDrawer
                }
              >
                <ListItemIcon className={classes.icon}>
                  {item.icon}
                </ListItemIcon>
                <Hidden smDown implementation="css">
                  <ListItemText primary={item.label} />
                </Hidden>
                {item.nestedItems &&
                  (item.open ? <ExpandLess /> : <ExpandMore />)}
              </ListItem>
              {item.nestedItems && (
                <Collapse in={item.open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {item.nestedItems.map((nestedItem) => (
                      <ListItem
                        key={nestedItem.label}
                        button
                        component={CustomLink}
                        to={nestedItem.link}
                        className={
                          nestedItem.link === pathname
                            ? itemNestedActive
                            : itemNested
                        }
                      >
                        <ListItemIcon>{nestedItem.icon}</ListItemIcon>
                        <ListItemText primary={nestedItem.label} />
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              )}
            </div>
          ))}
        </List>
      </Drawer>
    </nav>
  );
};

export default ResponsiveDrawer;
