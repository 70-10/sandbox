using Xunit;
using Practice.Service;

namespace Practice.UnitTests.Services
{
    public class PracticeTest
    {
        private readonly PracticeService practiceService;

        public PracticeTest()
        {
            this.practiceService = new PracticeService();
        }

        [Fact]
        public void Twice()
        {
            Assert.Equal(2, this.practiceService.Twice(1));
        }
    }
}
