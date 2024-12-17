package com.SulongEdukasyon.Sulong.Edukasyon.Controllers;

import com.SulongEdukasyon.Sulong.Edukasyon.Models.Dto.SectionDto;
import com.SulongEdukasyon.Sulong.Edukasyon.Models.Dto.SectionResponseDto;
import com.SulongEdukasyon.Sulong.Edukasyon.Models.Section.SectionEntity;
import com.SulongEdukasyon.Sulong.Edukasyon.Models.Teacher.TeacherEntity;
import com.SulongEdukasyon.Sulong.Edukasyon.Service.SectionService;
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
    private TeacherRepo teacherRepo; // This is the only necessary import

    @PostMapping("/create")
    public ResponseEntity<SectionResponseDto> createSection(@RequestBody SectionDto sectionDto) {
        TeacherEntity teacherEntity = teacherRepo.findByTeacherID(sectionDto.getTeacherID()); // Fetch teacher by teacherID
        if (teacherEntity == null) {
            return ResponseEntity.badRequest().body(null); // Return bad request if teacher not found
        }
        SectionEntity sectionEntity = new SectionEntity(
                sectionDto.getSectionName(),
                sectionDto.getSectionDescription(),
                teacherEntity // Associate TeacherEntity
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

    @PutMapping("/update/{sectionID}")
    public ResponseEntity<SectionResponseDto> updateSection(@PathVariable long sectionID, @RequestBody SectionDto sectionDto) {
        TeacherEntity teacherEntity = teacherRepo.findByTeacherID(sectionDto.getTeacherID()); // Fetch teacher by teacherID
        if (teacherEntity == null) {
            return ResponseEntity.badRequest().body(null); // Return bad request if teacher not found
        }
        SectionEntity sectionEntity = new SectionEntity(
                sectionDto.getSectionName(),
                sectionDto.getSectionDescription(),
                teacherEntity // Associate TeacherEntity
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

    @DeleteMapping("/delete/{sectionID}")
    public ResponseEntity<String> deleteSection(@PathVariable long sectionID) {
        return sectionService.deleteSection(sectionID);
    }
}
