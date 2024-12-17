package com.SulongEdukasyon.Sulong.Edukasyon.Models.Dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class RoomResponseDto {

    private long roomID;
    private String roomName;
    private String roomDescription;
    private long teacherID;
    private String roomCode;

}
