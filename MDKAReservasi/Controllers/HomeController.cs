using MDKAReservasi.Data;
using MDKAReservasi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace MDKAReservasi.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly MDKAContext _context;

        public HomeController(ILogger<HomeController> logger, MDKAContext context)
        {
            _logger = logger;
            _context = context;
        }

        public IActionResult Index()
        {
            List<TblT_Reservasi> reservasis = new List<TblT_Reservasi>();
            ViewBag.Status = new SelectList(_context.TblM_Status.OrderBy(x => x.NamaStatus), "Status_PK", "NamaStatus");
            ViewBag.Ruangan = new SelectList(_context.TblM_Ruangan.OrderBy(x => x.NamaRuangan), "Ruangan_PK", "NamaRuangan");
            reservasis = _context.TblT_Reservasi.OrderByDescending(x => x.CreatedDate).ToList();

            return View(reservasis);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create(List<TblT_Reservasi> Model)
        {
            
            _context.AddRangeAsync(Model);
            await _context.SaveChangesAsync();
            return RedirectToAction("Index");
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
