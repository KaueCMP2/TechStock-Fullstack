using TechStockAPI.Contexts;
using TechStockAPI.Domains;
using TechStockAPI.Interfaces;

namespace TechStockAPI.Repositories
{
    public class TipoUsuarioRepository : ITipoUsuarioRepository
    {
        private readonly TechStockDbContext _context;
        public TipoUsuarioRepository(TechStockDbContext context)
        {
            _context = context;
        }

        public List<TipoUsuario> Listar()
        {
            return _context.TipoUsuario.OrderBy(t => t.NomeTipo).ToList();
        }
        
        public TipoUsuario ObterPorId(int id)
        {
            return _context.TipoUsuario.Find(id);
        }
    }
}
