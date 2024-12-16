package com.SulongEdukasyon.Sulong.Edukasyon.Controllers;

import com.SulongEdukasyon.Sulong.Edukasyon.Models.Section.SectionEntity;
import com.SulongEdukasyon.Sulong.Edukasyon.Service.SectionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/sections")
public class SectionController {

    @Autowired
    private SectionService sectionService;

    // Create new section
    @PostMapping("/create")
    public ResponseEntity<SectionEntity> createSection(@RequestBody SectionEntity section) {
        return sectionService.createSection(section);
    }

    // Update an existing section
    @PutMapping("/update/{sectionId}")
    public ResponseEntity<SectionEntity> updateSection(@PathVariable long sectionId, @RequestBody SectionEntity section) {
        return sectionService.updateSection(sectionId, section);
    }

    // Get all sections
    @GetMapping("/all")
    public ResponseEntity<List<SectionEntity>> getAllSections() {
        return ResponseEntity.ok(sectionService.getAllSections());
    }

    // Get a section by ID
    @GetMapping("/get/{sectionId}")
    public ResponseEntity<SectionEntity> getSection(@PathVariable long sectionId) {
        return sectionService.getSectionById(sectionId);
    }

    // Delete a section
    @DeleteMapping("/delete/{sectionId}")
    public ResponseEntity<String> deleteSection(@PathVariable long sectionId) {
        return sectionService.deleteSection(sectionId);
    }
}
