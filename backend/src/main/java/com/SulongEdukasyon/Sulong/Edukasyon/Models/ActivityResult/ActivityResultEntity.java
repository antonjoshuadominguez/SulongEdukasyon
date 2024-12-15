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
    private long activityResultId;

    @ManyToOne
    @JoinColumn(name = "activity_id", nullable = false)
    private ActivityEntity activity;

    @ManyToOne
    @JoinColumn(name = "student_id", nullable = false)
    private StudentEntity student;

    private double activityScore;
    private String feedback;  // Optional feedback on answers
    private boolean isCompleted;  // Whether the student has completed the activity
    private String createdAt;  // Store the creation time of the result

    public ActivityResultEntity(ActivityEntity activity, StudentEntity student, double activityScore, String feedback, boolean isCompleted, String createdAt) {
        this.activity = activity;
        this.student = student;
        this.activityScore = activityScore;
        this.feedback = feedback;
        this.isCompleted = isCompleted;
        this.createdAt = createdAt;
    }
}
