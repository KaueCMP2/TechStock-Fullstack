namespace TechStockAPI.DTOs.UsuarioDTO
{
    public class AtualizarUsuarioDto
    {
        public string NomeUsuario { get; set; } = null!;

        public string Email { get; set; } = null!;

        public DateOnly? DataNascimento { get; set; }

        public int TipoId { get; set; }
    }
}
