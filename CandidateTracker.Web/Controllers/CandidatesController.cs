using CandidateTracker.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CandidateTracker.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CandidatesController : ControllerBase
    {
        private string _connectionString;

        public CandidatesController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [HttpPost("addcandidate")]
        public void AddCandidate(Candidate candidate)
        {
            candidate.Status = Status.Pending;
            var repo = new CandidateRepo(_connectionString);
            repo.AddCandidate(candidate);
        }

        [HttpGet("getpending")]
        public List<Candidate> GetPendingCandidates()
        {
            var repo = new CandidateRepo(_connectionString);
            return repo.GetPendingCandidates();
        }

        [HttpGet("getconfirmed")]
        public List<Candidate> GetConfirmedCandidates()
        {
            var repo = new CandidateRepo(_connectionString);
            return repo.GetConfirmedCandidates();
        }

        [HttpGet("getdeclined")]
        public List<Candidate> GetDeclinedCandidates()
        {
            var repo = new CandidateRepo(_connectionString);
            return repo.GetDeclinedCandidates();
        }

        [HttpGet("getcandidatebyid")]
        public Candidate GetCandidateById(int id)
        {
            var repo = new CandidateRepo(_connectionString);
            return repo.GetCandidateById(id);
        }

        [HttpGet("getallcounts")]
        public AllCounts GetAllCounts()
        {
            var repo = new CandidateRepo(_connectionString);
            return repo.GetAllCounts();
        }

        [HttpPost("updatestatus")]
        public void UpdateStatus(Candidate candidate)
        {
            var repo = new CandidateRepo(_connectionString);
            repo.UpdateStatus(candidate);
        }
    }
}
