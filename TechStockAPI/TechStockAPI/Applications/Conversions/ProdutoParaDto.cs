using TechStockAPI.Domains;
using TechStockAPI.DTOs.ProdutoDTO;

namespace TechStockAPI.Applications.Conversions
{
    public class ProdutoParaDto
    {
        public static LerProdutoDTO ConverterParaDto(Produto produto)
        {
            LerProdutoDTO produtoDto = new LerProdutoDTO
            {
                ProdutoId = produto.ProdutoId,
                Nome = produto.Nome,
                Descricao = produto.Descricao,
                imagemUrl = $"produto/{produto.ProdutoId}/imagem",
                Preco = produto.Preco,
                Quantidade = produto.Quantidade
            };

            return produtoDto;
        }
    }
}
