package com.SulongEdukasyon.Sulong.Edukasyon.Models.Teacher;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TeacherRepo extends JpaRepository<TeacherEntity, Long> {
    TeacherEntity findByUserEmail(String email);
}
