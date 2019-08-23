using System;
using Newtonsoft.Json;

namespace json_sample
{
    class Program
    {
        static void Main(string[] args)
        {
            var user = new User
            {
                Id = Guid.NewGuid(),
                Name = "John",
                PhoneNumber = "00000000000"
            };

            var jsonStr = "{\"id\":\"604e51e2-62dc-4f33-96c5-034ab0c50652\",\"name\":\"John\",\"phone_number\":\"00012345678\"}";
            var desirialize = JsonConvert.DeserializeObject<User>(jsonStr);

            Console.WriteLine(JsonConvert.SerializeObject(user));
            Console.WriteLine(desirialize.ToString());

        }
    }

    public class User
    {
        [JsonProperty("id")]
        public Guid Id { get; set; }
        [JsonProperty("name")]
        public string Name { get; set; }
        [JsonProperty("phone_number")]
        public string PhoneNumber { get; set; }

        public string ToString()
        {
            return $"{Id}:{Name}:{PhoneNumber}";
        }
    }
}
