import { IconButton } from "../IconButton";
import { Container, ButtonWrapper, DataWrapper } from "./styles";
import { FiTrash } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";
import { api } from "../../services/api";


export function ProductContainer({ data: product, ...rest }) {

  const { id, nome, descricao, preco, quantidade } = product;

  const deleteProduct = () => {
    api.delete(`/produtos/${id}`).then((response) => {
      console.log('Produto excluído com sucesso');
    })
      .catch((error) => {
        console.error('Erro ao excluir o produto', error);
      });
  }

  
  return (
    <Container>
      <div>
        <ButtonWrapper>
          <IconButton icon={FiEdit} to="/Update" state={{ data: product }} />
          <IconButton icon={FiTrash} onClick={deleteProduct} />
        </ButtonWrapper>

        <DataWrapper>
          <h4>Nome do produto: {nome}</h4>
          <p>Descrição do produto: {descricao}</p>
          <h4>Preço: <span>R$ {preco.toFixed(2)}</span></h4>
          <p>Em Estoque: {quantidade}</p>
        </DataWrapper>
      </div>
    </Container>
  );
}
