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

    @PostMapping("/create")
    public ResponseEntity<SectionEntity> createSection(@RequestBody SectionEntity section) {
        return sectionService.createSection(section);
    }

    @PutMapping("/update/{sectionID}")
    public ResponseEntity<SectionEntity> updateSection(@PathVariable long sectionID, @RequestBody SectionEntity section) {
        return sectionService.updateSection(sectionID, section);
    }

    @GetMapping("/teacher/{teacherID}")
    public ResponseEntity<List<SectionEntity>> getSectionsByTeacher(@PathVariable long teacherID) {
        return ResponseEntity.ok(sectionService.getSectionsByTeacher(teacherID));
    }

    @GetMapping("/get/{sectionID}")
    public ResponseEntity<SectionEntity> getSection(@PathVariable long sectionID) {
        return sectionService.getSectionById(sectionID);
    }

    @DeleteMapping("/delete/{sectionID}")
    public ResponseEntity<String> deleteSection(@PathVariable long sectionID) {
        return sectionService.deleteSection(sectionID);
    }
}
