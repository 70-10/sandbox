using System.Threading.Tasks;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Host;

namespace TimerTestApp.Trigger
{
    public static class Trigger
    {
        [FunctionName("TimerTrigger")]
        public static async Task TimmerTrigger([TimerTrigger("0 */5 * * * *")] TimerInfo timer, [OrchestrationClient] DurableOrchestrationClient starter, TraceWriter log)
        {
            log.Info("Starting BatchPaymentTimerTrigger");
            await starter.StartNewAsync("MainOrchestrator", null);
        }
    }
}
