import { Button } from "@mui/material";
import { Card } from "@mui/material";
import { CardActions } from "@mui/material";
import { CardContent } from "@mui/material";
import { CardMedia } from "@mui/material";
import { Typography } from "@mui/material";
import w1 from "../Assests/Screenshot (143).png";
export default function Profile() {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" height="140" image={w1} alt="Tree" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Beautiful Tree
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This is an amazing tree with lush green leaves.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </>
  );
}
