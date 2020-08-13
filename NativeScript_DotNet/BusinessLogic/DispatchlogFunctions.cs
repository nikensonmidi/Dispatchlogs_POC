using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using NativeScript_DotNet.Model;

namespace NativeScript_DotNet.BusinessLogic
{
    public static class DispatchlogFunctions
    {
        public static IEnumerable<DispatchLog> GetDispatchLogs()
        {
            List<DispatchLog> logs = new List<DispatchLog>();

            for (int i = 0; i < 2000; i++)
            {
                logs.Add(
                    new DispatchLog()
                    {
                        CustomerNumber = "Alebar"+i,
                        RequestedDate = new DateTime(2020, 10, 21),
                        SopNumber = "OMIM393162",
                        Status = "Unassigned",
                        Products = new List<Product>
                        {
                            new Product()
                            {
                                Id = 1, Description = "22-0-11 50%PCU 44 MOP 3%D=FE Reg-50#", Name = "822149",
                                Quantity = 12, UOM = "50 lB"
                            }
                        }
                    }
                    );
            }
           

            return logs;
        }
    }
}

