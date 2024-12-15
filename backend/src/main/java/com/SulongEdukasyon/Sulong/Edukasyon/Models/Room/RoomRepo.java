package com.SulongEdukasyon.Sulong.Edukasyon.Models.Room;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoomRepo extends JpaRepository<RoomEntity, Long> {
    RoomEntity findByRoomCode(String roomCode);  // Find a room by its unique room code
}
