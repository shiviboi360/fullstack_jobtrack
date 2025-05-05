import { useEffect, useState } from "react";
import axios from "axios";
import './App.css';

function App() {
  const [jobs, setJobs] = useState([]);
  const [form, setForm] = useState({
    id: null,
    role: "",
    company: "",
    status: "",
    appliedDate: "",
    notes: ""
  });

  const apiUrl = "http://localhost:5261/api/job"; // Backend API URL

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await axios.get(apiUrl);
      setJobs(res.data);
    } catch (err) {
      console.error("❌ Error fetching jobs:", err.message);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);  // Debugging: Check if form data is correct

    try {
      if (form.id) {
        await axios.put(`${apiUrl}/${form.id}`, form);
      } else {
        const { id, ...jobData } = form; // Remove ID before sending
        await axios.post(apiUrl, jobData);
      }

      // Reset form after submitting
      setForm({
        id: null,
        role: "",
        company: "",
        status: "",
        appliedDate: "",
        notes: ""
      });

      fetchJobs();
    } catch (err) {
      console.error("❌ Error saving job:", err.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${apiUrl}/${id}`);
      fetchJobs();
    } catch (err) {
      console.error("❌ Error deleting job:", err.message);
    }
  };

  const loadEditForm = (job) => {
    setForm({ ...job });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Job Tracker</h1>
      </header>
      
      <form onSubmit={handleSubmit} className="form-section">
        <input name="role" placeholder="Role" value={form.role} onChange={handleChange} required />
        <input name="company" placeholder="Company" value={form.company} onChange={handleChange} required />
        <input name="status" placeholder="Status" value={form.status} onChange={handleChange} required />
        <input name="appliedDate" type="date" value={form.appliedDate} onChange={handleChange} required />
        <input name="notes" placeholder="Notes" value={form.notes} onChange={handleChange} />
        <button type="submit">{form.id ? "Update Job" : "Add Job"}</button>
      </form>

      {jobs.length === 0 ? (
        <p>No jobs yet. Add some!</p>
      ) : (
        jobs.map((job) => (
          <div key={job.id} className="job-card">
            <h3>{job.role} @ {job.company}</h3>
            <p>Status: {job.status}</p>
            <p>Date: {new Date(job.appliedDate).toLocaleDateString()}</p>
            <p>Notes: {job.notes}</p>
            <button onClick={() => handleDelete(job.id)}>Delete</button>
            <button onClick={() => loadEditForm(job)}>Edit</button>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
