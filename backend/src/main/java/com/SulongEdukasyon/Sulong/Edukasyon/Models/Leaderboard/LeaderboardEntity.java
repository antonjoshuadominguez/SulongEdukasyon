package com.SulongEdukasyon.Sulong.Edukasyon.Models.Leaderboard;

import com.SulongEdukasyon.Sulong.Edukasyon.Models.Room.RoomEntity;
import com.SulongEdukasyon.Sulong.Edukasyon.Models.Student.StudentEntity;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "leaderboards", schema = "public")
@NoArgsConstructor
@AllArgsConstructor
@Getter 
@Setter
public class LeaderboardEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long leaderboardID;

    @ManyToOne
    @JoinColumn(name = "roomID", nullable = false)
    private RoomEntity room;

    @ManyToOne
    @JoinColumn(name = "studentID", nullable = false)
    private StudentEntity student;

    private double totalScore;
    private int rank;

    public LeaderboardEntity(RoomEntity room, StudentEntity student, double totalScore, int rank) {
        this.room = room;
        this.student = student;
        this.totalScore = totalScore;
        this.rank = rank;
    }
}
