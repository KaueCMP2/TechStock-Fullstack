using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Identity.Client;
using TechStockAPI.Applications.Services;
using TechStockAPI.DTOs.ProdutoDTO;

namespace TechStockAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProdutoController : ControllerBase
    {
        private readonly ProdutoService _service;
        public ProdutoController(ProdutoService service)
        {
            _service = service;
        }

        [HttpGet]
        public IActionResult Lista()
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
        public IActionResult ObterPorId(int id)
        {
            try
            {
                return Ok(_service.ObterPorId(id));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("Nome/{nome}")]
        public IActionResult ObterPorNome(string nome)
        {
            try
            {
                return Ok(_service.ObterPorNome(nome));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("Imagem/{id}")]
        public IActionResult ObterImagemProduto(int id)
        {
            try
            {
                byte[] imagem = _service.ObterImagem(id);
                return File(imagem, "Image/jpeg");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        [Authorize(Roles = "Responsavel")]
        [Consumes("multipart/form-data")]
        public ActionResult Adicionar([FromForm] CriarProdutoDTO produtoDto)
        {
            try
            {
                _service.Adicionar(produtoDto);
                return StatusCode(201);
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }

        [HttpPut("{id}")]
        [Authorize(Roles = "Responsavel")]
        public ActionResult Atualizar(int id, AtualizarProdutoDTO produtoDTO)
        {
            try
            {
                _service.Atualizar(id, produtoDTO);
                return NoContent();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("{id}")]
        [Authorize(Roles = "Responsavel")]
        public ActionResult Deletar(int id)
        {
            try
            {
                _service.Deletar(id);
                return NoContent();
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
    }
}
