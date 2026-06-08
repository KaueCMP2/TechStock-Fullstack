using TechStockAPI.Domains;

namespace TechStockAPI.Interfaces
{
    public interface ITipoUsuarioRepository
    {
        public List<TipoUsuario> Listar();
        public TipoUsuario ObterPorId(int id);
    }
}
