using System;
using System.Collections.Generic;

namespace TechStockAPI.Domains;

public partial class Usuario
{
    public int UsuarioId { get; set; }

    public string NomeUsuario { get; set; } = null!;

    public string Email { get; set; } = null!;

    public byte[] Senha { get; set; } = null!;

    public DateOnly? DataNascimento { get; set; }

    public int TipoId { get; set; }

    public virtual ICollection<Produto> Produto { get; set; } = new List<Produto>();

    public virtual TipoUsuario Tipo { get; set; } = null!;
}
