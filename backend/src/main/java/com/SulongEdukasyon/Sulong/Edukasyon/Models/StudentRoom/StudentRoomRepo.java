package com.SulongEdukasyon.Sulong.Edukasyon.Models.StudentRoom;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface StudentRoomRepo extends JpaRepository<StudentRoomEntity, Long> {

    List<StudentRoomEntity> findByStudentStudentId(long studentId);
}
