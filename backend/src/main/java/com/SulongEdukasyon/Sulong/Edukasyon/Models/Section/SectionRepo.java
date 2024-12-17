package com.SulongEdukasyon.Sulong.Edukasyon.Models.Section;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SectionRepo extends JpaRepository<SectionEntity, Long> {

    List<SectionEntity> findByTeacher_TeacherID(long teacherID);
}
