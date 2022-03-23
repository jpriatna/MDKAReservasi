using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace MDKAReservasi.Models
{
    [Table("tblT_Reservasi")]
    public class TblT_Reservasi
    {
        [Key]
        public int Reservasi_PK { get; set; }
        public int Ruangan_FK { get; set; }
        public string SubjectReservasi { get; set; }
        public DateTime? TanggalReservasi { get; set; }
        public TimeSpan? JamMulai { get; set; }
        public TimeSpan? JamSelesai { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string UpdatedBy { get; set; }
        public DateTime? UpdatedDate { get; set; }
    }
}
