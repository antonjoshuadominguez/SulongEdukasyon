package com.SulongEdukasyon.Sulong.Edukasyon.Service;

import com.SulongEdukasyon.Sulong.Edukasyon.Models.User.UserEntity;
import com.SulongEdukasyon.Sulong.Edukasyon.Models.Teacher.TeacherEntity;
import com.SulongEdukasyon.Sulong.Edukasyon.Models.Student.StudentEntity;
import com.SulongEdukasyon.Sulong.Edukasyon.Models.User.UserRepo;
import com.SulongEdukasyon.Sulong.Edukasyon.Models.Teacher.TeacherRepo;
import com.SulongEdukasyon.Sulong.Edukasyon.Models.Student.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RoleService {

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private TeacherRepo teacherRepo;

    @Autowired
    private StudentRepo studentRepo;

    // This method will be responsible for assigning a role (teacher or student) to a user.
    public void assignRoleToUser(UserEntity userEntity) {
        // Save the user first
        userRepo.save(userEntity);

        // Check the role of the user and assign to the respective table
        if ("teacher".equals(userEntity.getRole())) {
            // Assign to teacher
            TeacherEntity teacherEntity = new TeacherEntity(userEntity);
            teacherRepo.save(teacherEntity);
        } else if ("student".equals(userEntity.getRole())) {
            // Assign to student
            StudentEntity studentEntity = new StudentEntity(userEntity);
            studentRepo.save(studentEntity);
        }
    }
}
