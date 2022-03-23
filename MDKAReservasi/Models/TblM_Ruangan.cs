using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace MDKAReservasi.Models
{
    [Table("tblM_Ruangan")]
    public class TblM_Ruangan
    {
        [Key]
        public int Ruangan_PK { get; set; }
        public string NamaRuangan { get; set; }
        public int? Lantai { get; set; }
        public int? DayaTampung { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string UpdatedBy { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public int Status_FK { get; set; }
    }
}
