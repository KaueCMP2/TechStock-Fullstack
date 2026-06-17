using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TechStockAPI.Applications.Services;
using TechStockAPI.DTOs.AutenticacaoDTO;

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
        public IActionResult Login(LoginDto loginDto)
        {
            try
            {
                return Ok(_service.Login(loginDto.Email, loginDto.Senha));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
