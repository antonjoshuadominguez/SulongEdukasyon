package com.SulongEdukasyon.Sulong.Edukasyon.Models.Dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class StudentResponseDto {
    
    private long studentID;
    private String firstName;
    private String lastName;
    private String email;  // Email fetched from the UserEntity

}
