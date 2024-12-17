package com.SulongEdukasyon.Sulong.Edukasyon.Models.Teacher;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.SulongEdukasyon.Sulong.Edukasyon.Models.User.UserEntity;

@Repository
public interface TeacherRepo extends JpaRepository<TeacherEntity, Long> {

    TeacherEntity findByTeacherID(Long teacherID);
    
    TeacherEntity findByUser(UserEntity userID);
}
