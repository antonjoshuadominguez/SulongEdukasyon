package com.SulongEdukasyon.Sulong.Edukasyon.Models.Room;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface RoomRepo extends JpaRepository<RoomEntity, Long> {

    Optional<RoomEntity> findByRoomCode(String roomCode);

    boolean existsByRoomCode(String roomCode);

    List<RoomEntity> findByTeacher_TeacherID(long teacherID);
}
