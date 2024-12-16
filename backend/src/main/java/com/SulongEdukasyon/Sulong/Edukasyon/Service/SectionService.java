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

    // Create section
    public ResponseEntity<SectionEntity> createSection(SectionEntity section) {
        SectionEntity savedSection = sectionRepo.save(section);
        return ResponseEntity.ok(savedSection);
    }

    // Update section
    public ResponseEntity<SectionEntity> updateSection(long sectionId, SectionEntity section) {
        Optional<SectionEntity> existingSection = sectionRepo.findById(sectionId);
        if (existingSection.isPresent()) {
            SectionEntity updatedSection = existingSection.get();
            updatedSection.setSectionName(section.getSectionName());
            updatedSection.setSectionDescription(section.getSectionDescription());
            updatedSection.setTeacher(section.getTeacher());  // Assuming you're passing a teacher
            sectionRepo.save(updatedSection);
            return ResponseEntity.ok(updatedSection);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Get all sections
    public List<SectionEntity> getAllSections() {
        return sectionRepo.findAll();
    }

    // Get section by ID
    public ResponseEntity<SectionEntity> getSectionById(long sectionId) {
        Optional<SectionEntity> section = sectionRepo.findById(sectionId);
        return section.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Delete section
    public ResponseEntity<String> deleteSection(long sectionId) {
        Optional<SectionEntity> section = sectionRepo.findById(sectionId);
        if (section.isPresent()) {
            sectionRepo.delete(section.get());
            return ResponseEntity.ok("Section deleted successfully.");
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
