package com.SulongEdukasyon.Sulong.Edukasyon.Models.Lesson;

import com.SulongEdukasyon.Sulong.Edukasyon.Models.Teacher.TeacherEntity;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "lessons", schema = "public")
@NoArgsConstructor
@AllArgsConstructor
@Getter 
@Setter
public class LessonEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long lessonID;

    private String lessonTitle;
    private String lessonContent;

    @ManyToOne
    @JoinColumn(name = "teacherID", nullable = false)
    private TeacherEntity teacher;

    private int studentsCurrentlyHere;
    private double averageScore;

    public LessonEntity(String lessonTitle, String lessonContent, TeacherEntity teacher) {
        this.lessonTitle = lessonTitle;
        this.lessonContent = lessonContent;
        this.teacher = teacher;
    }
}
