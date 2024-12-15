package com.SulongEdukasyon.Sulong.Edukasyon.Models.StudentRoom;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRoomRepo extends JpaRepository<StudentRoomEntity, Long> {
    StudentRoomEntity findByRoomRoomIdAndStudentStudentId(long roomId, long studentId);
}
