import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Course } from "@/app/types";

interface Props {
  course: Course;
}
const CourseCard = ({ course }: Props) => {
  if (course === undefined) {
    return null;
  }
  return (
    <Card sx={{ minWidth: 350 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Course
        </Typography>
        <Typography variant="h5" component="div">
          {course.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Teacher: {course.teacher.name}
        </Typography>
        <Typography variant="body2">
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={`/courses/${course.id}`}>
          Open
        </Button>
      </CardActions>
    </Card>
  );
};

export default CourseCard;
