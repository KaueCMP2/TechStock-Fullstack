using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using TechStockAPI.Domains;
using TechStockAPI.Exceptions;

namespace TechStockAPI.Applications.Autentification
{
    public class GerardorTokenJWT
    {
        private readonly IConfiguration _config;

        public GerardorTokenJWT(IConfiguration config) => _config = config;

        public string GerarToken(Usuario usuario)
        {
            var chave = Environment.GetEnvironmentVariable("JWT_KEY");
            if (string.IsNullOrWhiteSpace(chave))
                throw new DomainException("JWT_KEY não configurada");

            var issuer = _config["Jwt:Issuer"]!;
            var audience = _config["Jwt:Audiece"]!;
            var ExpirationTime = int.Parse(_config["JWt:ExpirationTime"]!);

            var keyBytes = Encoding.UTF8.GetBytes(chave);
            if (keyBytes.Length < 32)
                throw new DomainException("Jwt: Key precisa ter no minimo 32 caracteres");

            var securityKey = new SymmetricSecurityKey(keyBytes);
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.NameIdentifier, usuario.UsuarioId.ToString()),
                new Claim(ClaimTypes.Name, usuario.NomeUsuario),
                new Claim(ClaimTypes.Email, usuario.Email),
                new Claim(ClaimTypes.Role, usuario.Tipo.NomeTipo)
            };

            var token = new JwtSecurityToken(
                issuer: issuer,
                audience: audience,
                claims: claims,
                expires: DateTime.Now.AddMinutes(ExpirationTime),
                signingCredentials: credentials
                );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}

