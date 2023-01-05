// @ts-nocheck
import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/system';
import { Box } from '@mui/material';
import { color } from 'constants/theme.constant';
import BuyNowButton from 'components/BuyNowButton';

const styles = {
  smallImage: {
    objectFit: 'cover',
  },
  selectedImage: {
    objectFit: 'contain',
    // objectPosition: '0 0px'
    width: 'calc(100% - 120px)',
  },
};
function ProductDetail({ props }) {
  const { images, title, titleColor, label, isStockAvailable, descriptions } = props;

  const [selected, setSelected] = React.useState(null);

  function onHandleImageSelected(e, source) {
    setSelected(source);
  }

  React.useEffect(() => {
    setSelected(images[0]?.src);
  }, [images]);

  return (
    <React.Fragment>
      <Grid container spacing={2} height={{ xs: '100%', md: 420 }}>
        <Grid item xs={12} sm={6} md={8} height="100%">
          <Stack direction="row" spacing={2} height="100%">
            <Stack spacing={2}>
              {images &&
                images.map((image) => (
                  <img
                    src={image.src}
                    alt={image.alt}
                    width="100px"
                    height={80}
                    style={styles.smallImage}
                    key={image.alt}
                    onClick={(e) => onHandleImageSelected(e, image.src)}
                  />
                ))}
            </Stack>
            <img src={selected} alt="" style={styles.selectedImage} />
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          {label && (
            <Typography variant="h6" fontWeight="normal">
              {label}
            </Typography>
          )}
          <Typography variant='h4' fontWeight="bold" sx={{ color: titleColor }}>
            {title}
          </Typography>
          <Typography variant="body1">Series by Watch Fantasy</Typography>

          <Box
            sx={{
              background: isStockAvailable ? color.primary.main : color.error.main,
              width: 10,
              height: 10,
              display: 'inline-block',
              marginRight: 1,
              borderRadius: '50%',
            }}
          />
          <Typography
            variant="body1"
            color={isStockAvailable ? 'primary' : 'error'}
            my={2}
            fontWeight="bold"
            display="inline-block"
          >
            {isStockAvailable ? 'In Stock' : 'Out of Stock'}
          </Typography>

          {descriptions.map((description) => (
            <Stack
              direction="row"
              key={description.label}
              justifyContent="space-between"
              component="div"
              mb={2}
            >
              <Typography variant="body1" fontWeight="bold">
                {description.label}
              </Typography>
              <Typography variant="body1">{description.value}</Typography>
            </Stack>
          ))}

          <BuyNowButton width="100%" />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default ProductDetail;
