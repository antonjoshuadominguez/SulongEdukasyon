package com.SulongEdukasyon.Sulong.Edukasyon.Models.Lesson;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LessonRepo extends JpaRepository<LessonEntity, Long> {
    LessonEntity findByLessonTitle(String lessonTitle);
}
