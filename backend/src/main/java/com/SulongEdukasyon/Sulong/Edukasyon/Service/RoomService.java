package com.SulongEdukasyon.Sulong.Edukasyon.Service;

import com.SulongEdukasyon.Sulong.Edukasyon.Models.Room.RoomEntity;
import com.SulongEdukasyon.Sulong.Edukasyon.Models.Room.RoomRepo;
import com.SulongEdukasyon.Sulong.Edukasyon.Models.StudentRoom.StudentRoomEntity;
import com.SulongEdukasyon.Sulong.Edukasyon.Models.StudentRoom.StudentRoomRepo;
import com.SulongEdukasyon.Sulong.Edukasyon.Models.Student.StudentEntity;
import com.SulongEdukasyon.Sulong.Edukasyon.Models.Student.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RoomService {

    @Autowired
    private RoomRepo roomRepo;

    @Autowired
    private StudentRoomRepo studentRoomRepo;

    @Autowired
    private StudentRepo studentRepo;

    // Create room
    public ResponseEntity<RoomEntity> createRoom(RoomEntity room) {
        // Check if the room code already exists
        if (roomRepo.existsByRoomCode(room.getRoomCode())) {
            return ResponseEntity.badRequest().body(null);  // Or provide an error message
        }
        
        RoomEntity savedRoom = roomRepo.save(room);
        return ResponseEntity.ok(savedRoom);
    }

    // Update room
    public ResponseEntity<RoomEntity> updateRoom(long roomId, RoomEntity room) {
        Optional<RoomEntity> existingRoom = roomRepo.findById(roomId);
        if (existingRoom.isPresent()) {
            RoomEntity updatedRoom = existingRoom.get();
            updatedRoom.setRoomName(room.getRoomName());
            updatedRoom.setRoomDescription(room.getRoomDescription());
            updatedRoom.setRoomCode(room.getRoomCode());  // Assuming you may allow updating room codes
            roomRepo.save(updatedRoom);
            return ResponseEntity.ok(updatedRoom);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Get all rooms
    public List<RoomEntity> getAllRooms() {
        return roomRepo.findAll();
    }

    // Get room by room code (for students to join)
    public ResponseEntity<RoomEntity> getRoomByCode(String roomCode) {
        Optional<RoomEntity> room = roomRepo.findByRoomCode(roomCode);
        return room.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Delete room
    public ResponseEntity<String> deleteRoom(long roomId) {
        Optional<RoomEntity> room = roomRepo.findById(roomId);
        if (room.isPresent()) {
            roomRepo.delete(room.get());
            return ResponseEntity.ok("Room deleted successfully.");
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Join room (Student enrolls into a room using the room code)
    public ResponseEntity<StudentRoomEntity> joinRoom(String roomCode, Long studentId) {
        // Find room by room code
        Optional<RoomEntity> roomOpt = roomRepo.findByRoomCode(roomCode);
        if (!roomOpt.isPresent()) {
            return ResponseEntity.badRequest().body(null); // Room not found
        }

        RoomEntity room = roomOpt.get();

        // Find student by student ID
        Optional<StudentEntity> studentOpt = studentRepo.findById(studentId);
        if (!studentOpt.isPresent()) {
            return ResponseEntity.badRequest().body(null); // Student not found
        }

        StudentEntity student = studentOpt.get();

        // Create new StudentRoomEntity
        StudentRoomEntity studentRoom = new StudentRoomEntity();
        studentRoom.setRoom(room);
        studentRoom.setStudent(student);
        studentRoom.setEnrollmentDate("CURRENT_DATE");  // Or use the actual enrollment date

        // Save student-room relationship
        StudentRoomEntity savedStudentRoom = studentRoomRepo.save(studentRoom);

        return ResponseEntity.ok(savedStudentRoom);
    }
}
