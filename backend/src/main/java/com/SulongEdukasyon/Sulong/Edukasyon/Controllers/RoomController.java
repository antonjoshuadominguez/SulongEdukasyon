package com.SulongEdukasyon.Sulong.Edukasyon.Controllers;

import com.SulongEdukasyon.Sulong.Edukasyon.Models.Room.RoomEntity;
import com.SulongEdukasyon.Sulong.Edukasyon.Models.StudentRoom.StudentRoomEntity;
import com.SulongEdukasyon.Sulong.Edukasyon.Service.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/rooms")
public class RoomController {

    @Autowired
    private RoomService roomService;

    @PostMapping("/create")
    public ResponseEntity<RoomEntity> createRoom(@RequestBody RoomEntity room) {
        return roomService.createRoom(room);
    }

    @PutMapping("/update/{roomID}")
    public ResponseEntity<RoomEntity> updateRoom(@PathVariable long roomID, @RequestBody RoomEntity room) {
        return roomService.updateRoom(roomID, room);
    }

    @GetMapping("/teacher/{teacherID}")
    public ResponseEntity<List<RoomEntity>> getRoomsByTeacher(@PathVariable long teacherID) {
        return ResponseEntity.ok(roomService.getRoomsByTeacher(teacherID));
    }

    @GetMapping("/student/{studentID}")
    public ResponseEntity<List<RoomEntity>> getRoomsByStudent(@PathVariable long studentID) {
        return ResponseEntity.ok(roomService.getRoomsByStudent(studentID));
    }

    @GetMapping("/get/{roomCode}")
    public ResponseEntity<RoomEntity> getRoomByCode(@PathVariable String roomCode) {
        return roomService.getRoomByCode(roomCode);
    }

    @DeleteMapping("/delete/{roomID}")
    public ResponseEntity<String> deleteRoom(@PathVariable long roomID) {
        return roomService.deleteRoom(roomID);
    }

    @PostMapping("/join")
    public ResponseEntity<StudentRoomEntity> joinRoom(@RequestParam String roomCode, @RequestParam Long studentID) {
        return roomService.joinRoom(roomCode, studentID);
    }
}
