using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission3MVC.Models
{
    public class GradeCalcModel
    {
        [Required]
        public string Assignments { get; set; }

        [Required]
        public string Project { get; set; }

        [Required]
        public string Quizzes { get; set; }

        [Required]
        public string Exams { get; set; }

        [Required]
        public string Intex { get; set; }

    }
}
