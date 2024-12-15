package com.SulongEdukasyon.Sulong.Edukasyon.Models.Teacher;

import com.SulongEdukasyon.Sulong.Edukasyon.Models.User.UserEntity;
import com.SulongEdukasyon.Sulong.Edukasyon.Models.Room.RoomEntity;  
import jakarta.persistence.*;
import lombok.*;

import java.util.Set;  

@Entity
@Table(name = "teachers", schema = "public")
@NoArgsConstructor
@AllArgsConstructor
@Getter 
@Setter
public class TeacherEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long teacherId;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private UserEntity user;

    @OneToMany(mappedBy = "teacher")
    private Set<RoomEntity> rooms; 

    public TeacherEntity(UserEntity user) {
        this.user = user;
    }
}
