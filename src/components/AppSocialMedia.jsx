import React from 'react';
import { Link, Stack, Tooltip, Typography } from '@mui/material';
import facebook from 'assets/icon/facebook.png';
import instagram from 'assets/icon/instagram.png';
import email from 'assets/icon/email.png';

const socialmedia = [
  { img: facebook, alt: 'facebook-icon', name: 'Watch Fantasy', link: '' },
  { img: instagram, alt: 'instagram-icon', name: 'watchfantasy.os', link: '' },
  {
    img: email,
    alt: 'email-icon',
    name: 'watchfantasy.os@gmail.com',
    link: 'mailto:watchfantasy.os@gmail.com',
  },
];

// @ts-ignore
function AppSocialMedia({ isFullDetailed }) {
  if (isFullDetailed) {
    return (
      <React.Fragment>
        <Stack direction="row" spacing={3}>
          {socialmedia.map((media) => {
            return (
              <Tooltip title={media.name} arrow key={media.alt}>
                <Link href={media.link} target="_blank" rel="noreferrer">
                  <img src={media.img} alt={media.alt} width={25} height={25} />
                </Link>
              </Tooltip>
            );
          })}
        </Stack>
      </React.Fragment>
    );
  }

  return (
    <Stack spacing={3} mt={3}>
      {socialmedia.map((media) => {
        return (
          <Link href={media.link} target="_blank" rel="noreferrer" key={media.alt} underline="none">
            <Stack direction="row" spacing={1} alignItems="center">
              <img src={media.img} alt={media.alt} width={25} height={25} />
              <Typography variant="body1">{media.name}</Typography>
            </Stack>
          </Link>
        );
      })}
    </Stack>
  );
}

export default AppSocialMedia;
