package com.SulongEdukasyon.Sulong.Edukasyon.Models.Student;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.SulongEdukasyon.Sulong.Edukasyon.Models.User.UserEntity;

import java.util.Optional;

@Repository
public interface StudentRepo extends JpaRepository<StudentEntity, Long> {

    Optional<StudentEntity> findByStudentID(Long studentID);  

    Optional<StudentEntity> findByUser(UserEntity user);
}
