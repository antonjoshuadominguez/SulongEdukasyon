package com.SulongEdukasyon.Sulong.Edukasyon.Models.StudentSection;

import com.SulongEdukasyon.Sulong.Edukasyon.Models.Student.StudentEntity;
import com.SulongEdukasyon.Sulong.Edukasyon.Models.Section.SectionEntity;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "student_sections", schema = "public")
@NoArgsConstructor
@AllArgsConstructor
@Getter 
@Setter
public class StudentSectionEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) 
    private Long studentSectionId;

    @ManyToOne
    @JoinColumn(name = "section_id", nullable = false)  
    private SectionEntity section;

    @ManyToOne
    @JoinColumn(name = "student_id", nullable = false)  
    private StudentEntity student;

    private String enrollmentDate;
}
