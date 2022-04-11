using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using MDKAReservasi.Data;
using MDKAReservasi.Models;

namespace MDKAReservasi.Controllers
{
    public class TblM_StatusController : Controller
    {
        private readonly MDKAContext _context;

        public TblM_StatusController(MDKAContext context)
        {
            _context = context; 
        }

        // GET: TblM_Status
        public async Task<IActionResult> Index()
        {
            return View(await _context.TblM_Status.ToListAsync());
        }

        // GET: TblM_Status/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var tblM_Status = await _context.TblM_Status
                .FirstOrDefaultAsync(m => m.Status_PK == id);
            if (tblM_Status == null)
            {
                return NotFound();
            }

            return View(tblM_Status);
        }

        // GET: TblM_Status/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: TblM_Status/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Status_PK,NamaStatus,CreatedBy,CreatedDate,UpdatedBy,UpdatedDate")] TblM_Status tblM_Status)
        {
            if (ModelState.IsValid)
            {
                _context.Add(tblM_Status);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(tblM_Status);
        }

        // GET: TblM_Status/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var tblM_Status = await _context.TblM_Status.FindAsync(id);
            if (tblM_Status == null)
            {
                return NotFound();
            }
            return View(tblM_Status);
        }

        // POST: TblM_Status/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Status_PK,NamaStatus,CreatedBy,CreatedDate,UpdatedBy,UpdatedDate")] TblM_Status tblM_Status)
        {
            if (id != tblM_Status.Status_PK)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(tblM_Status);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!TblM_StatusExists(tblM_Status.Status_PK))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(tblM_Status);
        }

        // GET: TblM_Status/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var tblM_Status = await _context.TblM_Status
                .FirstOrDefaultAsync(m => m.Status_PK == id);
            if (tblM_Status == null)
            {
                return NotFound();
            }

            return View(tblM_Status);
        }

        // POST: TblM_Status/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var tblM_Status = await _context.TblM_Status.FindAsync(id);
            _context.TblM_Status.Remove(tblM_Status);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool TblM_StatusExists(int id)
        {
            return _context.TblM_Status.Any(e => e.Status_PK == id);
        }
    }
}
