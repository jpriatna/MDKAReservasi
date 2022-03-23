using MDKAReservasi.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MDKAReservasi.Data
{
    public class MDKAContext : DbContext
    {
        public MDKAContext(DbContextOptions<MDKAContext> options)
            : base(options)
        {
        }
        public DbSet<TblM_Ruangan> TblM_Ruangan { get; set; }
        public DbSet<TblM_Status> TblM_Status { get; set; }
        public DbSet<TblT_Reservasi> TblT_Reservasi { get; set; }
    }
}
