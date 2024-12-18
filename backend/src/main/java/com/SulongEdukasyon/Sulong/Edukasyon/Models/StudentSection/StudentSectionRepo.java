package com.SulongEdukasyon.Sulong.Edukasyon.Models.StudentSection;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentSectionRepo extends JpaRepository<StudentSectionEntity, Long> {
    StudentSectionEntity findBySection_SectionIDAndStudent_StudentID(long sectionID, long studentID);
}
