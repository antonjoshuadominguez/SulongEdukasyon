package com.SulongEdukasyon.Sulong.Edukasyon.Models.Room;

import com.SulongEdukasyon.Sulong.Edukasyon.Models.Teacher.TeacherEntity;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "rooms", schema = "public")
@NoArgsConstructor
@AllArgsConstructor
@Getter 
@Setter
public class RoomEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long roomId;

    private String roomName;
    private String roomDescription;  // Optional, for room details
    private String roomCode;  // Unique code for the room

    @ManyToOne
    @JoinColumn(name = "teacher_id", nullable = false)
    private TeacherEntity teacher;

    public RoomEntity(String roomName, String roomDescription, String roomCode, TeacherEntity teacher) {
        this.roomName = roomName;
        this.roomDescription = roomDescription;
        this.roomCode = roomCode;
        this.teacher = teacher;
    }
}
