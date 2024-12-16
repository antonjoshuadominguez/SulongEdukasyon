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

    // Create new room
    @PostMapping("/create")
    public ResponseEntity<RoomEntity> createRoom(@RequestBody RoomEntity room) {
        return roomService.createRoom(room);
    }

    // Update an existing room
    @PutMapping("/update/{roomId}")
    public ResponseEntity<RoomEntity> updateRoom(@PathVariable long roomId, @RequestBody RoomEntity room) {
        return roomService.updateRoom(roomId, room);
    }

    // Get all rooms
    @GetMapping("/all")
    public ResponseEntity<List<RoomEntity>> getAllRooms() {
        return ResponseEntity.ok(roomService.getAllRooms());
    }

    // Get room by room code (for students to join)
    @GetMapping("/get/{roomCode}")
    public ResponseEntity<RoomEntity> getRoomByCode(@PathVariable String roomCode) {
        return roomService.getRoomByCode(roomCode);
    }

    // Delete a room (Assuming a teacher can delete a room they created)
    @DeleteMapping("/delete/{roomId}")
    public ResponseEntity<String> deleteRoom(@PathVariable long roomId) {
        return roomService.deleteRoom(roomId);
    }

    // Join room (Student enrolls into a room using the room code)
    @PostMapping("/join")
    public ResponseEntity<StudentRoomEntity> joinRoom(@RequestParam String roomCode, @RequestParam Long studentId) {
        return roomService.joinRoom(roomCode, studentId);
    }
}
