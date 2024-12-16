package com.SulongEdukasyon.Sulong.Edukasyon.Models.Student;

import com.SulongEdukasyon.Sulong.Edukasyon.Models.User.UserEntity;
import com.SulongEdukasyon.Sulong.Edukasyon.Models.StudentRoom.StudentRoomEntity;
import com.SulongEdukasyon.Sulong.Edukasyon.Models.StudentSection.StudentSectionEntity;  // Import StudentSectionEntity
import jakarta.persistence.*;
import lombok.*;

import java.util.Set;

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
    private Set<StudentRoomEntity> studentRooms;

    @OneToMany(mappedBy = "student")
    private Set<StudentSectionEntity> studentSections; 

    public StudentEntity(UserEntity user) {
        this.user = user;
    }
}
