namespace CareerPath.Api.Models;

public class User
{
    public int Id { get; set; }

    public string FullName { get; set; } = string.Empty;

    public string Email { get; set; } = string.Empty;

    public string PasswordHash { get; set; } = string.Empty;

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public List<Goal> Goals { get; set; } = new();

    public List<TaskItem> Tasks { get; set; } = new();

    public List<DailyLog> DailyLogs { get; set; } = new();
}