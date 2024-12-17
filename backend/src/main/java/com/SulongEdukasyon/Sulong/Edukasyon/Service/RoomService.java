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

    // Create a new room (only teachers can create rooms)
    public RoomEntity createRoom(RoomEntity roomEntity) {
        roomEntity.setRoomCode(generateRoomCode()); // Generate room code
        return roomRepo.save(roomEntity);
    }

    // Update room details (teachers can only update their rooms)
    public RoomEntity updateRoom(long roomID, RoomEntity roomEntity) {
        Optional<RoomEntity> existingRoom = roomRepo.findById(roomID);
        if (existingRoom.isPresent()) {
            RoomEntity updatedRoom = existingRoom.get();
            updatedRoom.setRoomName(roomEntity.getRoomName());
            updatedRoom.setRoomDescription(roomEntity.getRoomDescription());
            return roomRepo.save(updatedRoom);
        }
        return null;  // Return null if room not found
    }

    // Fetch all rooms created by a teacher
    public List<RoomEntity> getRoomsByTeacher(long teacherID) {
        return roomRepo.findByTeacher_TeacherID(teacherID);
    }

    // Fetch a room by its unique ID
    public RoomEntity getRoomById(long roomID) {
        return roomRepo.findById(roomID).orElse(null);
    }

    // Fetch a room by its code (for students to join)
    public RoomEntity getRoomByCode(String roomCode) {
        Optional<RoomEntity> roomOptional = roomRepo.findByRoomCode(roomCode);
        return roomOptional.orElse(null);  // Return the RoomEntity if present, otherwise null
    }

    // Delete a room (only teachers can delete their rooms)
    public ResponseEntity<String> deleteRoom(long roomID) {
        Optional<RoomEntity> room = roomRepo.findById(roomID);
        if (room.isPresent()) {
            roomRepo.delete(room.get());
            return ResponseEntity.ok("Room deleted successfully.");
        }
        return ResponseEntity.status(404).body("Room not found.");
    }

    // Add a student to a room
    public void addStudentToRoom(StudentRoomEntity studentRoomEntity) {
        studentRoomRepo.save(studentRoomEntity);
    }

    // Remove a student from a room
    public boolean removeStudentFromRoom(String roomCode, long studentID) {
        Optional<RoomEntity> roomOptional = roomRepo.findByRoomCode(roomCode);
        if (roomOptional.isPresent()) {
            RoomEntity room = roomOptional.get();
            Optional<StudentEntity> studentEntity = studentRepo.findById(studentID);
            if (studentEntity.isPresent()) {
                Optional<StudentRoomEntity> studentRoom = studentRoomRepo.findByRoomAndStudent(room, studentEntity.get());
                if (studentRoom.isPresent()) {
                    studentRoomRepo.delete(studentRoom.get());
                    return true;  // Successfully removed the student from the room
                }
            }
        }
        return false;  // Return false if no student-room match was found
    }

    // Helper method to generate a random room code
    private String generateRoomCode() {
        return java.util.UUID.randomUUID().toString().substring(0, 6); // Example room code
    }
}
