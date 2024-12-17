package com.SulongEdukasyon.Sulong.Edukasyon.Models.ActivityResult;

import com.SulongEdukasyon.Sulong.Edukasyon.Models.Activity.ActivityEntity;
import com.SulongEdukasyon.Sulong.Edukasyon.Models.Student.StudentEntity;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "activity_results", schema = "public")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ActivityResultEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long activityResultID;

    @ManyToOne
    @JoinColumn(name = "activityID", nullable = false)
    private ActivityEntity activity;

    @ManyToOne
    @JoinColumn(name = "studentID", nullable = false)
    private StudentEntity student;

    private double activityScore;
    private String feedback;
    private boolean isCompleted;
    private String createdAt;

    public ActivityResultEntity(ActivityEntity activity, StudentEntity student, double activityScore, String feedback, boolean isCompleted, String createdAt) {
        this.activity = activity;
        this.student = student;
        this.activityScore = activityScore;
        this.feedback = feedback;
        this.isCompleted = isCompleted;
        this.createdAt = createdAt;
    }
}
