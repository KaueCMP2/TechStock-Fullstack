namespace TechStockAPI.DTOs.AutenticacaoDTO
{
    public class TokenDto
    {
        public string Token { get; set; }
        public string NomeTipoUsuario { get; set; } = string.Empty;
    }
}
