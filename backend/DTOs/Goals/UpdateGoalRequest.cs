namespace CareerPath.Api.DTOs.Goals;

public class UpdateGoalRequest
{
    public string Title { get; set; } = string.Empty;

    public string? Description { get; set; }

    public string Category { get; set; } = "General";

    public string Status { get; set; } = "Pending";

    public DateTime? TargetDate { get; set; }

    public int Progress { get; set; }
}