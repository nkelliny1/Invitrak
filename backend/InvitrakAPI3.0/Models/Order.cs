namespace InvitrakAPI3._0.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Order
    {
        public int ID { get; set; }

        public int PartID { get; set; }

        public int? CustomerID { get; set; }

        public decimal Quantity { get; set; }

        public decimal Total { get; set; }

        public decimal? Tax { get; set; }

        public decimal? Shipping { get; set; }

        public virtual Customer Customer { get; set; }

        public virtual Part Part { get; set; }
    }
}
