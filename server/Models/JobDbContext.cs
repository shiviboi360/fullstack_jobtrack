using Microsoft.EntityFrameworkCore;

namespace server.Models;

public class JobDbContext : DbContext
{
    public JobDbContext(DbContextOptions<JobDbContext> options)
        : base(options) {}

    public DbSet<JobApplication> Jobs => Set<JobApplication>();
}
