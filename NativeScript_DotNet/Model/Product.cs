using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NativeScript_DotNet.Model
{
    public class Product
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public int Id { get; set; }
        public string UOM { get; set; }
        public int Quantity { get; set; }
    }
}
