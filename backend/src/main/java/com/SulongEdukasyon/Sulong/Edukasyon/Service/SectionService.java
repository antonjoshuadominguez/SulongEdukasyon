package com.SulongEdukasyon.Sulong.Edukasyon.Service;

import com.SulongEdukasyon.Sulong.Edukasyon.Models.Section.SectionEntity;
import com.SulongEdukasyon.Sulong.Edukasyon.Models.Section.SectionRepo;
import com.SulongEdukasyon.Sulong.Edukasyon.Models.Student.StudentEntity;
import com.SulongEdukasyon.Sulong.Edukasyon.Models.Student.StudentRepo;
import com.SulongEdukasyon.Sulong.Edukasyon.Models.StudentSection.StudentSectionEntity;
import com.SulongEdukasyon.Sulong.Edukasyon.Models.StudentSection.StudentSectionRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SectionService {

    @Autowired
    private SectionRepo sectionRepo;

    @Autowired
    private StudentSectionRepo studentSectionRepo;

    @Autowired
    private StudentRepo studentRepo;

    // Create a new section
    public SectionEntity createSection(SectionEntity section) {
        return sectionRepo.save(section);
    }

    // Update an existing section
    public SectionEntity updateSection(long sectionID, SectionEntity section) {
        Optional<SectionEntity> existingSection = sectionRepo.findById(sectionID);
        if (existingSection.isPresent()) {
            SectionEntity updatedSection = existingSection.get();
            updatedSection.setSectionName(section.getSectionName());
            updatedSection.setSectionDescription(section.getSectionDescription());
            updatedSection.setTeacher(section.getTeacher());
            return sectionRepo.save(updatedSection);
        } else {
            throw new RuntimeException("Section not found");
        }
    }

    // Fetch all sections for a specific teacher
    public List<SectionEntity> getSectionsByTeacher(long teacherID) {
        return sectionRepo.findByTeacher_TeacherID(teacherID);
    }

    // Get section by ID
    public SectionEntity getSectionById(long sectionID) {
        return sectionRepo.findById(sectionID)
                .orElseThrow(() -> new RuntimeException("Section not found"));
    }

    // Delete a section
    public ResponseEntity<String> deleteSection(long sectionID) {
        Optional<SectionEntity> section = sectionRepo.findById(sectionID);
        if (section.isPresent()) {
            sectionRepo.delete(section.get());
            return ResponseEntity.ok("Section deleted successfully.");
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Add student to a section
    public void addStudentToSection(StudentSectionEntity studentSectionEntity) {
        studentSectionRepo.save(studentSectionEntity);
    }

    // Remove student from section
    public boolean removeStudentFromSection(long sectionID, long studentID) {
        StudentSectionEntity studentSectionEntity = studentSectionRepo.findBySectionSectionIDAndStudentStudentID(sectionID, studentID);
        if (studentSectionEntity != null) {
            studentSectionRepo.delete(studentSectionEntity);
            return true;
        }
        return false;
    }

    // Get a student by ID
    public Optional<StudentEntity> getStudentById(long studentID) {
        return studentRepo.findById(studentID);
    }

    // Get section by sectionID
    public Optional<SectionEntity> getSectionBySectionID(long sectionID) {
        return sectionRepo.findById(sectionID);
    }
}
