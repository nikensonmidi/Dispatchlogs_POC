using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NativeScript_DotNet.BusinessLogic;
using NativeScript_DotNet.Model;

namespace NativeScript_DotNet.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DispatchlogController : ControllerBase
    {
        [HttpGet("[action]")]
        public IEnumerable<DispatchLog> GetDispatchLogs()
        {
            return DispatchlogFunctions.GetDispatchLogs();
        }
    }
}