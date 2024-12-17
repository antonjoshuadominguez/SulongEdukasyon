package com.SulongEdukasyon.Sulong.Edukasyon.Models.StudentRoom;

import com.SulongEdukasyon.Sulong.Edukasyon.Models.Room.RoomEntity;
import com.SulongEdukasyon.Sulong.Edukasyon.Models.Student.StudentEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface StudentRoomRepo extends JpaRepository<StudentRoomEntity, Long> {

    List<StudentRoomEntity> findByStudent_StudentID(long studentID);  
    
    Optional<StudentRoomEntity> findByRoomAndStudent(RoomEntity room, StudentEntity student);  // Updated method to return Optional
    
    boolean existsByRoom_RoomIDAndStudent_StudentID(long roomID, long studentID);  
}
