import { useSelector } from 'react-redux'
import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'
import { useGetProdutosQuery } from '../services/api'
import * as S from './styles'
import { RootReducer } from '../store'

const ProdutosComponent = () => {
  const { data: produtos, isLoading } = useGetProdutosQuery()
  const favoritos = useSelector((state: RootReducer) => state.favoritar.itens)

  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    return favoritos.some((f) => f.id === produto.id)
  }

  if (isLoading) return <h2>Carregando...</h2>

  return (
    <S.Produtos>
      {produtos?.map((produto: ProdutoType) => (
        <Produto
          estaNosFavoritos={produtoEstaNosFavoritos(produto)}
          key={produto.id}
          produto={produto}
        />
      ))}
    </S.Produtos>
  )
}

export default ProdutosComponent
