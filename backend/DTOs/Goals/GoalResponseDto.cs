namespace CareerPath.Api.DTOs.Goals;

public class GoalResponseDto
{
    public int Id { get; set; }

    public string Title { get; set; } = string.Empty;

    public string? Description { get; set; }

    public string Category { get; set; } = string.Empty;

    public string Status { get; set; } = string.Empty;

    public DateTime? TargetDate { get; set; }

    public int Progress { get; set; }

    public DateTime CreatedAt { get; set; }

    public DateTime? UpdatedAt { get; set; }
}