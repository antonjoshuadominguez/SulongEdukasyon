package com.SulongEdukasyon.Sulong.Edukasyon.Models.Teacher;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TeacherRepo extends JpaRepository<TeacherEntity, Long> {
    
    TeacherEntity findByTeacherId(Long teacherId);  // New method to find teacher by teacherId
}
