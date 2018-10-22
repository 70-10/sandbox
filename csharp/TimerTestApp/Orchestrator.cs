using System.Threading.Tasks;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Host;

namespace TimerTestApp.Orchestrator
{
    public static class Orchestrator
    {
        [FunctionName("MainOrchestrator")]
        public static async Task MainOrchestrator([OrchestrationTrigger] DurableOrchestrationContext context, TraceWriter log)
        {
            log.Info("MainOrchestrator");
            await context.CallActivityAsync("MainActivity", "test");
        }
    }
}
