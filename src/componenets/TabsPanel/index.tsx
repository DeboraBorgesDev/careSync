import React, { useState } from 'react';
import {
  Box,
  Paper,
  AppBar,
  Tabs,
  Tab,
  Hidden,
} from '@material-ui/core';
import classNames from 'classnames';
import useStyles from './styles';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

interface TabItem {
  label: string;
  icon?: React.ReactNode;
  content: React.ReactNode;
}

interface TabsPanelProps {
  items: TabItem[];
  orientation?: 'horizontal' | 'vertical';
  withIcons?: boolean;
  textColor?: 'primary' | 'secondary' | string;
  backgroundColor: string;
  currentTab?: number;
  setCurrentTab?: (index: number) => void;
}



const TabsPanel: React.FC<TabsPanelProps> = ({
  items,
  orientation = 'horizontal',
  withIcons = false,
  textColor = 'primary',
  backgroundColor = 'white',
  currentTab = 0,
  setCurrentTab = () => {},
}: TabsPanelProps) => {
  const classes = useStyles();
  const [value, setValue] = useState(currentTab);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
    setCurrentTab(newValue);
  };

  const paperClasses = classNames({
    [classes.root]: true,
    [classes[orientation]]: orientation,
     //@ts-ignore
    [classes[`${backgroundColor}Background`]]: backgroundColor,
     //@ts-ignore
    [classes[textColor]]: textColor,
  });

  const indicatorClasses = classNames({
     //@ts-ignore
    [classes[textColor]]: textColor,
  });

  return (
    <Paper elevation={3} className={paperClasses}>
      <AppBar
        position="static"
        //@ts-ignore
        color={backgroundColor} 
        className={classes[`${orientation}AppBar`]}
      >
        <Tabs
          orientation={orientation === 'vertical' ? 'vertical' : 'horizontal'}
          value={value}
          onChange={handleChange}
          aria-label="Tabs"
          variant="scrollable"
          classes={{ indicator: indicatorClasses }}
        >
          {items.map((item, index) => (
            <Tab
              key={item.label}
              label={
                withIcons ? (
                    //@ts-ignore
                  <Hidden>{item.label}</Hidden>
                ) : (
                  item.label
                )
              }
               //@ts-ignore
              icon={withIcons && item.icon}
              classes={{ root: classes.tab, selected: classes.selected }}
              {...a11yProps(index)}
            />
          ))}
        </Tabs>
      </AppBar>
      {items.map((item, index) => (
        <TabPanel
          key={item.label}
          value={value}
          index={index}
           //@ts-ignore
          className={classes.tabPanel}
        >
          {item.content}
        </TabPanel>
      ))}
    </Paper>
  );
};

const a11yProps = (index: any) => ({
  id: `tab-${index}`,
  'aria-controls': `tabpanel-${index}`,
});

const TabPanel: React.FC<TabPanelProps> = ({
  children, value, index, ...other
}: TabPanelProps) => (
  <div
    role="tabpanel"
    hidden={value !== index}
    id={`tabpanel-${index}`}
    aria-labelledby={`tab-${index}`}
    {...other}
  >
    {value === index && <Box>{children}</Box>}
  </div>
);

export default TabsPanel;
