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
import java.util.stream.Collectors;

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
        if (roomRepo.existsByRoomCode(room.getRoomCode())) {
            return ResponseEntity.badRequest().body(null); // Room code already exists
        }

        RoomEntity savedRoom = roomRepo.save(room); // Save the new room
        return ResponseEntity.ok(savedRoom); // Return saved room
    }

    // Update room
    public ResponseEntity<RoomEntity> updateRoom(long roomId, RoomEntity room) {
        Optional<RoomEntity> existingRoom = roomRepo.findById(roomId);
        if (existingRoom.isPresent()) {
            RoomEntity updatedRoom = existingRoom.get();
            updatedRoom.setRoomName(room.getRoomName());
            updatedRoom.setRoomDescription(room.getRoomDescription());
            updatedRoom.setRoomCode(room.getRoomCode()); // Room code can be updated if needed
            roomRepo.save(updatedRoom); // Save updated room
            return ResponseEntity.ok(updatedRoom); // Return updated room
        } else {
            return ResponseEntity.notFound().build(); // Return not found if room doesn't exist
        }
    }

    // Get all rooms for a teacher
    public List<RoomEntity> getRoomsByTeacher(long teacherId) {
        return roomRepo.findByTeacher_TeacherId(teacherId); // Fetch rooms for specific teacher
    }

    // Get all rooms that a student has joined
    public List<RoomEntity> getRoomsByStudent(long studentId) {
        List<StudentRoomEntity> studentRooms = studentRoomRepo.findByStudentStudentId(studentId); // Fetch student-room relationships
        return studentRooms.stream()
                           .map(StudentRoomEntity::getRoom) // Map to RoomEntity objects
                           .collect(Collectors.toList()); // Collect into a list of rooms
    }

    // Get room by room code (for students to join)
    public ResponseEntity<RoomEntity> getRoomByCode(String roomCode) {
        Optional<RoomEntity> room = roomRepo.findByRoomCode(roomCode);
        return room.map(ResponseEntity::ok) // If room found, return it
                   .orElseGet(() -> ResponseEntity.notFound().build()); // Return not found if room doesn't exist
    }

    // Delete room
    public ResponseEntity<String> deleteRoom(long roomId) {
        Optional<RoomEntity> room = roomRepo.findById(roomId);
        if (room.isPresent()) {
            roomRepo.delete(room.get()); // Delete room if exists
            return ResponseEntity.ok("Room deleted successfully."); // Return success message
        } else {
            return ResponseEntity.notFound().build(); // Return not found if room doesn't exist
        }
    }

    // Join room (Student enrolls into a room using the room code)
    public ResponseEntity<StudentRoomEntity> joinRoom(String roomCode, Long studentId) {
        Optional<RoomEntity> roomOpt = roomRepo.findByRoomCode(roomCode);
        if (!roomOpt.isPresent()) {
            return ResponseEntity.badRequest().body(null); // Room not found
        }

        RoomEntity room = roomOpt.get();

        Optional<StudentEntity> studentOpt = studentRepo.findById(studentId);
        if (!studentOpt.isPresent()) {
            return ResponseEntity.badRequest().body(null); // Student not found
        }

        StudentEntity student = studentOpt.get();

        StudentRoomEntity studentRoom = new StudentRoomEntity();
        studentRoom.setRoom(room);
        studentRoom.setStudent(student);
        studentRoom.setEnrollmentDate("CURRENT_DATE"); // Enrollment date, could be changed to actual date if needed

        StudentRoomEntity savedStudentRoom = studentRoomRepo.save(studentRoom); // Save student-room relationship

        return ResponseEntity.ok(savedStudentRoom); // Return saved student-room relationship
    }
}
