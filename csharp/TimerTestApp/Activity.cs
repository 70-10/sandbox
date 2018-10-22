using System.Threading.Tasks;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Host;

namespace TimerTestApp.Activity
{
    public static class Activity
    {
        [FunctionName("MainActivity")]
        public static void MainActivity([ActivityTrigger] string name, TraceWriter log, ExecutionContext context)
        {
            log.Info("MainActivity");
            log.Info(name);
        }
    }
}
