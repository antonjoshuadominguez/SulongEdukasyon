package com.SulongEdukasyon.Sulong.Edukasyon.Models.Submission;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SubmissionRepo extends JpaRepository<SubmissionEntity, Long> {
    SubmissionEntity findByStudentStudentIdAndActivityActivityId(long studentId, long activityId);  // Find a submission by student and activity
}
