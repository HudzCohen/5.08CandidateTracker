using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CandidateTracker.Data
{
    public class CandidateRepo
    {
       private readonly string _connectionString;

        public CandidateRepo(string connectionString)
        {
            _connectionString = connectionString;
        }

        public void AddCandidate(Candidate candidate)
        {
            using var ctx = new CandidateDataContext(_connectionString);
            ctx.Candidates.Add(candidate);
            ctx.SaveChanges();
        }

        public List<Candidate> GetPendingCandidates()
        {
            using var ctx = new CandidateDataContext(_connectionString);
            return ctx.Candidates.Where(c => c.Status == Status.Pending).ToList();
        }

        public List<Candidate> GetConfirmedCandidates()
        {
            using var ctx = new CandidateDataContext(_connectionString);
            return ctx.Candidates.Where(c => c.Status == Status.Confirmed).ToList();
        }

        public List<Candidate> GetDeclinedCandidates()
        {
            using var ctx = new CandidateDataContext(_connectionString);
            return ctx.Candidates.Where(c => c.Status == Status.Declined).ToList();
        }

        public Candidate GetCandidateById(int id)
        {
            using var ctx = new CandidateDataContext(_connectionString);
            return ctx.Candidates.FirstOrDefault(c => c.Id == id);
        }

        public AllCounts GetAllCounts()
        {
            using var ctx = new CandidateDataContext(_connectionString);
            AllCounts counts = new();
            counts.PendingCount = ctx.Candidates.Where(c => c.Status == Status.Pending).Count();
            counts.ConfirmedCount = ctx.Candidates.Where(c => c.Status == Status.Confirmed).Count();
            counts.DeclinedCount = ctx.Candidates.Where(c => c.Status == Status.Declined).Count();
            return counts;
        }

        public void UpdateStatus(Candidate candidate)
        {
            using var ctx = new CandidateDataContext(_connectionString);
            ctx.Update(candidate);
            ctx.SaveChanges();
        }
    }
}
