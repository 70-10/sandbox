using System.Net;
using System.Net.Sockets;

string CheckIPAddress(string ipAddress)
{
    if (IPAddress.TryParse(ipAddress, out var ip))
    {
        return ip.AddressFamily switch
        {
            AddressFamily.InterNetwork => "IPv4",
            AddressFamily.InterNetworkV6 => "IPv6",
            _ => "Unknown IP format"
        };
    }

    return "None";
}

Console.WriteLine(CheckIPAddress("96.7.128.198"));
Console.WriteLine(CheckIPAddress("2600:1408:ec00:36::1736:7f24"));
Console.WriteLine(CheckIPAddress("not-ip-address"));
