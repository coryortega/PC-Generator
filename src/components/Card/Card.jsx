// import React from 'react';
// import './Card.css'

// function Card({ src, name, href, price }) {
//     console.log("href -->", href)
//     return (
//         <a href={href} target={"_blank"}>
//             <div className="container">
//                 <img src={src}/>
//                 <p>${price}</p>
//                 <div className="title">
//                     <h3>{name}</h3>
//                 </div>
//             </div>
//         </a>
//     )
// }

// export default Card

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
  a: {
    textDecoration: "none",
  },
  image: {
    width: 165,
    display: "inline-block",
  },
  textContainer: {
    height: "80px",
    border: "1px solid black",
  },
  price: {
    color: "black",
  },
  text: {
    display: "-webkit-box",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
    margin: "0 0 1em 0",
    overflow: "hidden",
  },
});

export default function ItemCard({ src, name, href, price }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div>
        <a href={href} target={"_blank"} className={classes.a}>
          <CardActionArea>
            <CardMedia
              className={classes.image}
              component="img"
              alt="Contemplative Reptile"
              height="120"
              //   image="/static/images/cards/contemplative-reptile.jpg"
              src={src}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="h2"
                className={classes.price}
              >
                ${price}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className={classes.text}
              >
                {name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </a>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </div>
    </Card>
  );
}
