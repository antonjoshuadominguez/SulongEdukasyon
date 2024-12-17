package com.SulongEdukasyon.Sulong.Edukasyon.Controllers;

import com.SulongEdukasyon.Sulong.Edukasyon.Models.Dto.SectionDto;
import com.SulongEdukasyon.Sulong.Edukasyon.Models.Dto.SectionResponseDto;
import com.SulongEdukasyon.Sulong.Edukasyon.Models.Section.SectionEntity;
import com.SulongEdukasyon.Sulong.Edukasyon.Models.Student.StudentEntity;
import com.SulongEdukasyon.Sulong.Edukasyon.Models.Student.StudentRepo;
import com.SulongEdukasyon.Sulong.Edukasyon.Models.StudentSection.StudentSectionEntity;
import com.SulongEdukasyon.Sulong.Edukasyon.Service.SectionService;
import com.SulongEdukasyon.Sulong.Edukasyon.Models.Teacher.TeacherEntity;
import com.SulongEdukasyon.Sulong.Edukasyon.Models.Teacher.TeacherRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin
@RequestMapping("/api/sections")
public class SectionController {

    @Autowired
    private SectionService sectionService;

    @Autowired
    private TeacherRepo teacherRepo; 

    @Autowired
    private StudentRepo studentRepo;

    // Create a new section
    @PostMapping("/create")
    public ResponseEntity<SectionResponseDto> createSection(@RequestBody SectionDto sectionDto) {
        TeacherEntity teacherEntity = teacherRepo.findByTeacherID(sectionDto.getTeacherID()); 
        if (teacherEntity == null) {
            return ResponseEntity.badRequest().body(null);
        }
        SectionEntity sectionEntity = new SectionEntity(
                sectionDto.getSectionName(),
                sectionDto.getSectionDescription(),
                teacherEntity 
        );
        SectionEntity savedSection = sectionService.createSection(sectionEntity);
        SectionResponseDto sectionResponseDto = new SectionResponseDto(
                savedSection.getSectionID(),
                savedSection.getSectionName(),
                savedSection.getSectionDescription(),
                savedSection.getTeacher().getTeacherID()
        );
        return ResponseEntity.ok(sectionResponseDto);
    }

    // Update section details
    @PutMapping("/update/{sectionID}")
    public ResponseEntity<SectionResponseDto> updateSection(@PathVariable long sectionID, @RequestBody SectionDto sectionDto) {
        TeacherEntity teacherEntity = teacherRepo.findByTeacherID(sectionDto.getTeacherID()); 
        if (teacherEntity == null) {
            return ResponseEntity.badRequest().body(null);
        }
        SectionEntity sectionEntity = new SectionEntity(
                sectionDto.getSectionName(),
                sectionDto.getSectionDescription(),
                teacherEntity 
        );
        SectionEntity updatedSection = sectionService.updateSection(sectionID, sectionEntity);
        SectionResponseDto sectionResponseDto = new SectionResponseDto(
                updatedSection.getSectionID(),
                updatedSection.getSectionName(),
                updatedSection.getSectionDescription(),
                updatedSection.getTeacher().getTeacherID()
        );
        return ResponseEntity.ok(sectionResponseDto);
    }

    // Fetch sections by teacher ID
    @GetMapping("/teacher/{teacherID}")
    public ResponseEntity<List<SectionResponseDto>> getSectionsByTeacher(@PathVariable long teacherID) {
        List<SectionEntity> sections = sectionService.getSectionsByTeacher(teacherID);
        List<SectionResponseDto> sectionResponseDtos = sections.stream()
                .map(section -> new SectionResponseDto(
                        section.getSectionID(),
                        section.getSectionName(),
                        section.getSectionDescription(),
                        section.getTeacher().getTeacherID()
                ))
                .collect(Collectors.toList());
        return ResponseEntity.ok(sectionResponseDtos);
    }

    // Fetch a single section by ID
    @GetMapping("/get/{sectionID}")
    public ResponseEntity<SectionResponseDto> getSection(@PathVariable long sectionID) {
        SectionEntity section = sectionService.getSectionById(sectionID);
        SectionResponseDto sectionResponseDto = new SectionResponseDto(
                section.getSectionID(),
                section.getSectionName(),
                section.getSectionDescription(),
                section.getTeacher().getTeacherID()
        );
        return ResponseEntity.ok(sectionResponseDto);
    }

    // Delete a section
    @DeleteMapping("/delete/{sectionID}")
    public ResponseEntity<String> deleteSection(@PathVariable long sectionID) {
        return sectionService.deleteSection(sectionID);
    }

    // Add a student to a section
    @PostMapping("/add-student/{sectionID}")
    public ResponseEntity<String> addStudentToSection(@PathVariable long sectionID, @RequestBody long studentID) {
        SectionEntity sectionEntity = sectionService.getSectionById(sectionID);
        if (sectionEntity == null) {
            return ResponseEntity.status(404).body("Section not found");
        }

        StudentEntity studentEntity = studentRepo.findById(studentID).orElse(null);
        if (studentEntity == null) {
            return ResponseEntity.status(404).body("Student not found");
        }

        // Create a new StudentSection entity to link student to section
        StudentSectionEntity studentSection = new StudentSectionEntity();
        studentSection.setSection(sectionEntity);
        studentSection.setStudent(studentEntity);
        studentSection.setEnrollmentDate(java.time.LocalDate.now().toString());

        sectionService.addStudentToSection(studentSection);
        return ResponseEntity.ok("Student added to section successfully");
    }

    // Remove a student from a section
    @DeleteMapping("/remove-student/{sectionID}/{studentID}")
    public ResponseEntity<String> removeStudentFromSection(@PathVariable long sectionID, @PathVariable long studentID) {
        boolean isRemoved = sectionService.removeStudentFromSection(sectionID, studentID);
        if (isRemoved) {
            return ResponseEntity.ok("Student removed from section");
        } else {
            return ResponseEntity.status(404).body("Student or Section not found");
        }
    }
}
