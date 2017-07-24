namespace BeersOnTap.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Create : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Beers",
                c => new
                    {
                        BeersID = c.Int(nullable: false, identity: true),
                        BeerName = c.String(),
                        ABV = c.Decimal(nullable: false, precision: 18, scale: 2),
                        Style = c.String(),
                        Description = c.String(),
                    })
                .PrimaryKey(t => t.BeersID);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Beers");
        }
    }
}
