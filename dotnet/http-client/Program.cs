using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace http_client
{
    class Program
    {
        static async Task Main(string[] args)
        {
            var client = new HttpClient
            {
                BaseAddress = new Uri("https://example.com")
            };

            client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", "access-token");
            client.DefaultRequestHeaders.Add("X-Client-ID", "client-1");

            var req = new HttpRequestMessage(HttpMethod.Get, "/");
            req.Headers.Add("X-Client-ID", "client-2");

            var res = await client.SendAsync(req);

            Console.WriteLine(res.RequestMessage.Headers);
        }
    }
}
