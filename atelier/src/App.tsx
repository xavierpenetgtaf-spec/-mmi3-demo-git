
import './App.css'
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Layout from './Layout';
import Accueil from './pages/Accueil';
import Apropos from './pages/Apropos';
import Taches from './pages/Taches';




export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Accueil />} />
          <Route path="apropos" element={<Apropos />} />
          <Route path="taches" element={<Taches />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
