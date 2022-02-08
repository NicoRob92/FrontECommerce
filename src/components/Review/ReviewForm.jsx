import { Fragment, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { postReview } from "../../ducks/actions/actionCreators";
import st from "./_Review.module.scss";
// buttons
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
// accordion
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SendIcon from '@mui/icons-material/Send';
//input
import TextField from "@mui/material/TextField";
import Rating from "@mui/material/Rating";

const ReviewForm = ({ ProductId, token }) => {
  const dispatch = useDispatch()
  // rate stars state
  const [value, setValue] = useState(2)
  // get user name or author
  const userName = localStorage.getItem("username")
  // input state
  const [input, setInput] = useState('')

  // handle input change
    const handleInput = (e) => {
      setInput(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postReview({description: input, rating: value, PostId: ProductId, author: userName}, token));
  };

  return (
    <div>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <h6>Leave a comment</h6>
        </AccordionSummary>
        <AccordionDetails>
          <form onSubmit={handleSubmit}>
            {/* <div> */}
            <h6>Rate Product</h6>
            <Rating
                sx={{marginBottom: '10px'}}
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            <TextField
                fullWidth
                id="outlined-multiline-flexible"
                label="Comment"
                multiline
                maxRows={8}
                onChange={handleInput}
                className={st.input_description}
              />
            {
              input
                ?
                <Button sx={{ marginTop: '10px' }} type='submit' variant="contained" endIcon={<SendIcon />}>
                  Send
                </Button>
                :
                <Button sx={{ marginTop: '10px' }} disabled type='submit' variant="contained" endIcon={<SendIcon />}>
                  Send
                </Button>
            }
            {/* </div> */}
          </form>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default ReviewForm;
