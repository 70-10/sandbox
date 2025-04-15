using DnsClient;
using DnsClient.Protocol;

class Program
{
    static async Task Main()
    {

        var resolveIPv6 = true;
        var domainName = "example.com";

        var lookup = new LookupClient(NameServer.GooglePublicDns, NameServer.Cloudflare);

        var ipAddresses = new List<string>();

        var result = await lookup.QueryAsync(domainName, QueryType.A);

        if (!result.HasError && result.Answers.Any())
        {
            ipAddresses.AddRange(result.Answers.OfType<ARecord>().Select(r => r.Address.ToString()));
        }

        if (resolveIPv6)
        {
            var ipv6Result = lookup.Query(domainName, QueryType.AAAA);
            if (!ipv6Result.HasError && ipv6Result.Answers.Any())
            {
                ipAddresses.AddRange(
                    ipv6Result.Answers.OfType<AaaaRecord>()
                        .Select(r => r.Address.ToString())
                );
            }
        }

        if (!ipAddresses.Any())
        {
            throw new InvalidOperationException($"No IP addresses found for domain: {domainName}");
        }

        Console.WriteLine($"IP addresses for {domainName}:");
        foreach (var ipAddress in ipAddresses)
        {
            Console.WriteLine(ipAddress);
        }
    }
}