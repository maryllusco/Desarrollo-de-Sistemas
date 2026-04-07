import { useListaDeCompras } from '../../hooks/useListaDeCompras';
import { PantallaListaDeCompras } from '../contenedores/PantallaListaDeCompras';

export function ControladorDeListaDeCompras() {
  const {
    productos,
    texto,
    setTexto,
    agregarProducto,
    toggleProducto,
    eliminarProducto,
  } = useListaDeCompras();

  return (
    <PantallaListaDeCompras
      productos={productos}
      texto={texto}
      setTexto={setTexto}
      onAgregar={agregarProducto}
      onToggle={toggleProducto}
      onEliminar={eliminarProducto}
    />
  );
}