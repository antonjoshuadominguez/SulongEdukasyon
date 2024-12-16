package com.SulongEdukasyon.Sulong.Edukasyon.Models.Student;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface StudentRepo extends JpaRepository<StudentEntity, Long> {

    Optional<StudentEntity> findByStudentId(Long studentId);  
    
    Optional<StudentEntity> findByEmail(String email); 
}
