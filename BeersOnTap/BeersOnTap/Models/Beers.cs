using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BeersOnTap.Models
{
    public class Beers
    {
        public int BeersID { get; set; }

        public string BeerName { get; set; }
        public decimal ABV { get; set; }
        public string Style { get; set; }
        public string Description { get; set; }
    }
}