namespace CareerPath.Api.Models;

public class DailyLog
{
    public int Id { get; set; }

    public int UserId { get; set; }

    public User? User { get; set; }

    public DateTime LogDate { get; set; } = DateTime.UtcNow.Date;

    public string WorkedOn { get; set; } = string.Empty;

    public string? Learned { get; set; }

    public string? Problems { get; set; }

    public string? Solutions { get; set; }

    public string? NextStep { get; set; }

    public int TimeSpentMinutes { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}