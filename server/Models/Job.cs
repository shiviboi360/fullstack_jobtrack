using System;
using System.ComponentModel.DataAnnotations;

namespace JobTrackerAPI.Models
{
    public class Job
    {
        // This is the primary key for the Job entity
        public int Id { get; set; }

        // Required fields for the job
        [Required]
        public string Role { get; set; }

        [Required]
        public string Company { get; set; }

        [Required]
        public string Status { get; set; }

        [Required]
        public DateTime AppliedDate { get; set; }

        public string Notes { get; set; }
    }
}
