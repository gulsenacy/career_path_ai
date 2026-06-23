namespace CareerPath.Api.Models;

public class TaskItem
{
    public int Id { get; set; }

    public int UserId { get; set; }

    public User? User { get; set; }

    public int? GoalId { get; set; }

    public Goal? Goal { get; set; }

    public string Title { get; set; } = string.Empty;

    public string? Description { get; set; }

    public string Status { get; set; } = "Pending";

    public string Priority { get; set; } = "Medium";

    public DateTime? DueDate { get; set; }

    public DateTime? CompletedAt { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}