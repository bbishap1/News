import React, { useState } from "react";
import { createUseStyles, useTheme } from "react-jss";
import { IndexType } from "typescript";
import { Divider, Typography, Modal } from "../../atoms";
import { NewsBox } from "../../molecules";

interface Props {
  mainHeadline: string;
  data: Array<NewsData>;
}

interface NewsData {
  id: string;
  title: string;
  description: string;
  image?: string;
  createdAt: string;
}
interface modalData {
  show: boolean;
  id: any;
}
const useStyles = createUseStyles((theme: any) => ({
  newsBarWrapper: {
    display: "flex",
    border: "1px solid #fff",
    background: "#fff",
    width: "100%",
    "@media (max-width: 1024px)": {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  titleWrapper: {
    display: "flex",
    alignItems: "center",
    width: "20%",
    padding: "10px",
    "@media (max-width: 1024px)": {
      width: "100%",
      justifyContent: "center",
    },
  },
  newsBoxContainer: {
    padding: 10,
    display: "flex",
    width: "60%",
    flexWrap: "wrap",
    "@media (max-width: 1024px)": {
      flexDirection: "column",
    },
  },
  extraNewsContainer: {
    padding: 10,
    display: "flex",
    flexDirection: "column",
    width: "20%",
    flexWrap: "wrap",
    "@media (max-width: 1024px)": {
      width: "40%",
    },
  },
  newsBox: {
    width: 300,
  },
  sideNews: {
    width: "-webkit-fill-available",
  },
  firstNewsBox: {
    display: "flex",
    "&>div": {
      textAlign: "left",
      marginLeft: 25,
    },
  },
}));

const NewsBar: React.FC<Props> = (props) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const [modal, setModal] = useState({ show: false, id: null } as modalData);

  const { data, mainHeadline } = props;

  const toggleModal = (id: Number | null) => {
    setModal({ show: !modal.show, id: id });
  };
  return (
    <div className={classes.newsBarWrapper}>
      <div className={classes.titleWrapper}>
        <Typography type="h1" color="primary">
          {mainHeadline}
        </Typography>
      </div>
      <div className={classes.newsBoxContainer}>
        {data.map((news: NewsData, idx: any) => {
          return (
            <NewsBox
              image={news.image}
              heading={news.title}
              className={classes.firstNewsBox}
              onClick={() => toggleModal(idx)}
              description={news.description}
            />
          );
        })}
      </div>
      <div className={classes.extraNewsContainer}>
        <NewsBox
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0HJOYlW6Iqdh9WnP8VTZjRCuC33isLiQbKA&usqp=CAU"
          className={classes.sideNews}
          heading="What is Lorem Ipsum?"
          // onClick={() => toggleModal()}
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        />{" "}
        <Divider />
        <NewsBox
          heading="What is Lorem Ipsum?"
          className={classes.sideNews}
          // onClick={() => toggleModal()}
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        />{" "}
        <Divider />
        <NewsBox
          heading="What is data in the IT?"
          className={classes.sideNews}
          // onClick={() => toggleModal()}
          description="This is description for data which is also short"
        />
      </div>
      <Modal show={modal.show} onClose={() => toggleModal(null)} data={data[modal.id]}/>
    
    </div>
  );
};

export { NewsBar };
