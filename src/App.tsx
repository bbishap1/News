import axios from "axios";
import React, { useEffect, useState } from "react";
import { createUseStyles, useTheme } from "react-jss";
import { NewsBar } from "./organisms/NewsBar";

interface NewsData {
  id: string;
  title: string;
  description: string;
  image?: string;
  createdAt: string;
}

const useStyles = createUseStyles((theme: any) => ({
  image: {
    border: "1px solid #000",
    height: "500px",
    width: "500px",
  },
  topLayer: {
    background: theme.backgroundColor,
    minHeight: "100vh",
    height: "100%",
  },
  newsWrapper: {
    display: "flex",
    width: "",
    padding: 20,
  },
  newsBarContainer: {
    width: "100%",
  },
}));

const App: React.FC = () => {
  const theme = useTheme();
  const classes = useStyles();
  const [newsData, setNewsData] = useState([{} as NewsData]);

  const getData = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/headline-news`
    );
    if (response?.data) {
      setNewsData(response.data);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="App">
      <div className={classes.topLayer}>
        <div className={classes.newsWrapper}>
          <div className={classes.newsBarContainer}>
            <NewsBar mainHeadline="Main Headline" data={newsData}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
