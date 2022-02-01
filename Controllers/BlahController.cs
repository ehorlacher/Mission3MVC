using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Mission3MVC.Models;

namespace Mission3MVC.Controllers
{
    public class BlahController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public IActionResult GradeCalc ()
        {
            return View();
        }

        [HttpPost]
        public IActionResult GradeCalc (GradeCalcModel model)
        {
            return View();
        }
    }
}
