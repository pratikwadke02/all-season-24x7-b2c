import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import {Box, Typography} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { grey } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button } from '@mui/material';
import {theme} from '../../../theme';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ShareIcon from '@mui/icons-material/Share';

export default function CardComponent() {

  return (
    <Card sx={{ maxWidth: 1100, m: 2, backgroundColor:theme.palette.background.default, p:1}}>
      <CardHeader
        // avatar={
        //   <Avatar sx={{ bgcolor: grey[400] }} aria-label="recipe">
        //     R
        //   </Avatar>
        // }
        action={
          <Box>
            <IconButton aria-label="share" sx={{mr:1}}>
            <ShareIcon fontSize='medium'/>
          </IconButton>
          <IconButton aria-label="settings">
            <MoreVertIcon fontSize='medium'/>
          </IconButton>
          </Box>
        }
        titleTypographyProps={{variant:'h3', fontWeight:'bold'}}
        subheaderTypographyProps={{variant:'h5'}}
        title="Senior Product Developer"
        subheader="Acme • Atlanta, GA / Remote / San Francisco, CA"
      />
      <CardContent>
        <Typography variant="h5" color="text.other" sx={{fontWeight: theme.typography.fontWeightMedium}}>
        Exciting news! I’m hiring mid-level and senior Product Designers to join my team at Acme, where we’re building the future of eCommerce.
        <ul style= {{padding: 0,margin:10}}>
            <li>Own a product area, work cross-platform</li>
            <li>Small, talented, tight-knit team</li>
            <li>SF, ATL or Remote</li>
        </ul>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button color="inherit" sx={{backgroundColor:'#f6fafd' ,color:theme.palette.primary.main , fontSize: theme.typography.h5, fontWeight:theme.typography.fontWeightBold}}>
            Apply
        </Button>
        <Button variant="conatined" color="primary" sx={{color: '#2196f3', fontSize: theme.typography.h5, fontWeight:theme.typography.fontWeightBold}} startIcon={<RemoveRedEyeIcon />}>
            WATCH
        </Button>
      </CardActions>
    </Card>
  );
}
