package com.SulongEdukasyon.Sulong.Edukasyon.Models.Dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SectionDto {

    private String sectionName;
    private String sectionDescription;
    private long teacherID;

}
