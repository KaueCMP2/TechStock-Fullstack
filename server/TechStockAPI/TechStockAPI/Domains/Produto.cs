using System;
using System.Collections.Generic;

namespace TechStockAPI.Domains;

public partial class Produto
{
    public int ProdutoId { get; set; }

    public string Nome { get; set; } = null!;

    public string? Descricao { get; set; }

    public DateOnly? DataCriacao { get; set; }

    public decimal Preco { get; set; }

    public int? Quantidade { get; set; }

    public byte[] Imagem { get; set; } = null!;

    public int? UsuarioId { get; set; }

    public virtual Usuario? Usuario { get; set; }
}
