import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Image from 'next/image';

export const linkIdIcon = {
  linkedin: <LinkedInIcon />,
  github: <GitHubIcon />,
  kaggle: (
    <Image src="/assets/links/kaggle.ico" alt="kaggle" width="32" height="32" />
  ),
};
