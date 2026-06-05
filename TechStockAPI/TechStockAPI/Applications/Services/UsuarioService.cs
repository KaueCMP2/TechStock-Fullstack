using Microsoft.Identity.Client;
using TechStockAPI.Applications.Autentification;
using TechStockAPI.Domains;
using TechStockAPI.DTOs.UsuarioDTO;
using TechStockAPI.Exceptions;
using TechStockAPI.Interfaces;
using TechStockAPI.Repositories;

namespace TechStockAPI.Applications.Services
{
    public class UsuarioService
    {
        private readonly IUsuarioRepository _repostory;
        public UsuarioService(IUsuarioRepository repository) => _repostory = repository;

        public List<LerUsuarioDto> Listar()
        {
            List<Usuario> usuarios = _repostory.Listar();
            if (usuarios == null)
                throw new DomainException("Nenhum usuario encontrado");

            List<LerUsuarioDto> usuarioDtos = usuarios.Select(usu => new LerUsuarioDto
            {
                UsuarioId = usu.UsuarioId,
                NomeUsuario = usu.NomeUsuario,
                Email = usu.Email,
                DataNascimento = usu.DataNascimento,
                TipoId = usu.TipoId
            }).ToList();

            return usuarioDtos;
        }

        public LerUsuarioDto ObterPorId(int id)
        {
            Usuario usuarioBanco = _repostory.ObterPorId(id);
            if (usuarioBanco == null)
                throw new DomainException("Usuario não encontrado");

            LerUsuarioDto usuarioDto = new LerUsuarioDto
            {
                UsuarioId = usuarioBanco.UsuarioId,
                NomeUsuario = usuarioBanco.NomeUsuario,
                DataNascimento = usuarioBanco.DataNascimento,
                Email = usuarioBanco.Email,
                TipoId = usuarioBanco.TipoId
            };

            return usuarioDto;
        }

        public LerUsuarioDto ObterPorEmail(string email)
        {
            Usuario usuarioBanco = _repostory.ObterPorEmail(email);
            if (usuarioBanco == null)
                throw new DomainException("Usuario não encontrado");

            LerUsuarioDto usuarioDto = new LerUsuarioDto
            {
                UsuarioId = usuarioBanco.UsuarioId,
                NomeUsuario = usuarioBanco.NomeUsuario,
                DataNascimento = usuarioBanco.DataNascimento,
                Email = usuarioBanco.Email,
                TipoId = usuarioBanco.TipoId
            };

            return usuarioDto;
        }

        public void Adicionar(CriarUsuarioDto usuarioDto)
        {
            if (usuarioDto == null)
                throw new DomainException("Dados invalidos!!!");

            Usuario usuarioAdicionado = new Usuario
            {
                NomeUsuario = usuarioDto.NomeUsuario,
                Email = usuarioDto.Email,
                Senha = SenhaParaHash.ConverterSenhaHash(usuarioDto.Senha),
                DataNascimento = usuarioDto.DataNascimento,
                TipoId = usuarioDto.TipoId
            };

            _repostory.Adicionar(usuarioAdicionado);
        }

        public void Atualizar(int id, AtualizarUsuarioDto usuarioDto)
        {
            if (usuarioDto == null || id <= 0 || id == null)
                throw new DomainException("Dados invalidos!!!");

            Usuario usuarioAtualizado = new Usuario
            {
                NomeUsuario = usuarioDto.NomeUsuario,
                Email = usuarioDto.Email,
                DataNascimento = usuarioDto.DataNascimento,
                TipoId = usuarioDto.TipoId
            };

            _repostory.Atualizar(id, usuarioAtualizado);
        }

        public void AtualizarSenha(int id, string senha)
        {
            if (string.IsNullOrWhiteSpace(senha) || id <= 0 || id == null)
                throw new DomainException("Dados invalidos!!!");

            _repostory.AtualizarSenha(id, senha);
        }

        public void DeletarUsuario(int id)
        {
            if (_repostory.ObterPorId(id) == null)
                throw new DomainException("Usuario não localizado!!!");

                _repostory.DeletarUsuario(id);
        }
    }
}
