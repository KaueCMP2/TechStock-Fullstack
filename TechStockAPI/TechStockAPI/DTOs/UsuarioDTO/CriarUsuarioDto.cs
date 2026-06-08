namespace TechStockAPI.DTOs.UsuarioDTO
{
    public class CriarUsuarioDto
    {
        public string NomeUsuario { get; set; } = null!;

        public string Email { get; set; } = null!;

        public string Senha { get; set; } = null!;

        public DateOnly? DataNascimento { get; set; }

        public int TipoId { get; set; }
    }
}
