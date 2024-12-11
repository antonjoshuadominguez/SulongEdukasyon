package com.SulongEdukasyon.Sulong.Edukasyon.Models.Dto;

public class UpdateUserDto {
    private long userId;
    private String email;
    private String firstname;
    private String lastname;

    public UpdateUserDto() {}

    public UpdateUserDto(long userId, String email, String firstname, String lastname) {
        this.userId = userId;
        this.email = email;
        this.firstname = firstname;
        this.lastname = lastname;
    }

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }
}
