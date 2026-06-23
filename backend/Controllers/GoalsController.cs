using CareerPath.Api.Data;
using CareerPath.Api.DTOs.Goals;
using CareerPath.Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CareerPath.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class GoalsController : ControllerBase
{
    private readonly AppDbContext _context;

    private const int DemoUserId = 1;

    public GoalsController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<List<GoalResponseDto>>> GetGoals()
    {
        var goals = await _context.Goals
            .Where(goal => goal.UserId == DemoUserId)
            .OrderByDescending(goal => goal.CreatedAt)
            .Select(goal => new GoalResponseDto
            {
                Id = goal.Id,
                Title = goal.Title,
                Description = goal.Description,
                Category = goal.Category,
                Status = goal.Status,
                TargetDate = goal.TargetDate,
                Progress = goal.Progress,
                CreatedAt = goal.CreatedAt,
                UpdatedAt = goal.UpdatedAt
            })
            .ToListAsync();

        return Ok(goals);
    }

    [HttpGet("{id:int}")]
    public async Task<ActionResult<GoalResponseDto>> GetGoal(int id)
    {
        var goal = await _context.Goals
            .Where(goal => goal.Id == id && goal.UserId == DemoUserId)
            .Select(goal => new GoalResponseDto
            {
                Id = goal.Id,
                Title = goal.Title,
                Description = goal.Description,
                Category = goal.Category,
                Status = goal.Status,
                TargetDate = goal.TargetDate,
                Progress = goal.Progress,
                CreatedAt = goal.CreatedAt,
                UpdatedAt = goal.UpdatedAt
            })
            .FirstOrDefaultAsync();

        if (goal is null)
        {
            return NotFound();
        }

        return Ok(goal);
    }

    [HttpPost]
    public async Task<ActionResult<GoalResponseDto>> CreateGoal(CreateGoalRequest request)
    {
        if (string.IsNullOrWhiteSpace(request.Title))
        {
            return BadRequest("Goal title is required.");
        }

        var goal = new Goal
        {
            UserId = DemoUserId,
            Title = request.Title.Trim(),
            Description = request.Description,
            Category = string.IsNullOrWhiteSpace(request.Category) ? "General" : request.Category,
            Status = string.IsNullOrWhiteSpace(request.Status) ? "Pending" : request.Status,
            TargetDate = request.TargetDate,
            Progress = Math.Clamp(request.Progress, 0, 100),
            CreatedAt = DateTime.UtcNow
        };

        _context.Goals.Add(goal);
        await _context.SaveChangesAsync();

        var response = new GoalResponseDto
        {
            Id = goal.Id,
            Title = goal.Title,
            Description = goal.Description,
            Category = goal.Category,
            Status = goal.Status,
            TargetDate = goal.TargetDate,
            Progress = goal.Progress,
            CreatedAt = goal.CreatedAt,
            UpdatedAt = goal.UpdatedAt
        };

        return CreatedAtAction(nameof(GetGoal), new { id = goal.Id }, response);
    }

    [HttpPut("{id:int}")]
    public async Task<IActionResult> UpdateGoal(int id, UpdateGoalRequest request)
    {
        var goal = await _context.Goals
            .FirstOrDefaultAsync(goal => goal.Id == id && goal.UserId == DemoUserId);

        if (goal is null)
        {
            return NotFound();
        }

        if (string.IsNullOrWhiteSpace(request.Title))
        {
            return BadRequest("Goal title is required.");
        }

        goal.Title = request.Title.Trim();
        goal.Description = request.Description;
        goal.Category = string.IsNullOrWhiteSpace(request.Category) ? "General" : request.Category;
        goal.Status = string.IsNullOrWhiteSpace(request.Status) ? "Pending" : request.Status;
        goal.TargetDate = request.TargetDate;
        goal.Progress = Math.Clamp(request.Progress, 0, 100);
        goal.UpdatedAt = DateTime.UtcNow;

        await _context.SaveChangesAsync();

        return NoContent();
    }

    [HttpDelete("{id:int}")]
    public async Task<IActionResult> DeleteGoal(int id)
    {
        var goal = await _context.Goals
            .FirstOrDefaultAsync(goal => goal.Id == id && goal.UserId == DemoUserId);

        if (goal is null)
        {
            return NotFound();
        }

        _context.Goals.Remove(goal);
        await _context.SaveChangesAsync();

        return NoContent();
    }
}