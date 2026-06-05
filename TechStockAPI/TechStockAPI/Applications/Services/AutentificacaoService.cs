using Superpower.Parsers;
using TechStockAPI.Applications.Autentification;
using TechStockAPI.Domains;
using TechStockAPI.DTOs.AutenticacaoDTO;
using TechStockAPI.Exceptions;
using TechStockAPI.Interfaces;

namespace TechStockAPI.Applications.Services
{
    public class AutentificacaoService
    {
        private readonly IUsuarioRepository _repository;
        private readonly GerardorTokenJWT _jwt;

        public AutentificacaoService(IUsuarioRepository repository, GerardorTokenJWT jwt)
        {
            _repository = repository;
            _jwt = jwt;
        }

        private static bool VerificarSenha(string senhaDigitada, byte[] senhaHash)
        {
            var hashDigitado = SenhaParaHash.ConverterSenhaHash(senhaDigitada);
            return hashDigitado.Equals(senhaHash);
        }

        public TokenDto Login(string email, string senha)
        {
            Usuario usuario = _repository.ObterPorEmail(email);
            if (usuario == null)
                throw new DomainException("Usuario não encontrado!!!");

            if (!VerificarSenha(senha, usuario.Senha))
                throw new DomainException("Email ou senha incorreto(s)!!!" + usuario.Senha);

            string token = _jwt.GerarToken(usuario);

            TokenDto NovoToken = new TokenDto
            {
                Token = token,
                NomeTipoUsuario = usuario.Tipo.NomeTipo
            };

            return NovoToken;
        }
    }
}
