package com.SulongEdukasyon.Sulong.Edukasyon.Models.Dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UpdateUserDto {
    private long userID;
    private String userEmail;
    private String firstname;   
    private String lastname;
}
