package com.SulongEdukasyon.Sulong.Edukasyon.Models.Topic;

import com.SulongEdukasyon.Sulong.Edukasyon.Models.Lesson.LessonEntity;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "topics", schema = "public")
@NoArgsConstructor
@AllArgsConstructor
@Getter 
@Setter
public class TopicEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long topicId;

    private String topicTitle;

    @ManyToOne
    @JoinColumn(name = "lesson_id", nullable = false)
    private LessonEntity lesson;

    private String topicContent; 
    private int studentsCurrentlyHere;

    private String videoUrl; 

    public TopicEntity(String topicTitle, LessonEntity lesson, String topicContent, String videoUrl) {
        this.topicTitle = topicTitle;
        this.lesson = lesson;
        this.topicContent = topicContent;
        this.videoUrl = videoUrl;
    }
}
