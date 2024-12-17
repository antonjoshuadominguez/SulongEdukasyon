package com.SulongEdukasyon.Sulong.Edukasyon.Models.Section;

import com.SulongEdukasyon.Sulong.Edukasyon.Models.Teacher.TeacherEntity;
import com.SulongEdukasyon.Sulong.Edukasyon.Models.StudentSection.StudentSectionEntity;
import jakarta.persistence.*;
import lombok.*;

import java.util.Set;

@Entity
@Table(name = "sections", schema = "public")
@NoArgsConstructor
@AllArgsConstructor
@Getter 
@Setter
public class SectionEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long sectionID;

    private String sectionName;
    private String sectionDescription;

    @ManyToOne
    @JoinColumn(name = "teacherID", nullable = false)
    private TeacherEntity teacher;

    @OneToMany(mappedBy = "section")
    private Set<StudentSectionEntity> studentSections;  

    public SectionEntity(String sectionName, String sectionDescription, TeacherEntity teacher) {
        this.sectionName = sectionName;
        this.sectionDescription = sectionDescription;
        this.teacher = teacher;
    }
}
