using System;
using System.Collections.Generic;

namespace TechStockAPI.Domains;

public partial class TipoUsuario
{
    public int TipoId { get; set; }

    public string? NomeTipo { get; set; }

    public virtual ICollection<Usuario> Usuario { get; set; } = new List<Usuario>();
}
