import React from 'react';
import { Grid, Grow, Typography } from '@material-ui/core';
import { Card} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "../../index.css";
import NewsCard from './NewsCard/NewsCard';
import useStyles from './styles.js';

const infoCards = [
  { color: '#00838f', title: 'New News', text: 'Give me the new news' },
  { color: '#1565c0', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Tech news' },
  { color: '#4527a0', title: 'News by Specific Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with Donald Trump' },
  { color: '#283593', title: 'News by Media Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from Times of India' },
];

const infoCards2 = [
  { color: '#00838f', title: 'Weather on Mars', text: 'Give me the Weather on Mars' },
];


const NewsCards = ({ articles, activeArticle }) => {
  const classes = useStyles();

  if (!articles.length) {
    return (
      <div>
      <Grow in>
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
          {infoCards.map((infoCard) => (
            <Grid item xs={3}   className={classes.infoCard}>
              <Card bg="dark" text="white" style={{ width: "18rem" }}>
                <Card.Header>{infoCard.title}</Card.Header>
                <Card.Body>
                  <Card.Title>{infoCard.info}</Card.Title>
                  <Card.Text>
                                                        
                  </Card.Text>
                  <Card.Text>
                  Try saying:<br />{infoCard.text}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Grid>
          ))}
          
        </Grid>
      </Grow>
      
      <Grow in>
        <Grid className={classes.container2} container2 alignItems="stretch" spacing={3}>
          {infoCards2.map((infoCards2) => (
            <Grid item xs={12} sm={6} md={4} lg={3}  className={classes.infoCard}>
              <div className={classes.card2} style={{ backgroundColor: infoCards2.color }}>
                <Typography variant="h6" component="h6">{infoCards2.title}</Typography>
                <Typography variant="h8" component="h8">Try saying: <br /> <i>{infoCards2.text}</i></Typography>

              </div>
            </Grid>
          ))}
        </Grid>
      </Grow>
      </div>
    );
  }

  return (
    <Grow in>
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {articles.map((article, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex' }}>
            <NewsCard activeArticle={activeArticle} i={i} article={article} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default NewsCards;