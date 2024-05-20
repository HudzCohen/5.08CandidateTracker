using Microsoft.EntityFrameworkCore;

namespace CandidateTracker.Data;

public class CandidateDataContext : DbContext
{
    private readonly string _connectionString;

    public CandidateDataContext(string connectionString)
    {
        _connectionString = connectionString;
    }

    public DbSet<Candidate> Candidates { get; set; }
    
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlServer(_connectionString);
    }
    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        foreach (var relationship in modelBuilder.Model.GetEntityTypes().SelectMany(e => e.GetForeignKeys()))
        {
            relationship.DeleteBehavior = DeleteBehavior.Restrict;
        }
    }
}