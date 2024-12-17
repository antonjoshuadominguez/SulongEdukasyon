package com.SulongEdukasyon.Sulong.Edukasyon.Models.Dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SectionResponseDto {

    private long sectionID;
    private String sectionName;
    private String sectionDescription;
    private long teacherID; 
}
