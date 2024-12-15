package com.SulongEdukasyon.Sulong.Edukasyon.Models.Activity;

import com.SulongEdukasyon.Sulong.Edukasyon.Models.Teacher.TeacherEntity;
import com.SulongEdukasyon.Sulong.Edukasyon.Models.Lesson.LessonEntity;
import com.SulongEdukasyon.Sulong.Edukasyon.Models.Topic.TopicEntity;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "activities", schema = "public")
@NoArgsConstructor
@AllArgsConstructor
@Getter 
@Setter
public class ActivityEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long activityId;

    @ManyToOne
    @JoinColumn(name = "teacher_id", nullable = false)
    private TeacherEntity teacher;

    @ManyToOne
    @JoinColumn(name = "lesson_id", nullable = true)
    private LessonEntity lesson;

    @ManyToOne
    @JoinColumn(name = "topic_id", nullable = true)
    private TopicEntity topic;

    private String instruction;

    public ActivityEntity(TeacherEntity teacher, LessonEntity lesson, TopicEntity topic, String instruction) {
        this.teacher = teacher;
        this.lesson = lesson;
        this.topic = topic;
        this.instruction = instruction;
    }
}
