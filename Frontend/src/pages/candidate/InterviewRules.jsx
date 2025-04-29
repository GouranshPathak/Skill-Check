import { Container, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const InterviewRules = () => {
  const navigate = useNavigate();

  const startInterview = () => {
    navigate("/candidate/interview");
  };

  return (
    <Container className="mt-10">
      <Typography variant="h4" gutterBottom>
        Interview Instructions
      </Typography>
      <ul className="list-disc pl-5 mt-6">
        <li>Ensure Camera and Microphone access is enabled.</li>
        <li>Find a quiet place with a stable internet connection.</li>
        <li>Stay focused and answer questions clearly.</li>
      </ul>
      <Button
        variant="contained"
        color="primary"
        onClick={startInterview}
        className="mt-8"
      >
        Start AI Interview
      </Button>
    </Container>
  );
};

export default InterviewRules;
