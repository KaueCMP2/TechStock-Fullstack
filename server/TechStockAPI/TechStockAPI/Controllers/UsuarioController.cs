using Azure.Core;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TechStockAPI.Applications.Services;
using TechStockAPI.DTOs.UsuarioDTO;

namespace TechStockAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private readonly UsuarioService _service;
        public UsuarioController(UsuarioService service)
        {
            _service = service;
        }

        [HttpGet]
        [Authorize(Roles = "Responsavel")]
        public IActionResult Listar()
        {
            try
            {
                return Ok(_service.Listar());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{id}")]
        [Authorize(Roles = "Responsavel")]
        public IActionResult ObterPorId(int id)
        {
            try
            {
                return Ok(_service.ObterPorId(id));
            }
            catch (Exception ex)
            {
                return  BadRequest(ex.Message);
            }
        }

        [HttpPost]
        [Authorize(Roles = "Responsavel")]
        public IActionResult Adicionar(CriarUsuarioDto usuarioDto)
        {
            try
            {
                _service.Adicionar(usuarioDto);
                return Created();
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }

        [HttpPut("{id}")]
        [Authorize(Roles = "Responsavel")]
        public IActionResult Atualizar(int id, AtualizarUsuarioDto usuarioDto)
        {
            try
            {
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }

        [HttpPatch("{id}")]
        [Authorize(Roles = "Responsavel")]
        public IActionResult AtualizarSenha(int id, string senha)
        {
            try
            {
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }

        [HttpDelete("{id}")]
        [Authorize(Roles = "Responsavel")]
        public IActionResult Deletar(int id)
        {
            try
            {
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
    }
}