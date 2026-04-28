import Contenedor from "../componentes/Contenedor";
import TituloDeLaPagina from "../componentes/TituloDeLaPagina";
import FormularioParaItemNuevo from "../componentes/FormularioParaItemNuevo";
import ListaDeCompras from "../componentes/ListaDeCompras";
import useItemsDeCompra from "../hooks/usarItemsDeCompra";

export default function Index() {
  const {
    items,
    agregarProducto,
    cambiarEstadoProducto,
    eliminarProducto,
  } = useItemsDeCompra();

  return (
    <Contenedor>
      <TituloDeLaPagina texto="🛒 Lista de Compras" />

      <FormularioParaItemNuevo
        placeholder="Agregar producto (ej: Leche)"
        alAgregar={agregarProducto}
      />

      <ListaDeCompras
        items={items}
        alPresionarProducto={cambiarEstadoProducto}
        alMantenerProducto={eliminarProducto}
      />
    </Contenedor>
  );
}