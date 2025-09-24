using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClubsController : ControllerBase
    {
        private readonly ILogger<ClubsController> _logger;

        public ClubsController(
            ILogger<ClubsController> logger)
        {
            _logger = logger;
        }


        [HttpGet]
        public async Task<IActionResult> Index()
        {
            try
            {
                return Ok();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, ex.Message);
                throw;
            }
        }
    }
}
