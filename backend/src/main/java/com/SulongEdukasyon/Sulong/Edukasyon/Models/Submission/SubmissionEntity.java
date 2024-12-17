package com.SulongEdukasyon.Sulong.Edukasyon.Models.Submission;

import com.SulongEdukasyon.Sulong.Edukasyon.Models.Activity.ActivityEntity;
import com.SulongEdukasyon.Sulong.Edukasyon.Models.Student.StudentEntity;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "submissions", schema = "public")
@NoArgsConstructor
@AllArgsConstructor
@Getter 
@Setter
public class SubmissionEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long submissionID;

    @ManyToOne
    @JoinColumn(name = "activityID", nullable = false)
    private ActivityEntity activity;

    @ManyToOne
    @JoinColumn(name = "studentID", nullable = false)
    private StudentEntity student;

    private String submissionDate;
    private String submissionContent;
    private Double grade;
    private Boolean isGraded;

    public SubmissionEntity(ActivityEntity activity, StudentEntity student, String submissionDate, String submissionContent, Double grade, Boolean isGraded) {
        this.activity = activity;
        this.student = student;
        this.submissionDate = submissionDate;
        this.submissionContent = submissionContent;
        this.grade = grade;
        this.isGraded = isGraded;
    }
}
