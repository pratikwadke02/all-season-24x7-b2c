import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button } from '@mui/material';
import {theme} from '../../../theme';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

export default function CardComponent() {

  return (
    <Card sx={{ maxWidth: 1100, m: 1, backgroundColor:theme.palette.background.default}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: grey[400] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        titleTypographyProps={{variant:'h6'}}
        subheaderTypographyProps={{variant:'h7'}}
        title="Senior Product Developer"
        subheader="Acme • Atlanta, GA / Remote / San Francisco, CA"
      />
      <CardContent>
        <Typography variant="body2" color="text.other" sx={{fontWeight: theme.typography.fontWeightMedium}}>
        Exciting news! I’m hiring mid-level and senior Product Designers to join my team at Acme, where we’re building the future of eCommerce.
        <ul style= {{padding: 0, margin: 10}}>
            <li>Own a product area, work cross-platform</li>
            <li>Small, talented, tight-knit team</li>
            <li>SF, ATL or Remote</li>
        </ul>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button variant="contained" color="inherit" sx={{color:theme.palette.primary.main , fontSize: theme.typography.fontSize, fontWeight:theme.typography.fontWeightMedium}}>
            Apply
        </Button>
        <Button variant="conatined" color="primary" sx={{color: '#2196f3', fontSize: theme.typography.fontSize, fontWeight:theme.typography.fontWeightMedium}} startIcon={<RemoveRedEyeIcon />}>
            WATCH
        </Button>
      </CardActions>
    </Card>
  );
}
