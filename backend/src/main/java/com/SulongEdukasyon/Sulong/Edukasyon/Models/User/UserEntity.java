package com.SulongEdukasyon.Sulong.Edukasyon.Models.User;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "users", schema = "public")
@NoArgsConstructor
@AllArgsConstructor
@Getter 
@Setter
public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long userID;
    private String firstname;
    private String lastname;
    private String email;
    @JsonIgnore
    private String password;
    private String role;

    public UserEntity(String firstname, String lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    public UserEntity(String firstname, String lastname, String email, String password, String role) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.role = role;
    }
}