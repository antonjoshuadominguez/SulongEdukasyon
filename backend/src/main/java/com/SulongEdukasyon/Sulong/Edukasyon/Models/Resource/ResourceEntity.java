package com.SulongEdukasyon.Sulong.Edukasyon.Models.Resource;

import com.SulongEdukasyon.Sulong.Edukasyon.Models.Lesson.LessonEntity;
import com.SulongEdukasyon.Sulong.Edukasyon.Models.Topic.TopicEntity;
import com.SulongEdukasyon.Sulong.Edukasyon.Models.Teacher.TeacherEntity;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "resources", schema = "public")
@NoArgsConstructor
@AllArgsConstructor
@Getter 
@Setter
public class ResourceEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long resourceId;

    private String resourceTitle;
    private String resourceType; // (e.g., article, video, image, PDF)
    private String resourceLink; // URL or path to the resource

    @ManyToOne
    @JoinColumn(name = "lesson_id", nullable = true)
    private LessonEntity lesson;

    @ManyToOne
    @JoinColumn(name = "topic_id", nullable = true)
    private TopicEntity topic;

    @ManyToOne
    @JoinColumn(name = "created_by", nullable = false)
    private TeacherEntity createdBy;

    private String createdAt; // Timestamp of when the resource was added

    public ResourceEntity(String resourceTitle, String resourceType, String resourceLink, LessonEntity lesson, TopicEntity topic, TeacherEntity createdBy, String createdAt) {
        this.resourceTitle = resourceTitle;
        this.resourceType = resourceType;
        this.resourceLink = resourceLink;
        this.lesson = lesson;
        this.topic = topic;
        this.createdBy = createdBy;
        this.createdAt = createdAt;
    }
}
