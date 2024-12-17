package com.SulongEdukasyon.Sulong.Edukasyon.Models.StudentRoom;

import com.SulongEdukasyon.Sulong.Edukasyon.Models.Room.RoomEntity;
import com.SulongEdukasyon.Sulong.Edukasyon.Models.Student.StudentEntity;
import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;

@Entity
@Table(name = "student_rooms", schema = "public")
@NoArgsConstructor
@AllArgsConstructor
@Getter 
@Setter
public class StudentRoomEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long studentRoomID;

    @ManyToOne
    @JoinColumn(name = "roomID", nullable = false)
    private RoomEntity room;

    @ManyToOne
    @JoinColumn(name = "studentID", nullable = false)
    private StudentEntity student;

    private LocalDate enrollmentDate; 
}
