package com.SulongEdukasyon.Sulong.Edukasyon.Controllers;

import com.SulongEdukasyon.Sulong.Edukasyon.Models.Dto.RoomDto;
import com.SulongEdukasyon.Sulong.Edukasyon.Models.Dto.RoomResponseDto;
import com.SulongEdukasyon.Sulong.Edukasyon.Models.Room.RoomEntity;
import com.SulongEdukasyon.Sulong.Edukasyon.Models.StudentRoom.StudentRoomEntity;
import com.SulongEdukasyon.Sulong.Edukasyon.Service.RoomService;
import com.SulongEdukasyon.Sulong.Edukasyon.Models.Teacher.TeacherEntity;
import com.SulongEdukasyon.Sulong.Edukasyon.Models.Student.StudentEntity;
import com.SulongEdukasyon.Sulong.Edukasyon.Models.Student.StudentRepo;
import com.SulongEdukasyon.Sulong.Edukasyon.Models.Teacher.TeacherRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin
@RequestMapping("/api/rooms")
public class RoomController {

    @Autowired
    private RoomService roomService;

    @Autowired
    private TeacherRepo teacherRepo;

    @Autowired
    private StudentRepo studentRepo;

    // Create a new room
    @PostMapping("/create")
    public ResponseEntity<RoomResponseDto> createRoom(@RequestBody RoomDto roomDto) {
        TeacherEntity teacherEntity = teacherRepo.findByTeacherID(roomDto.getTeacherID()); 
        if (teacherEntity == null) {
            return ResponseEntity.badRequest().body(null);
        }

        // Using getters and setters for RoomEntity
        RoomEntity roomEntity = new RoomEntity();
        roomEntity.setRoomName(roomDto.getRoomName());  // Using setter for roomName
        roomEntity.setRoomDescription(roomDto.getRoomDescription());  // Using setter for roomDescription
        roomEntity.setTeacher(teacherEntity);  // Using setter for teacher

        RoomEntity savedRoom = roomService.createRoom(roomEntity);
        RoomResponseDto roomResponseDto = new RoomResponseDto(
                savedRoom.getRoomID(),
                savedRoom.getRoomName(),
                savedRoom.getRoomDescription(),
                savedRoom.getTeacher().getTeacherID(),
                savedRoom.getRoomCode()
        );
        return ResponseEntity.ok(roomResponseDto);
    }

    // Update room details
    @PutMapping("/update/{roomID}")
    public ResponseEntity<RoomResponseDto> updateRoom(@PathVariable long roomID, @RequestBody RoomDto roomDto) {
        TeacherEntity teacherEntity = teacherRepo.findByTeacherID(roomDto.getTeacherID()); 
        if (teacherEntity == null) {
            return ResponseEntity.badRequest().body(null);
        }

        // Using getters and setters for RoomEntity
        RoomEntity roomEntity = new RoomEntity();
        roomEntity.setRoomName(roomDto.getRoomName());  // Using setter for roomName
        roomEntity.setRoomDescription(roomDto.getRoomDescription());  // Using setter for roomDescription
        roomEntity.setTeacher(teacherEntity);  // Using setter for teacher

        RoomEntity updatedRoom = roomService.updateRoom(roomID, roomEntity);
        
        if (updatedRoom == null) {
            return ResponseEntity.status(404).body(null);  // Return 404 if room not found
        }

        RoomResponseDto roomResponseDto = new RoomResponseDto(
                updatedRoom.getRoomID(),
                updatedRoom.getRoomName(),
                updatedRoom.getRoomDescription(),
                updatedRoom.getTeacher().getTeacherID(),
                updatedRoom.getRoomCode()
        );
        return ResponseEntity.ok(roomResponseDto);
    }

    // Fetch rooms by teacher ID
    @GetMapping("/teacher/{teacherID}")
    public ResponseEntity<List<RoomResponseDto>> getRoomsByTeacher(@PathVariable long teacherID) {
        List<RoomEntity> rooms = roomService.getRoomsByTeacher(teacherID);
        if (rooms.isEmpty()) {
            return ResponseEntity.status(404).body(null);  // Return 404 if no rooms found
        }
        List<RoomResponseDto> roomResponseDtos = rooms.stream()
                .map(room -> new RoomResponseDto(
                        room.getRoomID(),
                        room.getRoomName(),
                        room.getRoomDescription(),
                        room.getTeacher().getTeacherID(),
                        room.getRoomCode()
                ))
                .collect(Collectors.toList());
        return ResponseEntity.ok(roomResponseDtos);
    }

    // Fetch a single room by ID
    @GetMapping("/get/{roomID}")
    public ResponseEntity<RoomResponseDto> getRoom(@PathVariable long roomID) {
        RoomEntity room = roomService.getRoomById(roomID);
        if (room == null) {
            return ResponseEntity.status(404).body(null);  // Return 404 if room not found
        }
        RoomResponseDto roomResponseDto = new RoomResponseDto(
                room.getRoomID(),
                room.getRoomName(),
                room.getRoomDescription(),
                room.getTeacher().getTeacherID(),
                room.getRoomCode()
        );
        return ResponseEntity.ok(roomResponseDto);
    }

    // Delete a room
    @DeleteMapping("/delete/{roomID}")
    public ResponseEntity<String> deleteRoom(@PathVariable long roomID) {
        return roomService.deleteRoom(roomID);
    }

    // Add a student to a room
    @PostMapping("/add-student/{roomCode}")
    public ResponseEntity<String> addStudentToRoom(@PathVariable String roomCode, @RequestBody long studentID) {
        RoomEntity roomEntity = roomService.getRoomByCode(roomCode);
        if (roomEntity == null) {
            return ResponseEntity.status(404).body("Room not found");
        }

        StudentEntity studentEntity = studentRepo.findById(studentID).orElse(null);
        if (studentEntity == null) {
            return ResponseEntity.status(404).body("Student not found");
        }

        // Using getters and setters for StudentRoomEntity
        StudentRoomEntity studentRoom = new StudentRoomEntity();
        studentRoom.setRoom(roomEntity);  // Using setter for room
        studentRoom.setStudent(studentEntity);  // Using setter for student
        studentRoom.setEnrollmentDate(java.time.LocalDate.now());  // Using setter for enrollmentDate

        roomService.addStudentToRoom(studentRoom);
        return ResponseEntity.ok("Student added to room successfully");
    }

    // Remove a student from a room
    @DeleteMapping("/remove-student/{roomCode}/{studentID}")
    public ResponseEntity<String> removeStudentFromRoom(@PathVariable String roomCode, @PathVariable long studentID) {
        boolean isRemoved = roomService.removeStudentFromRoom(roomCode, studentID);
        if (isRemoved) {
            return ResponseEntity.ok("Student removed from room");
        } else {
            return ResponseEntity.status(404).body("Student or Room not found");
        }
    }
}
