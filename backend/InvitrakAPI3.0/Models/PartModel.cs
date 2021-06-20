using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;
using System.Linq;

namespace InvitrakAPI3._0.Models
{
    public partial class PartModel : DbContext
    {
        public PartModel()
            : base("name=PartModel")
        {
        }

        public virtual DbSet<Customer> Customers { get; set; }
        public virtual DbSet<Order> Orders { get; set; }
        public virtual DbSet<Part> Parts { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Order>()
                .Property(e => e.Quantity)
                .HasPrecision(18, 0);

            modelBuilder.Entity<Order>()
                .Property(e => e.Total)
                .HasPrecision(18, 0);

            modelBuilder.Entity<Order>()
                .Property(e => e.Tax)
                .HasPrecision(18, 0);

            modelBuilder.Entity<Order>()
                .Property(e => e.Shipping)
                .HasPrecision(18, 0);

            modelBuilder.Entity<Part>()
                .Property(e => e.Quantity)
                .HasPrecision(18, 0);

            modelBuilder.Entity<Part>()
                .Property(e => e.Price)
                .HasPrecision(18, 0);

            modelBuilder.Entity<Part>()
                .HasMany(e => e.Orders)
                .WithRequired(e => e.Part)
                .WillCascadeOnDelete(false);
        }
    }
}
