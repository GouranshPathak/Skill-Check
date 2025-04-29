import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  LinearProgress,
  Box,
  CircularProgress,
  Divider,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";
import {
  ArrowForward,
  CheckCircle,
  Cancel,
  AccessTime,
  Person,
  Work,
  Assessment,
  TrendingUp,
} from "@mui/icons-material";
import { Doughnut, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

// Register ChartJS components
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

const CandidateDashboard = () => {
  // Sample data for the candidate dashboard
  const candidateData = {
    name: "Alex Johnson",
    atsScore: 80,
    weaknesses: [
      "System design (3/10)",
      "Communication (5/10)",
      "Algorithms (7/10)",
    ],
    appliedJobs: 5,
    selectedJobs: 2,
    rejectedJobs: 3,
    pendingJobs: 1,
    mockTestScore: 75,
    skills: [
      { name: "JavaScript", score: 85 },
      { name: "React", score: 80 },
      { name: "Node.js", score: 75 },
      { name: "System Design", score: 30 },
      { name: "Communication", score: 50 },
    ],
    progressBins: {
      resume: 80,
      technical: 75,
      behavioral: 65,
      overall: 73,
    },
    recentActivity: [
      {
        type: "application",
        job: "Frontend Developer",
        company: "TechCorp",
        date: "2023-05-15",
        status: "pending",
      },
      {
        type: "test",
        name: "Technical Screening",
        score: 78,
        date: "2023-05-10",
      },
      {
        type: "interview",
        company: "DevSolutions",
        date: "2023-05-05",
        status: "completed",
      },
    ],
  };

  // Data for doughnut chart
  const applicationStatusData = {
    labels: ["Selected", "Rejected", "Pending"],
    datasets: [
      {
        data: [
          candidateData.selectedJobs,
          candidateData.rejectedJobs,
          candidateData.pendingJobs,
        ],
        backgroundColor: ["#10b981", "#ef4444", "#f59e0b"],
        borderWidth: 0,
      },
    ],
  };

  // Data for skills bar chart
  const skillsData = {
    labels: candidateData.skills.map((skill) => skill.name),
    datasets: [
      {
        label: "Skill Score",
        data: candidateData.skills.map((skill) => skill.score),
        backgroundColor: "#3b82f6",
        borderRadius: 4,
      },
    ],
  };

  return (
    <Container maxWidth="xl" className="mt-8 mb-10">
      {/* Header Section */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={4}
      >
        <Typography variant="h4" className="font-bold">
          Candidate Dashboard
        </Typography>
        <Box display="flex" alignItems="center">
          <Avatar sx={{ bgcolor: "#3b82f6", mr: 2 }}>
            {candidateData.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </Avatar>
          <Typography variant="h6">{candidateData.name}</Typography>
        </Box>
      </Box>

      <Grid container spacing={4}>
        {/* Progress Bins Section */}
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom className="font-semibold">
            Progress Bins
          </Typography>
          <Grid container spacing={3}>
            {Object.entries(candidateData.progressBins).map(([key, value]) => (
              <Grid item xs={12} sm={6} md={3} key={key}>
                <Card sx={{ p: 2, height: "100%", borderRadius: 3 }}>
                  <CardContent>
                    <Typography variant="subtitle1" className="capitalize mb-2">
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </Typography>
                    <Box position="relative" display="inline-flex" mb={2}>
                      <CircularProgress
                        variant="determinate"
                        value={value}
                        size={80}
                        thickness={6}
                        sx={{
                          "& .MuiCircularProgress-circle": {
                            stroke:
                              value > 75
                                ? "#10b981"
                                : value > 50
                                ? "#f59e0b"
                                : "#ef4444",
                          },
                        }}
                      />
                      <Box
                        top={0}
                        left={0}
                        bottom={0}
                        right={0}
                        position="absolute"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Typography variant="h6" component="div">
                          {value}%
                        </Typography>
                      </Box>
                    </Box>
                    <Box display="flex" alignItems="center">
                      <TrendingUp
                        fontSize="small"
                        color={
                          value > 75
                            ? "success"
                            : value > 50
                            ? "warning"
                            : "error"
                        }
                      />
                      <Typography variant="body2" ml={1} color="text.secondary">
                        {value > 75
                          ? "Excellent"
                          : value > 50
                          ? "Good"
                          : "Needs improvement"}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Main Metrics Section */}
        <Grid item xs={12} md={8}>
          <Grid container spacing={3}>
            {/* ATS Score */}
            <Grid item xs={12} sm={6}>
              <Card sx={{ p: 3, borderRadius: 3, height: "100%" }}>
                <CardContent>
                  <Box display="flex" alignItems="center" mb={2}>
                    <Assessment color="primary" sx={{ mr: 1 }} />
                    <Typography variant="h6">Resume ATS Score</Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={candidateData.atsScore}
                    sx={{
                      height: 10,
                      borderRadius: 5,
                      backgroundColor: "#e5e7eb",
                      "& .MuiLinearProgress-bar": {
                        borderRadius: 5,
                        backgroundColor: "#10b981",
                      },
                    }}
                  />
                  <Box display="flex" justifyContent="space-between" mt={1}>
                    <Typography variant="body2" color="text.secondary">
                      {candidateData.atsScore}% match
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Target: 85%
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* Mock Test Score */}
            <Grid item xs={12} sm={6}>
              <Card sx={{ p: 3, borderRadius: 3, height: "100%" }}>
                <CardContent>
                  <Box display="flex" alignItems="center" mb={2}>
                    <Work color="primary" sx={{ mr: 1 }} />
                    <Typography variant="h6">Mock Test Score</Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={candidateData.mockTestScore}
                    sx={{
                      height: 10,
                      borderRadius: 5,
                      backgroundColor: "#e5e7eb",
                      "& .MuiLinearProgress-bar": {
                        borderRadius: 5,
                        backgroundColor: "#3b82f6",
                      },
                    }}
                  />
                  <Box display="flex" justifyContent="space-between" mt={1}>
                    <Typography variant="body2" color="text.secondary">
                      {candidateData.mockTestScore}% score
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Target: 80%
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* Skills Radar Chart */}
            <Grid item xs={12}>
              <Card sx={{ p: 3, borderRadius: 3 }}>
                <CardContent>
                  <Typography variant="h6" mb={2}>
                    Skills Assessment
                  </Typography>
                  <Box height={300}>
                    <Bar
                      data={skillsData}
                      options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                          y: {
                            beginAtZero: true,
                            max: 100,
                            ticks: {
                              stepSize: 20,
                            },
                          },
                        },
                        plugins: {
                          legend: {
                            display: false,
                          },
                        },
                      }}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>

        {/* Application Status */}
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 3, borderRadius: 3, height: "100%" }}>
            <CardContent>
              <Box display="flex" alignItems="center" mb={2}>
                <Person color="primary" sx={{ mr: 1 }} />
                <Typography variant="h6">Application Status</Typography>
              </Box>
              <Box height={200} mb={3}>
                <Doughnut
                  data={applicationStatusData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    cutout: "70%",
                    plugins: {
                      legend: {
                        position: "bottom",
                      },
                    },
                  }}
                />
              </Box>
              <List dense>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle color="success" />
                  </ListItemIcon>
                  <ListItemText
                    primary={`Selected: ${candidateData.selectedJobs}`}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Cancel color="error" />
                  </ListItemIcon>
                  <ListItemText
                    primary={`Rejected: ${candidateData.rejectedJobs}`}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <AccessTime color="warning" />
                  </ListItemIcon>
                  <ListItemText
                    primary={`Pending: ${candidateData.pendingJobs || 1}`}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowForward color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={`Total Applied: ${candidateData.appliedJobs}`}
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Weaknesses Section */}
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 3, borderRadius: 3 }}>
            <CardContent>
              <Typography variant="h6" mb={2}>
                Areas for Improvement
              </Typography>
              <List>
                {candidateData.weaknesses.map((weakness, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <Cancel color="error" />
                    </ListItemIcon>
                    <ListItemText
                      primary={weakness}
                      secondary="Suggested: Practice mock interviews and system design problems"
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Recent Activity */}
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 3, borderRadius: 3 }}>
            <CardContent>
              <Typography variant="h6" mb={2}>
                Recent Activity
              </Typography>
              <List>
                {candidateData.recentActivity.map((activity, index) => (
                  <React.Fragment key={index}>
                    <ListItem>
                      <ListItemIcon>
                        {activity.type === "application" ? (
                          <Work
                            color={
                              activity.status === "pending"
                                ? "warning"
                                : activity.status === "completed"
                                ? "success"
                                : "primary"
                            }
                          />
                        ) : activity.type === "test" ? (
                          <Assessment color="secondary" />
                        ) : (
                          <Person color="primary" />
                        )}
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          activity.type === "application"
                            ? `Applied to ${activity.job} at ${activity.company}`
                            : activity.type === "test"
                            ? `Completed ${activity.name} test`
                            : `Interview with ${activity.company}`
                        }
                        secondary={`${activity.date} • ${
                          activity.type === "test"
                            ? `Score: ${activity.score}`
                            : `Status: ${activity.status}`
                        }`}
                      />
                    </ListItem>
                    {index < candidateData.recentActivity.length - 1 && (
                      <Divider variant="inset" component="li" />
                    )}
                  </React.Fragment>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CandidateDashboard;
