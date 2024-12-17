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
    private long resourceID;

    private String resourceTitle;
    private String resourceType;
    private String resourceLink;

    @ManyToOne
    @JoinColumn(name = "lessonID", nullable = true)
    private LessonEntity lesson;

    @ManyToOne
    @JoinColumn(name = "topicID", nullable = true)
    private TopicEntity topic;

    @ManyToOne
    @JoinColumn(name = "createdBy", nullable = false)
    private TeacherEntity createdBy;

    private String createdAt;

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
