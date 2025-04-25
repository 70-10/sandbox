using System.Text;

using Whois.NET;

var options = new WhoisQueryOptions
{
    Encoding = Encoding.UTF8
};
var result = await WhoisClient.QueryAsync("google.com", options);

Console.WriteLine(string.Join(" > ", result.RespondedServers));
Console.WriteLine(result.Raw);