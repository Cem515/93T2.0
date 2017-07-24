using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using BeersOnTap.Infrastructure;
using BeersOnTap.Models;
using System.Web.Http.Cors;

namespace BeersOnTap.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class BeersController : ApiController
    {
        private BeersOnTapDataContext db = new BeersOnTapDataContext();

        // GET: api/Beers
        public IQueryable<Beers> GetBeers()
        {
            return db.Beers;
        }

        // GET: api/Beers/5
        [ResponseType(typeof(Beers))]
        public IHttpActionResult GetBeers(int id)
        {
            Beers beers = db.Beers.Find(id);
            if (beers == null)
            {
                return NotFound();
            }

            return Ok(beers);
        }

        // PUT: api/Beers/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutBeers(int id, Beers beers)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != beers.BeersID)
            {
                return BadRequest();
            }

            db.Entry(beers).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BeersExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Beers
        [ResponseType(typeof(Beers))]
        public IHttpActionResult PostBeers(Beers beers)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Beers.Add(beers);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = beers.BeersID }, beers);
        }

        // DELETE: api/Beers/5
        [ResponseType(typeof(Beers))]
        public IHttpActionResult DeleteBeers(int id)
        {
            Beers beers = db.Beers.Find(id);
            if (beers == null)
            {
                return NotFound();
            }

            db.Beers.Remove(beers);
            db.SaveChanges();

            return Ok(beers);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool BeersExists(int id)
        {
            return db.Beers.Count(e => e.BeersID == id) > 0;
        }
    }
}