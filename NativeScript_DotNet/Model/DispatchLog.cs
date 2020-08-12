using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NativeScript_DotNet.Model
{
    public class DispatchLog
    {
        public string CustomerNumber { get; set; }
        public DateTime? RequestedDate { get; set; }
        public string Status { get; set; }
        public string SopNumber { get; set; }
        public List<Product> Products { get; set; }
    }
}
