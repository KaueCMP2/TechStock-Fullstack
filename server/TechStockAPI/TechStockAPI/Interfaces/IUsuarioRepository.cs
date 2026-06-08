using TechStockAPI.Domains;

namespace TechStockAPI.Interfaces
{
    public interface IUsuarioRepository
    {
        public List<Usuario> Listar();
        public Usuario ObterPorId(int id);
        public Usuario ObterPorEmail(string email);
        public bool IdExiste(int id);
        public void Adicionar(Usuario usuario);
        public void Atualizar(int id, Usuario usuario);
        public void AtualizarSenha(int id, string senha);
        public void DeletarUsuario(int id);
    }
}
