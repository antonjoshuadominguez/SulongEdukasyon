package com.SulongEdukasyon.Sulong.Edukasyon.Models.ActivityResult;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ActivityResultRepo extends JpaRepository<ActivityResultEntity, Long> {
    ActivityResultEntity findByStudentStudentIdAndActivityActivityId(long studentId, long activityId);
}
