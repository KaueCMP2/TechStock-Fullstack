using Microsoft.AspNetCore.Http.Timeouts;
using TechStockAPI.Domains;
using TechStockAPI.DTOs.TipoUsuarioDTO;
using TechStockAPI.Exceptions;
using TechStockAPI.Interfaces;

namespace TechStockAPI.Applications.Services
{
    public class TipoUsuarioService
    {
        private readonly ITipoUsuarioRepository _repository;
        public TipoUsuarioService(ITipoUsuarioRepository repository)
        {
            _repository = repository;
        }

        public List<LerTipoUsuarioDto> Listar()
        {
            List<TipoUsuario> tipoUsuarios = _repository.Listar();
            if (tipoUsuarios == null)
                throw new DomainException("Nenhum tipo de usuario encontrado!!!");

            List<LerTipoUsuarioDto> tipoDto = tipoUsuarios.Select(tipo => new LerTipoUsuarioDto
            {
                TipoId = tipo.TipoId,
                NomeTipo = tipo.NomeTipo,
            }).ToList();

            return tipoDto;
        }

        public LerTipoUsuarioDto ObterPorId(int id)
        {
            TipoUsuario tipoUsuario = _repository.ObterPorId(id);
            if (tipoUsuario == null)
                throw new DomainException("Nenhum tipo de usuario encontrado!!!");

            LerTipoUsuarioDto tipoDto = new LerTipoUsuarioDto
            {
                TipoId = tipoUsuario.TipoId,
                NomeTipo = tipoUsuario.NomeTipo,
            };

            return tipoDto;
        }
    }
}
