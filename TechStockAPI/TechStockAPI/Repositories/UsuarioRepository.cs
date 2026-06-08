using Microsoft.AspNetCore.Razor.TagHelpers;
using Microsoft.EntityFrameworkCore;
using TechStockAPI.Applications.Autentification;
using TechStockAPI.Contexts;
using TechStockAPI.Domains;
using TechStockAPI.Exceptions;
using TechStockAPI.Interfaces;

namespace TechStockAPI.Repositories
{
    public class UsuarioRepository : IUsuarioRepository
    {
        private readonly TechStockDbContext _context;
        public UsuarioRepository(TechStockDbContext context)
        {
            _context = context;
        }

        public List<Usuario> Listar()
        {
            return _context.Usuario.Include(u => u.Tipo).OrderBy(u => u.NomeUsuario).ToList();
        }

        public Usuario ObterPorId(int id)
        {
            return _context.Usuario.Include(u => u.Tipo).FirstOrDefault(u => u.UsuarioId == id);
        }

        public Usuario ObterPorEmail(string email)
        {
            return _context.Usuario.Include(u => u.Tipo).FirstOrDefault(u => u.Email == email);
        }

        public bool IdExiste(int id)
        {
            return _context.TipoUsuario.Any(t => t.TipoId == id);
        }

        public void Adicionar(Usuario usuario)
        {
            Usuario usuarioAdicionado = new Usuario
            {
                NomeUsuario = usuario.NomeUsuario,
                Email = usuario.Email,
                DataNascimento = usuario.DataNascimento,
                Senha = usuario.Senha,
                TipoId = usuario.TipoId,
            };
            _context.Add(usuarioAdicionado);
            _context.SaveChanges();
        }

        public void Atualizar(int id, Usuario usuario)
        {
            Usuario usuarioBanco = _context.Usuario.Find(id);
            usuarioBanco.NomeUsuario = usuario.NomeUsuario;
            usuarioBanco.Email = usuario.Email;
            usuarioBanco.Senha = usuario.Senha;
            usuarioBanco.DataNascimento = usuario.DataNascimento;
            usuarioBanco.TipoId = usuario.TipoId;

            _context.Update(usuarioBanco);
            _context.SaveChanges();
        }

        public void AtualizarSenha(int id, string senha)
        {
            Usuario usuarioBanco = _context.Usuario.Find(id);
            usuarioBanco.Senha = SenhaParaHash.ConverterSenhaHash(senha);

            _context.Update(usuarioBanco);
            _context.SaveChanges();
        }

        public void DeletarUsuario(int id)
        {
            Usuario usuarioApagado = _context.Usuario.Find(id);

            _context.Remove(usuarioApagado);
            _context.SaveChanges();
        }
    }
}
