package com.SulongEdukasyon.Sulong.Edukasyon.Models.Student;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepo extends JpaRepository<StudentEntity, Long> {
    StudentEntity findByUserEmail(String email);
}
