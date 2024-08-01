import {
  Box,
  Card,
  Grid,
  TextField,
  Typography,
  InputAdornment,
  Button,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

const Feed = () => {
  const [query, setQuery] = useState("");
  const [post, setPost] = useState();

  //
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(`http://localhost:8080/posts/${query}`);
      setPost(response.data);
    };
    const fetchInitialPosts = async () => {
        const response = await axios.get(`http://localhost:8080/allPosts`);
        console.log(response);
        setPost(response.data);
    }
    if (query.length === 0) fetchInitialPosts();
    if (query.length > 2) fetchPosts();
  }, [query]);
console.log(post);

const cardStyle = {
  display: 'inline-block',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  marginTop:"30px",
  marginRight:"5px",
  width: 'calc(45% - 250px)',
};

const styles = {
  cardContainer: {
    background: 'linear-gradient(179.1deg, rgb(247, 238, 238) -1.9%, rgb(247, 202, 201) 44.9%, rgb(145, 168, 208) 96.1%)',
    borderRadius: '20px',
    boxShadow: '0px 10px 20px -10px rgba(0,0,0,0.75)',
    color: 'black',
    paddingTop: '30px',
    position: 'relative',
    width: '400px',
    maxWidth: '100%',
    textAlign: 'center',
  },  
  round: {
    border: '5px solid #03BFCB',
    borderRadius: '70%',
    padding: '7px',
  },
  h3: {
    margin: '10px 0',
  },
  h6: {
    margin: '5px 0',
    textTransform: 'uppercase',
  },
  p: {
    fontSize: '20px',
    lineHeight: '21px',
  },
  primaryButton: {
    backgroundColor: '#03BFCB',
    border: '1px solid #03BFCB',
    borderRadius: '3px',
    color: '#231E39',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: '500',
    padding: '10px 25px',
  },
  ghostButton: {
    backgroundColor: 'transparent',
    color: '#02899C',
  },
  techstacks: {
    // background: 'linear-gradient(179.1deg, rgb(247, 238, 238) -1.9%, rgb(247, 202, 201) 44.9%, rgb(145, 168, 208) 96.1%)',
    textAlign: 'left',
    padding: '25px',
    marginTop: '30px',
    borderRadius:"20px"
  },
  techstacksList: { 
    listStyleType: 'none',
    margin: '0',
    padding: '0',
  },
  techstacksItem: {
    border: '1px solid #2D2747',
    borderRadius: '5px',
    // background:"radial-gradient(circle at 10% 20%, rgb(215, 223, 252) 0%, rgb(255, 255, 255) 0%, rgb(215, 223, 252) 84%)",
    display: 'inline-block',
    fontSize: '20px',
    margin: '0 7px 7px 0',
    padding: '7px',
    textTransform:"uppercase"
  }
}

  return (
    <Grid container spacing={2} sx={{ margin: "2%" }}>
      <Grid item xs={12} sx={12} md={12} lg={12}>
      {/* <Button sx={{ margin: "1% 2%" }} variant="outlined">
            <Link to="/">Home</Link>
          </Button> */}
        <Link to="/"><button className="buttonn">
          <span>Home</span>
        </button></Link>
        <br/>
        <br/>
        <br/>
        {/* <Box>
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            placeholder="Search..."
            sx={{ width: "75%", padding: "2% auto" }}
            fullWidth
            onChange={(e) => setQuery(e.target.value)}
          />
        </Box> */}

<div class="input-containerr">
  <input
    class="input"
    name="text"
    type="text"
    placeholder="Search for jobs...."
    onChange={(e) => setQuery(e.target.value)}
  />
</div>

      </Grid>
      {post &&
        post.map((p) => {
          return (
            <Grid key={p.id} item xs={12} md={6} lg={4}>
              {/* <Card sx={{ padding: "3%", overflow: "hidden", width: "84%" }}>
                <Typography
                  variant="h5"
                  sx={{ fontSize: "2rem", fontWeight: "600" }}
                >
             {p.profile}
                </Typography>
                <Typography sx={{ color: "#585858", marginTop:"2%" }} variant="body" >
                  Description: {p.desc}
                </Typography>
                <br />
                <br />
                <Typography variant="h6">
                  Years of Experience: {p.exp} years
                </Typography>

                <Typography gutterBottom  variant="body">Skills: </Typography>
                {p.techs.map((s, i) => {
                  return (
                    <Typography variant="body" gutterBottom key={i}>
                      {s} .
                      {` `}
                    </Typography>
                  );
                })}
              </Card> */}
            
<div class="card-container" style={styles.cardStyle}>
	<h1>{p.profile}</h1>
	<h2>{p.desc}</h2>
	<div class="buttons">
		{/* <button class="primary">
			Apply
		</button> */}
	</div>
	<div style={styles.techstacks}>
        <h6 style={styles.h6}>Skills:</h6>
        <ul style={styles.techstacksList}>
        {p.techs && p.techs.toString().split(',').map((techstack, index) => (
      <li key={index} style={styles.techstacksItem}>{techstack.trim()}</li>
    ))}
          </ul>
      </div>
</div>
            </Grid>
          );
        })}
    </Grid>
  );
};

export default Feed;
