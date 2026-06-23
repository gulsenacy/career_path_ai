using CareerPath.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace CareerPath.Api.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {
    }

    public DbSet<User> Users => Set<User>();

    public DbSet<Goal> Goals => Set<Goal>();

    public DbSet<TaskItem> Tasks => Set<TaskItem>();

    public DbSet<DailyLog> DailyLogs => Set<DailyLog>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<User>()
            .HasIndex(user => user.Email)
            .IsUnique();

        modelBuilder.Entity<User>()
            .HasMany(user => user.Goals)
            .WithOne(goal => goal.User)
            .HasForeignKey(goal => goal.UserId)
            .OnDelete(DeleteBehavior.Cascade);

        modelBuilder.Entity<User>()
            .HasMany(user => user.Tasks)
            .WithOne(task => task.User)
            .HasForeignKey(task => task.UserId)
            .OnDelete(DeleteBehavior.Cascade);

        modelBuilder.Entity<User>()
            .HasMany(user => user.DailyLogs)
            .WithOne(log => log.User)
            .HasForeignKey(log => log.UserId)
            .OnDelete(DeleteBehavior.Cascade);

        modelBuilder.Entity<Goal>()
            .HasMany(goal => goal.Tasks)
            .WithOne(task => task.Goal)
            .HasForeignKey(task => task.GoalId)
            .OnDelete(DeleteBehavior.NoAction);
    }
}