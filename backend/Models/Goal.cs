namespace CareerPath.Api.Models;

public class Goal
{
    public int Id { get; set; }

    public int UserId { get; set; }

    public User? User { get; set; }

    public string Title { get; set; } = string.Empty;

    public string? Description { get; set; }

    public string Category { get; set; } = "General";

    public string Status { get; set; } = "In Progress";

    public DateTime? TargetDate { get; set; }

    public int Progress { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public DateTime? UpdatedAt { get; set; }

    public List<TaskItem> Tasks { get; set; } = new();
}