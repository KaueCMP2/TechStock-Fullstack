using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TechStockAPI.Applications.Services;

namespace TechStockAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AutenticacaoController : ControllerBase
    {
        private readonly AutentificacaoService _service;
        public AutenticacaoController(AutentificacaoService service)
        {
            _service = service;
        }

        [HttpPost]
        public IActionResult Login(string email, string senha)
        {
            try
            {
                return Ok(_service.Login(email, senha));
            }
            catch (Exception ex)
            {
                return Unauthorized(ex.Message);
            }
        }
    }
}
