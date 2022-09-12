import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";

interface CardProps {
  title: string;
  body: string;
  buttontext: string;
}
export default function Mycard({ title, body, buttontext }: CardProps) {
  return (
    <Card>
      <CardHeader
        titleTypographyProps={{ variant: "h4" }}
        title={title}
        sx={{
          backgroundColor: "#bec5d1",
        }}
      />
      <CardContent>
        <Typography variant="subtitle1" align="center">
          {body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button fullWidth variant={"outlined"}>
          {buttontext}
        </Button>
      </CardActions>
    </Card>
  );
}
