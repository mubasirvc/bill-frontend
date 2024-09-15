import { Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  // Import necessary components
import Items from "./pages/Items";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Box sx={{ maxWidth: 1250, marginLeft: 'auto', marginRight: 'auto' }}>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/items" element={<Items />} /> 
          <Route path="/category" element={<Category />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
