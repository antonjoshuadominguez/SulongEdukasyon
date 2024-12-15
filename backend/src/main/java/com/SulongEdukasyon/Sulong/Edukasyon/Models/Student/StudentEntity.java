package com.SulongEdukasyon.Sulong.Edukasyon.Models.Student;

import com.SulongEdukasyon.Sulong.Edukasyon.Models.User.UserEntity;
import com.SulongEdukasyon.Sulong.Edukasyon.Models.StudentRoom.StudentRoomEntity;  // Import StudentRoomEntity
import jakarta.persistence.*;
import lombok.*;

import java.util.Set;  // Import Set

@Entity
@Table(name = "students", schema = "public")
@NoArgsConstructor
@AllArgsConstructor
@Getter 
@Setter
public class StudentEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long studentId;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private UserEntity user;

    @OneToMany(mappedBy = "student")
    private Set<StudentRoomEntity> studentRooms;  // Correctly references StudentRoomEntity

    public StudentEntity(UserEntity user) {
        this.user = user;
    }
}
