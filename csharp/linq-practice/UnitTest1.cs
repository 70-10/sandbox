using System;
using Xunit;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace linq_practice
{
    public class UnitTest1
    {
        [Fact]
        public async Task Test1()
        {
            var builder = new DbContextOptionsBuilder<Context>();
            builder.UseInMemoryDatabase(Guid.NewGuid().ToString());
            DbContextOptions<Context> options = builder.Options;
            var context = new Context(options);
            context.Database.EnsureCreated();
            context.Database.EnsureDeleted();

            var articlesGuid = Guid.NewGuid();
            context.Articles.Add(new Article { Guid = articlesGuid });
            context.SaveChanges();

            var result = await context.Articles.ToListAsync();
            Assert.Equal(1, result.Count);
        }
    }

    public class Context : DbContext
    {
        public Context(DbContextOptions<Context> options) : base(options) { }

        public DbSet<Article> Articles { get; set; }
    }

    public class Article
    {
        [Key]
        public Guid Guid { get; set; }
    }
}
