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

    public ResponseEntity<RoomEntity> createRoom(RoomEntity room) {
        if (roomRepo.existsByRoomCode(room.getRoomCode())) {
            return ResponseEntity.badRequest().body(null); 
        }

        RoomEntity savedRoom = roomRepo.save(room); 
        return ResponseEntity.ok(savedRoom); 
    }

    public ResponseEntity<RoomEntity> updateRoom(long roomID, RoomEntity room) {
        Optional<RoomEntity> existingRoom = roomRepo.findById(roomID);
        if (existingRoom.isPresent()) {
            RoomEntity updatedRoom = existingRoom.get();
            updatedRoom.setRoomName(room.getRoomName());
            updatedRoom.setRoomDescription(room.getRoomDescription());
            updatedRoom.setRoomCode(room.getRoomCode()); 
            roomRepo.save(updatedRoom); 
            return ResponseEntity.ok(updatedRoom); 
        } else {
            return ResponseEntity.notFound().build(); 
        }
    }

    public List<RoomEntity> getRoomsByTeacher(long teacherID) {
        return roomRepo.findByTeacher_TeacherID(teacherID); 
    }

    public List<RoomEntity> getRoomsByStudent(long studentID) {
        List<StudentRoomEntity> studentRooms = studentRoomRepo.findByStudentStudentID(studentID); 
        return studentRooms.stream()
                           .map(StudentRoomEntity::getRoom) 
                           .collect(Collectors.toList()); 
    }

    public ResponseEntity<RoomEntity> getRoomByCode(String roomCode) {
        Optional<RoomEntity> room = roomRepo.findByRoomCode(roomCode);
        return room.map(ResponseEntity::ok) 
                   .orElseGet(() -> ResponseEntity.notFound().build()); 
    }

    public ResponseEntity<String> deleteRoom(long roomID) {
        Optional<RoomEntity> room = roomRepo.findById(roomID);
        if (room.isPresent()) {
            roomRepo.delete(room.get()); 
            return ResponseEntity.ok("Room deleted successfully."); 
        } else {
            return ResponseEntity.notFound().build(); 
        }
    }

    public ResponseEntity<StudentRoomEntity> joinRoom(String roomCode, Long studentID) {
        Optional<RoomEntity> roomOpt = roomRepo.findByRoomCode(roomCode);
        if (!roomOpt.isPresent()) {
            return ResponseEntity.badRequest().body(null); 
        }

        RoomEntity room = roomOpt.get();

        Optional<StudentEntity> studentOpt = studentRepo.findById(studentID);
        if (!studentOpt.isPresent()) {
            return ResponseEntity.badRequest().body(null); 
        }

        StudentEntity student = studentOpt.get();

        StudentRoomEntity studentRoom = new StudentRoomEntity();
        studentRoom.setRoom(room);
        studentRoom.setStudent(student);
        studentRoom.setEnrollmentDate("CURRENT_DATE"); 

        StudentRoomEntity savedStudentRoom = studentRoomRepo.save(studentRoom); 

        return ResponseEntity.ok(savedStudentRoom); 
    }
}
