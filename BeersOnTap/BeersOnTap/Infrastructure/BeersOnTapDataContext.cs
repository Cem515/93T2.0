using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace BeersOnTap.Infrastructure
{
    public class BeersOnTapDataContext : DbContext
    {
        public BeersOnTapDataContext(): base("BeersOnTap")
        {

        }
      public System.Data.Entity.DbSet<BeersOnTap.Models.Beers> Beers { get; set; }
    }
}