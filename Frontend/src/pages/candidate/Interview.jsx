import { Container, Typography, Button, Modal, Box } from "@mui/material";
import { useState } from "react";

const Interview = () => {
  const [completed, setCompleted] = useState(false);

  const completeInterview = () => {
    setCompleted(true);
  };

  return (
    <Container className="mt-10">
      <Typography variant="h4" gutterBottom>
        AI Interview
      </Typography>

      <div className="h-60 bg-gray-200 flex items-center justify-center my-8">
        [Simulated Interview Video]
      </div>

      <Button variant="contained" color="primary" onClick={completeInterview}>
        Finish Interview
      </Button>

      <Modal open={completed}>
        <Box className="bg-white p-8 rounded-lg mx-auto my-10 max-w-md text-center">
          <Typography variant="h5" gutterBottom>
            Congratulations!
          </Typography>
          <Typography>You are shortlisted!</Typography>
          <Button
            variant="contained"
            className="mt-4"
            onClick={() => setCompleted(false)}
          >
            Close
          </Button>
        </Box>
      </Modal>
    </Container>
  );
};

export default Interview;
