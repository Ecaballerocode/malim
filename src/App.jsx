import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VistaPrincipal from './Components/VistaPrincipal';
import Pedidos from './Components/Pedidos/Pedidos';
import Entregas from './Components/Entregas/Entregas';
import Compras from './Components/Compras/Compras';
import PorCobrar from './Components/PorCobrar/PorCobrar';
import Inventario from './Components/Inventario/Inventario';
import Estadistica from './Components/Estadistica/Estadistica';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VistaPrincipal />} />
        <Route path="/pedidos" element={<Pedidos />} />
        <Route path="/entregas" element={<Entregas />} />
        <Route path="/compras" element={<Compras />} />
        <Route path="/por-cobrar" element={<PorCobrar />} />
        <Route path="/inventario" element={<Inventario />} />
        <Route path="/estadistica" element={<Estadistica />} />
      </Routes>
    </Router>
  );
};

export default App;