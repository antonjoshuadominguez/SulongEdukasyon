package com.SulongEdukasyon.Sulong.Edukasyon.Service;

import com.SulongEdukasyon.Sulong.Edukasyon.Models.Section.SectionEntity;
import com.SulongEdukasyon.Sulong.Edukasyon.Models.Section.SectionRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SectionService {

    @Autowired
    private SectionRepo sectionRepo;

    public ResponseEntity<SectionEntity> createSection(SectionEntity section) {
        SectionEntity savedSection = sectionRepo.save(section);
        return ResponseEntity.ok(savedSection);
    }

    public ResponseEntity<SectionEntity> updateSection(long sectionID, SectionEntity section) {
        Optional<SectionEntity> existingSection = sectionRepo.findById(sectionID);
        if (existingSection.isPresent()) {
            SectionEntity updatedSection = existingSection.get();
            updatedSection.setSectionName(section.getSectionName());
            updatedSection.setSectionDescription(section.getSectionDescription());
            updatedSection.setTeacher(section.getTeacher());  
            sectionRepo.save(updatedSection);
            return ResponseEntity.ok(updatedSection);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    public List<SectionEntity> getSectionsByTeacher(long teacherID) {
        return sectionRepo.findByTeacher_TeacherID(teacherID);
    }

    public ResponseEntity<SectionEntity> getSectionById(long sectionID) {
        Optional<SectionEntity> section = sectionRepo.findById(sectionID);
        return section.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    public ResponseEntity<String> deleteSection(long sectionID) {
        Optional<SectionEntity> section = sectionRepo.findById(sectionID);
        if (section.isPresent()) {
            sectionRepo.delete(section.get());
            return ResponseEntity.ok("Section deleted successfully.");
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
