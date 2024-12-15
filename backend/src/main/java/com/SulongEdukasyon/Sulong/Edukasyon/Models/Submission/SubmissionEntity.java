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
    private long submissionId;

    @ManyToOne
    @JoinColumn(name = "activity_id", nullable = false)
    private ActivityEntity activity;

    @ManyToOne
    @JoinColumn(name = "student_id", nullable = false)
    private StudentEntity student;

    private String submissionDate;
    private String submissionContent; // Content submitted by the student (text, file, etc.)
    private Double grade;  // Optional, feedback or grade on submission
    private Boolean isGraded;  // Whether the submission has been graded

    public SubmissionEntity(ActivityEntity activity, StudentEntity student, String submissionDate, String submissionContent, Double grade, Boolean isGraded) {
        this.activity = activity;
        this.student = student;
        this.submissionDate = submissionDate;
        this.submissionContent = submissionContent;
        this.grade = grade;
        this.isGraded = isGraded;
    }
}
