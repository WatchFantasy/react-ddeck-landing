import React from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import { color } from 'constants/theme.constant';
import ProductDetail from '../components/ProductDetail';
import MarbleWhiteCloseUp from 'assets/product/marble-white/close-up.jpg';
import MarbleWhiteVertical from 'assets/product/marble-white/vertical.jpg';
import EmeraldGreenCloseUp from 'assets/product/emerald-green/close-up.jpg';
import EmeraldGreenHorizontal from 'assets/product/emerald-green/horizontal.jpg';
import BabyBlueCloseUp from 'assets/product/baby-blue/close-up.jpg';
import BabyBlueMacro from 'assets/product/baby-blue/macro.jpg';

const productTabs = [
  { label: 'Marble White', value: 'white' },
  { label: 'Emerald Green', value: 'green' },
  { label: 'Baby Blue', value: 'blue' },
];

const MarbleWhiteProduct = {
  images: [
    { src: MarbleWhiteCloseUp, alt: 'marble-white-close-up' },
    { src: MarbleWhiteVertical, alt: 'marble-white-vertical' },
  ],
  title: 'D’Deck Marble White',
  titleColor: '#707070',
  label: '2023 Special Edition',
  isStockAvailable: false,
  descriptions: [
    { label: 'Movement', value: 'Japan Automatic Movement' },
    { label: 'Material', value: '316L Stainless Steel' },
    { label: 'Date Wheel', value: 'Black background' },
    { label: 'Hands', value: 'Mercedes (Black)' },
    { label: 'Second Hands', value: 'Thunderbolt (Red)' },
    { label: 'Case Diameter', value: '40 mm' },
  ],
};

const EmeraldGreenProduct = {
  images: [
    { src: EmeraldGreenCloseUp, alt: 'emerald-green-close-up' },
    { src: EmeraldGreenHorizontal, alt: 'emerald-green-horizontal' },
  ],
  title: 'D’Deck Emerald Green',
  titleColor: '#52796F',
  label: '',
  isStockAvailable: true,
  descriptions: [
    { label: 'Movement', value: 'Japan Automatic Movement' },
    { label: 'Material', value: '316L Stainless Steel' },
    { label: 'Date Wheel', value: 'White background' },
    { label: 'Hands', value: 'Mercedes (Silver)' },
    { label: 'Second Hands', value: 'Thunderbolt (Green)' },
    { label: 'Case Diameter', value: '40 mm' },
  ],
};

const BabyBlueProduct = {
  images: [
    { src: BabyBlueCloseUp, alt: 'baby-blue-close-up' },
    { src: BabyBlueMacro, alt: 'baby-blue-macro' },
  ],
  title: 'D’Deck Baby Blue',
  titleColor: '#95BBC3',
  label: '',
  isStockAvailable: true,
  descriptions: [
    { label: 'Movement', value: 'Japan Automatic Movement' },
    { label: 'Material', value: '316L Stainless Steel' },
    { label: 'Date Wheel', value: 'White background' },
    { label: 'Hands', value: 'Mercedes (Silver)' },
    { label: 'Second Hands', value: 'Thunderbolt (Blue)' },
    { label: 'Case Diameter', value: '40 mm' },
  ],
};

// @ts-ignore
function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function ProductGallery() {
  const [value, setValue] = React.useState('white');

  // @ts-ignore
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <Box width="100%" mt={16}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
          scrollButtons="auto"
          centered
          sx={{
            '& .MuiTabs-indicator': {
              backgroundColor: color.primary.main,
            },
            '& .MuiTab-root': {
              color: color.secondary.main,
              fontSize: 14,
              textTransform: 'capitalize',
            },
            '& .Mui-selected': { color: color.primary.main },
          }}
        >
          {productTabs.map((tab) => (
            <Tab value={tab.value} label={tab.label} key={tab.value} />
          ))}
        </Tabs>
      </Box>
      <TabPanel value={value} index={'white'}>
        <ProductDetail props={MarbleWhiteProduct} />
      </TabPanel>
      <TabPanel value={value} index={'green'}>
        <ProductDetail props={EmeraldGreenProduct} />
      </TabPanel>
      <TabPanel value={value} index={'blue'}>
        <ProductDetail props={BabyBlueProduct} />
      </TabPanel>
    </React.Fragment>
  );
}

export default ProductGallery;
