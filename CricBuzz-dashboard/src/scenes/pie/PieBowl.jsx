import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart2 from "../../components/PieChart2";

const PieBowl = () => {
  return (
    <Box m="20px">
      <Header title="Top 5 Bowlers" subtitle="Pie Chart" />
      <Box height="75vh">
        <PieChart2 />
      </Box>
    </Box>
  );
};

export default PieBowl;
