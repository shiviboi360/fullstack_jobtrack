using Microsoft.EntityFrameworkCore;
using server.Models;

var builder = WebApplication.CreateBuilder(args);

// Configure CORS to allow React frontend to communicate with backend
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp", policy =>
    {
        policy.WithOrigins("http://localhost:3000") // Frontend URL
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

// Add DbContext with SQL Server connection string
builder.Services.AddDbContext<JobDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

var app = builder.Build();

// Enable CORS middleware
app.UseCors("AllowReactApp");

app.MapGet("/", () => "API is running ✅");

// Get all jobs
app.MapGet("/api/job", async (JobDbContext db) =>
    await db.Jobs.ToListAsync());

// Add new job
app.MapPost("/api/job", async (JobApplication job, JobDbContext db) =>
{
    db.Jobs.Add(job);
    await db.SaveChangesAsync();
    return Results.Created($"/api/job/{job.Id}", job);
});

// Update existing job
app.MapPut("/api/job/{id}", async (int id, JobApplication updatedJob, JobDbContext db) =>
{
    var job = await db.Jobs.FindAsync(id);
    if (job is null) return Results.NotFound();

    job.Role = updatedJob.Role;
    job.Company = updatedJob.Company;
    job.Status = updatedJob.Status;
    job.AppliedDate = updatedJob.AppliedDate;
    job.Notes = updatedJob.Notes;

    await db.SaveChangesAsync();
    return Results.Ok(job);
});

// Delete job
app.MapDelete("/api/job/{id}", async (int id, JobDbContext db) =>
{
    var job = await db.Jobs.FindAsync(id);
    if (job is null) return Results.NotFound();

    db.Jobs.Remove(job);
    await db.SaveChangesAsync();
    return Results.Ok();
});

app.Run();
